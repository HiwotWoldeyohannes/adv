import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerAnalytics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Analytics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly ip?: string | null;
  readonly long_url?: string | null;
  readonly short_url?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnalytics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Analytics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly ip?: string | null;
  readonly long_url?: string | null;
  readonly short_url?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Analytics = LazyLoading extends LazyLoadingDisabled ? EagerAnalytics : LazyAnalytics

export declare const Analytics: (new (init: ModelInit<Analytics>) => Analytics) & {
  copyOf(source: Analytics, mutator: (draft: MutableModel<Analytics>) => MutableModel<Analytics> | void): Analytics;
}