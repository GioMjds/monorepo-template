// Re-export TanStack Query for use across apps
export {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
  isServer,
} from "@tanstack/react-query";

export type {
  UseQueryOptions,
  UseMutationOptions,
  QueryKey,
} from "@tanstack/react-query";
