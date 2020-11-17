import * as React from "react";
import { List, ListItem } from "@chakra-ui/core";
import { graphql, useQuery, useSubscription } from "relay-hooks";
import { TodoList_Query } from "./__generated__/TodoList_Query.graphql";
import { GraphQLSubscriptionConfig } from "relay-runtime";

export const TodoList: React.FC = () => {
  const todos = useQuery<TodoList_Query>(graphql`
    query TodoList_Query {
      todos {
        id
        title
      }
    }
  `);

  const subscription = useSubscription(
    React.useMemo<GraphQLSubscriptionConfig<any>>(() => ({
      subscription: graphql`
        subscription TodoList_Subscription {
          todoAdded {
            id
            title
          }
        }
      `,
      updater: (store) => {
        const rootField = store.getPluralRootField("todoAdded");
        const root = store.getRoot();
        root.setLinkedRecords(rootField, "todos");
      },
      variables: {}
    }), []
  ));

  console.log(subscription);
  return (
    <List data-test="todo-list">
      {todos.props?.todos?.map((todo, index) => (
        <ListItem key={index}>
          {todo.title}
        </ListItem>
      ))}
    </List>
  )
};
