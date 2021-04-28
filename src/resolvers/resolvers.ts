import BookResolver from './BookResolver'
import AuthorResolver from './AuthorResolver'

export const resolvers = [BookResolver, AuthorResolver] as const
