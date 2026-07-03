
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model DiscoveryDork
 * 
 */
export type DiscoveryDork = $Result.DefaultSelection<Prisma.$DiscoveryDorkPayload>
/**
 * Model DiscoveredLink
 * 
 */
export type DiscoveredLink = $Result.DefaultSelection<Prisma.$DiscoveredLinkPayload>
/**
 * Model StatisticDataset
 * 
 */
export type StatisticDataset = $Result.DefaultSelection<Prisma.$StatisticDatasetPayload>
/**
 * Model ScrapeJob
 * 
 */
export type ScrapeJob = $Result.DefaultSelection<Prisma.$ScrapeJobPayload>
/**
 * Model LinkedInAccount
 * 
 */
export type LinkedInAccount = $Result.DefaultSelection<Prisma.$LinkedInAccountPayload>
/**
 * Model NetworkKeyword
 * 
 */
export type NetworkKeyword = $Result.DefaultSelection<Prisma.$NetworkKeywordPayload>
/**
 * Model IndustryProfile
 * 
 */
export type IndustryProfile = $Result.DefaultSelection<Prisma.$IndustryProfilePayload>
/**
 * Model LinkedInPost
 * 
 */
export type LinkedInPost = $Result.DefaultSelection<Prisma.$LinkedInPostPayload>
/**
 * Model NetworkInteraction
 * 
 */
export type NetworkInteraction = $Result.DefaultSelection<Prisma.$NetworkInteractionPayload>
/**
 * Model TargetMonitor
 * 
 */
export type TargetMonitor = $Result.DefaultSelection<Prisma.$TargetMonitorPayload>
/**
 * Model SavedYoutubeVideo
 * 
 */
export type SavedYoutubeVideo = $Result.DefaultSelection<Prisma.$SavedYoutubeVideoPayload>
/**
 * Model TrendingTopic
 * 
 */
export type TrendingTopic = $Result.DefaultSelection<Prisma.$TrendingTopicPayload>
/**
 * Model SystemSetting
 * 
 */
export type SystemSetting = $Result.DefaultSelection<Prisma.$SystemSettingPayload>
/**
 * Model TrendDocument
 * 
 */
export type TrendDocument = $Result.DefaultSelection<Prisma.$TrendDocumentPayload>
/**
 * Model Trend
 * 
 */
export type Trend = $Result.DefaultSelection<Prisma.$TrendPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.discoveryDork`: Exposes CRUD operations for the **DiscoveryDork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscoveryDorks
    * const discoveryDorks = await prisma.discoveryDork.findMany()
    * ```
    */
  get discoveryDork(): Prisma.DiscoveryDorkDelegate<ExtArgs>;

  /**
   * `prisma.discoveredLink`: Exposes CRUD operations for the **DiscoveredLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscoveredLinks
    * const discoveredLinks = await prisma.discoveredLink.findMany()
    * ```
    */
  get discoveredLink(): Prisma.DiscoveredLinkDelegate<ExtArgs>;

  /**
   * `prisma.statisticDataset`: Exposes CRUD operations for the **StatisticDataset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatisticDatasets
    * const statisticDatasets = await prisma.statisticDataset.findMany()
    * ```
    */
  get statisticDataset(): Prisma.StatisticDatasetDelegate<ExtArgs>;

  /**
   * `prisma.scrapeJob`: Exposes CRUD operations for the **ScrapeJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapeJobs
    * const scrapeJobs = await prisma.scrapeJob.findMany()
    * ```
    */
  get scrapeJob(): Prisma.ScrapeJobDelegate<ExtArgs>;

  /**
   * `prisma.linkedInAccount`: Exposes CRUD operations for the **LinkedInAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedInAccounts
    * const linkedInAccounts = await prisma.linkedInAccount.findMany()
    * ```
    */
  get linkedInAccount(): Prisma.LinkedInAccountDelegate<ExtArgs>;

  /**
   * `prisma.networkKeyword`: Exposes CRUD operations for the **NetworkKeyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NetworkKeywords
    * const networkKeywords = await prisma.networkKeyword.findMany()
    * ```
    */
  get networkKeyword(): Prisma.NetworkKeywordDelegate<ExtArgs>;

  /**
   * `prisma.industryProfile`: Exposes CRUD operations for the **IndustryProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndustryProfiles
    * const industryProfiles = await prisma.industryProfile.findMany()
    * ```
    */
  get industryProfile(): Prisma.IndustryProfileDelegate<ExtArgs>;

  /**
   * `prisma.linkedInPost`: Exposes CRUD operations for the **LinkedInPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedInPosts
    * const linkedInPosts = await prisma.linkedInPost.findMany()
    * ```
    */
  get linkedInPost(): Prisma.LinkedInPostDelegate<ExtArgs>;

  /**
   * `prisma.networkInteraction`: Exposes CRUD operations for the **NetworkInteraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NetworkInteractions
    * const networkInteractions = await prisma.networkInteraction.findMany()
    * ```
    */
  get networkInteraction(): Prisma.NetworkInteractionDelegate<ExtArgs>;

  /**
   * `prisma.targetMonitor`: Exposes CRUD operations for the **TargetMonitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TargetMonitors
    * const targetMonitors = await prisma.targetMonitor.findMany()
    * ```
    */
  get targetMonitor(): Prisma.TargetMonitorDelegate<ExtArgs>;

  /**
   * `prisma.savedYoutubeVideo`: Exposes CRUD operations for the **SavedYoutubeVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedYoutubeVideos
    * const savedYoutubeVideos = await prisma.savedYoutubeVideo.findMany()
    * ```
    */
  get savedYoutubeVideo(): Prisma.SavedYoutubeVideoDelegate<ExtArgs>;

  /**
   * `prisma.trendingTopic`: Exposes CRUD operations for the **TrendingTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrendingTopics
    * const trendingTopics = await prisma.trendingTopic.findMany()
    * ```
    */
  get trendingTopic(): Prisma.TrendingTopicDelegate<ExtArgs>;

  /**
   * `prisma.systemSetting`: Exposes CRUD operations for the **SystemSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSetting.findMany()
    * ```
    */
  get systemSetting(): Prisma.SystemSettingDelegate<ExtArgs>;

  /**
   * `prisma.trendDocument`: Exposes CRUD operations for the **TrendDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrendDocuments
    * const trendDocuments = await prisma.trendDocument.findMany()
    * ```
    */
  get trendDocument(): Prisma.TrendDocumentDelegate<ExtArgs>;

  /**
   * `prisma.trend`: Exposes CRUD operations for the **Trend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trends
    * const trends = await prisma.trend.findMany()
    * ```
    */
  get trend(): Prisma.TrendDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Article: 'Article',
    Comment: 'Comment',
    DiscoveryDork: 'DiscoveryDork',
    DiscoveredLink: 'DiscoveredLink',
    StatisticDataset: 'StatisticDataset',
    ScrapeJob: 'ScrapeJob',
    LinkedInAccount: 'LinkedInAccount',
    NetworkKeyword: 'NetworkKeyword',
    IndustryProfile: 'IndustryProfile',
    LinkedInPost: 'LinkedInPost',
    NetworkInteraction: 'NetworkInteraction',
    TargetMonitor: 'TargetMonitor',
    SavedYoutubeVideo: 'SavedYoutubeVideo',
    TrendingTopic: 'TrendingTopic',
    SystemSetting: 'SystemSetting',
    TrendDocument: 'TrendDocument',
    Trend: 'Trend'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "article" | "comment" | "discoveryDork" | "discoveredLink" | "statisticDataset" | "scrapeJob" | "linkedInAccount" | "networkKeyword" | "industryProfile" | "linkedInPost" | "networkInteraction" | "targetMonitor" | "savedYoutubeVideo" | "trendingTopic" | "systemSetting" | "trendDocument" | "trend"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      DiscoveryDork: {
        payload: Prisma.$DiscoveryDorkPayload<ExtArgs>
        fields: Prisma.DiscoveryDorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscoveryDorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveryDorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscoveryDorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveryDorkPayload>
          }
          findFirst: {
            args: Prisma.DiscoveryDorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveryDorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscoveryDorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveryDorkPayload>
          }
          findMany: {
            args: Prisma.DiscoveryDorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveryDorkPayload>[]
          }
          create: {
            args: Prisma.DiscoveryDorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveryDorkPayload>
          }
          createMany: {
            args: Prisma.DiscoveryDorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscoveryDorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveryDorkPayload>[]
          }
          delete: {
            args: Prisma.DiscoveryDorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveryDorkPayload>
          }
          update: {
            args: Prisma.DiscoveryDorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveryDorkPayload>
          }
          deleteMany: {
            args: Prisma.DiscoveryDorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscoveryDorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiscoveryDorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveryDorkPayload>
          }
          aggregate: {
            args: Prisma.DiscoveryDorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscoveryDork>
          }
          groupBy: {
            args: Prisma.DiscoveryDorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscoveryDorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscoveryDorkCountArgs<ExtArgs>
            result: $Utils.Optional<DiscoveryDorkCountAggregateOutputType> | number
          }
        }
      }
      DiscoveredLink: {
        payload: Prisma.$DiscoveredLinkPayload<ExtArgs>
        fields: Prisma.DiscoveredLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscoveredLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveredLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscoveredLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveredLinkPayload>
          }
          findFirst: {
            args: Prisma.DiscoveredLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveredLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscoveredLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveredLinkPayload>
          }
          findMany: {
            args: Prisma.DiscoveredLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveredLinkPayload>[]
          }
          create: {
            args: Prisma.DiscoveredLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveredLinkPayload>
          }
          createMany: {
            args: Prisma.DiscoveredLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscoveredLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveredLinkPayload>[]
          }
          delete: {
            args: Prisma.DiscoveredLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveredLinkPayload>
          }
          update: {
            args: Prisma.DiscoveredLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveredLinkPayload>
          }
          deleteMany: {
            args: Prisma.DiscoveredLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscoveredLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiscoveredLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoveredLinkPayload>
          }
          aggregate: {
            args: Prisma.DiscoveredLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscoveredLink>
          }
          groupBy: {
            args: Prisma.DiscoveredLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscoveredLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscoveredLinkCountArgs<ExtArgs>
            result: $Utils.Optional<DiscoveredLinkCountAggregateOutputType> | number
          }
        }
      }
      StatisticDataset: {
        payload: Prisma.$StatisticDatasetPayload<ExtArgs>
        fields: Prisma.StatisticDatasetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatisticDatasetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticDatasetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatisticDatasetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticDatasetPayload>
          }
          findFirst: {
            args: Prisma.StatisticDatasetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticDatasetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatisticDatasetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticDatasetPayload>
          }
          findMany: {
            args: Prisma.StatisticDatasetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticDatasetPayload>[]
          }
          create: {
            args: Prisma.StatisticDatasetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticDatasetPayload>
          }
          createMany: {
            args: Prisma.StatisticDatasetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatisticDatasetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticDatasetPayload>[]
          }
          delete: {
            args: Prisma.StatisticDatasetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticDatasetPayload>
          }
          update: {
            args: Prisma.StatisticDatasetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticDatasetPayload>
          }
          deleteMany: {
            args: Prisma.StatisticDatasetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatisticDatasetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatisticDatasetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticDatasetPayload>
          }
          aggregate: {
            args: Prisma.StatisticDatasetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatisticDataset>
          }
          groupBy: {
            args: Prisma.StatisticDatasetGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatisticDatasetGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatisticDatasetCountArgs<ExtArgs>
            result: $Utils.Optional<StatisticDatasetCountAggregateOutputType> | number
          }
        }
      }
      ScrapeJob: {
        payload: Prisma.$ScrapeJobPayload<ExtArgs>
        fields: Prisma.ScrapeJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapeJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapeJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeJobPayload>
          }
          findFirst: {
            args: Prisma.ScrapeJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapeJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeJobPayload>
          }
          findMany: {
            args: Prisma.ScrapeJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeJobPayload>[]
          }
          create: {
            args: Prisma.ScrapeJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeJobPayload>
          }
          createMany: {
            args: Prisma.ScrapeJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScrapeJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeJobPayload>[]
          }
          delete: {
            args: Prisma.ScrapeJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeJobPayload>
          }
          update: {
            args: Prisma.ScrapeJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeJobPayload>
          }
          deleteMany: {
            args: Prisma.ScrapeJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapeJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScrapeJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeJobPayload>
          }
          aggregate: {
            args: Prisma.ScrapeJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapeJob>
          }
          groupBy: {
            args: Prisma.ScrapeJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapeJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapeJobCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapeJobCountAggregateOutputType> | number
          }
        }
      }
      LinkedInAccount: {
        payload: Prisma.$LinkedInAccountPayload<ExtArgs>
        fields: Prisma.LinkedInAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedInAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedInAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInAccountPayload>
          }
          findFirst: {
            args: Prisma.LinkedInAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedInAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInAccountPayload>
          }
          findMany: {
            args: Prisma.LinkedInAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInAccountPayload>[]
          }
          create: {
            args: Prisma.LinkedInAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInAccountPayload>
          }
          createMany: {
            args: Prisma.LinkedInAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkedInAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInAccountPayload>[]
          }
          delete: {
            args: Prisma.LinkedInAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInAccountPayload>
          }
          update: {
            args: Prisma.LinkedInAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInAccountPayload>
          }
          deleteMany: {
            args: Prisma.LinkedInAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedInAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LinkedInAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInAccountPayload>
          }
          aggregate: {
            args: Prisma.LinkedInAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkedInAccount>
          }
          groupBy: {
            args: Prisma.LinkedInAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkedInAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedInAccountCountArgs<ExtArgs>
            result: $Utils.Optional<LinkedInAccountCountAggregateOutputType> | number
          }
        }
      }
      NetworkKeyword: {
        payload: Prisma.$NetworkKeywordPayload<ExtArgs>
        fields: Prisma.NetworkKeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NetworkKeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkKeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NetworkKeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkKeywordPayload>
          }
          findFirst: {
            args: Prisma.NetworkKeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkKeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NetworkKeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkKeywordPayload>
          }
          findMany: {
            args: Prisma.NetworkKeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkKeywordPayload>[]
          }
          create: {
            args: Prisma.NetworkKeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkKeywordPayload>
          }
          createMany: {
            args: Prisma.NetworkKeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NetworkKeywordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkKeywordPayload>[]
          }
          delete: {
            args: Prisma.NetworkKeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkKeywordPayload>
          }
          update: {
            args: Prisma.NetworkKeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkKeywordPayload>
          }
          deleteMany: {
            args: Prisma.NetworkKeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NetworkKeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NetworkKeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkKeywordPayload>
          }
          aggregate: {
            args: Prisma.NetworkKeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetworkKeyword>
          }
          groupBy: {
            args: Prisma.NetworkKeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworkKeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.NetworkKeywordCountArgs<ExtArgs>
            result: $Utils.Optional<NetworkKeywordCountAggregateOutputType> | number
          }
        }
      }
      IndustryProfile: {
        payload: Prisma.$IndustryProfilePayload<ExtArgs>
        fields: Prisma.IndustryProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndustryProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndustryProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryProfilePayload>
          }
          findFirst: {
            args: Prisma.IndustryProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndustryProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryProfilePayload>
          }
          findMany: {
            args: Prisma.IndustryProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryProfilePayload>[]
          }
          create: {
            args: Prisma.IndustryProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryProfilePayload>
          }
          createMany: {
            args: Prisma.IndustryProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndustryProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryProfilePayload>[]
          }
          delete: {
            args: Prisma.IndustryProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryProfilePayload>
          }
          update: {
            args: Prisma.IndustryProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryProfilePayload>
          }
          deleteMany: {
            args: Prisma.IndustryProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndustryProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IndustryProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryProfilePayload>
          }
          aggregate: {
            args: Prisma.IndustryProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndustryProfile>
          }
          groupBy: {
            args: Prisma.IndustryProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndustryProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndustryProfileCountArgs<ExtArgs>
            result: $Utils.Optional<IndustryProfileCountAggregateOutputType> | number
          }
        }
      }
      LinkedInPost: {
        payload: Prisma.$LinkedInPostPayload<ExtArgs>
        fields: Prisma.LinkedInPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedInPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedInPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInPostPayload>
          }
          findFirst: {
            args: Prisma.LinkedInPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedInPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInPostPayload>
          }
          findMany: {
            args: Prisma.LinkedInPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInPostPayload>[]
          }
          create: {
            args: Prisma.LinkedInPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInPostPayload>
          }
          createMany: {
            args: Prisma.LinkedInPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkedInPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInPostPayload>[]
          }
          delete: {
            args: Prisma.LinkedInPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInPostPayload>
          }
          update: {
            args: Prisma.LinkedInPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInPostPayload>
          }
          deleteMany: {
            args: Prisma.LinkedInPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedInPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LinkedInPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedInPostPayload>
          }
          aggregate: {
            args: Prisma.LinkedInPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkedInPost>
          }
          groupBy: {
            args: Prisma.LinkedInPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkedInPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedInPostCountArgs<ExtArgs>
            result: $Utils.Optional<LinkedInPostCountAggregateOutputType> | number
          }
        }
      }
      NetworkInteraction: {
        payload: Prisma.$NetworkInteractionPayload<ExtArgs>
        fields: Prisma.NetworkInteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NetworkInteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkInteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NetworkInteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkInteractionPayload>
          }
          findFirst: {
            args: Prisma.NetworkInteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkInteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NetworkInteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkInteractionPayload>
          }
          findMany: {
            args: Prisma.NetworkInteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkInteractionPayload>[]
          }
          create: {
            args: Prisma.NetworkInteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkInteractionPayload>
          }
          createMany: {
            args: Prisma.NetworkInteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NetworkInteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkInteractionPayload>[]
          }
          delete: {
            args: Prisma.NetworkInteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkInteractionPayload>
          }
          update: {
            args: Prisma.NetworkInteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkInteractionPayload>
          }
          deleteMany: {
            args: Prisma.NetworkInteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NetworkInteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NetworkInteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkInteractionPayload>
          }
          aggregate: {
            args: Prisma.NetworkInteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetworkInteraction>
          }
          groupBy: {
            args: Prisma.NetworkInteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworkInteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NetworkInteractionCountArgs<ExtArgs>
            result: $Utils.Optional<NetworkInteractionCountAggregateOutputType> | number
          }
        }
      }
      TargetMonitor: {
        payload: Prisma.$TargetMonitorPayload<ExtArgs>
        fields: Prisma.TargetMonitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TargetMonitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetMonitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TargetMonitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetMonitorPayload>
          }
          findFirst: {
            args: Prisma.TargetMonitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetMonitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TargetMonitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetMonitorPayload>
          }
          findMany: {
            args: Prisma.TargetMonitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetMonitorPayload>[]
          }
          create: {
            args: Prisma.TargetMonitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetMonitorPayload>
          }
          createMany: {
            args: Prisma.TargetMonitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TargetMonitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetMonitorPayload>[]
          }
          delete: {
            args: Prisma.TargetMonitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetMonitorPayload>
          }
          update: {
            args: Prisma.TargetMonitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetMonitorPayload>
          }
          deleteMany: {
            args: Prisma.TargetMonitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TargetMonitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TargetMonitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetMonitorPayload>
          }
          aggregate: {
            args: Prisma.TargetMonitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTargetMonitor>
          }
          groupBy: {
            args: Prisma.TargetMonitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TargetMonitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TargetMonitorCountArgs<ExtArgs>
            result: $Utils.Optional<TargetMonitorCountAggregateOutputType> | number
          }
        }
      }
      SavedYoutubeVideo: {
        payload: Prisma.$SavedYoutubeVideoPayload<ExtArgs>
        fields: Prisma.SavedYoutubeVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedYoutubeVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedYoutubeVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedYoutubeVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedYoutubeVideoPayload>
          }
          findFirst: {
            args: Prisma.SavedYoutubeVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedYoutubeVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedYoutubeVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedYoutubeVideoPayload>
          }
          findMany: {
            args: Prisma.SavedYoutubeVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedYoutubeVideoPayload>[]
          }
          create: {
            args: Prisma.SavedYoutubeVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedYoutubeVideoPayload>
          }
          createMany: {
            args: Prisma.SavedYoutubeVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedYoutubeVideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedYoutubeVideoPayload>[]
          }
          delete: {
            args: Prisma.SavedYoutubeVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedYoutubeVideoPayload>
          }
          update: {
            args: Prisma.SavedYoutubeVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedYoutubeVideoPayload>
          }
          deleteMany: {
            args: Prisma.SavedYoutubeVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedYoutubeVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedYoutubeVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedYoutubeVideoPayload>
          }
          aggregate: {
            args: Prisma.SavedYoutubeVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedYoutubeVideo>
          }
          groupBy: {
            args: Prisma.SavedYoutubeVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedYoutubeVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedYoutubeVideoCountArgs<ExtArgs>
            result: $Utils.Optional<SavedYoutubeVideoCountAggregateOutputType> | number
          }
        }
      }
      TrendingTopic: {
        payload: Prisma.$TrendingTopicPayload<ExtArgs>
        fields: Prisma.TrendingTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrendingTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrendingTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingTopicPayload>
          }
          findFirst: {
            args: Prisma.TrendingTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrendingTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingTopicPayload>
          }
          findMany: {
            args: Prisma.TrendingTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingTopicPayload>[]
          }
          create: {
            args: Prisma.TrendingTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingTopicPayload>
          }
          createMany: {
            args: Prisma.TrendingTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrendingTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingTopicPayload>[]
          }
          delete: {
            args: Prisma.TrendingTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingTopicPayload>
          }
          update: {
            args: Prisma.TrendingTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingTopicPayload>
          }
          deleteMany: {
            args: Prisma.TrendingTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrendingTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrendingTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingTopicPayload>
          }
          aggregate: {
            args: Prisma.TrendingTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrendingTopic>
          }
          groupBy: {
            args: Prisma.TrendingTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrendingTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrendingTopicCountArgs<ExtArgs>
            result: $Utils.Optional<TrendingTopicCountAggregateOutputType> | number
          }
        }
      }
      SystemSetting: {
        payload: Prisma.$SystemSettingPayload<ExtArgs>
        fields: Prisma.SystemSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findMany: {
            args: Prisma.SystemSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          create: {
            args: Prisma.SystemSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          createMany: {
            args: Prisma.SystemSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          update: {
            args: Prisma.SystemSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSetting>
          }
          groupBy: {
            args: Prisma.SystemSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingCountAggregateOutputType> | number
          }
        }
      }
      TrendDocument: {
        payload: Prisma.$TrendDocumentPayload<ExtArgs>
        fields: Prisma.TrendDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrendDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrendDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendDocumentPayload>
          }
          findFirst: {
            args: Prisma.TrendDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrendDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendDocumentPayload>
          }
          findMany: {
            args: Prisma.TrendDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendDocumentPayload>[]
          }
          create: {
            args: Prisma.TrendDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendDocumentPayload>
          }
          createMany: {
            args: Prisma.TrendDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrendDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendDocumentPayload>[]
          }
          delete: {
            args: Prisma.TrendDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendDocumentPayload>
          }
          update: {
            args: Prisma.TrendDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendDocumentPayload>
          }
          deleteMany: {
            args: Prisma.TrendDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrendDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrendDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendDocumentPayload>
          }
          aggregate: {
            args: Prisma.TrendDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrendDocument>
          }
          groupBy: {
            args: Prisma.TrendDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrendDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrendDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<TrendDocumentCountAggregateOutputType> | number
          }
        }
      }
      Trend: {
        payload: Prisma.$TrendPayload<ExtArgs>
        fields: Prisma.TrendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendPayload>
          }
          findFirst: {
            args: Prisma.TrendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendPayload>
          }
          findMany: {
            args: Prisma.TrendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendPayload>[]
          }
          create: {
            args: Prisma.TrendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendPayload>
          }
          createMany: {
            args: Prisma.TrendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendPayload>[]
          }
          delete: {
            args: Prisma.TrendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendPayload>
          }
          update: {
            args: Prisma.TrendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendPayload>
          }
          deleteMany: {
            args: Prisma.TrendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendPayload>
          }
          aggregate: {
            args: Prisma.TrendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrend>
          }
          groupBy: {
            args: Prisma.TrendGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrendGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrendCountArgs<ExtArgs>
            result: $Utils.Optional<TrendCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    comments: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ArticleCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type IndustryProfileCountOutputType
   */

  export type IndustryProfileCountOutputType = {
    posts: number
    interactionsAsActor: number
    interactionsAsTarget: number
  }

  export type IndustryProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | IndustryProfileCountOutputTypeCountPostsArgs
    interactionsAsActor?: boolean | IndustryProfileCountOutputTypeCountInteractionsAsActorArgs
    interactionsAsTarget?: boolean | IndustryProfileCountOutputTypeCountInteractionsAsTargetArgs
  }

  // Custom InputTypes
  /**
   * IndustryProfileCountOutputType without action
   */
  export type IndustryProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfileCountOutputType
     */
    select?: IndustryProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndustryProfileCountOutputType without action
   */
  export type IndustryProfileCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedInPostWhereInput
  }

  /**
   * IndustryProfileCountOutputType without action
   */
  export type IndustryProfileCountOutputTypeCountInteractionsAsActorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkInteractionWhereInput
  }

  /**
   * IndustryProfileCountOutputType without action
   */
  export type IndustryProfileCountOutputTypeCountInteractionsAsTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkInteractionWhereInput
  }


  /**
   * Count Type LinkedInPostCountOutputType
   */

  export type LinkedInPostCountOutputType = {
    interactions: number
  }

  export type LinkedInPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactions?: boolean | LinkedInPostCountOutputTypeCountInteractionsArgs
  }

  // Custom InputTypes
  /**
   * LinkedInPostCountOutputType without action
   */
  export type LinkedInPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPostCountOutputType
     */
    select?: LinkedInPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinkedInPostCountOutputType without action
   */
  export type LinkedInPostCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkInteractionWhereInput
  }


  /**
   * Count Type TrendDocumentCountOutputType
   */

  export type TrendDocumentCountOutputType = {
    trends: number
  }

  export type TrendDocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trends?: boolean | TrendDocumentCountOutputTypeCountTrendsArgs
  }

  // Custom InputTypes
  /**
   * TrendDocumentCountOutputType without action
   */
  export type TrendDocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocumentCountOutputType
     */
    select?: TrendDocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrendDocumentCountOutputType without action
   */
  export type TrendDocumentCountOutputTypeCountTrendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    platform: string | null
    fullText: string | null
    summary: string | null
    commentSummary: string | null
    reactions: string | null
    imageUrl: string | null
    discoveryKeyword: string | null
    category: string | null
    embedding: string | null
    publishedAt: Date | null
    isFavorite: boolean | null
    createdAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    platform: string | null
    fullText: string | null
    summary: string | null
    commentSummary: string | null
    reactions: string | null
    imageUrl: string | null
    discoveryKeyword: string | null
    category: string | null
    embedding: string | null
    publishedAt: Date | null
    isFavorite: boolean | null
    createdAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    url: number
    platform: number
    fullText: number
    summary: number
    commentSummary: number
    reactions: number
    imageUrl: number
    discoveryKeyword: number
    category: number
    embedding: number
    publishedAt: number
    isFavorite: number
    createdAt: number
    _all: number
  }


  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    platform?: true
    fullText?: true
    summary?: true
    commentSummary?: true
    reactions?: true
    imageUrl?: true
    discoveryKeyword?: true
    category?: true
    embedding?: true
    publishedAt?: true
    isFavorite?: true
    createdAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    platform?: true
    fullText?: true
    summary?: true
    commentSummary?: true
    reactions?: true
    imageUrl?: true
    discoveryKeyword?: true
    category?: true
    embedding?: true
    publishedAt?: true
    isFavorite?: true
    createdAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    platform?: true
    fullText?: true
    summary?: true
    commentSummary?: true
    reactions?: true
    imageUrl?: true
    discoveryKeyword?: true
    category?: true
    embedding?: true
    publishedAt?: true
    isFavorite?: true
    createdAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    title: string
    url: string
    platform: string
    fullText: string
    summary: string
    commentSummary: string | null
    reactions: string | null
    imageUrl: string | null
    discoveryKeyword: string | null
    category: string | null
    embedding: string | null
    publishedAt: Date | null
    isFavorite: boolean
    createdAt: Date
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    platform?: boolean
    fullText?: boolean
    summary?: boolean
    commentSummary?: boolean
    reactions?: boolean
    imageUrl?: boolean
    discoveryKeyword?: boolean
    category?: boolean
    embedding?: boolean
    publishedAt?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    comments?: boolean | Article$commentsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    platform?: boolean
    fullText?: boolean
    summary?: boolean
    commentSummary?: boolean
    reactions?: boolean
    imageUrl?: boolean
    discoveryKeyword?: boolean
    category?: boolean
    embedding?: boolean
    publishedAt?: boolean
    isFavorite?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    platform?: boolean
    fullText?: boolean
    summary?: boolean
    commentSummary?: boolean
    reactions?: boolean
    imageUrl?: boolean
    discoveryKeyword?: boolean
    category?: boolean
    embedding?: boolean
    publishedAt?: boolean
    isFavorite?: boolean
    createdAt?: boolean
  }

  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Article$commentsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
      platform: string
      fullText: string
      summary: string
      commentSummary: string | null
      reactions: string | null
      imageUrl: string | null
      discoveryKeyword: string | null
      category: string | null
      embedding: string | null
      publishedAt: Date | null
      isFavorite: boolean
      createdAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Article$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Article$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Article model
   */ 
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly url: FieldRef<"Article", 'String'>
    readonly platform: FieldRef<"Article", 'String'>
    readonly fullText: FieldRef<"Article", 'String'>
    readonly summary: FieldRef<"Article", 'String'>
    readonly commentSummary: FieldRef<"Article", 'String'>
    readonly reactions: FieldRef<"Article", 'String'>
    readonly imageUrl: FieldRef<"Article", 'String'>
    readonly discoveryKeyword: FieldRef<"Article", 'String'>
    readonly category: FieldRef<"Article", 'String'>
    readonly embedding: FieldRef<"Article", 'String'>
    readonly publishedAt: FieldRef<"Article", 'DateTime'>
    readonly isFavorite: FieldRef<"Article", 'Boolean'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
  }

  /**
   * Article.comments
   */
  export type Article$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    articleId: string | null
    author: string | null
    text: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    author: string | null
    text: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    articleId: number
    author: number
    text: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    articleId?: true
    author?: true
    text?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    articleId?: true
    author?: true
    text?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    articleId?: true
    author?: true
    text?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    articleId: string
    author: string
    text: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    author?: boolean
    text?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    author?: boolean
    text?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    articleId?: boolean
    author?: boolean
    text?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string
      author: string
      text: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly articleId: FieldRef<"Comment", 'String'>
    readonly author: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model DiscoveryDork
   */

  export type AggregateDiscoveryDork = {
    _count: DiscoveryDorkCountAggregateOutputType | null
    _avg: DiscoveryDorkAvgAggregateOutputType | null
    _sum: DiscoveryDorkSumAggregateOutputType | null
    _min: DiscoveryDorkMinAggregateOutputType | null
    _max: DiscoveryDorkMaxAggregateOutputType | null
  }

  export type DiscoveryDorkAvgAggregateOutputType = {
    maxResults: number | null
  }

  export type DiscoveryDorkSumAggregateOutputType = {
    maxResults: number | null
  }

  export type DiscoveryDorkMinAggregateOutputType = {
    id: string | null
    query: string | null
    label: string | null
    keyword: string | null
    startDate: string | null
    endDate: string | null
    maxResults: number | null
    language: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type DiscoveryDorkMaxAggregateOutputType = {
    id: string | null
    query: string | null
    label: string | null
    keyword: string | null
    startDate: string | null
    endDate: string | null
    maxResults: number | null
    language: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type DiscoveryDorkCountAggregateOutputType = {
    id: number
    query: number
    label: number
    keyword: number
    startDate: number
    endDate: number
    maxResults: number
    language: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type DiscoveryDorkAvgAggregateInputType = {
    maxResults?: true
  }

  export type DiscoveryDorkSumAggregateInputType = {
    maxResults?: true
  }

  export type DiscoveryDorkMinAggregateInputType = {
    id?: true
    query?: true
    label?: true
    keyword?: true
    startDate?: true
    endDate?: true
    maxResults?: true
    language?: true
    isActive?: true
    createdAt?: true
  }

  export type DiscoveryDorkMaxAggregateInputType = {
    id?: true
    query?: true
    label?: true
    keyword?: true
    startDate?: true
    endDate?: true
    maxResults?: true
    language?: true
    isActive?: true
    createdAt?: true
  }

  export type DiscoveryDorkCountAggregateInputType = {
    id?: true
    query?: true
    label?: true
    keyword?: true
    startDate?: true
    endDate?: true
    maxResults?: true
    language?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type DiscoveryDorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscoveryDork to aggregate.
     */
    where?: DiscoveryDorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoveryDorks to fetch.
     */
    orderBy?: DiscoveryDorkOrderByWithRelationInput | DiscoveryDorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscoveryDorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoveryDorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoveryDorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscoveryDorks
    **/
    _count?: true | DiscoveryDorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscoveryDorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscoveryDorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscoveryDorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscoveryDorkMaxAggregateInputType
  }

  export type GetDiscoveryDorkAggregateType<T extends DiscoveryDorkAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscoveryDork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscoveryDork[P]>
      : GetScalarType<T[P], AggregateDiscoveryDork[P]>
  }




  export type DiscoveryDorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscoveryDorkWhereInput
    orderBy?: DiscoveryDorkOrderByWithAggregationInput | DiscoveryDorkOrderByWithAggregationInput[]
    by: DiscoveryDorkScalarFieldEnum[] | DiscoveryDorkScalarFieldEnum
    having?: DiscoveryDorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscoveryDorkCountAggregateInputType | true
    _avg?: DiscoveryDorkAvgAggregateInputType
    _sum?: DiscoveryDorkSumAggregateInputType
    _min?: DiscoveryDorkMinAggregateInputType
    _max?: DiscoveryDorkMaxAggregateInputType
  }

  export type DiscoveryDorkGroupByOutputType = {
    id: string
    query: string
    label: string
    keyword: string | null
    startDate: string | null
    endDate: string | null
    maxResults: number
    language: string
    isActive: boolean
    createdAt: Date
    _count: DiscoveryDorkCountAggregateOutputType | null
    _avg: DiscoveryDorkAvgAggregateOutputType | null
    _sum: DiscoveryDorkSumAggregateOutputType | null
    _min: DiscoveryDorkMinAggregateOutputType | null
    _max: DiscoveryDorkMaxAggregateOutputType | null
  }

  type GetDiscoveryDorkGroupByPayload<T extends DiscoveryDorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscoveryDorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscoveryDorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscoveryDorkGroupByOutputType[P]>
            : GetScalarType<T[P], DiscoveryDorkGroupByOutputType[P]>
        }
      >
    >


  export type DiscoveryDorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    label?: boolean
    keyword?: boolean
    startDate?: boolean
    endDate?: boolean
    maxResults?: boolean
    language?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["discoveryDork"]>

  export type DiscoveryDorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    label?: boolean
    keyword?: boolean
    startDate?: boolean
    endDate?: boolean
    maxResults?: boolean
    language?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["discoveryDork"]>

  export type DiscoveryDorkSelectScalar = {
    id?: boolean
    query?: boolean
    label?: boolean
    keyword?: boolean
    startDate?: boolean
    endDate?: boolean
    maxResults?: boolean
    language?: boolean
    isActive?: boolean
    createdAt?: boolean
  }


  export type $DiscoveryDorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscoveryDork"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      query: string
      label: string
      keyword: string | null
      startDate: string | null
      endDate: string | null
      maxResults: number
      language: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["discoveryDork"]>
    composites: {}
  }

  type DiscoveryDorkGetPayload<S extends boolean | null | undefined | DiscoveryDorkDefaultArgs> = $Result.GetResult<Prisma.$DiscoveryDorkPayload, S>

  type DiscoveryDorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiscoveryDorkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiscoveryDorkCountAggregateInputType | true
    }

  export interface DiscoveryDorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscoveryDork'], meta: { name: 'DiscoveryDork' } }
    /**
     * Find zero or one DiscoveryDork that matches the filter.
     * @param {DiscoveryDorkFindUniqueArgs} args - Arguments to find a DiscoveryDork
     * @example
     * // Get one DiscoveryDork
     * const discoveryDork = await prisma.discoveryDork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscoveryDorkFindUniqueArgs>(args: SelectSubset<T, DiscoveryDorkFindUniqueArgs<ExtArgs>>): Prisma__DiscoveryDorkClient<$Result.GetResult<Prisma.$DiscoveryDorkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DiscoveryDork that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DiscoveryDorkFindUniqueOrThrowArgs} args - Arguments to find a DiscoveryDork
     * @example
     * // Get one DiscoveryDork
     * const discoveryDork = await prisma.discoveryDork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscoveryDorkFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscoveryDorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscoveryDorkClient<$Result.GetResult<Prisma.$DiscoveryDorkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DiscoveryDork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveryDorkFindFirstArgs} args - Arguments to find a DiscoveryDork
     * @example
     * // Get one DiscoveryDork
     * const discoveryDork = await prisma.discoveryDork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscoveryDorkFindFirstArgs>(args?: SelectSubset<T, DiscoveryDorkFindFirstArgs<ExtArgs>>): Prisma__DiscoveryDorkClient<$Result.GetResult<Prisma.$DiscoveryDorkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DiscoveryDork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveryDorkFindFirstOrThrowArgs} args - Arguments to find a DiscoveryDork
     * @example
     * // Get one DiscoveryDork
     * const discoveryDork = await prisma.discoveryDork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscoveryDorkFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscoveryDorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscoveryDorkClient<$Result.GetResult<Prisma.$DiscoveryDorkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DiscoveryDorks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveryDorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscoveryDorks
     * const discoveryDorks = await prisma.discoveryDork.findMany()
     * 
     * // Get first 10 DiscoveryDorks
     * const discoveryDorks = await prisma.discoveryDork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discoveryDorkWithIdOnly = await prisma.discoveryDork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscoveryDorkFindManyArgs>(args?: SelectSubset<T, DiscoveryDorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoveryDorkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DiscoveryDork.
     * @param {DiscoveryDorkCreateArgs} args - Arguments to create a DiscoveryDork.
     * @example
     * // Create one DiscoveryDork
     * const DiscoveryDork = await prisma.discoveryDork.create({
     *   data: {
     *     // ... data to create a DiscoveryDork
     *   }
     * })
     * 
     */
    create<T extends DiscoveryDorkCreateArgs>(args: SelectSubset<T, DiscoveryDorkCreateArgs<ExtArgs>>): Prisma__DiscoveryDorkClient<$Result.GetResult<Prisma.$DiscoveryDorkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DiscoveryDorks.
     * @param {DiscoveryDorkCreateManyArgs} args - Arguments to create many DiscoveryDorks.
     * @example
     * // Create many DiscoveryDorks
     * const discoveryDork = await prisma.discoveryDork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscoveryDorkCreateManyArgs>(args?: SelectSubset<T, DiscoveryDorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscoveryDorks and returns the data saved in the database.
     * @param {DiscoveryDorkCreateManyAndReturnArgs} args - Arguments to create many DiscoveryDorks.
     * @example
     * // Create many DiscoveryDorks
     * const discoveryDork = await prisma.discoveryDork.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscoveryDorks and only return the `id`
     * const discoveryDorkWithIdOnly = await prisma.discoveryDork.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscoveryDorkCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscoveryDorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoveryDorkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DiscoveryDork.
     * @param {DiscoveryDorkDeleteArgs} args - Arguments to delete one DiscoveryDork.
     * @example
     * // Delete one DiscoveryDork
     * const DiscoveryDork = await prisma.discoveryDork.delete({
     *   where: {
     *     // ... filter to delete one DiscoveryDork
     *   }
     * })
     * 
     */
    delete<T extends DiscoveryDorkDeleteArgs>(args: SelectSubset<T, DiscoveryDorkDeleteArgs<ExtArgs>>): Prisma__DiscoveryDorkClient<$Result.GetResult<Prisma.$DiscoveryDorkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DiscoveryDork.
     * @param {DiscoveryDorkUpdateArgs} args - Arguments to update one DiscoveryDork.
     * @example
     * // Update one DiscoveryDork
     * const discoveryDork = await prisma.discoveryDork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscoveryDorkUpdateArgs>(args: SelectSubset<T, DiscoveryDorkUpdateArgs<ExtArgs>>): Prisma__DiscoveryDorkClient<$Result.GetResult<Prisma.$DiscoveryDorkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DiscoveryDorks.
     * @param {DiscoveryDorkDeleteManyArgs} args - Arguments to filter DiscoveryDorks to delete.
     * @example
     * // Delete a few DiscoveryDorks
     * const { count } = await prisma.discoveryDork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscoveryDorkDeleteManyArgs>(args?: SelectSubset<T, DiscoveryDorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscoveryDorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveryDorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscoveryDorks
     * const discoveryDork = await prisma.discoveryDork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscoveryDorkUpdateManyArgs>(args: SelectSubset<T, DiscoveryDorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiscoveryDork.
     * @param {DiscoveryDorkUpsertArgs} args - Arguments to update or create a DiscoveryDork.
     * @example
     * // Update or create a DiscoveryDork
     * const discoveryDork = await prisma.discoveryDork.upsert({
     *   create: {
     *     // ... data to create a DiscoveryDork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscoveryDork we want to update
     *   }
     * })
     */
    upsert<T extends DiscoveryDorkUpsertArgs>(args: SelectSubset<T, DiscoveryDorkUpsertArgs<ExtArgs>>): Prisma__DiscoveryDorkClient<$Result.GetResult<Prisma.$DiscoveryDorkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DiscoveryDorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveryDorkCountArgs} args - Arguments to filter DiscoveryDorks to count.
     * @example
     * // Count the number of DiscoveryDorks
     * const count = await prisma.discoveryDork.count({
     *   where: {
     *     // ... the filter for the DiscoveryDorks we want to count
     *   }
     * })
    **/
    count<T extends DiscoveryDorkCountArgs>(
      args?: Subset<T, DiscoveryDorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscoveryDorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscoveryDork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveryDorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscoveryDorkAggregateArgs>(args: Subset<T, DiscoveryDorkAggregateArgs>): Prisma.PrismaPromise<GetDiscoveryDorkAggregateType<T>>

    /**
     * Group by DiscoveryDork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveryDorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscoveryDorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscoveryDorkGroupByArgs['orderBy'] }
        : { orderBy?: DiscoveryDorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscoveryDorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscoveryDorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscoveryDork model
   */
  readonly fields: DiscoveryDorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscoveryDork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscoveryDorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiscoveryDork model
   */ 
  interface DiscoveryDorkFieldRefs {
    readonly id: FieldRef<"DiscoveryDork", 'String'>
    readonly query: FieldRef<"DiscoveryDork", 'String'>
    readonly label: FieldRef<"DiscoveryDork", 'String'>
    readonly keyword: FieldRef<"DiscoveryDork", 'String'>
    readonly startDate: FieldRef<"DiscoveryDork", 'String'>
    readonly endDate: FieldRef<"DiscoveryDork", 'String'>
    readonly maxResults: FieldRef<"DiscoveryDork", 'Int'>
    readonly language: FieldRef<"DiscoveryDork", 'String'>
    readonly isActive: FieldRef<"DiscoveryDork", 'Boolean'>
    readonly createdAt: FieldRef<"DiscoveryDork", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiscoveryDork findUnique
   */
  export type DiscoveryDorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelect<ExtArgs> | null
    /**
     * Filter, which DiscoveryDork to fetch.
     */
    where: DiscoveryDorkWhereUniqueInput
  }

  /**
   * DiscoveryDork findUniqueOrThrow
   */
  export type DiscoveryDorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelect<ExtArgs> | null
    /**
     * Filter, which DiscoveryDork to fetch.
     */
    where: DiscoveryDorkWhereUniqueInput
  }

  /**
   * DiscoveryDork findFirst
   */
  export type DiscoveryDorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelect<ExtArgs> | null
    /**
     * Filter, which DiscoveryDork to fetch.
     */
    where?: DiscoveryDorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoveryDorks to fetch.
     */
    orderBy?: DiscoveryDorkOrderByWithRelationInput | DiscoveryDorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscoveryDorks.
     */
    cursor?: DiscoveryDorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoveryDorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoveryDorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscoveryDorks.
     */
    distinct?: DiscoveryDorkScalarFieldEnum | DiscoveryDorkScalarFieldEnum[]
  }

  /**
   * DiscoveryDork findFirstOrThrow
   */
  export type DiscoveryDorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelect<ExtArgs> | null
    /**
     * Filter, which DiscoveryDork to fetch.
     */
    where?: DiscoveryDorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoveryDorks to fetch.
     */
    orderBy?: DiscoveryDorkOrderByWithRelationInput | DiscoveryDorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscoveryDorks.
     */
    cursor?: DiscoveryDorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoveryDorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoveryDorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscoveryDorks.
     */
    distinct?: DiscoveryDorkScalarFieldEnum | DiscoveryDorkScalarFieldEnum[]
  }

  /**
   * DiscoveryDork findMany
   */
  export type DiscoveryDorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelect<ExtArgs> | null
    /**
     * Filter, which DiscoveryDorks to fetch.
     */
    where?: DiscoveryDorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoveryDorks to fetch.
     */
    orderBy?: DiscoveryDorkOrderByWithRelationInput | DiscoveryDorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscoveryDorks.
     */
    cursor?: DiscoveryDorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoveryDorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoveryDorks.
     */
    skip?: number
    distinct?: DiscoveryDorkScalarFieldEnum | DiscoveryDorkScalarFieldEnum[]
  }

  /**
   * DiscoveryDork create
   */
  export type DiscoveryDorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelect<ExtArgs> | null
    /**
     * The data needed to create a DiscoveryDork.
     */
    data: XOR<DiscoveryDorkCreateInput, DiscoveryDorkUncheckedCreateInput>
  }

  /**
   * DiscoveryDork createMany
   */
  export type DiscoveryDorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscoveryDorks.
     */
    data: DiscoveryDorkCreateManyInput | DiscoveryDorkCreateManyInput[]
  }

  /**
   * DiscoveryDork createManyAndReturn
   */
  export type DiscoveryDorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DiscoveryDorks.
     */
    data: DiscoveryDorkCreateManyInput | DiscoveryDorkCreateManyInput[]
  }

  /**
   * DiscoveryDork update
   */
  export type DiscoveryDorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelect<ExtArgs> | null
    /**
     * The data needed to update a DiscoveryDork.
     */
    data: XOR<DiscoveryDorkUpdateInput, DiscoveryDorkUncheckedUpdateInput>
    /**
     * Choose, which DiscoveryDork to update.
     */
    where: DiscoveryDorkWhereUniqueInput
  }

  /**
   * DiscoveryDork updateMany
   */
  export type DiscoveryDorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscoveryDorks.
     */
    data: XOR<DiscoveryDorkUpdateManyMutationInput, DiscoveryDorkUncheckedUpdateManyInput>
    /**
     * Filter which DiscoveryDorks to update
     */
    where?: DiscoveryDorkWhereInput
  }

  /**
   * DiscoveryDork upsert
   */
  export type DiscoveryDorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelect<ExtArgs> | null
    /**
     * The filter to search for the DiscoveryDork to update in case it exists.
     */
    where: DiscoveryDorkWhereUniqueInput
    /**
     * In case the DiscoveryDork found by the `where` argument doesn't exist, create a new DiscoveryDork with this data.
     */
    create: XOR<DiscoveryDorkCreateInput, DiscoveryDorkUncheckedCreateInput>
    /**
     * In case the DiscoveryDork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscoveryDorkUpdateInput, DiscoveryDorkUncheckedUpdateInput>
  }

  /**
   * DiscoveryDork delete
   */
  export type DiscoveryDorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelect<ExtArgs> | null
    /**
     * Filter which DiscoveryDork to delete.
     */
    where: DiscoveryDorkWhereUniqueInput
  }

  /**
   * DiscoveryDork deleteMany
   */
  export type DiscoveryDorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscoveryDorks to delete
     */
    where?: DiscoveryDorkWhereInput
  }

  /**
   * DiscoveryDork without action
   */
  export type DiscoveryDorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveryDork
     */
    select?: DiscoveryDorkSelect<ExtArgs> | null
  }


  /**
   * Model DiscoveredLink
   */

  export type AggregateDiscoveredLink = {
    _count: DiscoveredLinkCountAggregateOutputType | null
    _avg: DiscoveredLinkAvgAggregateOutputType | null
    _sum: DiscoveredLinkSumAggregateOutputType | null
    _min: DiscoveredLinkMinAggregateOutputType | null
    _max: DiscoveredLinkMaxAggregateOutputType | null
  }

  export type DiscoveredLinkAvgAggregateOutputType = {
    relevanceScore: number | null
  }

  export type DiscoveredLinkSumAggregateOutputType = {
    relevanceScore: number | null
  }

  export type DiscoveredLinkMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    source: string | null
    publishedAt: string | null
    status: string | null
    relevanceScore: number | null
    embedding: string | null
    createdAt: Date | null
    dorkKeyword: string | null
    dorkLabel: string | null
  }

  export type DiscoveredLinkMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    source: string | null
    publishedAt: string | null
    status: string | null
    relevanceScore: number | null
    embedding: string | null
    createdAt: Date | null
    dorkKeyword: string | null
    dorkLabel: string | null
  }

  export type DiscoveredLinkCountAggregateOutputType = {
    id: number
    url: number
    title: number
    source: number
    publishedAt: number
    status: number
    relevanceScore: number
    embedding: number
    createdAt: number
    dorkKeyword: number
    dorkLabel: number
    _all: number
  }


  export type DiscoveredLinkAvgAggregateInputType = {
    relevanceScore?: true
  }

  export type DiscoveredLinkSumAggregateInputType = {
    relevanceScore?: true
  }

  export type DiscoveredLinkMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    source?: true
    publishedAt?: true
    status?: true
    relevanceScore?: true
    embedding?: true
    createdAt?: true
    dorkKeyword?: true
    dorkLabel?: true
  }

  export type DiscoveredLinkMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    source?: true
    publishedAt?: true
    status?: true
    relevanceScore?: true
    embedding?: true
    createdAt?: true
    dorkKeyword?: true
    dorkLabel?: true
  }

  export type DiscoveredLinkCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    source?: true
    publishedAt?: true
    status?: true
    relevanceScore?: true
    embedding?: true
    createdAt?: true
    dorkKeyword?: true
    dorkLabel?: true
    _all?: true
  }

  export type DiscoveredLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscoveredLink to aggregate.
     */
    where?: DiscoveredLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoveredLinks to fetch.
     */
    orderBy?: DiscoveredLinkOrderByWithRelationInput | DiscoveredLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscoveredLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoveredLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoveredLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscoveredLinks
    **/
    _count?: true | DiscoveredLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscoveredLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscoveredLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscoveredLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscoveredLinkMaxAggregateInputType
  }

  export type GetDiscoveredLinkAggregateType<T extends DiscoveredLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscoveredLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscoveredLink[P]>
      : GetScalarType<T[P], AggregateDiscoveredLink[P]>
  }




  export type DiscoveredLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscoveredLinkWhereInput
    orderBy?: DiscoveredLinkOrderByWithAggregationInput | DiscoveredLinkOrderByWithAggregationInput[]
    by: DiscoveredLinkScalarFieldEnum[] | DiscoveredLinkScalarFieldEnum
    having?: DiscoveredLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscoveredLinkCountAggregateInputType | true
    _avg?: DiscoveredLinkAvgAggregateInputType
    _sum?: DiscoveredLinkSumAggregateInputType
    _min?: DiscoveredLinkMinAggregateInputType
    _max?: DiscoveredLinkMaxAggregateInputType
  }

  export type DiscoveredLinkGroupByOutputType = {
    id: string
    url: string
    title: string | null
    source: string | null
    publishedAt: string | null
    status: string
    relevanceScore: number | null
    embedding: string | null
    createdAt: Date
    dorkKeyword: string | null
    dorkLabel: string | null
    _count: DiscoveredLinkCountAggregateOutputType | null
    _avg: DiscoveredLinkAvgAggregateOutputType | null
    _sum: DiscoveredLinkSumAggregateOutputType | null
    _min: DiscoveredLinkMinAggregateOutputType | null
    _max: DiscoveredLinkMaxAggregateOutputType | null
  }

  type GetDiscoveredLinkGroupByPayload<T extends DiscoveredLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscoveredLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscoveredLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscoveredLinkGroupByOutputType[P]>
            : GetScalarType<T[P], DiscoveredLinkGroupByOutputType[P]>
        }
      >
    >


  export type DiscoveredLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    source?: boolean
    publishedAt?: boolean
    status?: boolean
    relevanceScore?: boolean
    embedding?: boolean
    createdAt?: boolean
    dorkKeyword?: boolean
    dorkLabel?: boolean
  }, ExtArgs["result"]["discoveredLink"]>

  export type DiscoveredLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    source?: boolean
    publishedAt?: boolean
    status?: boolean
    relevanceScore?: boolean
    embedding?: boolean
    createdAt?: boolean
    dorkKeyword?: boolean
    dorkLabel?: boolean
  }, ExtArgs["result"]["discoveredLink"]>

  export type DiscoveredLinkSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    source?: boolean
    publishedAt?: boolean
    status?: boolean
    relevanceScore?: boolean
    embedding?: boolean
    createdAt?: boolean
    dorkKeyword?: boolean
    dorkLabel?: boolean
  }


  export type $DiscoveredLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscoveredLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      title: string | null
      source: string | null
      publishedAt: string | null
      status: string
      relevanceScore: number | null
      embedding: string | null
      createdAt: Date
      dorkKeyword: string | null
      dorkLabel: string | null
    }, ExtArgs["result"]["discoveredLink"]>
    composites: {}
  }

  type DiscoveredLinkGetPayload<S extends boolean | null | undefined | DiscoveredLinkDefaultArgs> = $Result.GetResult<Prisma.$DiscoveredLinkPayload, S>

  type DiscoveredLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiscoveredLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiscoveredLinkCountAggregateInputType | true
    }

  export interface DiscoveredLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscoveredLink'], meta: { name: 'DiscoveredLink' } }
    /**
     * Find zero or one DiscoveredLink that matches the filter.
     * @param {DiscoveredLinkFindUniqueArgs} args - Arguments to find a DiscoveredLink
     * @example
     * // Get one DiscoveredLink
     * const discoveredLink = await prisma.discoveredLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscoveredLinkFindUniqueArgs>(args: SelectSubset<T, DiscoveredLinkFindUniqueArgs<ExtArgs>>): Prisma__DiscoveredLinkClient<$Result.GetResult<Prisma.$DiscoveredLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DiscoveredLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DiscoveredLinkFindUniqueOrThrowArgs} args - Arguments to find a DiscoveredLink
     * @example
     * // Get one DiscoveredLink
     * const discoveredLink = await prisma.discoveredLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscoveredLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscoveredLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscoveredLinkClient<$Result.GetResult<Prisma.$DiscoveredLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DiscoveredLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveredLinkFindFirstArgs} args - Arguments to find a DiscoveredLink
     * @example
     * // Get one DiscoveredLink
     * const discoveredLink = await prisma.discoveredLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscoveredLinkFindFirstArgs>(args?: SelectSubset<T, DiscoveredLinkFindFirstArgs<ExtArgs>>): Prisma__DiscoveredLinkClient<$Result.GetResult<Prisma.$DiscoveredLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DiscoveredLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveredLinkFindFirstOrThrowArgs} args - Arguments to find a DiscoveredLink
     * @example
     * // Get one DiscoveredLink
     * const discoveredLink = await prisma.discoveredLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscoveredLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscoveredLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscoveredLinkClient<$Result.GetResult<Prisma.$DiscoveredLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DiscoveredLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveredLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscoveredLinks
     * const discoveredLinks = await prisma.discoveredLink.findMany()
     * 
     * // Get first 10 DiscoveredLinks
     * const discoveredLinks = await prisma.discoveredLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discoveredLinkWithIdOnly = await prisma.discoveredLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscoveredLinkFindManyArgs>(args?: SelectSubset<T, DiscoveredLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoveredLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DiscoveredLink.
     * @param {DiscoveredLinkCreateArgs} args - Arguments to create a DiscoveredLink.
     * @example
     * // Create one DiscoveredLink
     * const DiscoveredLink = await prisma.discoveredLink.create({
     *   data: {
     *     // ... data to create a DiscoveredLink
     *   }
     * })
     * 
     */
    create<T extends DiscoveredLinkCreateArgs>(args: SelectSubset<T, DiscoveredLinkCreateArgs<ExtArgs>>): Prisma__DiscoveredLinkClient<$Result.GetResult<Prisma.$DiscoveredLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DiscoveredLinks.
     * @param {DiscoveredLinkCreateManyArgs} args - Arguments to create many DiscoveredLinks.
     * @example
     * // Create many DiscoveredLinks
     * const discoveredLink = await prisma.discoveredLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscoveredLinkCreateManyArgs>(args?: SelectSubset<T, DiscoveredLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscoveredLinks and returns the data saved in the database.
     * @param {DiscoveredLinkCreateManyAndReturnArgs} args - Arguments to create many DiscoveredLinks.
     * @example
     * // Create many DiscoveredLinks
     * const discoveredLink = await prisma.discoveredLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscoveredLinks and only return the `id`
     * const discoveredLinkWithIdOnly = await prisma.discoveredLink.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscoveredLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscoveredLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoveredLinkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DiscoveredLink.
     * @param {DiscoveredLinkDeleteArgs} args - Arguments to delete one DiscoveredLink.
     * @example
     * // Delete one DiscoveredLink
     * const DiscoveredLink = await prisma.discoveredLink.delete({
     *   where: {
     *     // ... filter to delete one DiscoveredLink
     *   }
     * })
     * 
     */
    delete<T extends DiscoveredLinkDeleteArgs>(args: SelectSubset<T, DiscoveredLinkDeleteArgs<ExtArgs>>): Prisma__DiscoveredLinkClient<$Result.GetResult<Prisma.$DiscoveredLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DiscoveredLink.
     * @param {DiscoveredLinkUpdateArgs} args - Arguments to update one DiscoveredLink.
     * @example
     * // Update one DiscoveredLink
     * const discoveredLink = await prisma.discoveredLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscoveredLinkUpdateArgs>(args: SelectSubset<T, DiscoveredLinkUpdateArgs<ExtArgs>>): Prisma__DiscoveredLinkClient<$Result.GetResult<Prisma.$DiscoveredLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DiscoveredLinks.
     * @param {DiscoveredLinkDeleteManyArgs} args - Arguments to filter DiscoveredLinks to delete.
     * @example
     * // Delete a few DiscoveredLinks
     * const { count } = await prisma.discoveredLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscoveredLinkDeleteManyArgs>(args?: SelectSubset<T, DiscoveredLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscoveredLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveredLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscoveredLinks
     * const discoveredLink = await prisma.discoveredLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscoveredLinkUpdateManyArgs>(args: SelectSubset<T, DiscoveredLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiscoveredLink.
     * @param {DiscoveredLinkUpsertArgs} args - Arguments to update or create a DiscoveredLink.
     * @example
     * // Update or create a DiscoveredLink
     * const discoveredLink = await prisma.discoveredLink.upsert({
     *   create: {
     *     // ... data to create a DiscoveredLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscoveredLink we want to update
     *   }
     * })
     */
    upsert<T extends DiscoveredLinkUpsertArgs>(args: SelectSubset<T, DiscoveredLinkUpsertArgs<ExtArgs>>): Prisma__DiscoveredLinkClient<$Result.GetResult<Prisma.$DiscoveredLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DiscoveredLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveredLinkCountArgs} args - Arguments to filter DiscoveredLinks to count.
     * @example
     * // Count the number of DiscoveredLinks
     * const count = await prisma.discoveredLink.count({
     *   where: {
     *     // ... the filter for the DiscoveredLinks we want to count
     *   }
     * })
    **/
    count<T extends DiscoveredLinkCountArgs>(
      args?: Subset<T, DiscoveredLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscoveredLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscoveredLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveredLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscoveredLinkAggregateArgs>(args: Subset<T, DiscoveredLinkAggregateArgs>): Prisma.PrismaPromise<GetDiscoveredLinkAggregateType<T>>

    /**
     * Group by DiscoveredLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoveredLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscoveredLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscoveredLinkGroupByArgs['orderBy'] }
        : { orderBy?: DiscoveredLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscoveredLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscoveredLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscoveredLink model
   */
  readonly fields: DiscoveredLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscoveredLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscoveredLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiscoveredLink model
   */ 
  interface DiscoveredLinkFieldRefs {
    readonly id: FieldRef<"DiscoveredLink", 'String'>
    readonly url: FieldRef<"DiscoveredLink", 'String'>
    readonly title: FieldRef<"DiscoveredLink", 'String'>
    readonly source: FieldRef<"DiscoveredLink", 'String'>
    readonly publishedAt: FieldRef<"DiscoveredLink", 'String'>
    readonly status: FieldRef<"DiscoveredLink", 'String'>
    readonly relevanceScore: FieldRef<"DiscoveredLink", 'Int'>
    readonly embedding: FieldRef<"DiscoveredLink", 'String'>
    readonly createdAt: FieldRef<"DiscoveredLink", 'DateTime'>
    readonly dorkKeyword: FieldRef<"DiscoveredLink", 'String'>
    readonly dorkLabel: FieldRef<"DiscoveredLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiscoveredLink findUnique
   */
  export type DiscoveredLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelect<ExtArgs> | null
    /**
     * Filter, which DiscoveredLink to fetch.
     */
    where: DiscoveredLinkWhereUniqueInput
  }

  /**
   * DiscoveredLink findUniqueOrThrow
   */
  export type DiscoveredLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelect<ExtArgs> | null
    /**
     * Filter, which DiscoveredLink to fetch.
     */
    where: DiscoveredLinkWhereUniqueInput
  }

  /**
   * DiscoveredLink findFirst
   */
  export type DiscoveredLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelect<ExtArgs> | null
    /**
     * Filter, which DiscoveredLink to fetch.
     */
    where?: DiscoveredLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoveredLinks to fetch.
     */
    orderBy?: DiscoveredLinkOrderByWithRelationInput | DiscoveredLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscoveredLinks.
     */
    cursor?: DiscoveredLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoveredLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoveredLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscoveredLinks.
     */
    distinct?: DiscoveredLinkScalarFieldEnum | DiscoveredLinkScalarFieldEnum[]
  }

  /**
   * DiscoveredLink findFirstOrThrow
   */
  export type DiscoveredLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelect<ExtArgs> | null
    /**
     * Filter, which DiscoveredLink to fetch.
     */
    where?: DiscoveredLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoveredLinks to fetch.
     */
    orderBy?: DiscoveredLinkOrderByWithRelationInput | DiscoveredLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscoveredLinks.
     */
    cursor?: DiscoveredLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoveredLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoveredLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscoveredLinks.
     */
    distinct?: DiscoveredLinkScalarFieldEnum | DiscoveredLinkScalarFieldEnum[]
  }

  /**
   * DiscoveredLink findMany
   */
  export type DiscoveredLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelect<ExtArgs> | null
    /**
     * Filter, which DiscoveredLinks to fetch.
     */
    where?: DiscoveredLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoveredLinks to fetch.
     */
    orderBy?: DiscoveredLinkOrderByWithRelationInput | DiscoveredLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscoveredLinks.
     */
    cursor?: DiscoveredLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoveredLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoveredLinks.
     */
    skip?: number
    distinct?: DiscoveredLinkScalarFieldEnum | DiscoveredLinkScalarFieldEnum[]
  }

  /**
   * DiscoveredLink create
   */
  export type DiscoveredLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelect<ExtArgs> | null
    /**
     * The data needed to create a DiscoveredLink.
     */
    data: XOR<DiscoveredLinkCreateInput, DiscoveredLinkUncheckedCreateInput>
  }

  /**
   * DiscoveredLink createMany
   */
  export type DiscoveredLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscoveredLinks.
     */
    data: DiscoveredLinkCreateManyInput | DiscoveredLinkCreateManyInput[]
  }

  /**
   * DiscoveredLink createManyAndReturn
   */
  export type DiscoveredLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DiscoveredLinks.
     */
    data: DiscoveredLinkCreateManyInput | DiscoveredLinkCreateManyInput[]
  }

  /**
   * DiscoveredLink update
   */
  export type DiscoveredLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelect<ExtArgs> | null
    /**
     * The data needed to update a DiscoveredLink.
     */
    data: XOR<DiscoveredLinkUpdateInput, DiscoveredLinkUncheckedUpdateInput>
    /**
     * Choose, which DiscoveredLink to update.
     */
    where: DiscoveredLinkWhereUniqueInput
  }

  /**
   * DiscoveredLink updateMany
   */
  export type DiscoveredLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscoveredLinks.
     */
    data: XOR<DiscoveredLinkUpdateManyMutationInput, DiscoveredLinkUncheckedUpdateManyInput>
    /**
     * Filter which DiscoveredLinks to update
     */
    where?: DiscoveredLinkWhereInput
  }

  /**
   * DiscoveredLink upsert
   */
  export type DiscoveredLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelect<ExtArgs> | null
    /**
     * The filter to search for the DiscoveredLink to update in case it exists.
     */
    where: DiscoveredLinkWhereUniqueInput
    /**
     * In case the DiscoveredLink found by the `where` argument doesn't exist, create a new DiscoveredLink with this data.
     */
    create: XOR<DiscoveredLinkCreateInput, DiscoveredLinkUncheckedCreateInput>
    /**
     * In case the DiscoveredLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscoveredLinkUpdateInput, DiscoveredLinkUncheckedUpdateInput>
  }

  /**
   * DiscoveredLink delete
   */
  export type DiscoveredLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelect<ExtArgs> | null
    /**
     * Filter which DiscoveredLink to delete.
     */
    where: DiscoveredLinkWhereUniqueInput
  }

  /**
   * DiscoveredLink deleteMany
   */
  export type DiscoveredLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscoveredLinks to delete
     */
    where?: DiscoveredLinkWhereInput
  }

  /**
   * DiscoveredLink without action
   */
  export type DiscoveredLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoveredLink
     */
    select?: DiscoveredLinkSelect<ExtArgs> | null
  }


  /**
   * Model StatisticDataset
   */

  export type AggregateStatisticDataset = {
    _count: StatisticDatasetCountAggregateOutputType | null
    _min: StatisticDatasetMinAggregateOutputType | null
    _max: StatisticDatasetMaxAggregateOutputType | null
  }

  export type StatisticDatasetMinAggregateOutputType = {
    id: string | null
    title: string | null
    sourceUrl: string | null
    data: string | null
    summary: string | null
    createdAt: Date | null
  }

  export type StatisticDatasetMaxAggregateOutputType = {
    id: string | null
    title: string | null
    sourceUrl: string | null
    data: string | null
    summary: string | null
    createdAt: Date | null
  }

  export type StatisticDatasetCountAggregateOutputType = {
    id: number
    title: number
    sourceUrl: number
    data: number
    summary: number
    createdAt: number
    _all: number
  }


  export type StatisticDatasetMinAggregateInputType = {
    id?: true
    title?: true
    sourceUrl?: true
    data?: true
    summary?: true
    createdAt?: true
  }

  export type StatisticDatasetMaxAggregateInputType = {
    id?: true
    title?: true
    sourceUrl?: true
    data?: true
    summary?: true
    createdAt?: true
  }

  export type StatisticDatasetCountAggregateInputType = {
    id?: true
    title?: true
    sourceUrl?: true
    data?: true
    summary?: true
    createdAt?: true
    _all?: true
  }

  export type StatisticDatasetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatisticDataset to aggregate.
     */
    where?: StatisticDatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticDatasets to fetch.
     */
    orderBy?: StatisticDatasetOrderByWithRelationInput | StatisticDatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatisticDatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticDatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticDatasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatisticDatasets
    **/
    _count?: true | StatisticDatasetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatisticDatasetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatisticDatasetMaxAggregateInputType
  }

  export type GetStatisticDatasetAggregateType<T extends StatisticDatasetAggregateArgs> = {
        [P in keyof T & keyof AggregateStatisticDataset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatisticDataset[P]>
      : GetScalarType<T[P], AggregateStatisticDataset[P]>
  }




  export type StatisticDatasetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticDatasetWhereInput
    orderBy?: StatisticDatasetOrderByWithAggregationInput | StatisticDatasetOrderByWithAggregationInput[]
    by: StatisticDatasetScalarFieldEnum[] | StatisticDatasetScalarFieldEnum
    having?: StatisticDatasetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatisticDatasetCountAggregateInputType | true
    _min?: StatisticDatasetMinAggregateInputType
    _max?: StatisticDatasetMaxAggregateInputType
  }

  export type StatisticDatasetGroupByOutputType = {
    id: string
    title: string
    sourceUrl: string
    data: string
    summary: string | null
    createdAt: Date
    _count: StatisticDatasetCountAggregateOutputType | null
    _min: StatisticDatasetMinAggregateOutputType | null
    _max: StatisticDatasetMaxAggregateOutputType | null
  }

  type GetStatisticDatasetGroupByPayload<T extends StatisticDatasetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatisticDatasetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatisticDatasetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatisticDatasetGroupByOutputType[P]>
            : GetScalarType<T[P], StatisticDatasetGroupByOutputType[P]>
        }
      >
    >


  export type StatisticDatasetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sourceUrl?: boolean
    data?: boolean
    summary?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["statisticDataset"]>

  export type StatisticDatasetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sourceUrl?: boolean
    data?: boolean
    summary?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["statisticDataset"]>

  export type StatisticDatasetSelectScalar = {
    id?: boolean
    title?: boolean
    sourceUrl?: boolean
    data?: boolean
    summary?: boolean
    createdAt?: boolean
  }


  export type $StatisticDatasetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatisticDataset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      sourceUrl: string
      data: string
      summary: string | null
      createdAt: Date
    }, ExtArgs["result"]["statisticDataset"]>
    composites: {}
  }

  type StatisticDatasetGetPayload<S extends boolean | null | undefined | StatisticDatasetDefaultArgs> = $Result.GetResult<Prisma.$StatisticDatasetPayload, S>

  type StatisticDatasetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatisticDatasetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatisticDatasetCountAggregateInputType | true
    }

  export interface StatisticDatasetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatisticDataset'], meta: { name: 'StatisticDataset' } }
    /**
     * Find zero or one StatisticDataset that matches the filter.
     * @param {StatisticDatasetFindUniqueArgs} args - Arguments to find a StatisticDataset
     * @example
     * // Get one StatisticDataset
     * const statisticDataset = await prisma.statisticDataset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatisticDatasetFindUniqueArgs>(args: SelectSubset<T, StatisticDatasetFindUniqueArgs<ExtArgs>>): Prisma__StatisticDatasetClient<$Result.GetResult<Prisma.$StatisticDatasetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StatisticDataset that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StatisticDatasetFindUniqueOrThrowArgs} args - Arguments to find a StatisticDataset
     * @example
     * // Get one StatisticDataset
     * const statisticDataset = await prisma.statisticDataset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatisticDatasetFindUniqueOrThrowArgs>(args: SelectSubset<T, StatisticDatasetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatisticDatasetClient<$Result.GetResult<Prisma.$StatisticDatasetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StatisticDataset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticDatasetFindFirstArgs} args - Arguments to find a StatisticDataset
     * @example
     * // Get one StatisticDataset
     * const statisticDataset = await prisma.statisticDataset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatisticDatasetFindFirstArgs>(args?: SelectSubset<T, StatisticDatasetFindFirstArgs<ExtArgs>>): Prisma__StatisticDatasetClient<$Result.GetResult<Prisma.$StatisticDatasetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StatisticDataset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticDatasetFindFirstOrThrowArgs} args - Arguments to find a StatisticDataset
     * @example
     * // Get one StatisticDataset
     * const statisticDataset = await prisma.statisticDataset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatisticDatasetFindFirstOrThrowArgs>(args?: SelectSubset<T, StatisticDatasetFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatisticDatasetClient<$Result.GetResult<Prisma.$StatisticDatasetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StatisticDatasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticDatasetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatisticDatasets
     * const statisticDatasets = await prisma.statisticDataset.findMany()
     * 
     * // Get first 10 StatisticDatasets
     * const statisticDatasets = await prisma.statisticDataset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statisticDatasetWithIdOnly = await prisma.statisticDataset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatisticDatasetFindManyArgs>(args?: SelectSubset<T, StatisticDatasetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticDatasetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StatisticDataset.
     * @param {StatisticDatasetCreateArgs} args - Arguments to create a StatisticDataset.
     * @example
     * // Create one StatisticDataset
     * const StatisticDataset = await prisma.statisticDataset.create({
     *   data: {
     *     // ... data to create a StatisticDataset
     *   }
     * })
     * 
     */
    create<T extends StatisticDatasetCreateArgs>(args: SelectSubset<T, StatisticDatasetCreateArgs<ExtArgs>>): Prisma__StatisticDatasetClient<$Result.GetResult<Prisma.$StatisticDatasetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StatisticDatasets.
     * @param {StatisticDatasetCreateManyArgs} args - Arguments to create many StatisticDatasets.
     * @example
     * // Create many StatisticDatasets
     * const statisticDataset = await prisma.statisticDataset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatisticDatasetCreateManyArgs>(args?: SelectSubset<T, StatisticDatasetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatisticDatasets and returns the data saved in the database.
     * @param {StatisticDatasetCreateManyAndReturnArgs} args - Arguments to create many StatisticDatasets.
     * @example
     * // Create many StatisticDatasets
     * const statisticDataset = await prisma.statisticDataset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatisticDatasets and only return the `id`
     * const statisticDatasetWithIdOnly = await prisma.statisticDataset.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatisticDatasetCreateManyAndReturnArgs>(args?: SelectSubset<T, StatisticDatasetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticDatasetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StatisticDataset.
     * @param {StatisticDatasetDeleteArgs} args - Arguments to delete one StatisticDataset.
     * @example
     * // Delete one StatisticDataset
     * const StatisticDataset = await prisma.statisticDataset.delete({
     *   where: {
     *     // ... filter to delete one StatisticDataset
     *   }
     * })
     * 
     */
    delete<T extends StatisticDatasetDeleteArgs>(args: SelectSubset<T, StatisticDatasetDeleteArgs<ExtArgs>>): Prisma__StatisticDatasetClient<$Result.GetResult<Prisma.$StatisticDatasetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StatisticDataset.
     * @param {StatisticDatasetUpdateArgs} args - Arguments to update one StatisticDataset.
     * @example
     * // Update one StatisticDataset
     * const statisticDataset = await prisma.statisticDataset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatisticDatasetUpdateArgs>(args: SelectSubset<T, StatisticDatasetUpdateArgs<ExtArgs>>): Prisma__StatisticDatasetClient<$Result.GetResult<Prisma.$StatisticDatasetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StatisticDatasets.
     * @param {StatisticDatasetDeleteManyArgs} args - Arguments to filter StatisticDatasets to delete.
     * @example
     * // Delete a few StatisticDatasets
     * const { count } = await prisma.statisticDataset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatisticDatasetDeleteManyArgs>(args?: SelectSubset<T, StatisticDatasetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatisticDatasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticDatasetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatisticDatasets
     * const statisticDataset = await prisma.statisticDataset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatisticDatasetUpdateManyArgs>(args: SelectSubset<T, StatisticDatasetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatisticDataset.
     * @param {StatisticDatasetUpsertArgs} args - Arguments to update or create a StatisticDataset.
     * @example
     * // Update or create a StatisticDataset
     * const statisticDataset = await prisma.statisticDataset.upsert({
     *   create: {
     *     // ... data to create a StatisticDataset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatisticDataset we want to update
     *   }
     * })
     */
    upsert<T extends StatisticDatasetUpsertArgs>(args: SelectSubset<T, StatisticDatasetUpsertArgs<ExtArgs>>): Prisma__StatisticDatasetClient<$Result.GetResult<Prisma.$StatisticDatasetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StatisticDatasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticDatasetCountArgs} args - Arguments to filter StatisticDatasets to count.
     * @example
     * // Count the number of StatisticDatasets
     * const count = await prisma.statisticDataset.count({
     *   where: {
     *     // ... the filter for the StatisticDatasets we want to count
     *   }
     * })
    **/
    count<T extends StatisticDatasetCountArgs>(
      args?: Subset<T, StatisticDatasetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatisticDatasetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatisticDataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticDatasetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatisticDatasetAggregateArgs>(args: Subset<T, StatisticDatasetAggregateArgs>): Prisma.PrismaPromise<GetStatisticDatasetAggregateType<T>>

    /**
     * Group by StatisticDataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticDatasetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatisticDatasetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatisticDatasetGroupByArgs['orderBy'] }
        : { orderBy?: StatisticDatasetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatisticDatasetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatisticDatasetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatisticDataset model
   */
  readonly fields: StatisticDatasetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatisticDataset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatisticDatasetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatisticDataset model
   */ 
  interface StatisticDatasetFieldRefs {
    readonly id: FieldRef<"StatisticDataset", 'String'>
    readonly title: FieldRef<"StatisticDataset", 'String'>
    readonly sourceUrl: FieldRef<"StatisticDataset", 'String'>
    readonly data: FieldRef<"StatisticDataset", 'String'>
    readonly summary: FieldRef<"StatisticDataset", 'String'>
    readonly createdAt: FieldRef<"StatisticDataset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StatisticDataset findUnique
   */
  export type StatisticDatasetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelect<ExtArgs> | null
    /**
     * Filter, which StatisticDataset to fetch.
     */
    where: StatisticDatasetWhereUniqueInput
  }

  /**
   * StatisticDataset findUniqueOrThrow
   */
  export type StatisticDatasetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelect<ExtArgs> | null
    /**
     * Filter, which StatisticDataset to fetch.
     */
    where: StatisticDatasetWhereUniqueInput
  }

  /**
   * StatisticDataset findFirst
   */
  export type StatisticDatasetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelect<ExtArgs> | null
    /**
     * Filter, which StatisticDataset to fetch.
     */
    where?: StatisticDatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticDatasets to fetch.
     */
    orderBy?: StatisticDatasetOrderByWithRelationInput | StatisticDatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatisticDatasets.
     */
    cursor?: StatisticDatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticDatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticDatasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatisticDatasets.
     */
    distinct?: StatisticDatasetScalarFieldEnum | StatisticDatasetScalarFieldEnum[]
  }

  /**
   * StatisticDataset findFirstOrThrow
   */
  export type StatisticDatasetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelect<ExtArgs> | null
    /**
     * Filter, which StatisticDataset to fetch.
     */
    where?: StatisticDatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticDatasets to fetch.
     */
    orderBy?: StatisticDatasetOrderByWithRelationInput | StatisticDatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatisticDatasets.
     */
    cursor?: StatisticDatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticDatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticDatasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatisticDatasets.
     */
    distinct?: StatisticDatasetScalarFieldEnum | StatisticDatasetScalarFieldEnum[]
  }

  /**
   * StatisticDataset findMany
   */
  export type StatisticDatasetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelect<ExtArgs> | null
    /**
     * Filter, which StatisticDatasets to fetch.
     */
    where?: StatisticDatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticDatasets to fetch.
     */
    orderBy?: StatisticDatasetOrderByWithRelationInput | StatisticDatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatisticDatasets.
     */
    cursor?: StatisticDatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticDatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticDatasets.
     */
    skip?: number
    distinct?: StatisticDatasetScalarFieldEnum | StatisticDatasetScalarFieldEnum[]
  }

  /**
   * StatisticDataset create
   */
  export type StatisticDatasetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelect<ExtArgs> | null
    /**
     * The data needed to create a StatisticDataset.
     */
    data: XOR<StatisticDatasetCreateInput, StatisticDatasetUncheckedCreateInput>
  }

  /**
   * StatisticDataset createMany
   */
  export type StatisticDatasetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatisticDatasets.
     */
    data: StatisticDatasetCreateManyInput | StatisticDatasetCreateManyInput[]
  }

  /**
   * StatisticDataset createManyAndReturn
   */
  export type StatisticDatasetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StatisticDatasets.
     */
    data: StatisticDatasetCreateManyInput | StatisticDatasetCreateManyInput[]
  }

  /**
   * StatisticDataset update
   */
  export type StatisticDatasetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelect<ExtArgs> | null
    /**
     * The data needed to update a StatisticDataset.
     */
    data: XOR<StatisticDatasetUpdateInput, StatisticDatasetUncheckedUpdateInput>
    /**
     * Choose, which StatisticDataset to update.
     */
    where: StatisticDatasetWhereUniqueInput
  }

  /**
   * StatisticDataset updateMany
   */
  export type StatisticDatasetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatisticDatasets.
     */
    data: XOR<StatisticDatasetUpdateManyMutationInput, StatisticDatasetUncheckedUpdateManyInput>
    /**
     * Filter which StatisticDatasets to update
     */
    where?: StatisticDatasetWhereInput
  }

  /**
   * StatisticDataset upsert
   */
  export type StatisticDatasetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelect<ExtArgs> | null
    /**
     * The filter to search for the StatisticDataset to update in case it exists.
     */
    where: StatisticDatasetWhereUniqueInput
    /**
     * In case the StatisticDataset found by the `where` argument doesn't exist, create a new StatisticDataset with this data.
     */
    create: XOR<StatisticDatasetCreateInput, StatisticDatasetUncheckedCreateInput>
    /**
     * In case the StatisticDataset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatisticDatasetUpdateInput, StatisticDatasetUncheckedUpdateInput>
  }

  /**
   * StatisticDataset delete
   */
  export type StatisticDatasetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelect<ExtArgs> | null
    /**
     * Filter which StatisticDataset to delete.
     */
    where: StatisticDatasetWhereUniqueInput
  }

  /**
   * StatisticDataset deleteMany
   */
  export type StatisticDatasetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatisticDatasets to delete
     */
    where?: StatisticDatasetWhereInput
  }

  /**
   * StatisticDataset without action
   */
  export type StatisticDatasetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticDataset
     */
    select?: StatisticDatasetSelect<ExtArgs> | null
  }


  /**
   * Model ScrapeJob
   */

  export type AggregateScrapeJob = {
    _count: ScrapeJobCountAggregateOutputType | null
    _avg: ScrapeJobAvgAggregateOutputType | null
    _sum: ScrapeJobSumAggregateOutputType | null
    _min: ScrapeJobMinAggregateOutputType | null
    _max: ScrapeJobMaxAggregateOutputType | null
  }

  export type ScrapeJobAvgAggregateOutputType = {
    totalPages: number | null
    processedPages: number | null
  }

  export type ScrapeJobSumAggregateOutputType = {
    totalPages: number | null
    processedPages: number | null
  }

  export type ScrapeJobMinAggregateOutputType = {
    id: string | null
    url: string | null
    status: string | null
    totalPages: number | null
    processedPages: number | null
    datasetId: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScrapeJobMaxAggregateOutputType = {
    id: string | null
    url: string | null
    status: string | null
    totalPages: number | null
    processedPages: number | null
    datasetId: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScrapeJobCountAggregateOutputType = {
    id: number
    url: number
    status: number
    totalPages: number
    processedPages: number
    datasetId: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScrapeJobAvgAggregateInputType = {
    totalPages?: true
    processedPages?: true
  }

  export type ScrapeJobSumAggregateInputType = {
    totalPages?: true
    processedPages?: true
  }

  export type ScrapeJobMinAggregateInputType = {
    id?: true
    url?: true
    status?: true
    totalPages?: true
    processedPages?: true
    datasetId?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScrapeJobMaxAggregateInputType = {
    id?: true
    url?: true
    status?: true
    totalPages?: true
    processedPages?: true
    datasetId?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScrapeJobCountAggregateInputType = {
    id?: true
    url?: true
    status?: true
    totalPages?: true
    processedPages?: true
    datasetId?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScrapeJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeJob to aggregate.
     */
    where?: ScrapeJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeJobs to fetch.
     */
    orderBy?: ScrapeJobOrderByWithRelationInput | ScrapeJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapeJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapeJobs
    **/
    _count?: true | ScrapeJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScrapeJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScrapeJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapeJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapeJobMaxAggregateInputType
  }

  export type GetScrapeJobAggregateType<T extends ScrapeJobAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapeJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapeJob[P]>
      : GetScalarType<T[P], AggregateScrapeJob[P]>
  }




  export type ScrapeJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeJobWhereInput
    orderBy?: ScrapeJobOrderByWithAggregationInput | ScrapeJobOrderByWithAggregationInput[]
    by: ScrapeJobScalarFieldEnum[] | ScrapeJobScalarFieldEnum
    having?: ScrapeJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapeJobCountAggregateInputType | true
    _avg?: ScrapeJobAvgAggregateInputType
    _sum?: ScrapeJobSumAggregateInputType
    _min?: ScrapeJobMinAggregateInputType
    _max?: ScrapeJobMaxAggregateInputType
  }

  export type ScrapeJobGroupByOutputType = {
    id: string
    url: string
    status: string
    totalPages: number | null
    processedPages: number
    datasetId: string | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: ScrapeJobCountAggregateOutputType | null
    _avg: ScrapeJobAvgAggregateOutputType | null
    _sum: ScrapeJobSumAggregateOutputType | null
    _min: ScrapeJobMinAggregateOutputType | null
    _max: ScrapeJobMaxAggregateOutputType | null
  }

  type GetScrapeJobGroupByPayload<T extends ScrapeJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapeJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapeJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapeJobGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapeJobGroupByOutputType[P]>
        }
      >
    >


  export type ScrapeJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    status?: boolean
    totalPages?: boolean
    processedPages?: boolean
    datasetId?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scrapeJob"]>

  export type ScrapeJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    status?: boolean
    totalPages?: boolean
    processedPages?: boolean
    datasetId?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scrapeJob"]>

  export type ScrapeJobSelectScalar = {
    id?: boolean
    url?: boolean
    status?: boolean
    totalPages?: boolean
    processedPages?: boolean
    datasetId?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ScrapeJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapeJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      status: string
      totalPages: number | null
      processedPages: number
      datasetId: string | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scrapeJob"]>
    composites: {}
  }

  type ScrapeJobGetPayload<S extends boolean | null | undefined | ScrapeJobDefaultArgs> = $Result.GetResult<Prisma.$ScrapeJobPayload, S>

  type ScrapeJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScrapeJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScrapeJobCountAggregateInputType | true
    }

  export interface ScrapeJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapeJob'], meta: { name: 'ScrapeJob' } }
    /**
     * Find zero or one ScrapeJob that matches the filter.
     * @param {ScrapeJobFindUniqueArgs} args - Arguments to find a ScrapeJob
     * @example
     * // Get one ScrapeJob
     * const scrapeJob = await prisma.scrapeJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapeJobFindUniqueArgs>(args: SelectSubset<T, ScrapeJobFindUniqueArgs<ExtArgs>>): Prisma__ScrapeJobClient<$Result.GetResult<Prisma.$ScrapeJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ScrapeJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScrapeJobFindUniqueOrThrowArgs} args - Arguments to find a ScrapeJob
     * @example
     * // Get one ScrapeJob
     * const scrapeJob = await prisma.scrapeJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapeJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapeJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapeJobClient<$Result.GetResult<Prisma.$ScrapeJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ScrapeJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeJobFindFirstArgs} args - Arguments to find a ScrapeJob
     * @example
     * // Get one ScrapeJob
     * const scrapeJob = await prisma.scrapeJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapeJobFindFirstArgs>(args?: SelectSubset<T, ScrapeJobFindFirstArgs<ExtArgs>>): Prisma__ScrapeJobClient<$Result.GetResult<Prisma.$ScrapeJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ScrapeJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeJobFindFirstOrThrowArgs} args - Arguments to find a ScrapeJob
     * @example
     * // Get one ScrapeJob
     * const scrapeJob = await prisma.scrapeJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapeJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapeJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapeJobClient<$Result.GetResult<Prisma.$ScrapeJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ScrapeJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapeJobs
     * const scrapeJobs = await prisma.scrapeJob.findMany()
     * 
     * // Get first 10 ScrapeJobs
     * const scrapeJobs = await prisma.scrapeJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapeJobWithIdOnly = await prisma.scrapeJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrapeJobFindManyArgs>(args?: SelectSubset<T, ScrapeJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ScrapeJob.
     * @param {ScrapeJobCreateArgs} args - Arguments to create a ScrapeJob.
     * @example
     * // Create one ScrapeJob
     * const ScrapeJob = await prisma.scrapeJob.create({
     *   data: {
     *     // ... data to create a ScrapeJob
     *   }
     * })
     * 
     */
    create<T extends ScrapeJobCreateArgs>(args: SelectSubset<T, ScrapeJobCreateArgs<ExtArgs>>): Prisma__ScrapeJobClient<$Result.GetResult<Prisma.$ScrapeJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ScrapeJobs.
     * @param {ScrapeJobCreateManyArgs} args - Arguments to create many ScrapeJobs.
     * @example
     * // Create many ScrapeJobs
     * const scrapeJob = await prisma.scrapeJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapeJobCreateManyArgs>(args?: SelectSubset<T, ScrapeJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScrapeJobs and returns the data saved in the database.
     * @param {ScrapeJobCreateManyAndReturnArgs} args - Arguments to create many ScrapeJobs.
     * @example
     * // Create many ScrapeJobs
     * const scrapeJob = await prisma.scrapeJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScrapeJobs and only return the `id`
     * const scrapeJobWithIdOnly = await prisma.scrapeJob.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScrapeJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ScrapeJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ScrapeJob.
     * @param {ScrapeJobDeleteArgs} args - Arguments to delete one ScrapeJob.
     * @example
     * // Delete one ScrapeJob
     * const ScrapeJob = await prisma.scrapeJob.delete({
     *   where: {
     *     // ... filter to delete one ScrapeJob
     *   }
     * })
     * 
     */
    delete<T extends ScrapeJobDeleteArgs>(args: SelectSubset<T, ScrapeJobDeleteArgs<ExtArgs>>): Prisma__ScrapeJobClient<$Result.GetResult<Prisma.$ScrapeJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ScrapeJob.
     * @param {ScrapeJobUpdateArgs} args - Arguments to update one ScrapeJob.
     * @example
     * // Update one ScrapeJob
     * const scrapeJob = await prisma.scrapeJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapeJobUpdateArgs>(args: SelectSubset<T, ScrapeJobUpdateArgs<ExtArgs>>): Prisma__ScrapeJobClient<$Result.GetResult<Prisma.$ScrapeJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ScrapeJobs.
     * @param {ScrapeJobDeleteManyArgs} args - Arguments to filter ScrapeJobs to delete.
     * @example
     * // Delete a few ScrapeJobs
     * const { count } = await prisma.scrapeJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapeJobDeleteManyArgs>(args?: SelectSubset<T, ScrapeJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapeJobs
     * const scrapeJob = await prisma.scrapeJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapeJobUpdateManyArgs>(args: SelectSubset<T, ScrapeJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScrapeJob.
     * @param {ScrapeJobUpsertArgs} args - Arguments to update or create a ScrapeJob.
     * @example
     * // Update or create a ScrapeJob
     * const scrapeJob = await prisma.scrapeJob.upsert({
     *   create: {
     *     // ... data to create a ScrapeJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapeJob we want to update
     *   }
     * })
     */
    upsert<T extends ScrapeJobUpsertArgs>(args: SelectSubset<T, ScrapeJobUpsertArgs<ExtArgs>>): Prisma__ScrapeJobClient<$Result.GetResult<Prisma.$ScrapeJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ScrapeJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeJobCountArgs} args - Arguments to filter ScrapeJobs to count.
     * @example
     * // Count the number of ScrapeJobs
     * const count = await prisma.scrapeJob.count({
     *   where: {
     *     // ... the filter for the ScrapeJobs we want to count
     *   }
     * })
    **/
    count<T extends ScrapeJobCountArgs>(
      args?: Subset<T, ScrapeJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapeJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapeJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScrapeJobAggregateArgs>(args: Subset<T, ScrapeJobAggregateArgs>): Prisma.PrismaPromise<GetScrapeJobAggregateType<T>>

    /**
     * Group by ScrapeJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScrapeJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapeJobGroupByArgs['orderBy'] }
        : { orderBy?: ScrapeJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScrapeJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapeJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapeJob model
   */
  readonly fields: ScrapeJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapeJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapeJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScrapeJob model
   */ 
  interface ScrapeJobFieldRefs {
    readonly id: FieldRef<"ScrapeJob", 'String'>
    readonly url: FieldRef<"ScrapeJob", 'String'>
    readonly status: FieldRef<"ScrapeJob", 'String'>
    readonly totalPages: FieldRef<"ScrapeJob", 'Int'>
    readonly processedPages: FieldRef<"ScrapeJob", 'Int'>
    readonly datasetId: FieldRef<"ScrapeJob", 'String'>
    readonly errorMessage: FieldRef<"ScrapeJob", 'String'>
    readonly createdAt: FieldRef<"ScrapeJob", 'DateTime'>
    readonly updatedAt: FieldRef<"ScrapeJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScrapeJob findUnique
   */
  export type ScrapeJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelect<ExtArgs> | null
    /**
     * Filter, which ScrapeJob to fetch.
     */
    where: ScrapeJobWhereUniqueInput
  }

  /**
   * ScrapeJob findUniqueOrThrow
   */
  export type ScrapeJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelect<ExtArgs> | null
    /**
     * Filter, which ScrapeJob to fetch.
     */
    where: ScrapeJobWhereUniqueInput
  }

  /**
   * ScrapeJob findFirst
   */
  export type ScrapeJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelect<ExtArgs> | null
    /**
     * Filter, which ScrapeJob to fetch.
     */
    where?: ScrapeJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeJobs to fetch.
     */
    orderBy?: ScrapeJobOrderByWithRelationInput | ScrapeJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeJobs.
     */
    cursor?: ScrapeJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeJobs.
     */
    distinct?: ScrapeJobScalarFieldEnum | ScrapeJobScalarFieldEnum[]
  }

  /**
   * ScrapeJob findFirstOrThrow
   */
  export type ScrapeJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelect<ExtArgs> | null
    /**
     * Filter, which ScrapeJob to fetch.
     */
    where?: ScrapeJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeJobs to fetch.
     */
    orderBy?: ScrapeJobOrderByWithRelationInput | ScrapeJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeJobs.
     */
    cursor?: ScrapeJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeJobs.
     */
    distinct?: ScrapeJobScalarFieldEnum | ScrapeJobScalarFieldEnum[]
  }

  /**
   * ScrapeJob findMany
   */
  export type ScrapeJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelect<ExtArgs> | null
    /**
     * Filter, which ScrapeJobs to fetch.
     */
    where?: ScrapeJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeJobs to fetch.
     */
    orderBy?: ScrapeJobOrderByWithRelationInput | ScrapeJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapeJobs.
     */
    cursor?: ScrapeJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeJobs.
     */
    skip?: number
    distinct?: ScrapeJobScalarFieldEnum | ScrapeJobScalarFieldEnum[]
  }

  /**
   * ScrapeJob create
   */
  export type ScrapeJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelect<ExtArgs> | null
    /**
     * The data needed to create a ScrapeJob.
     */
    data: XOR<ScrapeJobCreateInput, ScrapeJobUncheckedCreateInput>
  }

  /**
   * ScrapeJob createMany
   */
  export type ScrapeJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapeJobs.
     */
    data: ScrapeJobCreateManyInput | ScrapeJobCreateManyInput[]
  }

  /**
   * ScrapeJob createManyAndReturn
   */
  export type ScrapeJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ScrapeJobs.
     */
    data: ScrapeJobCreateManyInput | ScrapeJobCreateManyInput[]
  }

  /**
   * ScrapeJob update
   */
  export type ScrapeJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelect<ExtArgs> | null
    /**
     * The data needed to update a ScrapeJob.
     */
    data: XOR<ScrapeJobUpdateInput, ScrapeJobUncheckedUpdateInput>
    /**
     * Choose, which ScrapeJob to update.
     */
    where: ScrapeJobWhereUniqueInput
  }

  /**
   * ScrapeJob updateMany
   */
  export type ScrapeJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapeJobs.
     */
    data: XOR<ScrapeJobUpdateManyMutationInput, ScrapeJobUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeJobs to update
     */
    where?: ScrapeJobWhereInput
  }

  /**
   * ScrapeJob upsert
   */
  export type ScrapeJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelect<ExtArgs> | null
    /**
     * The filter to search for the ScrapeJob to update in case it exists.
     */
    where: ScrapeJobWhereUniqueInput
    /**
     * In case the ScrapeJob found by the `where` argument doesn't exist, create a new ScrapeJob with this data.
     */
    create: XOR<ScrapeJobCreateInput, ScrapeJobUncheckedCreateInput>
    /**
     * In case the ScrapeJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapeJobUpdateInput, ScrapeJobUncheckedUpdateInput>
  }

  /**
   * ScrapeJob delete
   */
  export type ScrapeJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelect<ExtArgs> | null
    /**
     * Filter which ScrapeJob to delete.
     */
    where: ScrapeJobWhereUniqueInput
  }

  /**
   * ScrapeJob deleteMany
   */
  export type ScrapeJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeJobs to delete
     */
    where?: ScrapeJobWhereInput
  }

  /**
   * ScrapeJob without action
   */
  export type ScrapeJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeJob
     */
    select?: ScrapeJobSelect<ExtArgs> | null
  }


  /**
   * Model LinkedInAccount
   */

  export type AggregateLinkedInAccount = {
    _count: LinkedInAccountCountAggregateOutputType | null
    _avg: LinkedInAccountAvgAggregateOutputType | null
    _sum: LinkedInAccountSumAggregateOutputType | null
    _min: LinkedInAccountMinAggregateOutputType | null
    _max: LinkedInAccountMaxAggregateOutputType | null
  }

  export type LinkedInAccountAvgAggregateOutputType = {
    dailyCount: number | null
  }

  export type LinkedInAccountSumAggregateOutputType = {
    dailyCount: number | null
  }

  export type LinkedInAccountMinAggregateOutputType = {
    id: string | null
    cookieString: string | null
    isActive: boolean | null
    lastUsed: Date | null
    dailyCount: number | null
    createdAt: Date | null
  }

  export type LinkedInAccountMaxAggregateOutputType = {
    id: string | null
    cookieString: string | null
    isActive: boolean | null
    lastUsed: Date | null
    dailyCount: number | null
    createdAt: Date | null
  }

  export type LinkedInAccountCountAggregateOutputType = {
    id: number
    cookieString: number
    isActive: number
    lastUsed: number
    dailyCount: number
    createdAt: number
    _all: number
  }


  export type LinkedInAccountAvgAggregateInputType = {
    dailyCount?: true
  }

  export type LinkedInAccountSumAggregateInputType = {
    dailyCount?: true
  }

  export type LinkedInAccountMinAggregateInputType = {
    id?: true
    cookieString?: true
    isActive?: true
    lastUsed?: true
    dailyCount?: true
    createdAt?: true
  }

  export type LinkedInAccountMaxAggregateInputType = {
    id?: true
    cookieString?: true
    isActive?: true
    lastUsed?: true
    dailyCount?: true
    createdAt?: true
  }

  export type LinkedInAccountCountAggregateInputType = {
    id?: true
    cookieString?: true
    isActive?: true
    lastUsed?: true
    dailyCount?: true
    createdAt?: true
    _all?: true
  }

  export type LinkedInAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedInAccount to aggregate.
     */
    where?: LinkedInAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedInAccounts to fetch.
     */
    orderBy?: LinkedInAccountOrderByWithRelationInput | LinkedInAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedInAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedInAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedInAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedInAccounts
    **/
    _count?: true | LinkedInAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkedInAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkedInAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedInAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedInAccountMaxAggregateInputType
  }

  export type GetLinkedInAccountAggregateType<T extends LinkedInAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedInAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedInAccount[P]>
      : GetScalarType<T[P], AggregateLinkedInAccount[P]>
  }




  export type LinkedInAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedInAccountWhereInput
    orderBy?: LinkedInAccountOrderByWithAggregationInput | LinkedInAccountOrderByWithAggregationInput[]
    by: LinkedInAccountScalarFieldEnum[] | LinkedInAccountScalarFieldEnum
    having?: LinkedInAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedInAccountCountAggregateInputType | true
    _avg?: LinkedInAccountAvgAggregateInputType
    _sum?: LinkedInAccountSumAggregateInputType
    _min?: LinkedInAccountMinAggregateInputType
    _max?: LinkedInAccountMaxAggregateInputType
  }

  export type LinkedInAccountGroupByOutputType = {
    id: string
    cookieString: string
    isActive: boolean
    lastUsed: Date | null
    dailyCount: number
    createdAt: Date
    _count: LinkedInAccountCountAggregateOutputType | null
    _avg: LinkedInAccountAvgAggregateOutputType | null
    _sum: LinkedInAccountSumAggregateOutputType | null
    _min: LinkedInAccountMinAggregateOutputType | null
    _max: LinkedInAccountMaxAggregateOutputType | null
  }

  type GetLinkedInAccountGroupByPayload<T extends LinkedInAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedInAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedInAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedInAccountGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedInAccountGroupByOutputType[P]>
        }
      >
    >


  export type LinkedInAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cookieString?: boolean
    isActive?: boolean
    lastUsed?: boolean
    dailyCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["linkedInAccount"]>

  export type LinkedInAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cookieString?: boolean
    isActive?: boolean
    lastUsed?: boolean
    dailyCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["linkedInAccount"]>

  export type LinkedInAccountSelectScalar = {
    id?: boolean
    cookieString?: boolean
    isActive?: boolean
    lastUsed?: boolean
    dailyCount?: boolean
    createdAt?: boolean
  }


  export type $LinkedInAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedInAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cookieString: string
      isActive: boolean
      lastUsed: Date | null
      dailyCount: number
      createdAt: Date
    }, ExtArgs["result"]["linkedInAccount"]>
    composites: {}
  }

  type LinkedInAccountGetPayload<S extends boolean | null | undefined | LinkedInAccountDefaultArgs> = $Result.GetResult<Prisma.$LinkedInAccountPayload, S>

  type LinkedInAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LinkedInAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LinkedInAccountCountAggregateInputType | true
    }

  export interface LinkedInAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedInAccount'], meta: { name: 'LinkedInAccount' } }
    /**
     * Find zero or one LinkedInAccount that matches the filter.
     * @param {LinkedInAccountFindUniqueArgs} args - Arguments to find a LinkedInAccount
     * @example
     * // Get one LinkedInAccount
     * const linkedInAccount = await prisma.linkedInAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkedInAccountFindUniqueArgs>(args: SelectSubset<T, LinkedInAccountFindUniqueArgs<ExtArgs>>): Prisma__LinkedInAccountClient<$Result.GetResult<Prisma.$LinkedInAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LinkedInAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LinkedInAccountFindUniqueOrThrowArgs} args - Arguments to find a LinkedInAccount
     * @example
     * // Get one LinkedInAccount
     * const linkedInAccount = await prisma.linkedInAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkedInAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkedInAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkedInAccountClient<$Result.GetResult<Prisma.$LinkedInAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LinkedInAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInAccountFindFirstArgs} args - Arguments to find a LinkedInAccount
     * @example
     * // Get one LinkedInAccount
     * const linkedInAccount = await prisma.linkedInAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkedInAccountFindFirstArgs>(args?: SelectSubset<T, LinkedInAccountFindFirstArgs<ExtArgs>>): Prisma__LinkedInAccountClient<$Result.GetResult<Prisma.$LinkedInAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LinkedInAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInAccountFindFirstOrThrowArgs} args - Arguments to find a LinkedInAccount
     * @example
     * // Get one LinkedInAccount
     * const linkedInAccount = await prisma.linkedInAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkedInAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkedInAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkedInAccountClient<$Result.GetResult<Prisma.$LinkedInAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LinkedInAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedInAccounts
     * const linkedInAccounts = await prisma.linkedInAccount.findMany()
     * 
     * // Get first 10 LinkedInAccounts
     * const linkedInAccounts = await prisma.linkedInAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedInAccountWithIdOnly = await prisma.linkedInAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkedInAccountFindManyArgs>(args?: SelectSubset<T, LinkedInAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedInAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LinkedInAccount.
     * @param {LinkedInAccountCreateArgs} args - Arguments to create a LinkedInAccount.
     * @example
     * // Create one LinkedInAccount
     * const LinkedInAccount = await prisma.linkedInAccount.create({
     *   data: {
     *     // ... data to create a LinkedInAccount
     *   }
     * })
     * 
     */
    create<T extends LinkedInAccountCreateArgs>(args: SelectSubset<T, LinkedInAccountCreateArgs<ExtArgs>>): Prisma__LinkedInAccountClient<$Result.GetResult<Prisma.$LinkedInAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LinkedInAccounts.
     * @param {LinkedInAccountCreateManyArgs} args - Arguments to create many LinkedInAccounts.
     * @example
     * // Create many LinkedInAccounts
     * const linkedInAccount = await prisma.linkedInAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkedInAccountCreateManyArgs>(args?: SelectSubset<T, LinkedInAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkedInAccounts and returns the data saved in the database.
     * @param {LinkedInAccountCreateManyAndReturnArgs} args - Arguments to create many LinkedInAccounts.
     * @example
     * // Create many LinkedInAccounts
     * const linkedInAccount = await prisma.linkedInAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkedInAccounts and only return the `id`
     * const linkedInAccountWithIdOnly = await prisma.linkedInAccount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkedInAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkedInAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedInAccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LinkedInAccount.
     * @param {LinkedInAccountDeleteArgs} args - Arguments to delete one LinkedInAccount.
     * @example
     * // Delete one LinkedInAccount
     * const LinkedInAccount = await prisma.linkedInAccount.delete({
     *   where: {
     *     // ... filter to delete one LinkedInAccount
     *   }
     * })
     * 
     */
    delete<T extends LinkedInAccountDeleteArgs>(args: SelectSubset<T, LinkedInAccountDeleteArgs<ExtArgs>>): Prisma__LinkedInAccountClient<$Result.GetResult<Prisma.$LinkedInAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LinkedInAccount.
     * @param {LinkedInAccountUpdateArgs} args - Arguments to update one LinkedInAccount.
     * @example
     * // Update one LinkedInAccount
     * const linkedInAccount = await prisma.linkedInAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkedInAccountUpdateArgs>(args: SelectSubset<T, LinkedInAccountUpdateArgs<ExtArgs>>): Prisma__LinkedInAccountClient<$Result.GetResult<Prisma.$LinkedInAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LinkedInAccounts.
     * @param {LinkedInAccountDeleteManyArgs} args - Arguments to filter LinkedInAccounts to delete.
     * @example
     * // Delete a few LinkedInAccounts
     * const { count } = await prisma.linkedInAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkedInAccountDeleteManyArgs>(args?: SelectSubset<T, LinkedInAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedInAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedInAccounts
     * const linkedInAccount = await prisma.linkedInAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkedInAccountUpdateManyArgs>(args: SelectSubset<T, LinkedInAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LinkedInAccount.
     * @param {LinkedInAccountUpsertArgs} args - Arguments to update or create a LinkedInAccount.
     * @example
     * // Update or create a LinkedInAccount
     * const linkedInAccount = await prisma.linkedInAccount.upsert({
     *   create: {
     *     // ... data to create a LinkedInAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedInAccount we want to update
     *   }
     * })
     */
    upsert<T extends LinkedInAccountUpsertArgs>(args: SelectSubset<T, LinkedInAccountUpsertArgs<ExtArgs>>): Prisma__LinkedInAccountClient<$Result.GetResult<Prisma.$LinkedInAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LinkedInAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInAccountCountArgs} args - Arguments to filter LinkedInAccounts to count.
     * @example
     * // Count the number of LinkedInAccounts
     * const count = await prisma.linkedInAccount.count({
     *   where: {
     *     // ... the filter for the LinkedInAccounts we want to count
     *   }
     * })
    **/
    count<T extends LinkedInAccountCountArgs>(
      args?: Subset<T, LinkedInAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedInAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedInAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkedInAccountAggregateArgs>(args: Subset<T, LinkedInAccountAggregateArgs>): Prisma.PrismaPromise<GetLinkedInAccountAggregateType<T>>

    /**
     * Group by LinkedInAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkedInAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedInAccountGroupByArgs['orderBy'] }
        : { orderBy?: LinkedInAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkedInAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedInAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedInAccount model
   */
  readonly fields: LinkedInAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedInAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedInAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkedInAccount model
   */ 
  interface LinkedInAccountFieldRefs {
    readonly id: FieldRef<"LinkedInAccount", 'String'>
    readonly cookieString: FieldRef<"LinkedInAccount", 'String'>
    readonly isActive: FieldRef<"LinkedInAccount", 'Boolean'>
    readonly lastUsed: FieldRef<"LinkedInAccount", 'DateTime'>
    readonly dailyCount: FieldRef<"LinkedInAccount", 'Int'>
    readonly createdAt: FieldRef<"LinkedInAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LinkedInAccount findUnique
   */
  export type LinkedInAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelect<ExtArgs> | null
    /**
     * Filter, which LinkedInAccount to fetch.
     */
    where: LinkedInAccountWhereUniqueInput
  }

  /**
   * LinkedInAccount findUniqueOrThrow
   */
  export type LinkedInAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelect<ExtArgs> | null
    /**
     * Filter, which LinkedInAccount to fetch.
     */
    where: LinkedInAccountWhereUniqueInput
  }

  /**
   * LinkedInAccount findFirst
   */
  export type LinkedInAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelect<ExtArgs> | null
    /**
     * Filter, which LinkedInAccount to fetch.
     */
    where?: LinkedInAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedInAccounts to fetch.
     */
    orderBy?: LinkedInAccountOrderByWithRelationInput | LinkedInAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedInAccounts.
     */
    cursor?: LinkedInAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedInAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedInAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedInAccounts.
     */
    distinct?: LinkedInAccountScalarFieldEnum | LinkedInAccountScalarFieldEnum[]
  }

  /**
   * LinkedInAccount findFirstOrThrow
   */
  export type LinkedInAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelect<ExtArgs> | null
    /**
     * Filter, which LinkedInAccount to fetch.
     */
    where?: LinkedInAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedInAccounts to fetch.
     */
    orderBy?: LinkedInAccountOrderByWithRelationInput | LinkedInAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedInAccounts.
     */
    cursor?: LinkedInAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedInAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedInAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedInAccounts.
     */
    distinct?: LinkedInAccountScalarFieldEnum | LinkedInAccountScalarFieldEnum[]
  }

  /**
   * LinkedInAccount findMany
   */
  export type LinkedInAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelect<ExtArgs> | null
    /**
     * Filter, which LinkedInAccounts to fetch.
     */
    where?: LinkedInAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedInAccounts to fetch.
     */
    orderBy?: LinkedInAccountOrderByWithRelationInput | LinkedInAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedInAccounts.
     */
    cursor?: LinkedInAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedInAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedInAccounts.
     */
    skip?: number
    distinct?: LinkedInAccountScalarFieldEnum | LinkedInAccountScalarFieldEnum[]
  }

  /**
   * LinkedInAccount create
   */
  export type LinkedInAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelect<ExtArgs> | null
    /**
     * The data needed to create a LinkedInAccount.
     */
    data: XOR<LinkedInAccountCreateInput, LinkedInAccountUncheckedCreateInput>
  }

  /**
   * LinkedInAccount createMany
   */
  export type LinkedInAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedInAccounts.
     */
    data: LinkedInAccountCreateManyInput | LinkedInAccountCreateManyInput[]
  }

  /**
   * LinkedInAccount createManyAndReturn
   */
  export type LinkedInAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LinkedInAccounts.
     */
    data: LinkedInAccountCreateManyInput | LinkedInAccountCreateManyInput[]
  }

  /**
   * LinkedInAccount update
   */
  export type LinkedInAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelect<ExtArgs> | null
    /**
     * The data needed to update a LinkedInAccount.
     */
    data: XOR<LinkedInAccountUpdateInput, LinkedInAccountUncheckedUpdateInput>
    /**
     * Choose, which LinkedInAccount to update.
     */
    where: LinkedInAccountWhereUniqueInput
  }

  /**
   * LinkedInAccount updateMany
   */
  export type LinkedInAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedInAccounts.
     */
    data: XOR<LinkedInAccountUpdateManyMutationInput, LinkedInAccountUncheckedUpdateManyInput>
    /**
     * Filter which LinkedInAccounts to update
     */
    where?: LinkedInAccountWhereInput
  }

  /**
   * LinkedInAccount upsert
   */
  export type LinkedInAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelect<ExtArgs> | null
    /**
     * The filter to search for the LinkedInAccount to update in case it exists.
     */
    where: LinkedInAccountWhereUniqueInput
    /**
     * In case the LinkedInAccount found by the `where` argument doesn't exist, create a new LinkedInAccount with this data.
     */
    create: XOR<LinkedInAccountCreateInput, LinkedInAccountUncheckedCreateInput>
    /**
     * In case the LinkedInAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedInAccountUpdateInput, LinkedInAccountUncheckedUpdateInput>
  }

  /**
   * LinkedInAccount delete
   */
  export type LinkedInAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelect<ExtArgs> | null
    /**
     * Filter which LinkedInAccount to delete.
     */
    where: LinkedInAccountWhereUniqueInput
  }

  /**
   * LinkedInAccount deleteMany
   */
  export type LinkedInAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedInAccounts to delete
     */
    where?: LinkedInAccountWhereInput
  }

  /**
   * LinkedInAccount without action
   */
  export type LinkedInAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInAccount
     */
    select?: LinkedInAccountSelect<ExtArgs> | null
  }


  /**
   * Model NetworkKeyword
   */

  export type AggregateNetworkKeyword = {
    _count: NetworkKeywordCountAggregateOutputType | null
    _min: NetworkKeywordMinAggregateOutputType | null
    _max: NetworkKeywordMaxAggregateOutputType | null
  }

  export type NetworkKeywordMinAggregateOutputType = {
    id: string | null
    keyword: string | null
    type: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type NetworkKeywordMaxAggregateOutputType = {
    id: string | null
    keyword: string | null
    type: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type NetworkKeywordCountAggregateOutputType = {
    id: number
    keyword: number
    type: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type NetworkKeywordMinAggregateInputType = {
    id?: true
    keyword?: true
    type?: true
    isActive?: true
    createdAt?: true
  }

  export type NetworkKeywordMaxAggregateInputType = {
    id?: true
    keyword?: true
    type?: true
    isActive?: true
    createdAt?: true
  }

  export type NetworkKeywordCountAggregateInputType = {
    id?: true
    keyword?: true
    type?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type NetworkKeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkKeyword to aggregate.
     */
    where?: NetworkKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkKeywords to fetch.
     */
    orderBy?: NetworkKeywordOrderByWithRelationInput | NetworkKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NetworkKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NetworkKeywords
    **/
    _count?: true | NetworkKeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworkKeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworkKeywordMaxAggregateInputType
  }

  export type GetNetworkKeywordAggregateType<T extends NetworkKeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateNetworkKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetworkKeyword[P]>
      : GetScalarType<T[P], AggregateNetworkKeyword[P]>
  }




  export type NetworkKeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkKeywordWhereInput
    orderBy?: NetworkKeywordOrderByWithAggregationInput | NetworkKeywordOrderByWithAggregationInput[]
    by: NetworkKeywordScalarFieldEnum[] | NetworkKeywordScalarFieldEnum
    having?: NetworkKeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworkKeywordCountAggregateInputType | true
    _min?: NetworkKeywordMinAggregateInputType
    _max?: NetworkKeywordMaxAggregateInputType
  }

  export type NetworkKeywordGroupByOutputType = {
    id: string
    keyword: string
    type: string
    isActive: boolean
    createdAt: Date
    _count: NetworkKeywordCountAggregateOutputType | null
    _min: NetworkKeywordMinAggregateOutputType | null
    _max: NetworkKeywordMaxAggregateOutputType | null
  }

  type GetNetworkKeywordGroupByPayload<T extends NetworkKeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworkKeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworkKeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworkKeywordGroupByOutputType[P]>
            : GetScalarType<T[P], NetworkKeywordGroupByOutputType[P]>
        }
      >
    >


  export type NetworkKeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["networkKeyword"]>

  export type NetworkKeywordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["networkKeyword"]>

  export type NetworkKeywordSelectScalar = {
    id?: boolean
    keyword?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
  }


  export type $NetworkKeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NetworkKeyword"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyword: string
      type: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["networkKeyword"]>
    composites: {}
  }

  type NetworkKeywordGetPayload<S extends boolean | null | undefined | NetworkKeywordDefaultArgs> = $Result.GetResult<Prisma.$NetworkKeywordPayload, S>

  type NetworkKeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NetworkKeywordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NetworkKeywordCountAggregateInputType | true
    }

  export interface NetworkKeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NetworkKeyword'], meta: { name: 'NetworkKeyword' } }
    /**
     * Find zero or one NetworkKeyword that matches the filter.
     * @param {NetworkKeywordFindUniqueArgs} args - Arguments to find a NetworkKeyword
     * @example
     * // Get one NetworkKeyword
     * const networkKeyword = await prisma.networkKeyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NetworkKeywordFindUniqueArgs>(args: SelectSubset<T, NetworkKeywordFindUniqueArgs<ExtArgs>>): Prisma__NetworkKeywordClient<$Result.GetResult<Prisma.$NetworkKeywordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NetworkKeyword that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NetworkKeywordFindUniqueOrThrowArgs} args - Arguments to find a NetworkKeyword
     * @example
     * // Get one NetworkKeyword
     * const networkKeyword = await prisma.networkKeyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NetworkKeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, NetworkKeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NetworkKeywordClient<$Result.GetResult<Prisma.$NetworkKeywordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NetworkKeyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkKeywordFindFirstArgs} args - Arguments to find a NetworkKeyword
     * @example
     * // Get one NetworkKeyword
     * const networkKeyword = await prisma.networkKeyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NetworkKeywordFindFirstArgs>(args?: SelectSubset<T, NetworkKeywordFindFirstArgs<ExtArgs>>): Prisma__NetworkKeywordClient<$Result.GetResult<Prisma.$NetworkKeywordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NetworkKeyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkKeywordFindFirstOrThrowArgs} args - Arguments to find a NetworkKeyword
     * @example
     * // Get one NetworkKeyword
     * const networkKeyword = await prisma.networkKeyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NetworkKeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, NetworkKeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__NetworkKeywordClient<$Result.GetResult<Prisma.$NetworkKeywordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NetworkKeywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkKeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NetworkKeywords
     * const networkKeywords = await prisma.networkKeyword.findMany()
     * 
     * // Get first 10 NetworkKeywords
     * const networkKeywords = await prisma.networkKeyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const networkKeywordWithIdOnly = await prisma.networkKeyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NetworkKeywordFindManyArgs>(args?: SelectSubset<T, NetworkKeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkKeywordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NetworkKeyword.
     * @param {NetworkKeywordCreateArgs} args - Arguments to create a NetworkKeyword.
     * @example
     * // Create one NetworkKeyword
     * const NetworkKeyword = await prisma.networkKeyword.create({
     *   data: {
     *     // ... data to create a NetworkKeyword
     *   }
     * })
     * 
     */
    create<T extends NetworkKeywordCreateArgs>(args: SelectSubset<T, NetworkKeywordCreateArgs<ExtArgs>>): Prisma__NetworkKeywordClient<$Result.GetResult<Prisma.$NetworkKeywordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NetworkKeywords.
     * @param {NetworkKeywordCreateManyArgs} args - Arguments to create many NetworkKeywords.
     * @example
     * // Create many NetworkKeywords
     * const networkKeyword = await prisma.networkKeyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NetworkKeywordCreateManyArgs>(args?: SelectSubset<T, NetworkKeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NetworkKeywords and returns the data saved in the database.
     * @param {NetworkKeywordCreateManyAndReturnArgs} args - Arguments to create many NetworkKeywords.
     * @example
     * // Create many NetworkKeywords
     * const networkKeyword = await prisma.networkKeyword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NetworkKeywords and only return the `id`
     * const networkKeywordWithIdOnly = await prisma.networkKeyword.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NetworkKeywordCreateManyAndReturnArgs>(args?: SelectSubset<T, NetworkKeywordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkKeywordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NetworkKeyword.
     * @param {NetworkKeywordDeleteArgs} args - Arguments to delete one NetworkKeyword.
     * @example
     * // Delete one NetworkKeyword
     * const NetworkKeyword = await prisma.networkKeyword.delete({
     *   where: {
     *     // ... filter to delete one NetworkKeyword
     *   }
     * })
     * 
     */
    delete<T extends NetworkKeywordDeleteArgs>(args: SelectSubset<T, NetworkKeywordDeleteArgs<ExtArgs>>): Prisma__NetworkKeywordClient<$Result.GetResult<Prisma.$NetworkKeywordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NetworkKeyword.
     * @param {NetworkKeywordUpdateArgs} args - Arguments to update one NetworkKeyword.
     * @example
     * // Update one NetworkKeyword
     * const networkKeyword = await prisma.networkKeyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NetworkKeywordUpdateArgs>(args: SelectSubset<T, NetworkKeywordUpdateArgs<ExtArgs>>): Prisma__NetworkKeywordClient<$Result.GetResult<Prisma.$NetworkKeywordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NetworkKeywords.
     * @param {NetworkKeywordDeleteManyArgs} args - Arguments to filter NetworkKeywords to delete.
     * @example
     * // Delete a few NetworkKeywords
     * const { count } = await prisma.networkKeyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NetworkKeywordDeleteManyArgs>(args?: SelectSubset<T, NetworkKeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkKeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NetworkKeywords
     * const networkKeyword = await prisma.networkKeyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NetworkKeywordUpdateManyArgs>(args: SelectSubset<T, NetworkKeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NetworkKeyword.
     * @param {NetworkKeywordUpsertArgs} args - Arguments to update or create a NetworkKeyword.
     * @example
     * // Update or create a NetworkKeyword
     * const networkKeyword = await prisma.networkKeyword.upsert({
     *   create: {
     *     // ... data to create a NetworkKeyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NetworkKeyword we want to update
     *   }
     * })
     */
    upsert<T extends NetworkKeywordUpsertArgs>(args: SelectSubset<T, NetworkKeywordUpsertArgs<ExtArgs>>): Prisma__NetworkKeywordClient<$Result.GetResult<Prisma.$NetworkKeywordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NetworkKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkKeywordCountArgs} args - Arguments to filter NetworkKeywords to count.
     * @example
     * // Count the number of NetworkKeywords
     * const count = await prisma.networkKeyword.count({
     *   where: {
     *     // ... the filter for the NetworkKeywords we want to count
     *   }
     * })
    **/
    count<T extends NetworkKeywordCountArgs>(
      args?: Subset<T, NetworkKeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworkKeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NetworkKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkKeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NetworkKeywordAggregateArgs>(args: Subset<T, NetworkKeywordAggregateArgs>): Prisma.PrismaPromise<GetNetworkKeywordAggregateType<T>>

    /**
     * Group by NetworkKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkKeywordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NetworkKeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NetworkKeywordGroupByArgs['orderBy'] }
        : { orderBy?: NetworkKeywordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NetworkKeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NetworkKeyword model
   */
  readonly fields: NetworkKeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NetworkKeyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NetworkKeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NetworkKeyword model
   */ 
  interface NetworkKeywordFieldRefs {
    readonly id: FieldRef<"NetworkKeyword", 'String'>
    readonly keyword: FieldRef<"NetworkKeyword", 'String'>
    readonly type: FieldRef<"NetworkKeyword", 'String'>
    readonly isActive: FieldRef<"NetworkKeyword", 'Boolean'>
    readonly createdAt: FieldRef<"NetworkKeyword", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NetworkKeyword findUnique
   */
  export type NetworkKeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelect<ExtArgs> | null
    /**
     * Filter, which NetworkKeyword to fetch.
     */
    where: NetworkKeywordWhereUniqueInput
  }

  /**
   * NetworkKeyword findUniqueOrThrow
   */
  export type NetworkKeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelect<ExtArgs> | null
    /**
     * Filter, which NetworkKeyword to fetch.
     */
    where: NetworkKeywordWhereUniqueInput
  }

  /**
   * NetworkKeyword findFirst
   */
  export type NetworkKeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelect<ExtArgs> | null
    /**
     * Filter, which NetworkKeyword to fetch.
     */
    where?: NetworkKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkKeywords to fetch.
     */
    orderBy?: NetworkKeywordOrderByWithRelationInput | NetworkKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkKeywords.
     */
    cursor?: NetworkKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkKeywords.
     */
    distinct?: NetworkKeywordScalarFieldEnum | NetworkKeywordScalarFieldEnum[]
  }

  /**
   * NetworkKeyword findFirstOrThrow
   */
  export type NetworkKeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelect<ExtArgs> | null
    /**
     * Filter, which NetworkKeyword to fetch.
     */
    where?: NetworkKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkKeywords to fetch.
     */
    orderBy?: NetworkKeywordOrderByWithRelationInput | NetworkKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkKeywords.
     */
    cursor?: NetworkKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkKeywords.
     */
    distinct?: NetworkKeywordScalarFieldEnum | NetworkKeywordScalarFieldEnum[]
  }

  /**
   * NetworkKeyword findMany
   */
  export type NetworkKeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelect<ExtArgs> | null
    /**
     * Filter, which NetworkKeywords to fetch.
     */
    where?: NetworkKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkKeywords to fetch.
     */
    orderBy?: NetworkKeywordOrderByWithRelationInput | NetworkKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NetworkKeywords.
     */
    cursor?: NetworkKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkKeywords.
     */
    skip?: number
    distinct?: NetworkKeywordScalarFieldEnum | NetworkKeywordScalarFieldEnum[]
  }

  /**
   * NetworkKeyword create
   */
  export type NetworkKeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelect<ExtArgs> | null
    /**
     * The data needed to create a NetworkKeyword.
     */
    data: XOR<NetworkKeywordCreateInput, NetworkKeywordUncheckedCreateInput>
  }

  /**
   * NetworkKeyword createMany
   */
  export type NetworkKeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NetworkKeywords.
     */
    data: NetworkKeywordCreateManyInput | NetworkKeywordCreateManyInput[]
  }

  /**
   * NetworkKeyword createManyAndReturn
   */
  export type NetworkKeywordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NetworkKeywords.
     */
    data: NetworkKeywordCreateManyInput | NetworkKeywordCreateManyInput[]
  }

  /**
   * NetworkKeyword update
   */
  export type NetworkKeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelect<ExtArgs> | null
    /**
     * The data needed to update a NetworkKeyword.
     */
    data: XOR<NetworkKeywordUpdateInput, NetworkKeywordUncheckedUpdateInput>
    /**
     * Choose, which NetworkKeyword to update.
     */
    where: NetworkKeywordWhereUniqueInput
  }

  /**
   * NetworkKeyword updateMany
   */
  export type NetworkKeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NetworkKeywords.
     */
    data: XOR<NetworkKeywordUpdateManyMutationInput, NetworkKeywordUncheckedUpdateManyInput>
    /**
     * Filter which NetworkKeywords to update
     */
    where?: NetworkKeywordWhereInput
  }

  /**
   * NetworkKeyword upsert
   */
  export type NetworkKeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelect<ExtArgs> | null
    /**
     * The filter to search for the NetworkKeyword to update in case it exists.
     */
    where: NetworkKeywordWhereUniqueInput
    /**
     * In case the NetworkKeyword found by the `where` argument doesn't exist, create a new NetworkKeyword with this data.
     */
    create: XOR<NetworkKeywordCreateInput, NetworkKeywordUncheckedCreateInput>
    /**
     * In case the NetworkKeyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NetworkKeywordUpdateInput, NetworkKeywordUncheckedUpdateInput>
  }

  /**
   * NetworkKeyword delete
   */
  export type NetworkKeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelect<ExtArgs> | null
    /**
     * Filter which NetworkKeyword to delete.
     */
    where: NetworkKeywordWhereUniqueInput
  }

  /**
   * NetworkKeyword deleteMany
   */
  export type NetworkKeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkKeywords to delete
     */
    where?: NetworkKeywordWhereInput
  }

  /**
   * NetworkKeyword without action
   */
  export type NetworkKeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkKeyword
     */
    select?: NetworkKeywordSelect<ExtArgs> | null
  }


  /**
   * Model IndustryProfile
   */

  export type AggregateIndustryProfile = {
    _count: IndustryProfileCountAggregateOutputType | null
    _avg: IndustryProfileAvgAggregateOutputType | null
    _sum: IndustryProfileSumAggregateOutputType | null
    _min: IndustryProfileMinAggregateOutputType | null
    _max: IndustryProfileMaxAggregateOutputType | null
  }

  export type IndustryProfileAvgAggregateOutputType = {
    connectionsCount: number | null
  }

  export type IndustryProfileSumAggregateOutputType = {
    connectionsCount: number | null
  }

  export type IndustryProfileMinAggregateOutputType = {
    id: string | null
    name: string | null
    linkedinUrl: string | null
    profileImageUrl: string | null
    headline: string | null
    company: string | null
    about: string | null
    experience: string | null
    education: string | null
    connectionsCount: number | null
    isActive: boolean | null
    lastScrapedAt: Date | null
    createdAt: Date | null
  }

  export type IndustryProfileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    linkedinUrl: string | null
    profileImageUrl: string | null
    headline: string | null
    company: string | null
    about: string | null
    experience: string | null
    education: string | null
    connectionsCount: number | null
    isActive: boolean | null
    lastScrapedAt: Date | null
    createdAt: Date | null
  }

  export type IndustryProfileCountAggregateOutputType = {
    id: number
    name: number
    linkedinUrl: number
    profileImageUrl: number
    headline: number
    company: number
    about: number
    experience: number
    education: number
    connectionsCount: number
    isActive: number
    lastScrapedAt: number
    createdAt: number
    _all: number
  }


  export type IndustryProfileAvgAggregateInputType = {
    connectionsCount?: true
  }

  export type IndustryProfileSumAggregateInputType = {
    connectionsCount?: true
  }

  export type IndustryProfileMinAggregateInputType = {
    id?: true
    name?: true
    linkedinUrl?: true
    profileImageUrl?: true
    headline?: true
    company?: true
    about?: true
    experience?: true
    education?: true
    connectionsCount?: true
    isActive?: true
    lastScrapedAt?: true
    createdAt?: true
  }

  export type IndustryProfileMaxAggregateInputType = {
    id?: true
    name?: true
    linkedinUrl?: true
    profileImageUrl?: true
    headline?: true
    company?: true
    about?: true
    experience?: true
    education?: true
    connectionsCount?: true
    isActive?: true
    lastScrapedAt?: true
    createdAt?: true
  }

  export type IndustryProfileCountAggregateInputType = {
    id?: true
    name?: true
    linkedinUrl?: true
    profileImageUrl?: true
    headline?: true
    company?: true
    about?: true
    experience?: true
    education?: true
    connectionsCount?: true
    isActive?: true
    lastScrapedAt?: true
    createdAt?: true
    _all?: true
  }

  export type IndustryProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryProfile to aggregate.
     */
    where?: IndustryProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryProfiles to fetch.
     */
    orderBy?: IndustryProfileOrderByWithRelationInput | IndustryProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndustryProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndustryProfiles
    **/
    _count?: true | IndustryProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndustryProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndustryProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndustryProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndustryProfileMaxAggregateInputType
  }

  export type GetIndustryProfileAggregateType<T extends IndustryProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateIndustryProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndustryProfile[P]>
      : GetScalarType<T[P], AggregateIndustryProfile[P]>
  }




  export type IndustryProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryProfileWhereInput
    orderBy?: IndustryProfileOrderByWithAggregationInput | IndustryProfileOrderByWithAggregationInput[]
    by: IndustryProfileScalarFieldEnum[] | IndustryProfileScalarFieldEnum
    having?: IndustryProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndustryProfileCountAggregateInputType | true
    _avg?: IndustryProfileAvgAggregateInputType
    _sum?: IndustryProfileSumAggregateInputType
    _min?: IndustryProfileMinAggregateInputType
    _max?: IndustryProfileMaxAggregateInputType
  }

  export type IndustryProfileGroupByOutputType = {
    id: string
    name: string
    linkedinUrl: string
    profileImageUrl: string | null
    headline: string | null
    company: string | null
    about: string | null
    experience: string | null
    education: string | null
    connectionsCount: number | null
    isActive: boolean
    lastScrapedAt: Date | null
    createdAt: Date
    _count: IndustryProfileCountAggregateOutputType | null
    _avg: IndustryProfileAvgAggregateOutputType | null
    _sum: IndustryProfileSumAggregateOutputType | null
    _min: IndustryProfileMinAggregateOutputType | null
    _max: IndustryProfileMaxAggregateOutputType | null
  }

  type GetIndustryProfileGroupByPayload<T extends IndustryProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndustryProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndustryProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndustryProfileGroupByOutputType[P]>
            : GetScalarType<T[P], IndustryProfileGroupByOutputType[P]>
        }
      >
    >


  export type IndustryProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    linkedinUrl?: boolean
    profileImageUrl?: boolean
    headline?: boolean
    company?: boolean
    about?: boolean
    experience?: boolean
    education?: boolean
    connectionsCount?: boolean
    isActive?: boolean
    lastScrapedAt?: boolean
    createdAt?: boolean
    posts?: boolean | IndustryProfile$postsArgs<ExtArgs>
    interactionsAsActor?: boolean | IndustryProfile$interactionsAsActorArgs<ExtArgs>
    interactionsAsTarget?: boolean | IndustryProfile$interactionsAsTargetArgs<ExtArgs>
    _count?: boolean | IndustryProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industryProfile"]>

  export type IndustryProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    linkedinUrl?: boolean
    profileImageUrl?: boolean
    headline?: boolean
    company?: boolean
    about?: boolean
    experience?: boolean
    education?: boolean
    connectionsCount?: boolean
    isActive?: boolean
    lastScrapedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["industryProfile"]>

  export type IndustryProfileSelectScalar = {
    id?: boolean
    name?: boolean
    linkedinUrl?: boolean
    profileImageUrl?: boolean
    headline?: boolean
    company?: boolean
    about?: boolean
    experience?: boolean
    education?: boolean
    connectionsCount?: boolean
    isActive?: boolean
    lastScrapedAt?: boolean
    createdAt?: boolean
  }

  export type IndustryProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | IndustryProfile$postsArgs<ExtArgs>
    interactionsAsActor?: boolean | IndustryProfile$interactionsAsActorArgs<ExtArgs>
    interactionsAsTarget?: boolean | IndustryProfile$interactionsAsTargetArgs<ExtArgs>
    _count?: boolean | IndustryProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndustryProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndustryProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndustryProfile"
    objects: {
      posts: Prisma.$LinkedInPostPayload<ExtArgs>[]
      interactionsAsActor: Prisma.$NetworkInteractionPayload<ExtArgs>[]
      interactionsAsTarget: Prisma.$NetworkInteractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      linkedinUrl: string
      profileImageUrl: string | null
      headline: string | null
      company: string | null
      about: string | null
      experience: string | null
      education: string | null
      connectionsCount: number | null
      isActive: boolean
      lastScrapedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["industryProfile"]>
    composites: {}
  }

  type IndustryProfileGetPayload<S extends boolean | null | undefined | IndustryProfileDefaultArgs> = $Result.GetResult<Prisma.$IndustryProfilePayload, S>

  type IndustryProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IndustryProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IndustryProfileCountAggregateInputType | true
    }

  export interface IndustryProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndustryProfile'], meta: { name: 'IndustryProfile' } }
    /**
     * Find zero or one IndustryProfile that matches the filter.
     * @param {IndustryProfileFindUniqueArgs} args - Arguments to find a IndustryProfile
     * @example
     * // Get one IndustryProfile
     * const industryProfile = await prisma.industryProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndustryProfileFindUniqueArgs>(args: SelectSubset<T, IndustryProfileFindUniqueArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IndustryProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IndustryProfileFindUniqueOrThrowArgs} args - Arguments to find a IndustryProfile
     * @example
     * // Get one IndustryProfile
     * const industryProfile = await prisma.industryProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndustryProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, IndustryProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IndustryProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryProfileFindFirstArgs} args - Arguments to find a IndustryProfile
     * @example
     * // Get one IndustryProfile
     * const industryProfile = await prisma.industryProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndustryProfileFindFirstArgs>(args?: SelectSubset<T, IndustryProfileFindFirstArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IndustryProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryProfileFindFirstOrThrowArgs} args - Arguments to find a IndustryProfile
     * @example
     * // Get one IndustryProfile
     * const industryProfile = await prisma.industryProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndustryProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, IndustryProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IndustryProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndustryProfiles
     * const industryProfiles = await prisma.industryProfile.findMany()
     * 
     * // Get first 10 IndustryProfiles
     * const industryProfiles = await prisma.industryProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const industryProfileWithIdOnly = await prisma.industryProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndustryProfileFindManyArgs>(args?: SelectSubset<T, IndustryProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IndustryProfile.
     * @param {IndustryProfileCreateArgs} args - Arguments to create a IndustryProfile.
     * @example
     * // Create one IndustryProfile
     * const IndustryProfile = await prisma.industryProfile.create({
     *   data: {
     *     // ... data to create a IndustryProfile
     *   }
     * })
     * 
     */
    create<T extends IndustryProfileCreateArgs>(args: SelectSubset<T, IndustryProfileCreateArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IndustryProfiles.
     * @param {IndustryProfileCreateManyArgs} args - Arguments to create many IndustryProfiles.
     * @example
     * // Create many IndustryProfiles
     * const industryProfile = await prisma.industryProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndustryProfileCreateManyArgs>(args?: SelectSubset<T, IndustryProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndustryProfiles and returns the data saved in the database.
     * @param {IndustryProfileCreateManyAndReturnArgs} args - Arguments to create many IndustryProfiles.
     * @example
     * // Create many IndustryProfiles
     * const industryProfile = await prisma.industryProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndustryProfiles and only return the `id`
     * const industryProfileWithIdOnly = await prisma.industryProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndustryProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, IndustryProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IndustryProfile.
     * @param {IndustryProfileDeleteArgs} args - Arguments to delete one IndustryProfile.
     * @example
     * // Delete one IndustryProfile
     * const IndustryProfile = await prisma.industryProfile.delete({
     *   where: {
     *     // ... filter to delete one IndustryProfile
     *   }
     * })
     * 
     */
    delete<T extends IndustryProfileDeleteArgs>(args: SelectSubset<T, IndustryProfileDeleteArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IndustryProfile.
     * @param {IndustryProfileUpdateArgs} args - Arguments to update one IndustryProfile.
     * @example
     * // Update one IndustryProfile
     * const industryProfile = await prisma.industryProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndustryProfileUpdateArgs>(args: SelectSubset<T, IndustryProfileUpdateArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IndustryProfiles.
     * @param {IndustryProfileDeleteManyArgs} args - Arguments to filter IndustryProfiles to delete.
     * @example
     * // Delete a few IndustryProfiles
     * const { count } = await prisma.industryProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndustryProfileDeleteManyArgs>(args?: SelectSubset<T, IndustryProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndustryProfiles
     * const industryProfile = await prisma.industryProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndustryProfileUpdateManyArgs>(args: SelectSubset<T, IndustryProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IndustryProfile.
     * @param {IndustryProfileUpsertArgs} args - Arguments to update or create a IndustryProfile.
     * @example
     * // Update or create a IndustryProfile
     * const industryProfile = await prisma.industryProfile.upsert({
     *   create: {
     *     // ... data to create a IndustryProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndustryProfile we want to update
     *   }
     * })
     */
    upsert<T extends IndustryProfileUpsertArgs>(args: SelectSubset<T, IndustryProfileUpsertArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IndustryProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryProfileCountArgs} args - Arguments to filter IndustryProfiles to count.
     * @example
     * // Count the number of IndustryProfiles
     * const count = await prisma.industryProfile.count({
     *   where: {
     *     // ... the filter for the IndustryProfiles we want to count
     *   }
     * })
    **/
    count<T extends IndustryProfileCountArgs>(
      args?: Subset<T, IndustryProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndustryProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndustryProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndustryProfileAggregateArgs>(args: Subset<T, IndustryProfileAggregateArgs>): Prisma.PrismaPromise<GetIndustryProfileAggregateType<T>>

    /**
     * Group by IndustryProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndustryProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndustryProfileGroupByArgs['orderBy'] }
        : { orderBy?: IndustryProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndustryProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustryProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndustryProfile model
   */
  readonly fields: IndustryProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndustryProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndustryProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends IndustryProfile$postsArgs<ExtArgs> = {}>(args?: Subset<T, IndustryProfile$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "findMany"> | Null>
    interactionsAsActor<T extends IndustryProfile$interactionsAsActorArgs<ExtArgs> = {}>(args?: Subset<T, IndustryProfile$interactionsAsActorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "findMany"> | Null>
    interactionsAsTarget<T extends IndustryProfile$interactionsAsTargetArgs<ExtArgs> = {}>(args?: Subset<T, IndustryProfile$interactionsAsTargetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IndustryProfile model
   */ 
  interface IndustryProfileFieldRefs {
    readonly id: FieldRef<"IndustryProfile", 'String'>
    readonly name: FieldRef<"IndustryProfile", 'String'>
    readonly linkedinUrl: FieldRef<"IndustryProfile", 'String'>
    readonly profileImageUrl: FieldRef<"IndustryProfile", 'String'>
    readonly headline: FieldRef<"IndustryProfile", 'String'>
    readonly company: FieldRef<"IndustryProfile", 'String'>
    readonly about: FieldRef<"IndustryProfile", 'String'>
    readonly experience: FieldRef<"IndustryProfile", 'String'>
    readonly education: FieldRef<"IndustryProfile", 'String'>
    readonly connectionsCount: FieldRef<"IndustryProfile", 'Int'>
    readonly isActive: FieldRef<"IndustryProfile", 'Boolean'>
    readonly lastScrapedAt: FieldRef<"IndustryProfile", 'DateTime'>
    readonly createdAt: FieldRef<"IndustryProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndustryProfile findUnique
   */
  export type IndustryProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
    /**
     * Filter, which IndustryProfile to fetch.
     */
    where: IndustryProfileWhereUniqueInput
  }

  /**
   * IndustryProfile findUniqueOrThrow
   */
  export type IndustryProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
    /**
     * Filter, which IndustryProfile to fetch.
     */
    where: IndustryProfileWhereUniqueInput
  }

  /**
   * IndustryProfile findFirst
   */
  export type IndustryProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
    /**
     * Filter, which IndustryProfile to fetch.
     */
    where?: IndustryProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryProfiles to fetch.
     */
    orderBy?: IndustryProfileOrderByWithRelationInput | IndustryProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryProfiles.
     */
    cursor?: IndustryProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryProfiles.
     */
    distinct?: IndustryProfileScalarFieldEnum | IndustryProfileScalarFieldEnum[]
  }

  /**
   * IndustryProfile findFirstOrThrow
   */
  export type IndustryProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
    /**
     * Filter, which IndustryProfile to fetch.
     */
    where?: IndustryProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryProfiles to fetch.
     */
    orderBy?: IndustryProfileOrderByWithRelationInput | IndustryProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryProfiles.
     */
    cursor?: IndustryProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryProfiles.
     */
    distinct?: IndustryProfileScalarFieldEnum | IndustryProfileScalarFieldEnum[]
  }

  /**
   * IndustryProfile findMany
   */
  export type IndustryProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
    /**
     * Filter, which IndustryProfiles to fetch.
     */
    where?: IndustryProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryProfiles to fetch.
     */
    orderBy?: IndustryProfileOrderByWithRelationInput | IndustryProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndustryProfiles.
     */
    cursor?: IndustryProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryProfiles.
     */
    skip?: number
    distinct?: IndustryProfileScalarFieldEnum | IndustryProfileScalarFieldEnum[]
  }

  /**
   * IndustryProfile create
   */
  export type IndustryProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a IndustryProfile.
     */
    data: XOR<IndustryProfileCreateInput, IndustryProfileUncheckedCreateInput>
  }

  /**
   * IndustryProfile createMany
   */
  export type IndustryProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndustryProfiles.
     */
    data: IndustryProfileCreateManyInput | IndustryProfileCreateManyInput[]
  }

  /**
   * IndustryProfile createManyAndReturn
   */
  export type IndustryProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IndustryProfiles.
     */
    data: IndustryProfileCreateManyInput | IndustryProfileCreateManyInput[]
  }

  /**
   * IndustryProfile update
   */
  export type IndustryProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a IndustryProfile.
     */
    data: XOR<IndustryProfileUpdateInput, IndustryProfileUncheckedUpdateInput>
    /**
     * Choose, which IndustryProfile to update.
     */
    where: IndustryProfileWhereUniqueInput
  }

  /**
   * IndustryProfile updateMany
   */
  export type IndustryProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndustryProfiles.
     */
    data: XOR<IndustryProfileUpdateManyMutationInput, IndustryProfileUncheckedUpdateManyInput>
    /**
     * Filter which IndustryProfiles to update
     */
    where?: IndustryProfileWhereInput
  }

  /**
   * IndustryProfile upsert
   */
  export type IndustryProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the IndustryProfile to update in case it exists.
     */
    where: IndustryProfileWhereUniqueInput
    /**
     * In case the IndustryProfile found by the `where` argument doesn't exist, create a new IndustryProfile with this data.
     */
    create: XOR<IndustryProfileCreateInput, IndustryProfileUncheckedCreateInput>
    /**
     * In case the IndustryProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndustryProfileUpdateInput, IndustryProfileUncheckedUpdateInput>
  }

  /**
   * IndustryProfile delete
   */
  export type IndustryProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
    /**
     * Filter which IndustryProfile to delete.
     */
    where: IndustryProfileWhereUniqueInput
  }

  /**
   * IndustryProfile deleteMany
   */
  export type IndustryProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryProfiles to delete
     */
    where?: IndustryProfileWhereInput
  }

  /**
   * IndustryProfile.posts
   */
  export type IndustryProfile$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    where?: LinkedInPostWhereInput
    orderBy?: LinkedInPostOrderByWithRelationInput | LinkedInPostOrderByWithRelationInput[]
    cursor?: LinkedInPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkedInPostScalarFieldEnum | LinkedInPostScalarFieldEnum[]
  }

  /**
   * IndustryProfile.interactionsAsActor
   */
  export type IndustryProfile$interactionsAsActorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    where?: NetworkInteractionWhereInput
    orderBy?: NetworkInteractionOrderByWithRelationInput | NetworkInteractionOrderByWithRelationInput[]
    cursor?: NetworkInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NetworkInteractionScalarFieldEnum | NetworkInteractionScalarFieldEnum[]
  }

  /**
   * IndustryProfile.interactionsAsTarget
   */
  export type IndustryProfile$interactionsAsTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    where?: NetworkInteractionWhereInput
    orderBy?: NetworkInteractionOrderByWithRelationInput | NetworkInteractionOrderByWithRelationInput[]
    cursor?: NetworkInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NetworkInteractionScalarFieldEnum | NetworkInteractionScalarFieldEnum[]
  }

  /**
   * IndustryProfile without action
   */
  export type IndustryProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
  }


  /**
   * Model LinkedInPost
   */

  export type AggregateLinkedInPost = {
    _count: LinkedInPostCountAggregateOutputType | null
    _min: LinkedInPostMinAggregateOutputType | null
    _max: LinkedInPostMaxAggregateOutputType | null
  }

  export type LinkedInPostMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    content: string | null
    url: string | null
    publishedAt: string | null
    extractedEntities: string | null
    createdAt: Date | null
  }

  export type LinkedInPostMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    content: string | null
    url: string | null
    publishedAt: string | null
    extractedEntities: string | null
    createdAt: Date | null
  }

  export type LinkedInPostCountAggregateOutputType = {
    id: number
    profileId: number
    content: number
    url: number
    publishedAt: number
    extractedEntities: number
    createdAt: number
    _all: number
  }


  export type LinkedInPostMinAggregateInputType = {
    id?: true
    profileId?: true
    content?: true
    url?: true
    publishedAt?: true
    extractedEntities?: true
    createdAt?: true
  }

  export type LinkedInPostMaxAggregateInputType = {
    id?: true
    profileId?: true
    content?: true
    url?: true
    publishedAt?: true
    extractedEntities?: true
    createdAt?: true
  }

  export type LinkedInPostCountAggregateInputType = {
    id?: true
    profileId?: true
    content?: true
    url?: true
    publishedAt?: true
    extractedEntities?: true
    createdAt?: true
    _all?: true
  }

  export type LinkedInPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedInPost to aggregate.
     */
    where?: LinkedInPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedInPosts to fetch.
     */
    orderBy?: LinkedInPostOrderByWithRelationInput | LinkedInPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedInPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedInPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedInPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedInPosts
    **/
    _count?: true | LinkedInPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedInPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedInPostMaxAggregateInputType
  }

  export type GetLinkedInPostAggregateType<T extends LinkedInPostAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedInPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedInPost[P]>
      : GetScalarType<T[P], AggregateLinkedInPost[P]>
  }




  export type LinkedInPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedInPostWhereInput
    orderBy?: LinkedInPostOrderByWithAggregationInput | LinkedInPostOrderByWithAggregationInput[]
    by: LinkedInPostScalarFieldEnum[] | LinkedInPostScalarFieldEnum
    having?: LinkedInPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedInPostCountAggregateInputType | true
    _min?: LinkedInPostMinAggregateInputType
    _max?: LinkedInPostMaxAggregateInputType
  }

  export type LinkedInPostGroupByOutputType = {
    id: string
    profileId: string
    content: string
    url: string | null
    publishedAt: string | null
    extractedEntities: string | null
    createdAt: Date
    _count: LinkedInPostCountAggregateOutputType | null
    _min: LinkedInPostMinAggregateOutputType | null
    _max: LinkedInPostMaxAggregateOutputType | null
  }

  type GetLinkedInPostGroupByPayload<T extends LinkedInPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedInPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedInPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedInPostGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedInPostGroupByOutputType[P]>
        }
      >
    >


  export type LinkedInPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    content?: boolean
    url?: boolean
    publishedAt?: boolean
    extractedEntities?: boolean
    createdAt?: boolean
    profile?: boolean | IndustryProfileDefaultArgs<ExtArgs>
    interactions?: boolean | LinkedInPost$interactionsArgs<ExtArgs>
    _count?: boolean | LinkedInPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedInPost"]>

  export type LinkedInPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    content?: boolean
    url?: boolean
    publishedAt?: boolean
    extractedEntities?: boolean
    createdAt?: boolean
    profile?: boolean | IndustryProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedInPost"]>

  export type LinkedInPostSelectScalar = {
    id?: boolean
    profileId?: boolean
    content?: boolean
    url?: boolean
    publishedAt?: boolean
    extractedEntities?: boolean
    createdAt?: boolean
  }

  export type LinkedInPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | IndustryProfileDefaultArgs<ExtArgs>
    interactions?: boolean | LinkedInPost$interactionsArgs<ExtArgs>
    _count?: boolean | LinkedInPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LinkedInPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | IndustryProfileDefaultArgs<ExtArgs>
  }

  export type $LinkedInPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedInPost"
    objects: {
      profile: Prisma.$IndustryProfilePayload<ExtArgs>
      interactions: Prisma.$NetworkInteractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      content: string
      url: string | null
      publishedAt: string | null
      extractedEntities: string | null
      createdAt: Date
    }, ExtArgs["result"]["linkedInPost"]>
    composites: {}
  }

  type LinkedInPostGetPayload<S extends boolean | null | undefined | LinkedInPostDefaultArgs> = $Result.GetResult<Prisma.$LinkedInPostPayload, S>

  type LinkedInPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LinkedInPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LinkedInPostCountAggregateInputType | true
    }

  export interface LinkedInPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedInPost'], meta: { name: 'LinkedInPost' } }
    /**
     * Find zero or one LinkedInPost that matches the filter.
     * @param {LinkedInPostFindUniqueArgs} args - Arguments to find a LinkedInPost
     * @example
     * // Get one LinkedInPost
     * const linkedInPost = await prisma.linkedInPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkedInPostFindUniqueArgs>(args: SelectSubset<T, LinkedInPostFindUniqueArgs<ExtArgs>>): Prisma__LinkedInPostClient<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LinkedInPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LinkedInPostFindUniqueOrThrowArgs} args - Arguments to find a LinkedInPost
     * @example
     * // Get one LinkedInPost
     * const linkedInPost = await prisma.linkedInPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkedInPostFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkedInPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkedInPostClient<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LinkedInPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInPostFindFirstArgs} args - Arguments to find a LinkedInPost
     * @example
     * // Get one LinkedInPost
     * const linkedInPost = await prisma.linkedInPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkedInPostFindFirstArgs>(args?: SelectSubset<T, LinkedInPostFindFirstArgs<ExtArgs>>): Prisma__LinkedInPostClient<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LinkedInPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInPostFindFirstOrThrowArgs} args - Arguments to find a LinkedInPost
     * @example
     * // Get one LinkedInPost
     * const linkedInPost = await prisma.linkedInPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkedInPostFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkedInPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkedInPostClient<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LinkedInPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedInPosts
     * const linkedInPosts = await prisma.linkedInPost.findMany()
     * 
     * // Get first 10 LinkedInPosts
     * const linkedInPosts = await prisma.linkedInPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedInPostWithIdOnly = await prisma.linkedInPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkedInPostFindManyArgs>(args?: SelectSubset<T, LinkedInPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LinkedInPost.
     * @param {LinkedInPostCreateArgs} args - Arguments to create a LinkedInPost.
     * @example
     * // Create one LinkedInPost
     * const LinkedInPost = await prisma.linkedInPost.create({
     *   data: {
     *     // ... data to create a LinkedInPost
     *   }
     * })
     * 
     */
    create<T extends LinkedInPostCreateArgs>(args: SelectSubset<T, LinkedInPostCreateArgs<ExtArgs>>): Prisma__LinkedInPostClient<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LinkedInPosts.
     * @param {LinkedInPostCreateManyArgs} args - Arguments to create many LinkedInPosts.
     * @example
     * // Create many LinkedInPosts
     * const linkedInPost = await prisma.linkedInPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkedInPostCreateManyArgs>(args?: SelectSubset<T, LinkedInPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkedInPosts and returns the data saved in the database.
     * @param {LinkedInPostCreateManyAndReturnArgs} args - Arguments to create many LinkedInPosts.
     * @example
     * // Create many LinkedInPosts
     * const linkedInPost = await prisma.linkedInPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkedInPosts and only return the `id`
     * const linkedInPostWithIdOnly = await prisma.linkedInPost.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkedInPostCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkedInPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LinkedInPost.
     * @param {LinkedInPostDeleteArgs} args - Arguments to delete one LinkedInPost.
     * @example
     * // Delete one LinkedInPost
     * const LinkedInPost = await prisma.linkedInPost.delete({
     *   where: {
     *     // ... filter to delete one LinkedInPost
     *   }
     * })
     * 
     */
    delete<T extends LinkedInPostDeleteArgs>(args: SelectSubset<T, LinkedInPostDeleteArgs<ExtArgs>>): Prisma__LinkedInPostClient<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LinkedInPost.
     * @param {LinkedInPostUpdateArgs} args - Arguments to update one LinkedInPost.
     * @example
     * // Update one LinkedInPost
     * const linkedInPost = await prisma.linkedInPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkedInPostUpdateArgs>(args: SelectSubset<T, LinkedInPostUpdateArgs<ExtArgs>>): Prisma__LinkedInPostClient<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LinkedInPosts.
     * @param {LinkedInPostDeleteManyArgs} args - Arguments to filter LinkedInPosts to delete.
     * @example
     * // Delete a few LinkedInPosts
     * const { count } = await prisma.linkedInPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkedInPostDeleteManyArgs>(args?: SelectSubset<T, LinkedInPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedInPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedInPosts
     * const linkedInPost = await prisma.linkedInPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkedInPostUpdateManyArgs>(args: SelectSubset<T, LinkedInPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LinkedInPost.
     * @param {LinkedInPostUpsertArgs} args - Arguments to update or create a LinkedInPost.
     * @example
     * // Update or create a LinkedInPost
     * const linkedInPost = await prisma.linkedInPost.upsert({
     *   create: {
     *     // ... data to create a LinkedInPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedInPost we want to update
     *   }
     * })
     */
    upsert<T extends LinkedInPostUpsertArgs>(args: SelectSubset<T, LinkedInPostUpsertArgs<ExtArgs>>): Prisma__LinkedInPostClient<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LinkedInPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInPostCountArgs} args - Arguments to filter LinkedInPosts to count.
     * @example
     * // Count the number of LinkedInPosts
     * const count = await prisma.linkedInPost.count({
     *   where: {
     *     // ... the filter for the LinkedInPosts we want to count
     *   }
     * })
    **/
    count<T extends LinkedInPostCountArgs>(
      args?: Subset<T, LinkedInPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedInPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedInPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkedInPostAggregateArgs>(args: Subset<T, LinkedInPostAggregateArgs>): Prisma.PrismaPromise<GetLinkedInPostAggregateType<T>>

    /**
     * Group by LinkedInPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedInPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkedInPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedInPostGroupByArgs['orderBy'] }
        : { orderBy?: LinkedInPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkedInPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedInPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedInPost model
   */
  readonly fields: LinkedInPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedInPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedInPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends IndustryProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IndustryProfileDefaultArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    interactions<T extends LinkedInPost$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, LinkedInPost$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkedInPost model
   */ 
  interface LinkedInPostFieldRefs {
    readonly id: FieldRef<"LinkedInPost", 'String'>
    readonly profileId: FieldRef<"LinkedInPost", 'String'>
    readonly content: FieldRef<"LinkedInPost", 'String'>
    readonly url: FieldRef<"LinkedInPost", 'String'>
    readonly publishedAt: FieldRef<"LinkedInPost", 'String'>
    readonly extractedEntities: FieldRef<"LinkedInPost", 'String'>
    readonly createdAt: FieldRef<"LinkedInPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LinkedInPost findUnique
   */
  export type LinkedInPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    /**
     * Filter, which LinkedInPost to fetch.
     */
    where: LinkedInPostWhereUniqueInput
  }

  /**
   * LinkedInPost findUniqueOrThrow
   */
  export type LinkedInPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    /**
     * Filter, which LinkedInPost to fetch.
     */
    where: LinkedInPostWhereUniqueInput
  }

  /**
   * LinkedInPost findFirst
   */
  export type LinkedInPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    /**
     * Filter, which LinkedInPost to fetch.
     */
    where?: LinkedInPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedInPosts to fetch.
     */
    orderBy?: LinkedInPostOrderByWithRelationInput | LinkedInPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedInPosts.
     */
    cursor?: LinkedInPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedInPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedInPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedInPosts.
     */
    distinct?: LinkedInPostScalarFieldEnum | LinkedInPostScalarFieldEnum[]
  }

  /**
   * LinkedInPost findFirstOrThrow
   */
  export type LinkedInPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    /**
     * Filter, which LinkedInPost to fetch.
     */
    where?: LinkedInPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedInPosts to fetch.
     */
    orderBy?: LinkedInPostOrderByWithRelationInput | LinkedInPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedInPosts.
     */
    cursor?: LinkedInPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedInPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedInPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedInPosts.
     */
    distinct?: LinkedInPostScalarFieldEnum | LinkedInPostScalarFieldEnum[]
  }

  /**
   * LinkedInPost findMany
   */
  export type LinkedInPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    /**
     * Filter, which LinkedInPosts to fetch.
     */
    where?: LinkedInPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedInPosts to fetch.
     */
    orderBy?: LinkedInPostOrderByWithRelationInput | LinkedInPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedInPosts.
     */
    cursor?: LinkedInPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedInPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedInPosts.
     */
    skip?: number
    distinct?: LinkedInPostScalarFieldEnum | LinkedInPostScalarFieldEnum[]
  }

  /**
   * LinkedInPost create
   */
  export type LinkedInPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkedInPost.
     */
    data: XOR<LinkedInPostCreateInput, LinkedInPostUncheckedCreateInput>
  }

  /**
   * LinkedInPost createMany
   */
  export type LinkedInPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedInPosts.
     */
    data: LinkedInPostCreateManyInput | LinkedInPostCreateManyInput[]
  }

  /**
   * LinkedInPost createManyAndReturn
   */
  export type LinkedInPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LinkedInPosts.
     */
    data: LinkedInPostCreateManyInput | LinkedInPostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedInPost update
   */
  export type LinkedInPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkedInPost.
     */
    data: XOR<LinkedInPostUpdateInput, LinkedInPostUncheckedUpdateInput>
    /**
     * Choose, which LinkedInPost to update.
     */
    where: LinkedInPostWhereUniqueInput
  }

  /**
   * LinkedInPost updateMany
   */
  export type LinkedInPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedInPosts.
     */
    data: XOR<LinkedInPostUpdateManyMutationInput, LinkedInPostUncheckedUpdateManyInput>
    /**
     * Filter which LinkedInPosts to update
     */
    where?: LinkedInPostWhereInput
  }

  /**
   * LinkedInPost upsert
   */
  export type LinkedInPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkedInPost to update in case it exists.
     */
    where: LinkedInPostWhereUniqueInput
    /**
     * In case the LinkedInPost found by the `where` argument doesn't exist, create a new LinkedInPost with this data.
     */
    create: XOR<LinkedInPostCreateInput, LinkedInPostUncheckedCreateInput>
    /**
     * In case the LinkedInPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedInPostUpdateInput, LinkedInPostUncheckedUpdateInput>
  }

  /**
   * LinkedInPost delete
   */
  export type LinkedInPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    /**
     * Filter which LinkedInPost to delete.
     */
    where: LinkedInPostWhereUniqueInput
  }

  /**
   * LinkedInPost deleteMany
   */
  export type LinkedInPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedInPosts to delete
     */
    where?: LinkedInPostWhereInput
  }

  /**
   * LinkedInPost.interactions
   */
  export type LinkedInPost$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    where?: NetworkInteractionWhereInput
    orderBy?: NetworkInteractionOrderByWithRelationInput | NetworkInteractionOrderByWithRelationInput[]
    cursor?: NetworkInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NetworkInteractionScalarFieldEnum | NetworkInteractionScalarFieldEnum[]
  }

  /**
   * LinkedInPost without action
   */
  export type LinkedInPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
  }


  /**
   * Model NetworkInteraction
   */

  export type AggregateNetworkInteraction = {
    _count: NetworkInteractionCountAggregateOutputType | null
    _min: NetworkInteractionMinAggregateOutputType | null
    _max: NetworkInteractionMaxAggregateOutputType | null
  }

  export type NetworkInteractionMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    targetId: string | null
    postId: string | null
    type: string | null
    content: string | null
    createdAt: Date | null
  }

  export type NetworkInteractionMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    targetId: string | null
    postId: string | null
    type: string | null
    content: string | null
    createdAt: Date | null
  }

  export type NetworkInteractionCountAggregateOutputType = {
    id: number
    actorId: number
    targetId: number
    postId: number
    type: number
    content: number
    createdAt: number
    _all: number
  }


  export type NetworkInteractionMinAggregateInputType = {
    id?: true
    actorId?: true
    targetId?: true
    postId?: true
    type?: true
    content?: true
    createdAt?: true
  }

  export type NetworkInteractionMaxAggregateInputType = {
    id?: true
    actorId?: true
    targetId?: true
    postId?: true
    type?: true
    content?: true
    createdAt?: true
  }

  export type NetworkInteractionCountAggregateInputType = {
    id?: true
    actorId?: true
    targetId?: true
    postId?: true
    type?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type NetworkInteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkInteraction to aggregate.
     */
    where?: NetworkInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkInteractions to fetch.
     */
    orderBy?: NetworkInteractionOrderByWithRelationInput | NetworkInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NetworkInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NetworkInteractions
    **/
    _count?: true | NetworkInteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworkInteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworkInteractionMaxAggregateInputType
  }

  export type GetNetworkInteractionAggregateType<T extends NetworkInteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateNetworkInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetworkInteraction[P]>
      : GetScalarType<T[P], AggregateNetworkInteraction[P]>
  }




  export type NetworkInteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkInteractionWhereInput
    orderBy?: NetworkInteractionOrderByWithAggregationInput | NetworkInteractionOrderByWithAggregationInput[]
    by: NetworkInteractionScalarFieldEnum[] | NetworkInteractionScalarFieldEnum
    having?: NetworkInteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworkInteractionCountAggregateInputType | true
    _min?: NetworkInteractionMinAggregateInputType
    _max?: NetworkInteractionMaxAggregateInputType
  }

  export type NetworkInteractionGroupByOutputType = {
    id: string
    actorId: string
    targetId: string | null
    postId: string | null
    type: string
    content: string | null
    createdAt: Date
    _count: NetworkInteractionCountAggregateOutputType | null
    _min: NetworkInteractionMinAggregateOutputType | null
    _max: NetworkInteractionMaxAggregateOutputType | null
  }

  type GetNetworkInteractionGroupByPayload<T extends NetworkInteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworkInteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworkInteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworkInteractionGroupByOutputType[P]>
            : GetScalarType<T[P], NetworkInteractionGroupByOutputType[P]>
        }
      >
    >


  export type NetworkInteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    targetId?: boolean
    postId?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    actor?: boolean | IndustryProfileDefaultArgs<ExtArgs>
    target?: boolean | NetworkInteraction$targetArgs<ExtArgs>
    post?: boolean | NetworkInteraction$postArgs<ExtArgs>
  }, ExtArgs["result"]["networkInteraction"]>

  export type NetworkInteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    targetId?: boolean
    postId?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    actor?: boolean | IndustryProfileDefaultArgs<ExtArgs>
    target?: boolean | NetworkInteraction$targetArgs<ExtArgs>
    post?: boolean | NetworkInteraction$postArgs<ExtArgs>
  }, ExtArgs["result"]["networkInteraction"]>

  export type NetworkInteractionSelectScalar = {
    id?: boolean
    actorId?: boolean
    targetId?: boolean
    postId?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type NetworkInteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | IndustryProfileDefaultArgs<ExtArgs>
    target?: boolean | NetworkInteraction$targetArgs<ExtArgs>
    post?: boolean | NetworkInteraction$postArgs<ExtArgs>
  }
  export type NetworkInteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | IndustryProfileDefaultArgs<ExtArgs>
    target?: boolean | NetworkInteraction$targetArgs<ExtArgs>
    post?: boolean | NetworkInteraction$postArgs<ExtArgs>
  }

  export type $NetworkInteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NetworkInteraction"
    objects: {
      actor: Prisma.$IndustryProfilePayload<ExtArgs>
      target: Prisma.$IndustryProfilePayload<ExtArgs> | null
      post: Prisma.$LinkedInPostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string
      targetId: string | null
      postId: string | null
      type: string
      content: string | null
      createdAt: Date
    }, ExtArgs["result"]["networkInteraction"]>
    composites: {}
  }

  type NetworkInteractionGetPayload<S extends boolean | null | undefined | NetworkInteractionDefaultArgs> = $Result.GetResult<Prisma.$NetworkInteractionPayload, S>

  type NetworkInteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NetworkInteractionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NetworkInteractionCountAggregateInputType | true
    }

  export interface NetworkInteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NetworkInteraction'], meta: { name: 'NetworkInteraction' } }
    /**
     * Find zero or one NetworkInteraction that matches the filter.
     * @param {NetworkInteractionFindUniqueArgs} args - Arguments to find a NetworkInteraction
     * @example
     * // Get one NetworkInteraction
     * const networkInteraction = await prisma.networkInteraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NetworkInteractionFindUniqueArgs>(args: SelectSubset<T, NetworkInteractionFindUniqueArgs<ExtArgs>>): Prisma__NetworkInteractionClient<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NetworkInteraction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NetworkInteractionFindUniqueOrThrowArgs} args - Arguments to find a NetworkInteraction
     * @example
     * // Get one NetworkInteraction
     * const networkInteraction = await prisma.networkInteraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NetworkInteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, NetworkInteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NetworkInteractionClient<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NetworkInteraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkInteractionFindFirstArgs} args - Arguments to find a NetworkInteraction
     * @example
     * // Get one NetworkInteraction
     * const networkInteraction = await prisma.networkInteraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NetworkInteractionFindFirstArgs>(args?: SelectSubset<T, NetworkInteractionFindFirstArgs<ExtArgs>>): Prisma__NetworkInteractionClient<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NetworkInteraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkInteractionFindFirstOrThrowArgs} args - Arguments to find a NetworkInteraction
     * @example
     * // Get one NetworkInteraction
     * const networkInteraction = await prisma.networkInteraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NetworkInteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, NetworkInteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NetworkInteractionClient<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NetworkInteractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkInteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NetworkInteractions
     * const networkInteractions = await prisma.networkInteraction.findMany()
     * 
     * // Get first 10 NetworkInteractions
     * const networkInteractions = await prisma.networkInteraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const networkInteractionWithIdOnly = await prisma.networkInteraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NetworkInteractionFindManyArgs>(args?: SelectSubset<T, NetworkInteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NetworkInteraction.
     * @param {NetworkInteractionCreateArgs} args - Arguments to create a NetworkInteraction.
     * @example
     * // Create one NetworkInteraction
     * const NetworkInteraction = await prisma.networkInteraction.create({
     *   data: {
     *     // ... data to create a NetworkInteraction
     *   }
     * })
     * 
     */
    create<T extends NetworkInteractionCreateArgs>(args: SelectSubset<T, NetworkInteractionCreateArgs<ExtArgs>>): Prisma__NetworkInteractionClient<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NetworkInteractions.
     * @param {NetworkInteractionCreateManyArgs} args - Arguments to create many NetworkInteractions.
     * @example
     * // Create many NetworkInteractions
     * const networkInteraction = await prisma.networkInteraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NetworkInteractionCreateManyArgs>(args?: SelectSubset<T, NetworkInteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NetworkInteractions and returns the data saved in the database.
     * @param {NetworkInteractionCreateManyAndReturnArgs} args - Arguments to create many NetworkInteractions.
     * @example
     * // Create many NetworkInteractions
     * const networkInteraction = await prisma.networkInteraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NetworkInteractions and only return the `id`
     * const networkInteractionWithIdOnly = await prisma.networkInteraction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NetworkInteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, NetworkInteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NetworkInteraction.
     * @param {NetworkInteractionDeleteArgs} args - Arguments to delete one NetworkInteraction.
     * @example
     * // Delete one NetworkInteraction
     * const NetworkInteraction = await prisma.networkInteraction.delete({
     *   where: {
     *     // ... filter to delete one NetworkInteraction
     *   }
     * })
     * 
     */
    delete<T extends NetworkInteractionDeleteArgs>(args: SelectSubset<T, NetworkInteractionDeleteArgs<ExtArgs>>): Prisma__NetworkInteractionClient<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NetworkInteraction.
     * @param {NetworkInteractionUpdateArgs} args - Arguments to update one NetworkInteraction.
     * @example
     * // Update one NetworkInteraction
     * const networkInteraction = await prisma.networkInteraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NetworkInteractionUpdateArgs>(args: SelectSubset<T, NetworkInteractionUpdateArgs<ExtArgs>>): Prisma__NetworkInteractionClient<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NetworkInteractions.
     * @param {NetworkInteractionDeleteManyArgs} args - Arguments to filter NetworkInteractions to delete.
     * @example
     * // Delete a few NetworkInteractions
     * const { count } = await prisma.networkInteraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NetworkInteractionDeleteManyArgs>(args?: SelectSubset<T, NetworkInteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkInteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NetworkInteractions
     * const networkInteraction = await prisma.networkInteraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NetworkInteractionUpdateManyArgs>(args: SelectSubset<T, NetworkInteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NetworkInteraction.
     * @param {NetworkInteractionUpsertArgs} args - Arguments to update or create a NetworkInteraction.
     * @example
     * // Update or create a NetworkInteraction
     * const networkInteraction = await prisma.networkInteraction.upsert({
     *   create: {
     *     // ... data to create a NetworkInteraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NetworkInteraction we want to update
     *   }
     * })
     */
    upsert<T extends NetworkInteractionUpsertArgs>(args: SelectSubset<T, NetworkInteractionUpsertArgs<ExtArgs>>): Prisma__NetworkInteractionClient<$Result.GetResult<Prisma.$NetworkInteractionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NetworkInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkInteractionCountArgs} args - Arguments to filter NetworkInteractions to count.
     * @example
     * // Count the number of NetworkInteractions
     * const count = await prisma.networkInteraction.count({
     *   where: {
     *     // ... the filter for the NetworkInteractions we want to count
     *   }
     * })
    **/
    count<T extends NetworkInteractionCountArgs>(
      args?: Subset<T, NetworkInteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworkInteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NetworkInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkInteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NetworkInteractionAggregateArgs>(args: Subset<T, NetworkInteractionAggregateArgs>): Prisma.PrismaPromise<GetNetworkInteractionAggregateType<T>>

    /**
     * Group by NetworkInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkInteractionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NetworkInteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NetworkInteractionGroupByArgs['orderBy'] }
        : { orderBy?: NetworkInteractionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NetworkInteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NetworkInteraction model
   */
  readonly fields: NetworkInteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NetworkInteraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NetworkInteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends IndustryProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IndustryProfileDefaultArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    target<T extends NetworkInteraction$targetArgs<ExtArgs> = {}>(args?: Subset<T, NetworkInteraction$targetArgs<ExtArgs>>): Prisma__IndustryProfileClient<$Result.GetResult<Prisma.$IndustryProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    post<T extends NetworkInteraction$postArgs<ExtArgs> = {}>(args?: Subset<T, NetworkInteraction$postArgs<ExtArgs>>): Prisma__LinkedInPostClient<$Result.GetResult<Prisma.$LinkedInPostPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NetworkInteraction model
   */ 
  interface NetworkInteractionFieldRefs {
    readonly id: FieldRef<"NetworkInteraction", 'String'>
    readonly actorId: FieldRef<"NetworkInteraction", 'String'>
    readonly targetId: FieldRef<"NetworkInteraction", 'String'>
    readonly postId: FieldRef<"NetworkInteraction", 'String'>
    readonly type: FieldRef<"NetworkInteraction", 'String'>
    readonly content: FieldRef<"NetworkInteraction", 'String'>
    readonly createdAt: FieldRef<"NetworkInteraction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NetworkInteraction findUnique
   */
  export type NetworkInteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    /**
     * Filter, which NetworkInteraction to fetch.
     */
    where: NetworkInteractionWhereUniqueInput
  }

  /**
   * NetworkInteraction findUniqueOrThrow
   */
  export type NetworkInteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    /**
     * Filter, which NetworkInteraction to fetch.
     */
    where: NetworkInteractionWhereUniqueInput
  }

  /**
   * NetworkInteraction findFirst
   */
  export type NetworkInteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    /**
     * Filter, which NetworkInteraction to fetch.
     */
    where?: NetworkInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkInteractions to fetch.
     */
    orderBy?: NetworkInteractionOrderByWithRelationInput | NetworkInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkInteractions.
     */
    cursor?: NetworkInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkInteractions.
     */
    distinct?: NetworkInteractionScalarFieldEnum | NetworkInteractionScalarFieldEnum[]
  }

  /**
   * NetworkInteraction findFirstOrThrow
   */
  export type NetworkInteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    /**
     * Filter, which NetworkInteraction to fetch.
     */
    where?: NetworkInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkInteractions to fetch.
     */
    orderBy?: NetworkInteractionOrderByWithRelationInput | NetworkInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkInteractions.
     */
    cursor?: NetworkInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkInteractions.
     */
    distinct?: NetworkInteractionScalarFieldEnum | NetworkInteractionScalarFieldEnum[]
  }

  /**
   * NetworkInteraction findMany
   */
  export type NetworkInteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    /**
     * Filter, which NetworkInteractions to fetch.
     */
    where?: NetworkInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkInteractions to fetch.
     */
    orderBy?: NetworkInteractionOrderByWithRelationInput | NetworkInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NetworkInteractions.
     */
    cursor?: NetworkInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkInteractions.
     */
    skip?: number
    distinct?: NetworkInteractionScalarFieldEnum | NetworkInteractionScalarFieldEnum[]
  }

  /**
   * NetworkInteraction create
   */
  export type NetworkInteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a NetworkInteraction.
     */
    data: XOR<NetworkInteractionCreateInput, NetworkInteractionUncheckedCreateInput>
  }

  /**
   * NetworkInteraction createMany
   */
  export type NetworkInteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NetworkInteractions.
     */
    data: NetworkInteractionCreateManyInput | NetworkInteractionCreateManyInput[]
  }

  /**
   * NetworkInteraction createManyAndReturn
   */
  export type NetworkInteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NetworkInteractions.
     */
    data: NetworkInteractionCreateManyInput | NetworkInteractionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NetworkInteraction update
   */
  export type NetworkInteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a NetworkInteraction.
     */
    data: XOR<NetworkInteractionUpdateInput, NetworkInteractionUncheckedUpdateInput>
    /**
     * Choose, which NetworkInteraction to update.
     */
    where: NetworkInteractionWhereUniqueInput
  }

  /**
   * NetworkInteraction updateMany
   */
  export type NetworkInteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NetworkInteractions.
     */
    data: XOR<NetworkInteractionUpdateManyMutationInput, NetworkInteractionUncheckedUpdateManyInput>
    /**
     * Filter which NetworkInteractions to update
     */
    where?: NetworkInteractionWhereInput
  }

  /**
   * NetworkInteraction upsert
   */
  export type NetworkInteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the NetworkInteraction to update in case it exists.
     */
    where: NetworkInteractionWhereUniqueInput
    /**
     * In case the NetworkInteraction found by the `where` argument doesn't exist, create a new NetworkInteraction with this data.
     */
    create: XOR<NetworkInteractionCreateInput, NetworkInteractionUncheckedCreateInput>
    /**
     * In case the NetworkInteraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NetworkInteractionUpdateInput, NetworkInteractionUncheckedUpdateInput>
  }

  /**
   * NetworkInteraction delete
   */
  export type NetworkInteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
    /**
     * Filter which NetworkInteraction to delete.
     */
    where: NetworkInteractionWhereUniqueInput
  }

  /**
   * NetworkInteraction deleteMany
   */
  export type NetworkInteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkInteractions to delete
     */
    where?: NetworkInteractionWhereInput
  }

  /**
   * NetworkInteraction.target
   */
  export type NetworkInteraction$targetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryProfile
     */
    select?: IndustryProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryProfileInclude<ExtArgs> | null
    where?: IndustryProfileWhereInput
  }

  /**
   * NetworkInteraction.post
   */
  export type NetworkInteraction$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedInPost
     */
    select?: LinkedInPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedInPostInclude<ExtArgs> | null
    where?: LinkedInPostWhereInput
  }

  /**
   * NetworkInteraction without action
   */
  export type NetworkInteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkInteraction
     */
    select?: NetworkInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkInteractionInclude<ExtArgs> | null
  }


  /**
   * Model TargetMonitor
   */

  export type AggregateTargetMonitor = {
    _count: TargetMonitorCountAggregateOutputType | null
    _min: TargetMonitorMinAggregateOutputType | null
    _max: TargetMonitorMaxAggregateOutputType | null
  }

  export type TargetMonitorMinAggregateOutputType = {
    id: string | null
    url: string | null
    name: string | null
    selector: string | null
    urlFilter: string | null
    minDate: Date | null
    maxDate: Date | null
    lastChecked: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TargetMonitorMaxAggregateOutputType = {
    id: string | null
    url: string | null
    name: string | null
    selector: string | null
    urlFilter: string | null
    minDate: Date | null
    maxDate: Date | null
    lastChecked: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TargetMonitorCountAggregateOutputType = {
    id: number
    url: number
    name: number
    selector: number
    urlFilter: number
    minDate: number
    maxDate: number
    lastChecked: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type TargetMonitorMinAggregateInputType = {
    id?: true
    url?: true
    name?: true
    selector?: true
    urlFilter?: true
    minDate?: true
    maxDate?: true
    lastChecked?: true
    isActive?: true
    createdAt?: true
  }

  export type TargetMonitorMaxAggregateInputType = {
    id?: true
    url?: true
    name?: true
    selector?: true
    urlFilter?: true
    minDate?: true
    maxDate?: true
    lastChecked?: true
    isActive?: true
    createdAt?: true
  }

  export type TargetMonitorCountAggregateInputType = {
    id?: true
    url?: true
    name?: true
    selector?: true
    urlFilter?: true
    minDate?: true
    maxDate?: true
    lastChecked?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type TargetMonitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetMonitor to aggregate.
     */
    where?: TargetMonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetMonitors to fetch.
     */
    orderBy?: TargetMonitorOrderByWithRelationInput | TargetMonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TargetMonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetMonitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetMonitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TargetMonitors
    **/
    _count?: true | TargetMonitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TargetMonitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TargetMonitorMaxAggregateInputType
  }

  export type GetTargetMonitorAggregateType<T extends TargetMonitorAggregateArgs> = {
        [P in keyof T & keyof AggregateTargetMonitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargetMonitor[P]>
      : GetScalarType<T[P], AggregateTargetMonitor[P]>
  }




  export type TargetMonitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetMonitorWhereInput
    orderBy?: TargetMonitorOrderByWithAggregationInput | TargetMonitorOrderByWithAggregationInput[]
    by: TargetMonitorScalarFieldEnum[] | TargetMonitorScalarFieldEnum
    having?: TargetMonitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TargetMonitorCountAggregateInputType | true
    _min?: TargetMonitorMinAggregateInputType
    _max?: TargetMonitorMaxAggregateInputType
  }

  export type TargetMonitorGroupByOutputType = {
    id: string
    url: string
    name: string
    selector: string | null
    urlFilter: string | null
    minDate: Date | null
    maxDate: Date | null
    lastChecked: Date | null
    isActive: boolean
    createdAt: Date
    _count: TargetMonitorCountAggregateOutputType | null
    _min: TargetMonitorMinAggregateOutputType | null
    _max: TargetMonitorMaxAggregateOutputType | null
  }

  type GetTargetMonitorGroupByPayload<T extends TargetMonitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TargetMonitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TargetMonitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TargetMonitorGroupByOutputType[P]>
            : GetScalarType<T[P], TargetMonitorGroupByOutputType[P]>
        }
      >
    >


  export type TargetMonitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    name?: boolean
    selector?: boolean
    urlFilter?: boolean
    minDate?: boolean
    maxDate?: boolean
    lastChecked?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["targetMonitor"]>

  export type TargetMonitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    name?: boolean
    selector?: boolean
    urlFilter?: boolean
    minDate?: boolean
    maxDate?: boolean
    lastChecked?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["targetMonitor"]>

  export type TargetMonitorSelectScalar = {
    id?: boolean
    url?: boolean
    name?: boolean
    selector?: boolean
    urlFilter?: boolean
    minDate?: boolean
    maxDate?: boolean
    lastChecked?: boolean
    isActive?: boolean
    createdAt?: boolean
  }


  export type $TargetMonitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TargetMonitor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      name: string
      selector: string | null
      urlFilter: string | null
      minDate: Date | null
      maxDate: Date | null
      lastChecked: Date | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["targetMonitor"]>
    composites: {}
  }

  type TargetMonitorGetPayload<S extends boolean | null | undefined | TargetMonitorDefaultArgs> = $Result.GetResult<Prisma.$TargetMonitorPayload, S>

  type TargetMonitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TargetMonitorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TargetMonitorCountAggregateInputType | true
    }

  export interface TargetMonitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TargetMonitor'], meta: { name: 'TargetMonitor' } }
    /**
     * Find zero or one TargetMonitor that matches the filter.
     * @param {TargetMonitorFindUniqueArgs} args - Arguments to find a TargetMonitor
     * @example
     * // Get one TargetMonitor
     * const targetMonitor = await prisma.targetMonitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TargetMonitorFindUniqueArgs>(args: SelectSubset<T, TargetMonitorFindUniqueArgs<ExtArgs>>): Prisma__TargetMonitorClient<$Result.GetResult<Prisma.$TargetMonitorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TargetMonitor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TargetMonitorFindUniqueOrThrowArgs} args - Arguments to find a TargetMonitor
     * @example
     * // Get one TargetMonitor
     * const targetMonitor = await prisma.targetMonitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TargetMonitorFindUniqueOrThrowArgs>(args: SelectSubset<T, TargetMonitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TargetMonitorClient<$Result.GetResult<Prisma.$TargetMonitorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TargetMonitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetMonitorFindFirstArgs} args - Arguments to find a TargetMonitor
     * @example
     * // Get one TargetMonitor
     * const targetMonitor = await prisma.targetMonitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TargetMonitorFindFirstArgs>(args?: SelectSubset<T, TargetMonitorFindFirstArgs<ExtArgs>>): Prisma__TargetMonitorClient<$Result.GetResult<Prisma.$TargetMonitorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TargetMonitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetMonitorFindFirstOrThrowArgs} args - Arguments to find a TargetMonitor
     * @example
     * // Get one TargetMonitor
     * const targetMonitor = await prisma.targetMonitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TargetMonitorFindFirstOrThrowArgs>(args?: SelectSubset<T, TargetMonitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TargetMonitorClient<$Result.GetResult<Prisma.$TargetMonitorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TargetMonitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetMonitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TargetMonitors
     * const targetMonitors = await prisma.targetMonitor.findMany()
     * 
     * // Get first 10 TargetMonitors
     * const targetMonitors = await prisma.targetMonitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const targetMonitorWithIdOnly = await prisma.targetMonitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TargetMonitorFindManyArgs>(args?: SelectSubset<T, TargetMonitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetMonitorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TargetMonitor.
     * @param {TargetMonitorCreateArgs} args - Arguments to create a TargetMonitor.
     * @example
     * // Create one TargetMonitor
     * const TargetMonitor = await prisma.targetMonitor.create({
     *   data: {
     *     // ... data to create a TargetMonitor
     *   }
     * })
     * 
     */
    create<T extends TargetMonitorCreateArgs>(args: SelectSubset<T, TargetMonitorCreateArgs<ExtArgs>>): Prisma__TargetMonitorClient<$Result.GetResult<Prisma.$TargetMonitorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TargetMonitors.
     * @param {TargetMonitorCreateManyArgs} args - Arguments to create many TargetMonitors.
     * @example
     * // Create many TargetMonitors
     * const targetMonitor = await prisma.targetMonitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TargetMonitorCreateManyArgs>(args?: SelectSubset<T, TargetMonitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TargetMonitors and returns the data saved in the database.
     * @param {TargetMonitorCreateManyAndReturnArgs} args - Arguments to create many TargetMonitors.
     * @example
     * // Create many TargetMonitors
     * const targetMonitor = await prisma.targetMonitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TargetMonitors and only return the `id`
     * const targetMonitorWithIdOnly = await prisma.targetMonitor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TargetMonitorCreateManyAndReturnArgs>(args?: SelectSubset<T, TargetMonitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetMonitorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TargetMonitor.
     * @param {TargetMonitorDeleteArgs} args - Arguments to delete one TargetMonitor.
     * @example
     * // Delete one TargetMonitor
     * const TargetMonitor = await prisma.targetMonitor.delete({
     *   where: {
     *     // ... filter to delete one TargetMonitor
     *   }
     * })
     * 
     */
    delete<T extends TargetMonitorDeleteArgs>(args: SelectSubset<T, TargetMonitorDeleteArgs<ExtArgs>>): Prisma__TargetMonitorClient<$Result.GetResult<Prisma.$TargetMonitorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TargetMonitor.
     * @param {TargetMonitorUpdateArgs} args - Arguments to update one TargetMonitor.
     * @example
     * // Update one TargetMonitor
     * const targetMonitor = await prisma.targetMonitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TargetMonitorUpdateArgs>(args: SelectSubset<T, TargetMonitorUpdateArgs<ExtArgs>>): Prisma__TargetMonitorClient<$Result.GetResult<Prisma.$TargetMonitorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TargetMonitors.
     * @param {TargetMonitorDeleteManyArgs} args - Arguments to filter TargetMonitors to delete.
     * @example
     * // Delete a few TargetMonitors
     * const { count } = await prisma.targetMonitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TargetMonitorDeleteManyArgs>(args?: SelectSubset<T, TargetMonitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetMonitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetMonitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TargetMonitors
     * const targetMonitor = await prisma.targetMonitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TargetMonitorUpdateManyArgs>(args: SelectSubset<T, TargetMonitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TargetMonitor.
     * @param {TargetMonitorUpsertArgs} args - Arguments to update or create a TargetMonitor.
     * @example
     * // Update or create a TargetMonitor
     * const targetMonitor = await prisma.targetMonitor.upsert({
     *   create: {
     *     // ... data to create a TargetMonitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TargetMonitor we want to update
     *   }
     * })
     */
    upsert<T extends TargetMonitorUpsertArgs>(args: SelectSubset<T, TargetMonitorUpsertArgs<ExtArgs>>): Prisma__TargetMonitorClient<$Result.GetResult<Prisma.$TargetMonitorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TargetMonitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetMonitorCountArgs} args - Arguments to filter TargetMonitors to count.
     * @example
     * // Count the number of TargetMonitors
     * const count = await prisma.targetMonitor.count({
     *   where: {
     *     // ... the filter for the TargetMonitors we want to count
     *   }
     * })
    **/
    count<T extends TargetMonitorCountArgs>(
      args?: Subset<T, TargetMonitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TargetMonitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TargetMonitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetMonitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TargetMonitorAggregateArgs>(args: Subset<T, TargetMonitorAggregateArgs>): Prisma.PrismaPromise<GetTargetMonitorAggregateType<T>>

    /**
     * Group by TargetMonitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetMonitorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TargetMonitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TargetMonitorGroupByArgs['orderBy'] }
        : { orderBy?: TargetMonitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TargetMonitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargetMonitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TargetMonitor model
   */
  readonly fields: TargetMonitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TargetMonitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TargetMonitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TargetMonitor model
   */ 
  interface TargetMonitorFieldRefs {
    readonly id: FieldRef<"TargetMonitor", 'String'>
    readonly url: FieldRef<"TargetMonitor", 'String'>
    readonly name: FieldRef<"TargetMonitor", 'String'>
    readonly selector: FieldRef<"TargetMonitor", 'String'>
    readonly urlFilter: FieldRef<"TargetMonitor", 'String'>
    readonly minDate: FieldRef<"TargetMonitor", 'DateTime'>
    readonly maxDate: FieldRef<"TargetMonitor", 'DateTime'>
    readonly lastChecked: FieldRef<"TargetMonitor", 'DateTime'>
    readonly isActive: FieldRef<"TargetMonitor", 'Boolean'>
    readonly createdAt: FieldRef<"TargetMonitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TargetMonitor findUnique
   */
  export type TargetMonitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelect<ExtArgs> | null
    /**
     * Filter, which TargetMonitor to fetch.
     */
    where: TargetMonitorWhereUniqueInput
  }

  /**
   * TargetMonitor findUniqueOrThrow
   */
  export type TargetMonitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelect<ExtArgs> | null
    /**
     * Filter, which TargetMonitor to fetch.
     */
    where: TargetMonitorWhereUniqueInput
  }

  /**
   * TargetMonitor findFirst
   */
  export type TargetMonitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelect<ExtArgs> | null
    /**
     * Filter, which TargetMonitor to fetch.
     */
    where?: TargetMonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetMonitors to fetch.
     */
    orderBy?: TargetMonitorOrderByWithRelationInput | TargetMonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetMonitors.
     */
    cursor?: TargetMonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetMonitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetMonitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetMonitors.
     */
    distinct?: TargetMonitorScalarFieldEnum | TargetMonitorScalarFieldEnum[]
  }

  /**
   * TargetMonitor findFirstOrThrow
   */
  export type TargetMonitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelect<ExtArgs> | null
    /**
     * Filter, which TargetMonitor to fetch.
     */
    where?: TargetMonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetMonitors to fetch.
     */
    orderBy?: TargetMonitorOrderByWithRelationInput | TargetMonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetMonitors.
     */
    cursor?: TargetMonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetMonitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetMonitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetMonitors.
     */
    distinct?: TargetMonitorScalarFieldEnum | TargetMonitorScalarFieldEnum[]
  }

  /**
   * TargetMonitor findMany
   */
  export type TargetMonitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelect<ExtArgs> | null
    /**
     * Filter, which TargetMonitors to fetch.
     */
    where?: TargetMonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetMonitors to fetch.
     */
    orderBy?: TargetMonitorOrderByWithRelationInput | TargetMonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TargetMonitors.
     */
    cursor?: TargetMonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetMonitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetMonitors.
     */
    skip?: number
    distinct?: TargetMonitorScalarFieldEnum | TargetMonitorScalarFieldEnum[]
  }

  /**
   * TargetMonitor create
   */
  export type TargetMonitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelect<ExtArgs> | null
    /**
     * The data needed to create a TargetMonitor.
     */
    data: XOR<TargetMonitorCreateInput, TargetMonitorUncheckedCreateInput>
  }

  /**
   * TargetMonitor createMany
   */
  export type TargetMonitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TargetMonitors.
     */
    data: TargetMonitorCreateManyInput | TargetMonitorCreateManyInput[]
  }

  /**
   * TargetMonitor createManyAndReturn
   */
  export type TargetMonitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TargetMonitors.
     */
    data: TargetMonitorCreateManyInput | TargetMonitorCreateManyInput[]
  }

  /**
   * TargetMonitor update
   */
  export type TargetMonitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelect<ExtArgs> | null
    /**
     * The data needed to update a TargetMonitor.
     */
    data: XOR<TargetMonitorUpdateInput, TargetMonitorUncheckedUpdateInput>
    /**
     * Choose, which TargetMonitor to update.
     */
    where: TargetMonitorWhereUniqueInput
  }

  /**
   * TargetMonitor updateMany
   */
  export type TargetMonitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TargetMonitors.
     */
    data: XOR<TargetMonitorUpdateManyMutationInput, TargetMonitorUncheckedUpdateManyInput>
    /**
     * Filter which TargetMonitors to update
     */
    where?: TargetMonitorWhereInput
  }

  /**
   * TargetMonitor upsert
   */
  export type TargetMonitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelect<ExtArgs> | null
    /**
     * The filter to search for the TargetMonitor to update in case it exists.
     */
    where: TargetMonitorWhereUniqueInput
    /**
     * In case the TargetMonitor found by the `where` argument doesn't exist, create a new TargetMonitor with this data.
     */
    create: XOR<TargetMonitorCreateInput, TargetMonitorUncheckedCreateInput>
    /**
     * In case the TargetMonitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TargetMonitorUpdateInput, TargetMonitorUncheckedUpdateInput>
  }

  /**
   * TargetMonitor delete
   */
  export type TargetMonitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelect<ExtArgs> | null
    /**
     * Filter which TargetMonitor to delete.
     */
    where: TargetMonitorWhereUniqueInput
  }

  /**
   * TargetMonitor deleteMany
   */
  export type TargetMonitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetMonitors to delete
     */
    where?: TargetMonitorWhereInput
  }

  /**
   * TargetMonitor without action
   */
  export type TargetMonitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetMonitor
     */
    select?: TargetMonitorSelect<ExtArgs> | null
  }


  /**
   * Model SavedYoutubeVideo
   */

  export type AggregateSavedYoutubeVideo = {
    _count: SavedYoutubeVideoCountAggregateOutputType | null
    _min: SavedYoutubeVideoMinAggregateOutputType | null
    _max: SavedYoutubeVideoMaxAggregateOutputType | null
  }

  export type SavedYoutubeVideoMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    url: string | null
    title: string | null
    imageUrl: string | null
    transcript: string | null
    originalTranscript: string | null
    summary: string | null
    createdAt: Date | null
  }

  export type SavedYoutubeVideoMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    url: string | null
    title: string | null
    imageUrl: string | null
    transcript: string | null
    originalTranscript: string | null
    summary: string | null
    createdAt: Date | null
  }

  export type SavedYoutubeVideoCountAggregateOutputType = {
    id: number
    videoId: number
    url: number
    title: number
    imageUrl: number
    transcript: number
    originalTranscript: number
    summary: number
    createdAt: number
    _all: number
  }


  export type SavedYoutubeVideoMinAggregateInputType = {
    id?: true
    videoId?: true
    url?: true
    title?: true
    imageUrl?: true
    transcript?: true
    originalTranscript?: true
    summary?: true
    createdAt?: true
  }

  export type SavedYoutubeVideoMaxAggregateInputType = {
    id?: true
    videoId?: true
    url?: true
    title?: true
    imageUrl?: true
    transcript?: true
    originalTranscript?: true
    summary?: true
    createdAt?: true
  }

  export type SavedYoutubeVideoCountAggregateInputType = {
    id?: true
    videoId?: true
    url?: true
    title?: true
    imageUrl?: true
    transcript?: true
    originalTranscript?: true
    summary?: true
    createdAt?: true
    _all?: true
  }

  export type SavedYoutubeVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedYoutubeVideo to aggregate.
     */
    where?: SavedYoutubeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedYoutubeVideos to fetch.
     */
    orderBy?: SavedYoutubeVideoOrderByWithRelationInput | SavedYoutubeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedYoutubeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedYoutubeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedYoutubeVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedYoutubeVideos
    **/
    _count?: true | SavedYoutubeVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedYoutubeVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedYoutubeVideoMaxAggregateInputType
  }

  export type GetSavedYoutubeVideoAggregateType<T extends SavedYoutubeVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedYoutubeVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedYoutubeVideo[P]>
      : GetScalarType<T[P], AggregateSavedYoutubeVideo[P]>
  }




  export type SavedYoutubeVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedYoutubeVideoWhereInput
    orderBy?: SavedYoutubeVideoOrderByWithAggregationInput | SavedYoutubeVideoOrderByWithAggregationInput[]
    by: SavedYoutubeVideoScalarFieldEnum[] | SavedYoutubeVideoScalarFieldEnum
    having?: SavedYoutubeVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedYoutubeVideoCountAggregateInputType | true
    _min?: SavedYoutubeVideoMinAggregateInputType
    _max?: SavedYoutubeVideoMaxAggregateInputType
  }

  export type SavedYoutubeVideoGroupByOutputType = {
    id: string
    videoId: string
    url: string
    title: string
    imageUrl: string | null
    transcript: string
    originalTranscript: string | null
    summary: string
    createdAt: Date
    _count: SavedYoutubeVideoCountAggregateOutputType | null
    _min: SavedYoutubeVideoMinAggregateOutputType | null
    _max: SavedYoutubeVideoMaxAggregateOutputType | null
  }

  type GetSavedYoutubeVideoGroupByPayload<T extends SavedYoutubeVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedYoutubeVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedYoutubeVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedYoutubeVideoGroupByOutputType[P]>
            : GetScalarType<T[P], SavedYoutubeVideoGroupByOutputType[P]>
        }
      >
    >


  export type SavedYoutubeVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    url?: boolean
    title?: boolean
    imageUrl?: boolean
    transcript?: boolean
    originalTranscript?: boolean
    summary?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["savedYoutubeVideo"]>

  export type SavedYoutubeVideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    url?: boolean
    title?: boolean
    imageUrl?: boolean
    transcript?: boolean
    originalTranscript?: boolean
    summary?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["savedYoutubeVideo"]>

  export type SavedYoutubeVideoSelectScalar = {
    id?: boolean
    videoId?: boolean
    url?: boolean
    title?: boolean
    imageUrl?: boolean
    transcript?: boolean
    originalTranscript?: boolean
    summary?: boolean
    createdAt?: boolean
  }


  export type $SavedYoutubeVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedYoutubeVideo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      url: string
      title: string
      imageUrl: string | null
      transcript: string
      originalTranscript: string | null
      summary: string
      createdAt: Date
    }, ExtArgs["result"]["savedYoutubeVideo"]>
    composites: {}
  }

  type SavedYoutubeVideoGetPayload<S extends boolean | null | undefined | SavedYoutubeVideoDefaultArgs> = $Result.GetResult<Prisma.$SavedYoutubeVideoPayload, S>

  type SavedYoutubeVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SavedYoutubeVideoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SavedYoutubeVideoCountAggregateInputType | true
    }

  export interface SavedYoutubeVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedYoutubeVideo'], meta: { name: 'SavedYoutubeVideo' } }
    /**
     * Find zero or one SavedYoutubeVideo that matches the filter.
     * @param {SavedYoutubeVideoFindUniqueArgs} args - Arguments to find a SavedYoutubeVideo
     * @example
     * // Get one SavedYoutubeVideo
     * const savedYoutubeVideo = await prisma.savedYoutubeVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedYoutubeVideoFindUniqueArgs>(args: SelectSubset<T, SavedYoutubeVideoFindUniqueArgs<ExtArgs>>): Prisma__SavedYoutubeVideoClient<$Result.GetResult<Prisma.$SavedYoutubeVideoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SavedYoutubeVideo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SavedYoutubeVideoFindUniqueOrThrowArgs} args - Arguments to find a SavedYoutubeVideo
     * @example
     * // Get one SavedYoutubeVideo
     * const savedYoutubeVideo = await prisma.savedYoutubeVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedYoutubeVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedYoutubeVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedYoutubeVideoClient<$Result.GetResult<Prisma.$SavedYoutubeVideoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SavedYoutubeVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedYoutubeVideoFindFirstArgs} args - Arguments to find a SavedYoutubeVideo
     * @example
     * // Get one SavedYoutubeVideo
     * const savedYoutubeVideo = await prisma.savedYoutubeVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedYoutubeVideoFindFirstArgs>(args?: SelectSubset<T, SavedYoutubeVideoFindFirstArgs<ExtArgs>>): Prisma__SavedYoutubeVideoClient<$Result.GetResult<Prisma.$SavedYoutubeVideoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SavedYoutubeVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedYoutubeVideoFindFirstOrThrowArgs} args - Arguments to find a SavedYoutubeVideo
     * @example
     * // Get one SavedYoutubeVideo
     * const savedYoutubeVideo = await prisma.savedYoutubeVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedYoutubeVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedYoutubeVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedYoutubeVideoClient<$Result.GetResult<Prisma.$SavedYoutubeVideoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SavedYoutubeVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedYoutubeVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedYoutubeVideos
     * const savedYoutubeVideos = await prisma.savedYoutubeVideo.findMany()
     * 
     * // Get first 10 SavedYoutubeVideos
     * const savedYoutubeVideos = await prisma.savedYoutubeVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedYoutubeVideoWithIdOnly = await prisma.savedYoutubeVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedYoutubeVideoFindManyArgs>(args?: SelectSubset<T, SavedYoutubeVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedYoutubeVideoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SavedYoutubeVideo.
     * @param {SavedYoutubeVideoCreateArgs} args - Arguments to create a SavedYoutubeVideo.
     * @example
     * // Create one SavedYoutubeVideo
     * const SavedYoutubeVideo = await prisma.savedYoutubeVideo.create({
     *   data: {
     *     // ... data to create a SavedYoutubeVideo
     *   }
     * })
     * 
     */
    create<T extends SavedYoutubeVideoCreateArgs>(args: SelectSubset<T, SavedYoutubeVideoCreateArgs<ExtArgs>>): Prisma__SavedYoutubeVideoClient<$Result.GetResult<Prisma.$SavedYoutubeVideoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SavedYoutubeVideos.
     * @param {SavedYoutubeVideoCreateManyArgs} args - Arguments to create many SavedYoutubeVideos.
     * @example
     * // Create many SavedYoutubeVideos
     * const savedYoutubeVideo = await prisma.savedYoutubeVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedYoutubeVideoCreateManyArgs>(args?: SelectSubset<T, SavedYoutubeVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedYoutubeVideos and returns the data saved in the database.
     * @param {SavedYoutubeVideoCreateManyAndReturnArgs} args - Arguments to create many SavedYoutubeVideos.
     * @example
     * // Create many SavedYoutubeVideos
     * const savedYoutubeVideo = await prisma.savedYoutubeVideo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedYoutubeVideos and only return the `id`
     * const savedYoutubeVideoWithIdOnly = await prisma.savedYoutubeVideo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedYoutubeVideoCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedYoutubeVideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedYoutubeVideoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SavedYoutubeVideo.
     * @param {SavedYoutubeVideoDeleteArgs} args - Arguments to delete one SavedYoutubeVideo.
     * @example
     * // Delete one SavedYoutubeVideo
     * const SavedYoutubeVideo = await prisma.savedYoutubeVideo.delete({
     *   where: {
     *     // ... filter to delete one SavedYoutubeVideo
     *   }
     * })
     * 
     */
    delete<T extends SavedYoutubeVideoDeleteArgs>(args: SelectSubset<T, SavedYoutubeVideoDeleteArgs<ExtArgs>>): Prisma__SavedYoutubeVideoClient<$Result.GetResult<Prisma.$SavedYoutubeVideoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SavedYoutubeVideo.
     * @param {SavedYoutubeVideoUpdateArgs} args - Arguments to update one SavedYoutubeVideo.
     * @example
     * // Update one SavedYoutubeVideo
     * const savedYoutubeVideo = await prisma.savedYoutubeVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedYoutubeVideoUpdateArgs>(args: SelectSubset<T, SavedYoutubeVideoUpdateArgs<ExtArgs>>): Prisma__SavedYoutubeVideoClient<$Result.GetResult<Prisma.$SavedYoutubeVideoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SavedYoutubeVideos.
     * @param {SavedYoutubeVideoDeleteManyArgs} args - Arguments to filter SavedYoutubeVideos to delete.
     * @example
     * // Delete a few SavedYoutubeVideos
     * const { count } = await prisma.savedYoutubeVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedYoutubeVideoDeleteManyArgs>(args?: SelectSubset<T, SavedYoutubeVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedYoutubeVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedYoutubeVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedYoutubeVideos
     * const savedYoutubeVideo = await prisma.savedYoutubeVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedYoutubeVideoUpdateManyArgs>(args: SelectSubset<T, SavedYoutubeVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedYoutubeVideo.
     * @param {SavedYoutubeVideoUpsertArgs} args - Arguments to update or create a SavedYoutubeVideo.
     * @example
     * // Update or create a SavedYoutubeVideo
     * const savedYoutubeVideo = await prisma.savedYoutubeVideo.upsert({
     *   create: {
     *     // ... data to create a SavedYoutubeVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedYoutubeVideo we want to update
     *   }
     * })
     */
    upsert<T extends SavedYoutubeVideoUpsertArgs>(args: SelectSubset<T, SavedYoutubeVideoUpsertArgs<ExtArgs>>): Prisma__SavedYoutubeVideoClient<$Result.GetResult<Prisma.$SavedYoutubeVideoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SavedYoutubeVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedYoutubeVideoCountArgs} args - Arguments to filter SavedYoutubeVideos to count.
     * @example
     * // Count the number of SavedYoutubeVideos
     * const count = await prisma.savedYoutubeVideo.count({
     *   where: {
     *     // ... the filter for the SavedYoutubeVideos we want to count
     *   }
     * })
    **/
    count<T extends SavedYoutubeVideoCountArgs>(
      args?: Subset<T, SavedYoutubeVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedYoutubeVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedYoutubeVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedYoutubeVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedYoutubeVideoAggregateArgs>(args: Subset<T, SavedYoutubeVideoAggregateArgs>): Prisma.PrismaPromise<GetSavedYoutubeVideoAggregateType<T>>

    /**
     * Group by SavedYoutubeVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedYoutubeVideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedYoutubeVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedYoutubeVideoGroupByArgs['orderBy'] }
        : { orderBy?: SavedYoutubeVideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedYoutubeVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedYoutubeVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedYoutubeVideo model
   */
  readonly fields: SavedYoutubeVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedYoutubeVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedYoutubeVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedYoutubeVideo model
   */ 
  interface SavedYoutubeVideoFieldRefs {
    readonly id: FieldRef<"SavedYoutubeVideo", 'String'>
    readonly videoId: FieldRef<"SavedYoutubeVideo", 'String'>
    readonly url: FieldRef<"SavedYoutubeVideo", 'String'>
    readonly title: FieldRef<"SavedYoutubeVideo", 'String'>
    readonly imageUrl: FieldRef<"SavedYoutubeVideo", 'String'>
    readonly transcript: FieldRef<"SavedYoutubeVideo", 'String'>
    readonly originalTranscript: FieldRef<"SavedYoutubeVideo", 'String'>
    readonly summary: FieldRef<"SavedYoutubeVideo", 'String'>
    readonly createdAt: FieldRef<"SavedYoutubeVideo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedYoutubeVideo findUnique
   */
  export type SavedYoutubeVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelect<ExtArgs> | null
    /**
     * Filter, which SavedYoutubeVideo to fetch.
     */
    where: SavedYoutubeVideoWhereUniqueInput
  }

  /**
   * SavedYoutubeVideo findUniqueOrThrow
   */
  export type SavedYoutubeVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelect<ExtArgs> | null
    /**
     * Filter, which SavedYoutubeVideo to fetch.
     */
    where: SavedYoutubeVideoWhereUniqueInput
  }

  /**
   * SavedYoutubeVideo findFirst
   */
  export type SavedYoutubeVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelect<ExtArgs> | null
    /**
     * Filter, which SavedYoutubeVideo to fetch.
     */
    where?: SavedYoutubeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedYoutubeVideos to fetch.
     */
    orderBy?: SavedYoutubeVideoOrderByWithRelationInput | SavedYoutubeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedYoutubeVideos.
     */
    cursor?: SavedYoutubeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedYoutubeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedYoutubeVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedYoutubeVideos.
     */
    distinct?: SavedYoutubeVideoScalarFieldEnum | SavedYoutubeVideoScalarFieldEnum[]
  }

  /**
   * SavedYoutubeVideo findFirstOrThrow
   */
  export type SavedYoutubeVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelect<ExtArgs> | null
    /**
     * Filter, which SavedYoutubeVideo to fetch.
     */
    where?: SavedYoutubeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedYoutubeVideos to fetch.
     */
    orderBy?: SavedYoutubeVideoOrderByWithRelationInput | SavedYoutubeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedYoutubeVideos.
     */
    cursor?: SavedYoutubeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedYoutubeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedYoutubeVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedYoutubeVideos.
     */
    distinct?: SavedYoutubeVideoScalarFieldEnum | SavedYoutubeVideoScalarFieldEnum[]
  }

  /**
   * SavedYoutubeVideo findMany
   */
  export type SavedYoutubeVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelect<ExtArgs> | null
    /**
     * Filter, which SavedYoutubeVideos to fetch.
     */
    where?: SavedYoutubeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedYoutubeVideos to fetch.
     */
    orderBy?: SavedYoutubeVideoOrderByWithRelationInput | SavedYoutubeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedYoutubeVideos.
     */
    cursor?: SavedYoutubeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedYoutubeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedYoutubeVideos.
     */
    skip?: number
    distinct?: SavedYoutubeVideoScalarFieldEnum | SavedYoutubeVideoScalarFieldEnum[]
  }

  /**
   * SavedYoutubeVideo create
   */
  export type SavedYoutubeVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelect<ExtArgs> | null
    /**
     * The data needed to create a SavedYoutubeVideo.
     */
    data: XOR<SavedYoutubeVideoCreateInput, SavedYoutubeVideoUncheckedCreateInput>
  }

  /**
   * SavedYoutubeVideo createMany
   */
  export type SavedYoutubeVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedYoutubeVideos.
     */
    data: SavedYoutubeVideoCreateManyInput | SavedYoutubeVideoCreateManyInput[]
  }

  /**
   * SavedYoutubeVideo createManyAndReturn
   */
  export type SavedYoutubeVideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SavedYoutubeVideos.
     */
    data: SavedYoutubeVideoCreateManyInput | SavedYoutubeVideoCreateManyInput[]
  }

  /**
   * SavedYoutubeVideo update
   */
  export type SavedYoutubeVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelect<ExtArgs> | null
    /**
     * The data needed to update a SavedYoutubeVideo.
     */
    data: XOR<SavedYoutubeVideoUpdateInput, SavedYoutubeVideoUncheckedUpdateInput>
    /**
     * Choose, which SavedYoutubeVideo to update.
     */
    where: SavedYoutubeVideoWhereUniqueInput
  }

  /**
   * SavedYoutubeVideo updateMany
   */
  export type SavedYoutubeVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedYoutubeVideos.
     */
    data: XOR<SavedYoutubeVideoUpdateManyMutationInput, SavedYoutubeVideoUncheckedUpdateManyInput>
    /**
     * Filter which SavedYoutubeVideos to update
     */
    where?: SavedYoutubeVideoWhereInput
  }

  /**
   * SavedYoutubeVideo upsert
   */
  export type SavedYoutubeVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelect<ExtArgs> | null
    /**
     * The filter to search for the SavedYoutubeVideo to update in case it exists.
     */
    where: SavedYoutubeVideoWhereUniqueInput
    /**
     * In case the SavedYoutubeVideo found by the `where` argument doesn't exist, create a new SavedYoutubeVideo with this data.
     */
    create: XOR<SavedYoutubeVideoCreateInput, SavedYoutubeVideoUncheckedCreateInput>
    /**
     * In case the SavedYoutubeVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedYoutubeVideoUpdateInput, SavedYoutubeVideoUncheckedUpdateInput>
  }

  /**
   * SavedYoutubeVideo delete
   */
  export type SavedYoutubeVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelect<ExtArgs> | null
    /**
     * Filter which SavedYoutubeVideo to delete.
     */
    where: SavedYoutubeVideoWhereUniqueInput
  }

  /**
   * SavedYoutubeVideo deleteMany
   */
  export type SavedYoutubeVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedYoutubeVideos to delete
     */
    where?: SavedYoutubeVideoWhereInput
  }

  /**
   * SavedYoutubeVideo without action
   */
  export type SavedYoutubeVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedYoutubeVideo
     */
    select?: SavedYoutubeVideoSelect<ExtArgs> | null
  }


  /**
   * Model TrendingTopic
   */

  export type AggregateTrendingTopic = {
    _count: TrendingTopicCountAggregateOutputType | null
    _min: TrendingTopicMinAggregateOutputType | null
    _max: TrendingTopicMaxAggregateOutputType | null
  }

  export type TrendingTopicMinAggregateOutputType = {
    id: string | null
    title: string | null
    formattedTraffic: string | null
    relatedQueries: string | null
    articles: string | null
    trendDate: Date | null
    createdAt: Date | null
  }

  export type TrendingTopicMaxAggregateOutputType = {
    id: string | null
    title: string | null
    formattedTraffic: string | null
    relatedQueries: string | null
    articles: string | null
    trendDate: Date | null
    createdAt: Date | null
  }

  export type TrendingTopicCountAggregateOutputType = {
    id: number
    title: number
    formattedTraffic: number
    relatedQueries: number
    articles: number
    trendDate: number
    createdAt: number
    _all: number
  }


  export type TrendingTopicMinAggregateInputType = {
    id?: true
    title?: true
    formattedTraffic?: true
    relatedQueries?: true
    articles?: true
    trendDate?: true
    createdAt?: true
  }

  export type TrendingTopicMaxAggregateInputType = {
    id?: true
    title?: true
    formattedTraffic?: true
    relatedQueries?: true
    articles?: true
    trendDate?: true
    createdAt?: true
  }

  export type TrendingTopicCountAggregateInputType = {
    id?: true
    title?: true
    formattedTraffic?: true
    relatedQueries?: true
    articles?: true
    trendDate?: true
    createdAt?: true
    _all?: true
  }

  export type TrendingTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendingTopic to aggregate.
     */
    where?: TrendingTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingTopics to fetch.
     */
    orderBy?: TrendingTopicOrderByWithRelationInput | TrendingTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrendingTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrendingTopics
    **/
    _count?: true | TrendingTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrendingTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrendingTopicMaxAggregateInputType
  }

  export type GetTrendingTopicAggregateType<T extends TrendingTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTrendingTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrendingTopic[P]>
      : GetScalarType<T[P], AggregateTrendingTopic[P]>
  }




  export type TrendingTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendingTopicWhereInput
    orderBy?: TrendingTopicOrderByWithAggregationInput | TrendingTopicOrderByWithAggregationInput[]
    by: TrendingTopicScalarFieldEnum[] | TrendingTopicScalarFieldEnum
    having?: TrendingTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrendingTopicCountAggregateInputType | true
    _min?: TrendingTopicMinAggregateInputType
    _max?: TrendingTopicMaxAggregateInputType
  }

  export type TrendingTopicGroupByOutputType = {
    id: string
    title: string
    formattedTraffic: string | null
    relatedQueries: string | null
    articles: string | null
    trendDate: Date
    createdAt: Date
    _count: TrendingTopicCountAggregateOutputType | null
    _min: TrendingTopicMinAggregateOutputType | null
    _max: TrendingTopicMaxAggregateOutputType | null
  }

  type GetTrendingTopicGroupByPayload<T extends TrendingTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrendingTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrendingTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrendingTopicGroupByOutputType[P]>
            : GetScalarType<T[P], TrendingTopicGroupByOutputType[P]>
        }
      >
    >


  export type TrendingTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    formattedTraffic?: boolean
    relatedQueries?: boolean
    articles?: boolean
    trendDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["trendingTopic"]>

  export type TrendingTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    formattedTraffic?: boolean
    relatedQueries?: boolean
    articles?: boolean
    trendDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["trendingTopic"]>

  export type TrendingTopicSelectScalar = {
    id?: boolean
    title?: boolean
    formattedTraffic?: boolean
    relatedQueries?: boolean
    articles?: boolean
    trendDate?: boolean
    createdAt?: boolean
  }


  export type $TrendingTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrendingTopic"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      formattedTraffic: string | null
      relatedQueries: string | null
      articles: string | null
      trendDate: Date
      createdAt: Date
    }, ExtArgs["result"]["trendingTopic"]>
    composites: {}
  }

  type TrendingTopicGetPayload<S extends boolean | null | undefined | TrendingTopicDefaultArgs> = $Result.GetResult<Prisma.$TrendingTopicPayload, S>

  type TrendingTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrendingTopicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrendingTopicCountAggregateInputType | true
    }

  export interface TrendingTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrendingTopic'], meta: { name: 'TrendingTopic' } }
    /**
     * Find zero or one TrendingTopic that matches the filter.
     * @param {TrendingTopicFindUniqueArgs} args - Arguments to find a TrendingTopic
     * @example
     * // Get one TrendingTopic
     * const trendingTopic = await prisma.trendingTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrendingTopicFindUniqueArgs>(args: SelectSubset<T, TrendingTopicFindUniqueArgs<ExtArgs>>): Prisma__TrendingTopicClient<$Result.GetResult<Prisma.$TrendingTopicPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TrendingTopic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrendingTopicFindUniqueOrThrowArgs} args - Arguments to find a TrendingTopic
     * @example
     * // Get one TrendingTopic
     * const trendingTopic = await prisma.trendingTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrendingTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TrendingTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrendingTopicClient<$Result.GetResult<Prisma.$TrendingTopicPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TrendingTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingTopicFindFirstArgs} args - Arguments to find a TrendingTopic
     * @example
     * // Get one TrendingTopic
     * const trendingTopic = await prisma.trendingTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrendingTopicFindFirstArgs>(args?: SelectSubset<T, TrendingTopicFindFirstArgs<ExtArgs>>): Prisma__TrendingTopicClient<$Result.GetResult<Prisma.$TrendingTopicPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TrendingTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingTopicFindFirstOrThrowArgs} args - Arguments to find a TrendingTopic
     * @example
     * // Get one TrendingTopic
     * const trendingTopic = await prisma.trendingTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrendingTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TrendingTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrendingTopicClient<$Result.GetResult<Prisma.$TrendingTopicPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TrendingTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrendingTopics
     * const trendingTopics = await prisma.trendingTopic.findMany()
     * 
     * // Get first 10 TrendingTopics
     * const trendingTopics = await prisma.trendingTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trendingTopicWithIdOnly = await prisma.trendingTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrendingTopicFindManyArgs>(args?: SelectSubset<T, TrendingTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendingTopicPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TrendingTopic.
     * @param {TrendingTopicCreateArgs} args - Arguments to create a TrendingTopic.
     * @example
     * // Create one TrendingTopic
     * const TrendingTopic = await prisma.trendingTopic.create({
     *   data: {
     *     // ... data to create a TrendingTopic
     *   }
     * })
     * 
     */
    create<T extends TrendingTopicCreateArgs>(args: SelectSubset<T, TrendingTopicCreateArgs<ExtArgs>>): Prisma__TrendingTopicClient<$Result.GetResult<Prisma.$TrendingTopicPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TrendingTopics.
     * @param {TrendingTopicCreateManyArgs} args - Arguments to create many TrendingTopics.
     * @example
     * // Create many TrendingTopics
     * const trendingTopic = await prisma.trendingTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrendingTopicCreateManyArgs>(args?: SelectSubset<T, TrendingTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrendingTopics and returns the data saved in the database.
     * @param {TrendingTopicCreateManyAndReturnArgs} args - Arguments to create many TrendingTopics.
     * @example
     * // Create many TrendingTopics
     * const trendingTopic = await prisma.trendingTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrendingTopics and only return the `id`
     * const trendingTopicWithIdOnly = await prisma.trendingTopic.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrendingTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TrendingTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendingTopicPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TrendingTopic.
     * @param {TrendingTopicDeleteArgs} args - Arguments to delete one TrendingTopic.
     * @example
     * // Delete one TrendingTopic
     * const TrendingTopic = await prisma.trendingTopic.delete({
     *   where: {
     *     // ... filter to delete one TrendingTopic
     *   }
     * })
     * 
     */
    delete<T extends TrendingTopicDeleteArgs>(args: SelectSubset<T, TrendingTopicDeleteArgs<ExtArgs>>): Prisma__TrendingTopicClient<$Result.GetResult<Prisma.$TrendingTopicPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TrendingTopic.
     * @param {TrendingTopicUpdateArgs} args - Arguments to update one TrendingTopic.
     * @example
     * // Update one TrendingTopic
     * const trendingTopic = await prisma.trendingTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrendingTopicUpdateArgs>(args: SelectSubset<T, TrendingTopicUpdateArgs<ExtArgs>>): Prisma__TrendingTopicClient<$Result.GetResult<Prisma.$TrendingTopicPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TrendingTopics.
     * @param {TrendingTopicDeleteManyArgs} args - Arguments to filter TrendingTopics to delete.
     * @example
     * // Delete a few TrendingTopics
     * const { count } = await prisma.trendingTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrendingTopicDeleteManyArgs>(args?: SelectSubset<T, TrendingTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrendingTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrendingTopics
     * const trendingTopic = await prisma.trendingTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrendingTopicUpdateManyArgs>(args: SelectSubset<T, TrendingTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrendingTopic.
     * @param {TrendingTopicUpsertArgs} args - Arguments to update or create a TrendingTopic.
     * @example
     * // Update or create a TrendingTopic
     * const trendingTopic = await prisma.trendingTopic.upsert({
     *   create: {
     *     // ... data to create a TrendingTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrendingTopic we want to update
     *   }
     * })
     */
    upsert<T extends TrendingTopicUpsertArgs>(args: SelectSubset<T, TrendingTopicUpsertArgs<ExtArgs>>): Prisma__TrendingTopicClient<$Result.GetResult<Prisma.$TrendingTopicPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TrendingTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingTopicCountArgs} args - Arguments to filter TrendingTopics to count.
     * @example
     * // Count the number of TrendingTopics
     * const count = await prisma.trendingTopic.count({
     *   where: {
     *     // ... the filter for the TrendingTopics we want to count
     *   }
     * })
    **/
    count<T extends TrendingTopicCountArgs>(
      args?: Subset<T, TrendingTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrendingTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrendingTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrendingTopicAggregateArgs>(args: Subset<T, TrendingTopicAggregateArgs>): Prisma.PrismaPromise<GetTrendingTopicAggregateType<T>>

    /**
     * Group by TrendingTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingTopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrendingTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrendingTopicGroupByArgs['orderBy'] }
        : { orderBy?: TrendingTopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrendingTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrendingTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrendingTopic model
   */
  readonly fields: TrendingTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrendingTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrendingTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrendingTopic model
   */ 
  interface TrendingTopicFieldRefs {
    readonly id: FieldRef<"TrendingTopic", 'String'>
    readonly title: FieldRef<"TrendingTopic", 'String'>
    readonly formattedTraffic: FieldRef<"TrendingTopic", 'String'>
    readonly relatedQueries: FieldRef<"TrendingTopic", 'String'>
    readonly articles: FieldRef<"TrendingTopic", 'String'>
    readonly trendDate: FieldRef<"TrendingTopic", 'DateTime'>
    readonly createdAt: FieldRef<"TrendingTopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrendingTopic findUnique
   */
  export type TrendingTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelect<ExtArgs> | null
    /**
     * Filter, which TrendingTopic to fetch.
     */
    where: TrendingTopicWhereUniqueInput
  }

  /**
   * TrendingTopic findUniqueOrThrow
   */
  export type TrendingTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelect<ExtArgs> | null
    /**
     * Filter, which TrendingTopic to fetch.
     */
    where: TrendingTopicWhereUniqueInput
  }

  /**
   * TrendingTopic findFirst
   */
  export type TrendingTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelect<ExtArgs> | null
    /**
     * Filter, which TrendingTopic to fetch.
     */
    where?: TrendingTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingTopics to fetch.
     */
    orderBy?: TrendingTopicOrderByWithRelationInput | TrendingTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendingTopics.
     */
    cursor?: TrendingTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendingTopics.
     */
    distinct?: TrendingTopicScalarFieldEnum | TrendingTopicScalarFieldEnum[]
  }

  /**
   * TrendingTopic findFirstOrThrow
   */
  export type TrendingTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelect<ExtArgs> | null
    /**
     * Filter, which TrendingTopic to fetch.
     */
    where?: TrendingTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingTopics to fetch.
     */
    orderBy?: TrendingTopicOrderByWithRelationInput | TrendingTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendingTopics.
     */
    cursor?: TrendingTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendingTopics.
     */
    distinct?: TrendingTopicScalarFieldEnum | TrendingTopicScalarFieldEnum[]
  }

  /**
   * TrendingTopic findMany
   */
  export type TrendingTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelect<ExtArgs> | null
    /**
     * Filter, which TrendingTopics to fetch.
     */
    where?: TrendingTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingTopics to fetch.
     */
    orderBy?: TrendingTopicOrderByWithRelationInput | TrendingTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrendingTopics.
     */
    cursor?: TrendingTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingTopics.
     */
    skip?: number
    distinct?: TrendingTopicScalarFieldEnum | TrendingTopicScalarFieldEnum[]
  }

  /**
   * TrendingTopic create
   */
  export type TrendingTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelect<ExtArgs> | null
    /**
     * The data needed to create a TrendingTopic.
     */
    data: XOR<TrendingTopicCreateInput, TrendingTopicUncheckedCreateInput>
  }

  /**
   * TrendingTopic createMany
   */
  export type TrendingTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrendingTopics.
     */
    data: TrendingTopicCreateManyInput | TrendingTopicCreateManyInput[]
  }

  /**
   * TrendingTopic createManyAndReturn
   */
  export type TrendingTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TrendingTopics.
     */
    data: TrendingTopicCreateManyInput | TrendingTopicCreateManyInput[]
  }

  /**
   * TrendingTopic update
   */
  export type TrendingTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelect<ExtArgs> | null
    /**
     * The data needed to update a TrendingTopic.
     */
    data: XOR<TrendingTopicUpdateInput, TrendingTopicUncheckedUpdateInput>
    /**
     * Choose, which TrendingTopic to update.
     */
    where: TrendingTopicWhereUniqueInput
  }

  /**
   * TrendingTopic updateMany
   */
  export type TrendingTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrendingTopics.
     */
    data: XOR<TrendingTopicUpdateManyMutationInput, TrendingTopicUncheckedUpdateManyInput>
    /**
     * Filter which TrendingTopics to update
     */
    where?: TrendingTopicWhereInput
  }

  /**
   * TrendingTopic upsert
   */
  export type TrendingTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelect<ExtArgs> | null
    /**
     * The filter to search for the TrendingTopic to update in case it exists.
     */
    where: TrendingTopicWhereUniqueInput
    /**
     * In case the TrendingTopic found by the `where` argument doesn't exist, create a new TrendingTopic with this data.
     */
    create: XOR<TrendingTopicCreateInput, TrendingTopicUncheckedCreateInput>
    /**
     * In case the TrendingTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrendingTopicUpdateInput, TrendingTopicUncheckedUpdateInput>
  }

  /**
   * TrendingTopic delete
   */
  export type TrendingTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelect<ExtArgs> | null
    /**
     * Filter which TrendingTopic to delete.
     */
    where: TrendingTopicWhereUniqueInput
  }

  /**
   * TrendingTopic deleteMany
   */
  export type TrendingTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendingTopics to delete
     */
    where?: TrendingTopicWhereInput
  }

  /**
   * TrendingTopic without action
   */
  export type TrendingTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingTopic
     */
    select?: TrendingTopicSelect<ExtArgs> | null
  }


  /**
   * Model SystemSetting
   */

  export type AggregateSystemSetting = {
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  export type SystemSettingMinAggregateOutputType = {
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SystemSettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SystemSettingCountAggregateOutputType = {
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingMinAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SystemSettingMaxAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SystemSettingCountAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSetting to aggregate.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingMaxAggregateInputType
  }

  export type GetSystemSettingAggregateType<T extends SystemSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSetting[P]>
      : GetScalarType<T[P], AggregateSystemSetting[P]>
  }




  export type SystemSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingWhereInput
    orderBy?: SystemSettingOrderByWithAggregationInput | SystemSettingOrderByWithAggregationInput[]
    by: SystemSettingScalarFieldEnum[] | SystemSettingScalarFieldEnum
    having?: SystemSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingCountAggregateInputType | true
    _min?: SystemSettingMinAggregateInputType
    _max?: SystemSettingMaxAggregateInputType
  }

  export type SystemSettingGroupByOutputType = {
    key: string
    value: string
    updatedAt: Date
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  type GetSystemSettingGroupByPayload<T extends SystemSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectScalar = {
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }


  export type $SystemSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      updatedAt: Date
    }, ExtArgs["result"]["systemSetting"]>
    composites: {}
  }

  type SystemSettingGetPayload<S extends boolean | null | undefined | SystemSettingDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingPayload, S>

  type SystemSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemSettingCountAggregateInputType | true
    }

  export interface SystemSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSetting'], meta: { name: 'SystemSetting' } }
    /**
     * Find zero or one SystemSetting that matches the filter.
     * @param {SystemSettingFindUniqueArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingFindUniqueArgs>(args: SelectSubset<T, SystemSettingFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SystemSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemSettingFindUniqueOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SystemSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingFindFirstArgs>(args?: SelectSubset<T, SystemSettingFindFirstArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SystemSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const systemSettingWithKeyOnly = await prisma.systemSetting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SystemSettingFindManyArgs>(args?: SelectSubset<T, SystemSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SystemSetting.
     * @param {SystemSettingCreateArgs} args - Arguments to create a SystemSetting.
     * @example
     * // Create one SystemSetting
     * const SystemSetting = await prisma.systemSetting.create({
     *   data: {
     *     // ... data to create a SystemSetting
     *   }
     * })
     * 
     */
    create<T extends SystemSettingCreateArgs>(args: SelectSubset<T, SystemSettingCreateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingCreateManyArgs>(args?: SelectSubset<T, SystemSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `key`
     * const systemSettingWithKeyOnly = await prisma.systemSetting.createManyAndReturn({ 
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SystemSetting.
     * @param {SystemSettingDeleteArgs} args - Arguments to delete one SystemSetting.
     * @example
     * // Delete one SystemSetting
     * const SystemSetting = await prisma.systemSetting.delete({
     *   where: {
     *     // ... filter to delete one SystemSetting
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingDeleteArgs>(args: SelectSubset<T, SystemSettingDeleteArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SystemSetting.
     * @param {SystemSettingUpdateArgs} args - Arguments to update one SystemSetting.
     * @example
     * // Update one SystemSetting
     * const systemSetting = await prisma.systemSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingUpdateArgs>(args: SelectSubset<T, SystemSettingUpdateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingDeleteManyArgs>(args?: SelectSubset<T, SystemSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingUpdateManyArgs>(args: SelectSubset<T, SystemSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemSetting.
     * @param {SystemSettingUpsertArgs} args - Arguments to update or create a SystemSetting.
     * @example
     * // Update or create a SystemSetting
     * const systemSetting = await prisma.systemSetting.upsert({
     *   create: {
     *     // ... data to create a SystemSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSetting we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingUpsertArgs>(args: SelectSubset<T, SystemSettingUpsertArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSetting.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingCountArgs>(
      args?: Subset<T, SystemSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemSettingAggregateArgs>(args: Subset<T, SystemSettingAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingAggregateType<T>>

    /**
     * Group by SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSetting model
   */
  readonly fields: SystemSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSetting model
   */ 
  interface SystemSettingFieldRefs {
    readonly key: FieldRef<"SystemSetting", 'String'>
    readonly value: FieldRef<"SystemSetting", 'String'>
    readonly updatedAt: FieldRef<"SystemSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSetting findUnique
   */
  export type SystemSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findUniqueOrThrow
   */
  export type SystemSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findFirst
   */
  export type SystemSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findFirstOrThrow
   */
  export type SystemSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findMany
   */
  export type SystemSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting create
   */
  export type SystemSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * The data needed to create a SystemSetting.
     */
    data: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
  }

  /**
   * SystemSetting createMany
   */
  export type SystemSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
  }

  /**
   * SystemSetting createManyAndReturn
   */
  export type SystemSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
  }

  /**
   * SystemSetting update
   */
  export type SystemSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * The data needed to update a SystemSetting.
     */
    data: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
    /**
     * Choose, which SystemSetting to update.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting updateMany
   */
  export type SystemSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
  }

  /**
   * SystemSetting upsert
   */
  export type SystemSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * The filter to search for the SystemSetting to update in case it exists.
     */
    where: SystemSettingWhereUniqueInput
    /**
     * In case the SystemSetting found by the `where` argument doesn't exist, create a new SystemSetting with this data.
     */
    create: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
    /**
     * In case the SystemSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
  }

  /**
   * SystemSetting delete
   */
  export type SystemSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Filter which SystemSetting to delete.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting deleteMany
   */
  export type SystemSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingWhereInput
  }

  /**
   * SystemSetting without action
   */
  export type SystemSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
  }


  /**
   * Model TrendDocument
   */

  export type AggregateTrendDocument = {
    _count: TrendDocumentCountAggregateOutputType | null
    _min: TrendDocumentMinAggregateOutputType | null
    _max: TrendDocumentMaxAggregateOutputType | null
  }

  export type TrendDocumentMinAggregateOutputType = {
    id: string | null
    filename: string | null
    uploadedAt: Date | null
  }

  export type TrendDocumentMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    uploadedAt: Date | null
  }

  export type TrendDocumentCountAggregateOutputType = {
    id: number
    filename: number
    uploadedAt: number
    _all: number
  }


  export type TrendDocumentMinAggregateInputType = {
    id?: true
    filename?: true
    uploadedAt?: true
  }

  export type TrendDocumentMaxAggregateInputType = {
    id?: true
    filename?: true
    uploadedAt?: true
  }

  export type TrendDocumentCountAggregateInputType = {
    id?: true
    filename?: true
    uploadedAt?: true
    _all?: true
  }

  export type TrendDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendDocument to aggregate.
     */
    where?: TrendDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendDocuments to fetch.
     */
    orderBy?: TrendDocumentOrderByWithRelationInput | TrendDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrendDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrendDocuments
    **/
    _count?: true | TrendDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrendDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrendDocumentMaxAggregateInputType
  }

  export type GetTrendDocumentAggregateType<T extends TrendDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateTrendDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrendDocument[P]>
      : GetScalarType<T[P], AggregateTrendDocument[P]>
  }




  export type TrendDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendDocumentWhereInput
    orderBy?: TrendDocumentOrderByWithAggregationInput | TrendDocumentOrderByWithAggregationInput[]
    by: TrendDocumentScalarFieldEnum[] | TrendDocumentScalarFieldEnum
    having?: TrendDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrendDocumentCountAggregateInputType | true
    _min?: TrendDocumentMinAggregateInputType
    _max?: TrendDocumentMaxAggregateInputType
  }

  export type TrendDocumentGroupByOutputType = {
    id: string
    filename: string
    uploadedAt: Date
    _count: TrendDocumentCountAggregateOutputType | null
    _min: TrendDocumentMinAggregateOutputType | null
    _max: TrendDocumentMaxAggregateOutputType | null
  }

  type GetTrendDocumentGroupByPayload<T extends TrendDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrendDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrendDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrendDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], TrendDocumentGroupByOutputType[P]>
        }
      >
    >


  export type TrendDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    uploadedAt?: boolean
    trends?: boolean | TrendDocument$trendsArgs<ExtArgs>
    _count?: boolean | TrendDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trendDocument"]>

  export type TrendDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    uploadedAt?: boolean
  }, ExtArgs["result"]["trendDocument"]>

  export type TrendDocumentSelectScalar = {
    id?: boolean
    filename?: boolean
    uploadedAt?: boolean
  }

  export type TrendDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trends?: boolean | TrendDocument$trendsArgs<ExtArgs>
    _count?: boolean | TrendDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrendDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrendDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrendDocument"
    objects: {
      trends: Prisma.$TrendPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      uploadedAt: Date
    }, ExtArgs["result"]["trendDocument"]>
    composites: {}
  }

  type TrendDocumentGetPayload<S extends boolean | null | undefined | TrendDocumentDefaultArgs> = $Result.GetResult<Prisma.$TrendDocumentPayload, S>

  type TrendDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrendDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrendDocumentCountAggregateInputType | true
    }

  export interface TrendDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrendDocument'], meta: { name: 'TrendDocument' } }
    /**
     * Find zero or one TrendDocument that matches the filter.
     * @param {TrendDocumentFindUniqueArgs} args - Arguments to find a TrendDocument
     * @example
     * // Get one TrendDocument
     * const trendDocument = await prisma.trendDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrendDocumentFindUniqueArgs>(args: SelectSubset<T, TrendDocumentFindUniqueArgs<ExtArgs>>): Prisma__TrendDocumentClient<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TrendDocument that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrendDocumentFindUniqueOrThrowArgs} args - Arguments to find a TrendDocument
     * @example
     * // Get one TrendDocument
     * const trendDocument = await prisma.trendDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrendDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, TrendDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrendDocumentClient<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TrendDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendDocumentFindFirstArgs} args - Arguments to find a TrendDocument
     * @example
     * // Get one TrendDocument
     * const trendDocument = await prisma.trendDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrendDocumentFindFirstArgs>(args?: SelectSubset<T, TrendDocumentFindFirstArgs<ExtArgs>>): Prisma__TrendDocumentClient<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TrendDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendDocumentFindFirstOrThrowArgs} args - Arguments to find a TrendDocument
     * @example
     * // Get one TrendDocument
     * const trendDocument = await prisma.trendDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrendDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, TrendDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrendDocumentClient<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TrendDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrendDocuments
     * const trendDocuments = await prisma.trendDocument.findMany()
     * 
     * // Get first 10 TrendDocuments
     * const trendDocuments = await prisma.trendDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trendDocumentWithIdOnly = await prisma.trendDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrendDocumentFindManyArgs>(args?: SelectSubset<T, TrendDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TrendDocument.
     * @param {TrendDocumentCreateArgs} args - Arguments to create a TrendDocument.
     * @example
     * // Create one TrendDocument
     * const TrendDocument = await prisma.trendDocument.create({
     *   data: {
     *     // ... data to create a TrendDocument
     *   }
     * })
     * 
     */
    create<T extends TrendDocumentCreateArgs>(args: SelectSubset<T, TrendDocumentCreateArgs<ExtArgs>>): Prisma__TrendDocumentClient<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TrendDocuments.
     * @param {TrendDocumentCreateManyArgs} args - Arguments to create many TrendDocuments.
     * @example
     * // Create many TrendDocuments
     * const trendDocument = await prisma.trendDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrendDocumentCreateManyArgs>(args?: SelectSubset<T, TrendDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrendDocuments and returns the data saved in the database.
     * @param {TrendDocumentCreateManyAndReturnArgs} args - Arguments to create many TrendDocuments.
     * @example
     * // Create many TrendDocuments
     * const trendDocument = await prisma.trendDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrendDocuments and only return the `id`
     * const trendDocumentWithIdOnly = await prisma.trendDocument.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrendDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, TrendDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TrendDocument.
     * @param {TrendDocumentDeleteArgs} args - Arguments to delete one TrendDocument.
     * @example
     * // Delete one TrendDocument
     * const TrendDocument = await prisma.trendDocument.delete({
     *   where: {
     *     // ... filter to delete one TrendDocument
     *   }
     * })
     * 
     */
    delete<T extends TrendDocumentDeleteArgs>(args: SelectSubset<T, TrendDocumentDeleteArgs<ExtArgs>>): Prisma__TrendDocumentClient<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TrendDocument.
     * @param {TrendDocumentUpdateArgs} args - Arguments to update one TrendDocument.
     * @example
     * // Update one TrendDocument
     * const trendDocument = await prisma.trendDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrendDocumentUpdateArgs>(args: SelectSubset<T, TrendDocumentUpdateArgs<ExtArgs>>): Prisma__TrendDocumentClient<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TrendDocuments.
     * @param {TrendDocumentDeleteManyArgs} args - Arguments to filter TrendDocuments to delete.
     * @example
     * // Delete a few TrendDocuments
     * const { count } = await prisma.trendDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrendDocumentDeleteManyArgs>(args?: SelectSubset<T, TrendDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrendDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrendDocuments
     * const trendDocument = await prisma.trendDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrendDocumentUpdateManyArgs>(args: SelectSubset<T, TrendDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrendDocument.
     * @param {TrendDocumentUpsertArgs} args - Arguments to update or create a TrendDocument.
     * @example
     * // Update or create a TrendDocument
     * const trendDocument = await prisma.trendDocument.upsert({
     *   create: {
     *     // ... data to create a TrendDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrendDocument we want to update
     *   }
     * })
     */
    upsert<T extends TrendDocumentUpsertArgs>(args: SelectSubset<T, TrendDocumentUpsertArgs<ExtArgs>>): Prisma__TrendDocumentClient<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TrendDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendDocumentCountArgs} args - Arguments to filter TrendDocuments to count.
     * @example
     * // Count the number of TrendDocuments
     * const count = await prisma.trendDocument.count({
     *   where: {
     *     // ... the filter for the TrendDocuments we want to count
     *   }
     * })
    **/
    count<T extends TrendDocumentCountArgs>(
      args?: Subset<T, TrendDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrendDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrendDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrendDocumentAggregateArgs>(args: Subset<T, TrendDocumentAggregateArgs>): Prisma.PrismaPromise<GetTrendDocumentAggregateType<T>>

    /**
     * Group by TrendDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrendDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrendDocumentGroupByArgs['orderBy'] }
        : { orderBy?: TrendDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrendDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrendDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrendDocument model
   */
  readonly fields: TrendDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrendDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrendDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trends<T extends TrendDocument$trendsArgs<ExtArgs> = {}>(args?: Subset<T, TrendDocument$trendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrendDocument model
   */ 
  interface TrendDocumentFieldRefs {
    readonly id: FieldRef<"TrendDocument", 'String'>
    readonly filename: FieldRef<"TrendDocument", 'String'>
    readonly uploadedAt: FieldRef<"TrendDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrendDocument findUnique
   */
  export type TrendDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TrendDocument to fetch.
     */
    where: TrendDocumentWhereUniqueInput
  }

  /**
   * TrendDocument findUniqueOrThrow
   */
  export type TrendDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TrendDocument to fetch.
     */
    where: TrendDocumentWhereUniqueInput
  }

  /**
   * TrendDocument findFirst
   */
  export type TrendDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TrendDocument to fetch.
     */
    where?: TrendDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendDocuments to fetch.
     */
    orderBy?: TrendDocumentOrderByWithRelationInput | TrendDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendDocuments.
     */
    cursor?: TrendDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendDocuments.
     */
    distinct?: TrendDocumentScalarFieldEnum | TrendDocumentScalarFieldEnum[]
  }

  /**
   * TrendDocument findFirstOrThrow
   */
  export type TrendDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TrendDocument to fetch.
     */
    where?: TrendDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendDocuments to fetch.
     */
    orderBy?: TrendDocumentOrderByWithRelationInput | TrendDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendDocuments.
     */
    cursor?: TrendDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendDocuments.
     */
    distinct?: TrendDocumentScalarFieldEnum | TrendDocumentScalarFieldEnum[]
  }

  /**
   * TrendDocument findMany
   */
  export type TrendDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendDocumentInclude<ExtArgs> | null
    /**
     * Filter, which TrendDocuments to fetch.
     */
    where?: TrendDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendDocuments to fetch.
     */
    orderBy?: TrendDocumentOrderByWithRelationInput | TrendDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrendDocuments.
     */
    cursor?: TrendDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendDocuments.
     */
    skip?: number
    distinct?: TrendDocumentScalarFieldEnum | TrendDocumentScalarFieldEnum[]
  }

  /**
   * TrendDocument create
   */
  export type TrendDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a TrendDocument.
     */
    data: XOR<TrendDocumentCreateInput, TrendDocumentUncheckedCreateInput>
  }

  /**
   * TrendDocument createMany
   */
  export type TrendDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrendDocuments.
     */
    data: TrendDocumentCreateManyInput | TrendDocumentCreateManyInput[]
  }

  /**
   * TrendDocument createManyAndReturn
   */
  export type TrendDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TrendDocuments.
     */
    data: TrendDocumentCreateManyInput | TrendDocumentCreateManyInput[]
  }

  /**
   * TrendDocument update
   */
  export type TrendDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a TrendDocument.
     */
    data: XOR<TrendDocumentUpdateInput, TrendDocumentUncheckedUpdateInput>
    /**
     * Choose, which TrendDocument to update.
     */
    where: TrendDocumentWhereUniqueInput
  }

  /**
   * TrendDocument updateMany
   */
  export type TrendDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrendDocuments.
     */
    data: XOR<TrendDocumentUpdateManyMutationInput, TrendDocumentUncheckedUpdateManyInput>
    /**
     * Filter which TrendDocuments to update
     */
    where?: TrendDocumentWhereInput
  }

  /**
   * TrendDocument upsert
   */
  export type TrendDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the TrendDocument to update in case it exists.
     */
    where: TrendDocumentWhereUniqueInput
    /**
     * In case the TrendDocument found by the `where` argument doesn't exist, create a new TrendDocument with this data.
     */
    create: XOR<TrendDocumentCreateInput, TrendDocumentUncheckedCreateInput>
    /**
     * In case the TrendDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrendDocumentUpdateInput, TrendDocumentUncheckedUpdateInput>
  }

  /**
   * TrendDocument delete
   */
  export type TrendDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendDocumentInclude<ExtArgs> | null
    /**
     * Filter which TrendDocument to delete.
     */
    where: TrendDocumentWhereUniqueInput
  }

  /**
   * TrendDocument deleteMany
   */
  export type TrendDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendDocuments to delete
     */
    where?: TrendDocumentWhereInput
  }

  /**
   * TrendDocument.trends
   */
  export type TrendDocument$trendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
    where?: TrendWhereInput
    orderBy?: TrendOrderByWithRelationInput | TrendOrderByWithRelationInput[]
    cursor?: TrendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrendScalarFieldEnum | TrendScalarFieldEnum[]
  }

  /**
   * TrendDocument without action
   */
  export type TrendDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendDocument
     */
    select?: TrendDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendDocumentInclude<ExtArgs> | null
  }


  /**
   * Model Trend
   */

  export type AggregateTrend = {
    _count: TrendCountAggregateOutputType | null
    _min: TrendMinAggregateOutputType | null
    _max: TrendMaxAggregateOutputType | null
  }

  export type TrendMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    horizon: string | null
    description: string | null
    impactDetail: string | null
    signalType: string | null
    background: string | null
    fullText: string | null
    imageUrl: string | null
    isOnRadar: boolean | null
    documentId: string | null
    createdAt: Date | null
  }

  export type TrendMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    horizon: string | null
    description: string | null
    impactDetail: string | null
    signalType: string | null
    background: string | null
    fullText: string | null
    imageUrl: string | null
    isOnRadar: boolean | null
    documentId: string | null
    createdAt: Date | null
  }

  export type TrendCountAggregateOutputType = {
    id: number
    title: number
    category: number
    horizon: number
    description: number
    impactDetail: number
    signalType: number
    background: number
    fullText: number
    imageUrl: number
    isOnRadar: number
    documentId: number
    createdAt: number
    _all: number
  }


  export type TrendMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    horizon?: true
    description?: true
    impactDetail?: true
    signalType?: true
    background?: true
    fullText?: true
    imageUrl?: true
    isOnRadar?: true
    documentId?: true
    createdAt?: true
  }

  export type TrendMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    horizon?: true
    description?: true
    impactDetail?: true
    signalType?: true
    background?: true
    fullText?: true
    imageUrl?: true
    isOnRadar?: true
    documentId?: true
    createdAt?: true
  }

  export type TrendCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    horizon?: true
    description?: true
    impactDetail?: true
    signalType?: true
    background?: true
    fullText?: true
    imageUrl?: true
    isOnRadar?: true
    documentId?: true
    createdAt?: true
    _all?: true
  }

  export type TrendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trend to aggregate.
     */
    where?: TrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trends to fetch.
     */
    orderBy?: TrendOrderByWithRelationInput | TrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trends
    **/
    _count?: true | TrendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrendMaxAggregateInputType
  }

  export type GetTrendAggregateType<T extends TrendAggregateArgs> = {
        [P in keyof T & keyof AggregateTrend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrend[P]>
      : GetScalarType<T[P], AggregateTrend[P]>
  }




  export type TrendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendWhereInput
    orderBy?: TrendOrderByWithAggregationInput | TrendOrderByWithAggregationInput[]
    by: TrendScalarFieldEnum[] | TrendScalarFieldEnum
    having?: TrendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrendCountAggregateInputType | true
    _min?: TrendMinAggregateInputType
    _max?: TrendMaxAggregateInputType
  }

  export type TrendGroupByOutputType = {
    id: string
    title: string
    category: string
    horizon: string
    description: string
    impactDetail: string | null
    signalType: string | null
    background: string | null
    fullText: string | null
    imageUrl: string | null
    isOnRadar: boolean
    documentId: string
    createdAt: Date
    _count: TrendCountAggregateOutputType | null
    _min: TrendMinAggregateOutputType | null
    _max: TrendMaxAggregateOutputType | null
  }

  type GetTrendGroupByPayload<T extends TrendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrendGroupByOutputType[P]>
            : GetScalarType<T[P], TrendGroupByOutputType[P]>
        }
      >
    >


  export type TrendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    horizon?: boolean
    description?: boolean
    impactDetail?: boolean
    signalType?: boolean
    background?: boolean
    fullText?: boolean
    imageUrl?: boolean
    isOnRadar?: boolean
    documentId?: boolean
    createdAt?: boolean
    document?: boolean | TrendDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trend"]>

  export type TrendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    horizon?: boolean
    description?: boolean
    impactDetail?: boolean
    signalType?: boolean
    background?: boolean
    fullText?: boolean
    imageUrl?: boolean
    isOnRadar?: boolean
    documentId?: boolean
    createdAt?: boolean
    document?: boolean | TrendDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trend"]>

  export type TrendSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    horizon?: boolean
    description?: boolean
    impactDetail?: boolean
    signalType?: boolean
    background?: boolean
    fullText?: boolean
    imageUrl?: boolean
    isOnRadar?: boolean
    documentId?: boolean
    createdAt?: boolean
  }

  export type TrendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | TrendDocumentDefaultArgs<ExtArgs>
  }
  export type TrendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | TrendDocumentDefaultArgs<ExtArgs>
  }

  export type $TrendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trend"
    objects: {
      document: Prisma.$TrendDocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      horizon: string
      description: string
      impactDetail: string | null
      signalType: string | null
      background: string | null
      fullText: string | null
      imageUrl: string | null
      isOnRadar: boolean
      documentId: string
      createdAt: Date
    }, ExtArgs["result"]["trend"]>
    composites: {}
  }

  type TrendGetPayload<S extends boolean | null | undefined | TrendDefaultArgs> = $Result.GetResult<Prisma.$TrendPayload, S>

  type TrendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrendFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrendCountAggregateInputType | true
    }

  export interface TrendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trend'], meta: { name: 'Trend' } }
    /**
     * Find zero or one Trend that matches the filter.
     * @param {TrendFindUniqueArgs} args - Arguments to find a Trend
     * @example
     * // Get one Trend
     * const trend = await prisma.trend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrendFindUniqueArgs>(args: SelectSubset<T, TrendFindUniqueArgs<ExtArgs>>): Prisma__TrendClient<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Trend that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrendFindUniqueOrThrowArgs} args - Arguments to find a Trend
     * @example
     * // Get one Trend
     * const trend = await prisma.trend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrendFindUniqueOrThrowArgs>(args: SelectSubset<T, TrendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrendClient<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Trend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendFindFirstArgs} args - Arguments to find a Trend
     * @example
     * // Get one Trend
     * const trend = await prisma.trend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrendFindFirstArgs>(args?: SelectSubset<T, TrendFindFirstArgs<ExtArgs>>): Prisma__TrendClient<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Trend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendFindFirstOrThrowArgs} args - Arguments to find a Trend
     * @example
     * // Get one Trend
     * const trend = await prisma.trend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrendFindFirstOrThrowArgs>(args?: SelectSubset<T, TrendFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrendClient<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Trends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trends
     * const trends = await prisma.trend.findMany()
     * 
     * // Get first 10 Trends
     * const trends = await prisma.trend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trendWithIdOnly = await prisma.trend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrendFindManyArgs>(args?: SelectSubset<T, TrendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Trend.
     * @param {TrendCreateArgs} args - Arguments to create a Trend.
     * @example
     * // Create one Trend
     * const Trend = await prisma.trend.create({
     *   data: {
     *     // ... data to create a Trend
     *   }
     * })
     * 
     */
    create<T extends TrendCreateArgs>(args: SelectSubset<T, TrendCreateArgs<ExtArgs>>): Prisma__TrendClient<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Trends.
     * @param {TrendCreateManyArgs} args - Arguments to create many Trends.
     * @example
     * // Create many Trends
     * const trend = await prisma.trend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrendCreateManyArgs>(args?: SelectSubset<T, TrendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trends and returns the data saved in the database.
     * @param {TrendCreateManyAndReturnArgs} args - Arguments to create many Trends.
     * @example
     * // Create many Trends
     * const trend = await prisma.trend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trends and only return the `id`
     * const trendWithIdOnly = await prisma.trend.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrendCreateManyAndReturnArgs>(args?: SelectSubset<T, TrendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Trend.
     * @param {TrendDeleteArgs} args - Arguments to delete one Trend.
     * @example
     * // Delete one Trend
     * const Trend = await prisma.trend.delete({
     *   where: {
     *     // ... filter to delete one Trend
     *   }
     * })
     * 
     */
    delete<T extends TrendDeleteArgs>(args: SelectSubset<T, TrendDeleteArgs<ExtArgs>>): Prisma__TrendClient<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Trend.
     * @param {TrendUpdateArgs} args - Arguments to update one Trend.
     * @example
     * // Update one Trend
     * const trend = await prisma.trend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrendUpdateArgs>(args: SelectSubset<T, TrendUpdateArgs<ExtArgs>>): Prisma__TrendClient<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Trends.
     * @param {TrendDeleteManyArgs} args - Arguments to filter Trends to delete.
     * @example
     * // Delete a few Trends
     * const { count } = await prisma.trend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrendDeleteManyArgs>(args?: SelectSubset<T, TrendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trends
     * const trend = await prisma.trend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrendUpdateManyArgs>(args: SelectSubset<T, TrendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trend.
     * @param {TrendUpsertArgs} args - Arguments to update or create a Trend.
     * @example
     * // Update or create a Trend
     * const trend = await prisma.trend.upsert({
     *   create: {
     *     // ... data to create a Trend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trend we want to update
     *   }
     * })
     */
    upsert<T extends TrendUpsertArgs>(args: SelectSubset<T, TrendUpsertArgs<ExtArgs>>): Prisma__TrendClient<$Result.GetResult<Prisma.$TrendPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Trends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendCountArgs} args - Arguments to filter Trends to count.
     * @example
     * // Count the number of Trends
     * const count = await prisma.trend.count({
     *   where: {
     *     // ... the filter for the Trends we want to count
     *   }
     * })
    **/
    count<T extends TrendCountArgs>(
      args?: Subset<T, TrendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrendAggregateArgs>(args: Subset<T, TrendAggregateArgs>): Prisma.PrismaPromise<GetTrendAggregateType<T>>

    /**
     * Group by Trend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrendGroupByArgs['orderBy'] }
        : { orderBy?: TrendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trend model
   */
  readonly fields: TrendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends TrendDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrendDocumentDefaultArgs<ExtArgs>>): Prisma__TrendDocumentClient<$Result.GetResult<Prisma.$TrendDocumentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trend model
   */ 
  interface TrendFieldRefs {
    readonly id: FieldRef<"Trend", 'String'>
    readonly title: FieldRef<"Trend", 'String'>
    readonly category: FieldRef<"Trend", 'String'>
    readonly horizon: FieldRef<"Trend", 'String'>
    readonly description: FieldRef<"Trend", 'String'>
    readonly impactDetail: FieldRef<"Trend", 'String'>
    readonly signalType: FieldRef<"Trend", 'String'>
    readonly background: FieldRef<"Trend", 'String'>
    readonly fullText: FieldRef<"Trend", 'String'>
    readonly imageUrl: FieldRef<"Trend", 'String'>
    readonly isOnRadar: FieldRef<"Trend", 'Boolean'>
    readonly documentId: FieldRef<"Trend", 'String'>
    readonly createdAt: FieldRef<"Trend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trend findUnique
   */
  export type TrendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
    /**
     * Filter, which Trend to fetch.
     */
    where: TrendWhereUniqueInput
  }

  /**
   * Trend findUniqueOrThrow
   */
  export type TrendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
    /**
     * Filter, which Trend to fetch.
     */
    where: TrendWhereUniqueInput
  }

  /**
   * Trend findFirst
   */
  export type TrendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
    /**
     * Filter, which Trend to fetch.
     */
    where?: TrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trends to fetch.
     */
    orderBy?: TrendOrderByWithRelationInput | TrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trends.
     */
    cursor?: TrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trends.
     */
    distinct?: TrendScalarFieldEnum | TrendScalarFieldEnum[]
  }

  /**
   * Trend findFirstOrThrow
   */
  export type TrendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
    /**
     * Filter, which Trend to fetch.
     */
    where?: TrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trends to fetch.
     */
    orderBy?: TrendOrderByWithRelationInput | TrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trends.
     */
    cursor?: TrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trends.
     */
    distinct?: TrendScalarFieldEnum | TrendScalarFieldEnum[]
  }

  /**
   * Trend findMany
   */
  export type TrendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
    /**
     * Filter, which Trends to fetch.
     */
    where?: TrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trends to fetch.
     */
    orderBy?: TrendOrderByWithRelationInput | TrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trends.
     */
    cursor?: TrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trends.
     */
    skip?: number
    distinct?: TrendScalarFieldEnum | TrendScalarFieldEnum[]
  }

  /**
   * Trend create
   */
  export type TrendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
    /**
     * The data needed to create a Trend.
     */
    data: XOR<TrendCreateInput, TrendUncheckedCreateInput>
  }

  /**
   * Trend createMany
   */
  export type TrendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trends.
     */
    data: TrendCreateManyInput | TrendCreateManyInput[]
  }

  /**
   * Trend createManyAndReturn
   */
  export type TrendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Trends.
     */
    data: TrendCreateManyInput | TrendCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trend update
   */
  export type TrendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
    /**
     * The data needed to update a Trend.
     */
    data: XOR<TrendUpdateInput, TrendUncheckedUpdateInput>
    /**
     * Choose, which Trend to update.
     */
    where: TrendWhereUniqueInput
  }

  /**
   * Trend updateMany
   */
  export type TrendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trends.
     */
    data: XOR<TrendUpdateManyMutationInput, TrendUncheckedUpdateManyInput>
    /**
     * Filter which Trends to update
     */
    where?: TrendWhereInput
  }

  /**
   * Trend upsert
   */
  export type TrendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
    /**
     * The filter to search for the Trend to update in case it exists.
     */
    where: TrendWhereUniqueInput
    /**
     * In case the Trend found by the `where` argument doesn't exist, create a new Trend with this data.
     */
    create: XOR<TrendCreateInput, TrendUncheckedCreateInput>
    /**
     * In case the Trend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrendUpdateInput, TrendUncheckedUpdateInput>
  }

  /**
   * Trend delete
   */
  export type TrendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
    /**
     * Filter which Trend to delete.
     */
    where: TrendWhereUniqueInput
  }

  /**
   * Trend deleteMany
   */
  export type TrendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trends to delete
     */
    where?: TrendWhereInput
  }

  /**
   * Trend without action
   */
  export type TrendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trend
     */
    select?: TrendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    platform: 'platform',
    fullText: 'fullText',
    summary: 'summary',
    commentSummary: 'commentSummary',
    reactions: 'reactions',
    imageUrl: 'imageUrl',
    discoveryKeyword: 'discoveryKeyword',
    category: 'category',
    embedding: 'embedding',
    publishedAt: 'publishedAt',
    isFavorite: 'isFavorite',
    createdAt: 'createdAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    author: 'author',
    text: 'text'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const DiscoveryDorkScalarFieldEnum: {
    id: 'id',
    query: 'query',
    label: 'label',
    keyword: 'keyword',
    startDate: 'startDate',
    endDate: 'endDate',
    maxResults: 'maxResults',
    language: 'language',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type DiscoveryDorkScalarFieldEnum = (typeof DiscoveryDorkScalarFieldEnum)[keyof typeof DiscoveryDorkScalarFieldEnum]


  export const DiscoveredLinkScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    source: 'source',
    publishedAt: 'publishedAt',
    status: 'status',
    relevanceScore: 'relevanceScore',
    embedding: 'embedding',
    createdAt: 'createdAt',
    dorkKeyword: 'dorkKeyword',
    dorkLabel: 'dorkLabel'
  };

  export type DiscoveredLinkScalarFieldEnum = (typeof DiscoveredLinkScalarFieldEnum)[keyof typeof DiscoveredLinkScalarFieldEnum]


  export const StatisticDatasetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    sourceUrl: 'sourceUrl',
    data: 'data',
    summary: 'summary',
    createdAt: 'createdAt'
  };

  export type StatisticDatasetScalarFieldEnum = (typeof StatisticDatasetScalarFieldEnum)[keyof typeof StatisticDatasetScalarFieldEnum]


  export const ScrapeJobScalarFieldEnum: {
    id: 'id',
    url: 'url',
    status: 'status',
    totalPages: 'totalPages',
    processedPages: 'processedPages',
    datasetId: 'datasetId',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScrapeJobScalarFieldEnum = (typeof ScrapeJobScalarFieldEnum)[keyof typeof ScrapeJobScalarFieldEnum]


  export const LinkedInAccountScalarFieldEnum: {
    id: 'id',
    cookieString: 'cookieString',
    isActive: 'isActive',
    lastUsed: 'lastUsed',
    dailyCount: 'dailyCount',
    createdAt: 'createdAt'
  };

  export type LinkedInAccountScalarFieldEnum = (typeof LinkedInAccountScalarFieldEnum)[keyof typeof LinkedInAccountScalarFieldEnum]


  export const NetworkKeywordScalarFieldEnum: {
    id: 'id',
    keyword: 'keyword',
    type: 'type',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type NetworkKeywordScalarFieldEnum = (typeof NetworkKeywordScalarFieldEnum)[keyof typeof NetworkKeywordScalarFieldEnum]


  export const IndustryProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    linkedinUrl: 'linkedinUrl',
    profileImageUrl: 'profileImageUrl',
    headline: 'headline',
    company: 'company',
    about: 'about',
    experience: 'experience',
    education: 'education',
    connectionsCount: 'connectionsCount',
    isActive: 'isActive',
    lastScrapedAt: 'lastScrapedAt',
    createdAt: 'createdAt'
  };

  export type IndustryProfileScalarFieldEnum = (typeof IndustryProfileScalarFieldEnum)[keyof typeof IndustryProfileScalarFieldEnum]


  export const LinkedInPostScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    content: 'content',
    url: 'url',
    publishedAt: 'publishedAt',
    extractedEntities: 'extractedEntities',
    createdAt: 'createdAt'
  };

  export type LinkedInPostScalarFieldEnum = (typeof LinkedInPostScalarFieldEnum)[keyof typeof LinkedInPostScalarFieldEnum]


  export const NetworkInteractionScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    targetId: 'targetId',
    postId: 'postId',
    type: 'type',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type NetworkInteractionScalarFieldEnum = (typeof NetworkInteractionScalarFieldEnum)[keyof typeof NetworkInteractionScalarFieldEnum]


  export const TargetMonitorScalarFieldEnum: {
    id: 'id',
    url: 'url',
    name: 'name',
    selector: 'selector',
    urlFilter: 'urlFilter',
    minDate: 'minDate',
    maxDate: 'maxDate',
    lastChecked: 'lastChecked',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type TargetMonitorScalarFieldEnum = (typeof TargetMonitorScalarFieldEnum)[keyof typeof TargetMonitorScalarFieldEnum]


  export const SavedYoutubeVideoScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    url: 'url',
    title: 'title',
    imageUrl: 'imageUrl',
    transcript: 'transcript',
    originalTranscript: 'originalTranscript',
    summary: 'summary',
    createdAt: 'createdAt'
  };

  export type SavedYoutubeVideoScalarFieldEnum = (typeof SavedYoutubeVideoScalarFieldEnum)[keyof typeof SavedYoutubeVideoScalarFieldEnum]


  export const TrendingTopicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    formattedTraffic: 'formattedTraffic',
    relatedQueries: 'relatedQueries',
    articles: 'articles',
    trendDate: 'trendDate',
    createdAt: 'createdAt'
  };

  export type TrendingTopicScalarFieldEnum = (typeof TrendingTopicScalarFieldEnum)[keyof typeof TrendingTopicScalarFieldEnum]


  export const SystemSettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingScalarFieldEnum = (typeof SystemSettingScalarFieldEnum)[keyof typeof SystemSettingScalarFieldEnum]


  export const TrendDocumentScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    uploadedAt: 'uploadedAt'
  };

  export type TrendDocumentScalarFieldEnum = (typeof TrendDocumentScalarFieldEnum)[keyof typeof TrendDocumentScalarFieldEnum]


  export const TrendScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    horizon: 'horizon',
    description: 'description',
    impactDetail: 'impactDetail',
    signalType: 'signalType',
    background: 'background',
    fullText: 'fullText',
    imageUrl: 'imageUrl',
    isOnRadar: 'isOnRadar',
    documentId: 'documentId',
    createdAt: 'createdAt'
  };

  export type TrendScalarFieldEnum = (typeof TrendScalarFieldEnum)[keyof typeof TrendScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    url?: StringFilter<"Article"> | string
    platform?: StringFilter<"Article"> | string
    fullText?: StringFilter<"Article"> | string
    summary?: StringFilter<"Article"> | string
    commentSummary?: StringNullableFilter<"Article"> | string | null
    reactions?: StringNullableFilter<"Article"> | string | null
    imageUrl?: StringNullableFilter<"Article"> | string | null
    discoveryKeyword?: StringNullableFilter<"Article"> | string | null
    category?: StringNullableFilter<"Article"> | string | null
    embedding?: StringNullableFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    isFavorite?: BoolFilter<"Article"> | boolean
    createdAt?: DateTimeFilter<"Article"> | Date | string
    comments?: CommentListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    platform?: SortOrder
    fullText?: SortOrder
    summary?: SortOrder
    commentSummary?: SortOrderInput | SortOrder
    reactions?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    discoveryKeyword?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    embedding?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    platform?: StringFilter<"Article"> | string
    fullText?: StringFilter<"Article"> | string
    summary?: StringFilter<"Article"> | string
    commentSummary?: StringNullableFilter<"Article"> | string | null
    reactions?: StringNullableFilter<"Article"> | string | null
    imageUrl?: StringNullableFilter<"Article"> | string | null
    discoveryKeyword?: StringNullableFilter<"Article"> | string | null
    category?: StringNullableFilter<"Article"> | string | null
    embedding?: StringNullableFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    isFavorite?: BoolFilter<"Article"> | boolean
    createdAt?: DateTimeFilter<"Article"> | Date | string
    comments?: CommentListRelationFilter
  }, "id" | "url">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    platform?: SortOrder
    fullText?: SortOrder
    summary?: SortOrder
    commentSummary?: SortOrderInput | SortOrder
    reactions?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    discoveryKeyword?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    embedding?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    url?: StringWithAggregatesFilter<"Article"> | string
    platform?: StringWithAggregatesFilter<"Article"> | string
    fullText?: StringWithAggregatesFilter<"Article"> | string
    summary?: StringWithAggregatesFilter<"Article"> | string
    commentSummary?: StringNullableWithAggregatesFilter<"Article"> | string | null
    reactions?: StringNullableWithAggregatesFilter<"Article"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Article"> | string | null
    discoveryKeyword?: StringNullableWithAggregatesFilter<"Article"> | string | null
    category?: StringNullableWithAggregatesFilter<"Article"> | string | null
    embedding?: StringNullableWithAggregatesFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
    isFavorite?: BoolWithAggregatesFilter<"Article"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    articleId?: StringFilter<"Comment"> | string
    author?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    article?: XOR<ArticleRelationFilter, ArticleWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    author?: SortOrder
    text?: SortOrder
    article?: ArticleOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    articleId?: StringFilter<"Comment"> | string
    author?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    article?: XOR<ArticleRelationFilter, ArticleWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    author?: SortOrder
    text?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    articleId?: StringWithAggregatesFilter<"Comment"> | string
    author?: StringWithAggregatesFilter<"Comment"> | string
    text?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type DiscoveryDorkWhereInput = {
    AND?: DiscoveryDorkWhereInput | DiscoveryDorkWhereInput[]
    OR?: DiscoveryDorkWhereInput[]
    NOT?: DiscoveryDorkWhereInput | DiscoveryDorkWhereInput[]
    id?: StringFilter<"DiscoveryDork"> | string
    query?: StringFilter<"DiscoveryDork"> | string
    label?: StringFilter<"DiscoveryDork"> | string
    keyword?: StringNullableFilter<"DiscoveryDork"> | string | null
    startDate?: StringNullableFilter<"DiscoveryDork"> | string | null
    endDate?: StringNullableFilter<"DiscoveryDork"> | string | null
    maxResults?: IntFilter<"DiscoveryDork"> | number
    language?: StringFilter<"DiscoveryDork"> | string
    isActive?: BoolFilter<"DiscoveryDork"> | boolean
    createdAt?: DateTimeFilter<"DiscoveryDork"> | Date | string
  }

  export type DiscoveryDorkOrderByWithRelationInput = {
    id?: SortOrder
    query?: SortOrder
    label?: SortOrder
    keyword?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    maxResults?: SortOrder
    language?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscoveryDorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiscoveryDorkWhereInput | DiscoveryDorkWhereInput[]
    OR?: DiscoveryDorkWhereInput[]
    NOT?: DiscoveryDorkWhereInput | DiscoveryDorkWhereInput[]
    query?: StringFilter<"DiscoveryDork"> | string
    label?: StringFilter<"DiscoveryDork"> | string
    keyword?: StringNullableFilter<"DiscoveryDork"> | string | null
    startDate?: StringNullableFilter<"DiscoveryDork"> | string | null
    endDate?: StringNullableFilter<"DiscoveryDork"> | string | null
    maxResults?: IntFilter<"DiscoveryDork"> | number
    language?: StringFilter<"DiscoveryDork"> | string
    isActive?: BoolFilter<"DiscoveryDork"> | boolean
    createdAt?: DateTimeFilter<"DiscoveryDork"> | Date | string
  }, "id">

  export type DiscoveryDorkOrderByWithAggregationInput = {
    id?: SortOrder
    query?: SortOrder
    label?: SortOrder
    keyword?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    maxResults?: SortOrder
    language?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: DiscoveryDorkCountOrderByAggregateInput
    _avg?: DiscoveryDorkAvgOrderByAggregateInput
    _max?: DiscoveryDorkMaxOrderByAggregateInput
    _min?: DiscoveryDorkMinOrderByAggregateInput
    _sum?: DiscoveryDorkSumOrderByAggregateInput
  }

  export type DiscoveryDorkScalarWhereWithAggregatesInput = {
    AND?: DiscoveryDorkScalarWhereWithAggregatesInput | DiscoveryDorkScalarWhereWithAggregatesInput[]
    OR?: DiscoveryDorkScalarWhereWithAggregatesInput[]
    NOT?: DiscoveryDorkScalarWhereWithAggregatesInput | DiscoveryDorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscoveryDork"> | string
    query?: StringWithAggregatesFilter<"DiscoveryDork"> | string
    label?: StringWithAggregatesFilter<"DiscoveryDork"> | string
    keyword?: StringNullableWithAggregatesFilter<"DiscoveryDork"> | string | null
    startDate?: StringNullableWithAggregatesFilter<"DiscoveryDork"> | string | null
    endDate?: StringNullableWithAggregatesFilter<"DiscoveryDork"> | string | null
    maxResults?: IntWithAggregatesFilter<"DiscoveryDork"> | number
    language?: StringWithAggregatesFilter<"DiscoveryDork"> | string
    isActive?: BoolWithAggregatesFilter<"DiscoveryDork"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DiscoveryDork"> | Date | string
  }

  export type DiscoveredLinkWhereInput = {
    AND?: DiscoveredLinkWhereInput | DiscoveredLinkWhereInput[]
    OR?: DiscoveredLinkWhereInput[]
    NOT?: DiscoveredLinkWhereInput | DiscoveredLinkWhereInput[]
    id?: StringFilter<"DiscoveredLink"> | string
    url?: StringFilter<"DiscoveredLink"> | string
    title?: StringNullableFilter<"DiscoveredLink"> | string | null
    source?: StringNullableFilter<"DiscoveredLink"> | string | null
    publishedAt?: StringNullableFilter<"DiscoveredLink"> | string | null
    status?: StringFilter<"DiscoveredLink"> | string
    relevanceScore?: IntNullableFilter<"DiscoveredLink"> | number | null
    embedding?: StringNullableFilter<"DiscoveredLink"> | string | null
    createdAt?: DateTimeFilter<"DiscoveredLink"> | Date | string
    dorkKeyword?: StringNullableFilter<"DiscoveredLink"> | string | null
    dorkLabel?: StringNullableFilter<"DiscoveredLink"> | string | null
  }

  export type DiscoveredLinkOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    relevanceScore?: SortOrderInput | SortOrder
    embedding?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    dorkKeyword?: SortOrderInput | SortOrder
    dorkLabel?: SortOrderInput | SortOrder
  }

  export type DiscoveredLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: DiscoveredLinkWhereInput | DiscoveredLinkWhereInput[]
    OR?: DiscoveredLinkWhereInput[]
    NOT?: DiscoveredLinkWhereInput | DiscoveredLinkWhereInput[]
    title?: StringNullableFilter<"DiscoveredLink"> | string | null
    source?: StringNullableFilter<"DiscoveredLink"> | string | null
    publishedAt?: StringNullableFilter<"DiscoveredLink"> | string | null
    status?: StringFilter<"DiscoveredLink"> | string
    relevanceScore?: IntNullableFilter<"DiscoveredLink"> | number | null
    embedding?: StringNullableFilter<"DiscoveredLink"> | string | null
    createdAt?: DateTimeFilter<"DiscoveredLink"> | Date | string
    dorkKeyword?: StringNullableFilter<"DiscoveredLink"> | string | null
    dorkLabel?: StringNullableFilter<"DiscoveredLink"> | string | null
  }, "id" | "url">

  export type DiscoveredLinkOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    relevanceScore?: SortOrderInput | SortOrder
    embedding?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    dorkKeyword?: SortOrderInput | SortOrder
    dorkLabel?: SortOrderInput | SortOrder
    _count?: DiscoveredLinkCountOrderByAggregateInput
    _avg?: DiscoveredLinkAvgOrderByAggregateInput
    _max?: DiscoveredLinkMaxOrderByAggregateInput
    _min?: DiscoveredLinkMinOrderByAggregateInput
    _sum?: DiscoveredLinkSumOrderByAggregateInput
  }

  export type DiscoveredLinkScalarWhereWithAggregatesInput = {
    AND?: DiscoveredLinkScalarWhereWithAggregatesInput | DiscoveredLinkScalarWhereWithAggregatesInput[]
    OR?: DiscoveredLinkScalarWhereWithAggregatesInput[]
    NOT?: DiscoveredLinkScalarWhereWithAggregatesInput | DiscoveredLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscoveredLink"> | string
    url?: StringWithAggregatesFilter<"DiscoveredLink"> | string
    title?: StringNullableWithAggregatesFilter<"DiscoveredLink"> | string | null
    source?: StringNullableWithAggregatesFilter<"DiscoveredLink"> | string | null
    publishedAt?: StringNullableWithAggregatesFilter<"DiscoveredLink"> | string | null
    status?: StringWithAggregatesFilter<"DiscoveredLink"> | string
    relevanceScore?: IntNullableWithAggregatesFilter<"DiscoveredLink"> | number | null
    embedding?: StringNullableWithAggregatesFilter<"DiscoveredLink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DiscoveredLink"> | Date | string
    dorkKeyword?: StringNullableWithAggregatesFilter<"DiscoveredLink"> | string | null
    dorkLabel?: StringNullableWithAggregatesFilter<"DiscoveredLink"> | string | null
  }

  export type StatisticDatasetWhereInput = {
    AND?: StatisticDatasetWhereInput | StatisticDatasetWhereInput[]
    OR?: StatisticDatasetWhereInput[]
    NOT?: StatisticDatasetWhereInput | StatisticDatasetWhereInput[]
    id?: StringFilter<"StatisticDataset"> | string
    title?: StringFilter<"StatisticDataset"> | string
    sourceUrl?: StringFilter<"StatisticDataset"> | string
    data?: StringFilter<"StatisticDataset"> | string
    summary?: StringNullableFilter<"StatisticDataset"> | string | null
    createdAt?: DateTimeFilter<"StatisticDataset"> | Date | string
  }

  export type StatisticDatasetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    sourceUrl?: SortOrder
    data?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type StatisticDatasetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatisticDatasetWhereInput | StatisticDatasetWhereInput[]
    OR?: StatisticDatasetWhereInput[]
    NOT?: StatisticDatasetWhereInput | StatisticDatasetWhereInput[]
    title?: StringFilter<"StatisticDataset"> | string
    sourceUrl?: StringFilter<"StatisticDataset"> | string
    data?: StringFilter<"StatisticDataset"> | string
    summary?: StringNullableFilter<"StatisticDataset"> | string | null
    createdAt?: DateTimeFilter<"StatisticDataset"> | Date | string
  }, "id">

  export type StatisticDatasetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    sourceUrl?: SortOrder
    data?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StatisticDatasetCountOrderByAggregateInput
    _max?: StatisticDatasetMaxOrderByAggregateInput
    _min?: StatisticDatasetMinOrderByAggregateInput
  }

  export type StatisticDatasetScalarWhereWithAggregatesInput = {
    AND?: StatisticDatasetScalarWhereWithAggregatesInput | StatisticDatasetScalarWhereWithAggregatesInput[]
    OR?: StatisticDatasetScalarWhereWithAggregatesInput[]
    NOT?: StatisticDatasetScalarWhereWithAggregatesInput | StatisticDatasetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatisticDataset"> | string
    title?: StringWithAggregatesFilter<"StatisticDataset"> | string
    sourceUrl?: StringWithAggregatesFilter<"StatisticDataset"> | string
    data?: StringWithAggregatesFilter<"StatisticDataset"> | string
    summary?: StringNullableWithAggregatesFilter<"StatisticDataset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StatisticDataset"> | Date | string
  }

  export type ScrapeJobWhereInput = {
    AND?: ScrapeJobWhereInput | ScrapeJobWhereInput[]
    OR?: ScrapeJobWhereInput[]
    NOT?: ScrapeJobWhereInput | ScrapeJobWhereInput[]
    id?: StringFilter<"ScrapeJob"> | string
    url?: StringFilter<"ScrapeJob"> | string
    status?: StringFilter<"ScrapeJob"> | string
    totalPages?: IntNullableFilter<"ScrapeJob"> | number | null
    processedPages?: IntFilter<"ScrapeJob"> | number
    datasetId?: StringNullableFilter<"ScrapeJob"> | string | null
    errorMessage?: StringNullableFilter<"ScrapeJob"> | string | null
    createdAt?: DateTimeFilter<"ScrapeJob"> | Date | string
    updatedAt?: DateTimeFilter<"ScrapeJob"> | Date | string
  }

  export type ScrapeJobOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    totalPages?: SortOrderInput | SortOrder
    processedPages?: SortOrder
    datasetId?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScrapeJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScrapeJobWhereInput | ScrapeJobWhereInput[]
    OR?: ScrapeJobWhereInput[]
    NOT?: ScrapeJobWhereInput | ScrapeJobWhereInput[]
    url?: StringFilter<"ScrapeJob"> | string
    status?: StringFilter<"ScrapeJob"> | string
    totalPages?: IntNullableFilter<"ScrapeJob"> | number | null
    processedPages?: IntFilter<"ScrapeJob"> | number
    datasetId?: StringNullableFilter<"ScrapeJob"> | string | null
    errorMessage?: StringNullableFilter<"ScrapeJob"> | string | null
    createdAt?: DateTimeFilter<"ScrapeJob"> | Date | string
    updatedAt?: DateTimeFilter<"ScrapeJob"> | Date | string
  }, "id">

  export type ScrapeJobOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    totalPages?: SortOrderInput | SortOrder
    processedPages?: SortOrder
    datasetId?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScrapeJobCountOrderByAggregateInput
    _avg?: ScrapeJobAvgOrderByAggregateInput
    _max?: ScrapeJobMaxOrderByAggregateInput
    _min?: ScrapeJobMinOrderByAggregateInput
    _sum?: ScrapeJobSumOrderByAggregateInput
  }

  export type ScrapeJobScalarWhereWithAggregatesInput = {
    AND?: ScrapeJobScalarWhereWithAggregatesInput | ScrapeJobScalarWhereWithAggregatesInput[]
    OR?: ScrapeJobScalarWhereWithAggregatesInput[]
    NOT?: ScrapeJobScalarWhereWithAggregatesInput | ScrapeJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScrapeJob"> | string
    url?: StringWithAggregatesFilter<"ScrapeJob"> | string
    status?: StringWithAggregatesFilter<"ScrapeJob"> | string
    totalPages?: IntNullableWithAggregatesFilter<"ScrapeJob"> | number | null
    processedPages?: IntWithAggregatesFilter<"ScrapeJob"> | number
    datasetId?: StringNullableWithAggregatesFilter<"ScrapeJob"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"ScrapeJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScrapeJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScrapeJob"> | Date | string
  }

  export type LinkedInAccountWhereInput = {
    AND?: LinkedInAccountWhereInput | LinkedInAccountWhereInput[]
    OR?: LinkedInAccountWhereInput[]
    NOT?: LinkedInAccountWhereInput | LinkedInAccountWhereInput[]
    id?: StringFilter<"LinkedInAccount"> | string
    cookieString?: StringFilter<"LinkedInAccount"> | string
    isActive?: BoolFilter<"LinkedInAccount"> | boolean
    lastUsed?: DateTimeNullableFilter<"LinkedInAccount"> | Date | string | null
    dailyCount?: IntFilter<"LinkedInAccount"> | number
    createdAt?: DateTimeFilter<"LinkedInAccount"> | Date | string
  }

  export type LinkedInAccountOrderByWithRelationInput = {
    id?: SortOrder
    cookieString?: SortOrder
    isActive?: SortOrder
    lastUsed?: SortOrderInput | SortOrder
    dailyCount?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedInAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkedInAccountWhereInput | LinkedInAccountWhereInput[]
    OR?: LinkedInAccountWhereInput[]
    NOT?: LinkedInAccountWhereInput | LinkedInAccountWhereInput[]
    cookieString?: StringFilter<"LinkedInAccount"> | string
    isActive?: BoolFilter<"LinkedInAccount"> | boolean
    lastUsed?: DateTimeNullableFilter<"LinkedInAccount"> | Date | string | null
    dailyCount?: IntFilter<"LinkedInAccount"> | number
    createdAt?: DateTimeFilter<"LinkedInAccount"> | Date | string
  }, "id">

  export type LinkedInAccountOrderByWithAggregationInput = {
    id?: SortOrder
    cookieString?: SortOrder
    isActive?: SortOrder
    lastUsed?: SortOrderInput | SortOrder
    dailyCount?: SortOrder
    createdAt?: SortOrder
    _count?: LinkedInAccountCountOrderByAggregateInput
    _avg?: LinkedInAccountAvgOrderByAggregateInput
    _max?: LinkedInAccountMaxOrderByAggregateInput
    _min?: LinkedInAccountMinOrderByAggregateInput
    _sum?: LinkedInAccountSumOrderByAggregateInput
  }

  export type LinkedInAccountScalarWhereWithAggregatesInput = {
    AND?: LinkedInAccountScalarWhereWithAggregatesInput | LinkedInAccountScalarWhereWithAggregatesInput[]
    OR?: LinkedInAccountScalarWhereWithAggregatesInput[]
    NOT?: LinkedInAccountScalarWhereWithAggregatesInput | LinkedInAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkedInAccount"> | string
    cookieString?: StringWithAggregatesFilter<"LinkedInAccount"> | string
    isActive?: BoolWithAggregatesFilter<"LinkedInAccount"> | boolean
    lastUsed?: DateTimeNullableWithAggregatesFilter<"LinkedInAccount"> | Date | string | null
    dailyCount?: IntWithAggregatesFilter<"LinkedInAccount"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LinkedInAccount"> | Date | string
  }

  export type NetworkKeywordWhereInput = {
    AND?: NetworkKeywordWhereInput | NetworkKeywordWhereInput[]
    OR?: NetworkKeywordWhereInput[]
    NOT?: NetworkKeywordWhereInput | NetworkKeywordWhereInput[]
    id?: StringFilter<"NetworkKeyword"> | string
    keyword?: StringFilter<"NetworkKeyword"> | string
    type?: StringFilter<"NetworkKeyword"> | string
    isActive?: BoolFilter<"NetworkKeyword"> | boolean
    createdAt?: DateTimeFilter<"NetworkKeyword"> | Date | string
  }

  export type NetworkKeywordOrderByWithRelationInput = {
    id?: SortOrder
    keyword?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkKeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NetworkKeywordWhereInput | NetworkKeywordWhereInput[]
    OR?: NetworkKeywordWhereInput[]
    NOT?: NetworkKeywordWhereInput | NetworkKeywordWhereInput[]
    keyword?: StringFilter<"NetworkKeyword"> | string
    type?: StringFilter<"NetworkKeyword"> | string
    isActive?: BoolFilter<"NetworkKeyword"> | boolean
    createdAt?: DateTimeFilter<"NetworkKeyword"> | Date | string
  }, "id">

  export type NetworkKeywordOrderByWithAggregationInput = {
    id?: SortOrder
    keyword?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: NetworkKeywordCountOrderByAggregateInput
    _max?: NetworkKeywordMaxOrderByAggregateInput
    _min?: NetworkKeywordMinOrderByAggregateInput
  }

  export type NetworkKeywordScalarWhereWithAggregatesInput = {
    AND?: NetworkKeywordScalarWhereWithAggregatesInput | NetworkKeywordScalarWhereWithAggregatesInput[]
    OR?: NetworkKeywordScalarWhereWithAggregatesInput[]
    NOT?: NetworkKeywordScalarWhereWithAggregatesInput | NetworkKeywordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NetworkKeyword"> | string
    keyword?: StringWithAggregatesFilter<"NetworkKeyword"> | string
    type?: StringWithAggregatesFilter<"NetworkKeyword"> | string
    isActive?: BoolWithAggregatesFilter<"NetworkKeyword"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NetworkKeyword"> | Date | string
  }

  export type IndustryProfileWhereInput = {
    AND?: IndustryProfileWhereInput | IndustryProfileWhereInput[]
    OR?: IndustryProfileWhereInput[]
    NOT?: IndustryProfileWhereInput | IndustryProfileWhereInput[]
    id?: StringFilter<"IndustryProfile"> | string
    name?: StringFilter<"IndustryProfile"> | string
    linkedinUrl?: StringFilter<"IndustryProfile"> | string
    profileImageUrl?: StringNullableFilter<"IndustryProfile"> | string | null
    headline?: StringNullableFilter<"IndustryProfile"> | string | null
    company?: StringNullableFilter<"IndustryProfile"> | string | null
    about?: StringNullableFilter<"IndustryProfile"> | string | null
    experience?: StringNullableFilter<"IndustryProfile"> | string | null
    education?: StringNullableFilter<"IndustryProfile"> | string | null
    connectionsCount?: IntNullableFilter<"IndustryProfile"> | number | null
    isActive?: BoolFilter<"IndustryProfile"> | boolean
    lastScrapedAt?: DateTimeNullableFilter<"IndustryProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"IndustryProfile"> | Date | string
    posts?: LinkedInPostListRelationFilter
    interactionsAsActor?: NetworkInteractionListRelationFilter
    interactionsAsTarget?: NetworkInteractionListRelationFilter
  }

  export type IndustryProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    linkedinUrl?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    headline?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    connectionsCount?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastScrapedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    posts?: LinkedInPostOrderByRelationAggregateInput
    interactionsAsActor?: NetworkInteractionOrderByRelationAggregateInput
    interactionsAsTarget?: NetworkInteractionOrderByRelationAggregateInput
  }

  export type IndustryProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    linkedinUrl?: string
    AND?: IndustryProfileWhereInput | IndustryProfileWhereInput[]
    OR?: IndustryProfileWhereInput[]
    NOT?: IndustryProfileWhereInput | IndustryProfileWhereInput[]
    name?: StringFilter<"IndustryProfile"> | string
    profileImageUrl?: StringNullableFilter<"IndustryProfile"> | string | null
    headline?: StringNullableFilter<"IndustryProfile"> | string | null
    company?: StringNullableFilter<"IndustryProfile"> | string | null
    about?: StringNullableFilter<"IndustryProfile"> | string | null
    experience?: StringNullableFilter<"IndustryProfile"> | string | null
    education?: StringNullableFilter<"IndustryProfile"> | string | null
    connectionsCount?: IntNullableFilter<"IndustryProfile"> | number | null
    isActive?: BoolFilter<"IndustryProfile"> | boolean
    lastScrapedAt?: DateTimeNullableFilter<"IndustryProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"IndustryProfile"> | Date | string
    posts?: LinkedInPostListRelationFilter
    interactionsAsActor?: NetworkInteractionListRelationFilter
    interactionsAsTarget?: NetworkInteractionListRelationFilter
  }, "id" | "linkedinUrl">

  export type IndustryProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    linkedinUrl?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    headline?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    connectionsCount?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastScrapedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: IndustryProfileCountOrderByAggregateInput
    _avg?: IndustryProfileAvgOrderByAggregateInput
    _max?: IndustryProfileMaxOrderByAggregateInput
    _min?: IndustryProfileMinOrderByAggregateInput
    _sum?: IndustryProfileSumOrderByAggregateInput
  }

  export type IndustryProfileScalarWhereWithAggregatesInput = {
    AND?: IndustryProfileScalarWhereWithAggregatesInput | IndustryProfileScalarWhereWithAggregatesInput[]
    OR?: IndustryProfileScalarWhereWithAggregatesInput[]
    NOT?: IndustryProfileScalarWhereWithAggregatesInput | IndustryProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndustryProfile"> | string
    name?: StringWithAggregatesFilter<"IndustryProfile"> | string
    linkedinUrl?: StringWithAggregatesFilter<"IndustryProfile"> | string
    profileImageUrl?: StringNullableWithAggregatesFilter<"IndustryProfile"> | string | null
    headline?: StringNullableWithAggregatesFilter<"IndustryProfile"> | string | null
    company?: StringNullableWithAggregatesFilter<"IndustryProfile"> | string | null
    about?: StringNullableWithAggregatesFilter<"IndustryProfile"> | string | null
    experience?: StringNullableWithAggregatesFilter<"IndustryProfile"> | string | null
    education?: StringNullableWithAggregatesFilter<"IndustryProfile"> | string | null
    connectionsCount?: IntNullableWithAggregatesFilter<"IndustryProfile"> | number | null
    isActive?: BoolWithAggregatesFilter<"IndustryProfile"> | boolean
    lastScrapedAt?: DateTimeNullableWithAggregatesFilter<"IndustryProfile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IndustryProfile"> | Date | string
  }

  export type LinkedInPostWhereInput = {
    AND?: LinkedInPostWhereInput | LinkedInPostWhereInput[]
    OR?: LinkedInPostWhereInput[]
    NOT?: LinkedInPostWhereInput | LinkedInPostWhereInput[]
    id?: StringFilter<"LinkedInPost"> | string
    profileId?: StringFilter<"LinkedInPost"> | string
    content?: StringFilter<"LinkedInPost"> | string
    url?: StringNullableFilter<"LinkedInPost"> | string | null
    publishedAt?: StringNullableFilter<"LinkedInPost"> | string | null
    extractedEntities?: StringNullableFilter<"LinkedInPost"> | string | null
    createdAt?: DateTimeFilter<"LinkedInPost"> | Date | string
    profile?: XOR<IndustryProfileRelationFilter, IndustryProfileWhereInput>
    interactions?: NetworkInteractionListRelationFilter
  }

  export type LinkedInPostOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    content?: SortOrder
    url?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    extractedEntities?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    profile?: IndustryProfileOrderByWithRelationInput
    interactions?: NetworkInteractionOrderByRelationAggregateInput
  }

  export type LinkedInPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: LinkedInPostWhereInput | LinkedInPostWhereInput[]
    OR?: LinkedInPostWhereInput[]
    NOT?: LinkedInPostWhereInput | LinkedInPostWhereInput[]
    profileId?: StringFilter<"LinkedInPost"> | string
    content?: StringFilter<"LinkedInPost"> | string
    publishedAt?: StringNullableFilter<"LinkedInPost"> | string | null
    extractedEntities?: StringNullableFilter<"LinkedInPost"> | string | null
    createdAt?: DateTimeFilter<"LinkedInPost"> | Date | string
    profile?: XOR<IndustryProfileRelationFilter, IndustryProfileWhereInput>
    interactions?: NetworkInteractionListRelationFilter
  }, "id" | "url">

  export type LinkedInPostOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    content?: SortOrder
    url?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    extractedEntities?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LinkedInPostCountOrderByAggregateInput
    _max?: LinkedInPostMaxOrderByAggregateInput
    _min?: LinkedInPostMinOrderByAggregateInput
  }

  export type LinkedInPostScalarWhereWithAggregatesInput = {
    AND?: LinkedInPostScalarWhereWithAggregatesInput | LinkedInPostScalarWhereWithAggregatesInput[]
    OR?: LinkedInPostScalarWhereWithAggregatesInput[]
    NOT?: LinkedInPostScalarWhereWithAggregatesInput | LinkedInPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkedInPost"> | string
    profileId?: StringWithAggregatesFilter<"LinkedInPost"> | string
    content?: StringWithAggregatesFilter<"LinkedInPost"> | string
    url?: StringNullableWithAggregatesFilter<"LinkedInPost"> | string | null
    publishedAt?: StringNullableWithAggregatesFilter<"LinkedInPost"> | string | null
    extractedEntities?: StringNullableWithAggregatesFilter<"LinkedInPost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LinkedInPost"> | Date | string
  }

  export type NetworkInteractionWhereInput = {
    AND?: NetworkInteractionWhereInput | NetworkInteractionWhereInput[]
    OR?: NetworkInteractionWhereInput[]
    NOT?: NetworkInteractionWhereInput | NetworkInteractionWhereInput[]
    id?: StringFilter<"NetworkInteraction"> | string
    actorId?: StringFilter<"NetworkInteraction"> | string
    targetId?: StringNullableFilter<"NetworkInteraction"> | string | null
    postId?: StringNullableFilter<"NetworkInteraction"> | string | null
    type?: StringFilter<"NetworkInteraction"> | string
    content?: StringNullableFilter<"NetworkInteraction"> | string | null
    createdAt?: DateTimeFilter<"NetworkInteraction"> | Date | string
    actor?: XOR<IndustryProfileRelationFilter, IndustryProfileWhereInput>
    target?: XOR<IndustryProfileNullableRelationFilter, IndustryProfileWhereInput> | null
    post?: XOR<LinkedInPostNullableRelationFilter, LinkedInPostWhereInput> | null
  }

  export type NetworkInteractionOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrder
    targetId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: IndustryProfileOrderByWithRelationInput
    target?: IndustryProfileOrderByWithRelationInput
    post?: LinkedInPostOrderByWithRelationInput
  }

  export type NetworkInteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NetworkInteractionWhereInput | NetworkInteractionWhereInput[]
    OR?: NetworkInteractionWhereInput[]
    NOT?: NetworkInteractionWhereInput | NetworkInteractionWhereInput[]
    actorId?: StringFilter<"NetworkInteraction"> | string
    targetId?: StringNullableFilter<"NetworkInteraction"> | string | null
    postId?: StringNullableFilter<"NetworkInteraction"> | string | null
    type?: StringFilter<"NetworkInteraction"> | string
    content?: StringNullableFilter<"NetworkInteraction"> | string | null
    createdAt?: DateTimeFilter<"NetworkInteraction"> | Date | string
    actor?: XOR<IndustryProfileRelationFilter, IndustryProfileWhereInput>
    target?: XOR<IndustryProfileNullableRelationFilter, IndustryProfileWhereInput> | null
    post?: XOR<LinkedInPostNullableRelationFilter, LinkedInPostWhereInput> | null
  }, "id">

  export type NetworkInteractionOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrder
    targetId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NetworkInteractionCountOrderByAggregateInput
    _max?: NetworkInteractionMaxOrderByAggregateInput
    _min?: NetworkInteractionMinOrderByAggregateInput
  }

  export type NetworkInteractionScalarWhereWithAggregatesInput = {
    AND?: NetworkInteractionScalarWhereWithAggregatesInput | NetworkInteractionScalarWhereWithAggregatesInput[]
    OR?: NetworkInteractionScalarWhereWithAggregatesInput[]
    NOT?: NetworkInteractionScalarWhereWithAggregatesInput | NetworkInteractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NetworkInteraction"> | string
    actorId?: StringWithAggregatesFilter<"NetworkInteraction"> | string
    targetId?: StringNullableWithAggregatesFilter<"NetworkInteraction"> | string | null
    postId?: StringNullableWithAggregatesFilter<"NetworkInteraction"> | string | null
    type?: StringWithAggregatesFilter<"NetworkInteraction"> | string
    content?: StringNullableWithAggregatesFilter<"NetworkInteraction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NetworkInteraction"> | Date | string
  }

  export type TargetMonitorWhereInput = {
    AND?: TargetMonitorWhereInput | TargetMonitorWhereInput[]
    OR?: TargetMonitorWhereInput[]
    NOT?: TargetMonitorWhereInput | TargetMonitorWhereInput[]
    id?: StringFilter<"TargetMonitor"> | string
    url?: StringFilter<"TargetMonitor"> | string
    name?: StringFilter<"TargetMonitor"> | string
    selector?: StringNullableFilter<"TargetMonitor"> | string | null
    urlFilter?: StringNullableFilter<"TargetMonitor"> | string | null
    minDate?: DateTimeNullableFilter<"TargetMonitor"> | Date | string | null
    maxDate?: DateTimeNullableFilter<"TargetMonitor"> | Date | string | null
    lastChecked?: DateTimeNullableFilter<"TargetMonitor"> | Date | string | null
    isActive?: BoolFilter<"TargetMonitor"> | boolean
    createdAt?: DateTimeFilter<"TargetMonitor"> | Date | string
  }

  export type TargetMonitorOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    selector?: SortOrderInput | SortOrder
    urlFilter?: SortOrderInput | SortOrder
    minDate?: SortOrderInput | SortOrder
    maxDate?: SortOrderInput | SortOrder
    lastChecked?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TargetMonitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TargetMonitorWhereInput | TargetMonitorWhereInput[]
    OR?: TargetMonitorWhereInput[]
    NOT?: TargetMonitorWhereInput | TargetMonitorWhereInput[]
    url?: StringFilter<"TargetMonitor"> | string
    name?: StringFilter<"TargetMonitor"> | string
    selector?: StringNullableFilter<"TargetMonitor"> | string | null
    urlFilter?: StringNullableFilter<"TargetMonitor"> | string | null
    minDate?: DateTimeNullableFilter<"TargetMonitor"> | Date | string | null
    maxDate?: DateTimeNullableFilter<"TargetMonitor"> | Date | string | null
    lastChecked?: DateTimeNullableFilter<"TargetMonitor"> | Date | string | null
    isActive?: BoolFilter<"TargetMonitor"> | boolean
    createdAt?: DateTimeFilter<"TargetMonitor"> | Date | string
  }, "id">

  export type TargetMonitorOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    selector?: SortOrderInput | SortOrder
    urlFilter?: SortOrderInput | SortOrder
    minDate?: SortOrderInput | SortOrder
    maxDate?: SortOrderInput | SortOrder
    lastChecked?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: TargetMonitorCountOrderByAggregateInput
    _max?: TargetMonitorMaxOrderByAggregateInput
    _min?: TargetMonitorMinOrderByAggregateInput
  }

  export type TargetMonitorScalarWhereWithAggregatesInput = {
    AND?: TargetMonitorScalarWhereWithAggregatesInput | TargetMonitorScalarWhereWithAggregatesInput[]
    OR?: TargetMonitorScalarWhereWithAggregatesInput[]
    NOT?: TargetMonitorScalarWhereWithAggregatesInput | TargetMonitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TargetMonitor"> | string
    url?: StringWithAggregatesFilter<"TargetMonitor"> | string
    name?: StringWithAggregatesFilter<"TargetMonitor"> | string
    selector?: StringNullableWithAggregatesFilter<"TargetMonitor"> | string | null
    urlFilter?: StringNullableWithAggregatesFilter<"TargetMonitor"> | string | null
    minDate?: DateTimeNullableWithAggregatesFilter<"TargetMonitor"> | Date | string | null
    maxDate?: DateTimeNullableWithAggregatesFilter<"TargetMonitor"> | Date | string | null
    lastChecked?: DateTimeNullableWithAggregatesFilter<"TargetMonitor"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"TargetMonitor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TargetMonitor"> | Date | string
  }

  export type SavedYoutubeVideoWhereInput = {
    AND?: SavedYoutubeVideoWhereInput | SavedYoutubeVideoWhereInput[]
    OR?: SavedYoutubeVideoWhereInput[]
    NOT?: SavedYoutubeVideoWhereInput | SavedYoutubeVideoWhereInput[]
    id?: StringFilter<"SavedYoutubeVideo"> | string
    videoId?: StringFilter<"SavedYoutubeVideo"> | string
    url?: StringFilter<"SavedYoutubeVideo"> | string
    title?: StringFilter<"SavedYoutubeVideo"> | string
    imageUrl?: StringNullableFilter<"SavedYoutubeVideo"> | string | null
    transcript?: StringFilter<"SavedYoutubeVideo"> | string
    originalTranscript?: StringNullableFilter<"SavedYoutubeVideo"> | string | null
    summary?: StringFilter<"SavedYoutubeVideo"> | string
    createdAt?: DateTimeFilter<"SavedYoutubeVideo"> | Date | string
  }

  export type SavedYoutubeVideoOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    transcript?: SortOrder
    originalTranscript?: SortOrderInput | SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedYoutubeVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    videoId?: string
    AND?: SavedYoutubeVideoWhereInput | SavedYoutubeVideoWhereInput[]
    OR?: SavedYoutubeVideoWhereInput[]
    NOT?: SavedYoutubeVideoWhereInput | SavedYoutubeVideoWhereInput[]
    url?: StringFilter<"SavedYoutubeVideo"> | string
    title?: StringFilter<"SavedYoutubeVideo"> | string
    imageUrl?: StringNullableFilter<"SavedYoutubeVideo"> | string | null
    transcript?: StringFilter<"SavedYoutubeVideo"> | string
    originalTranscript?: StringNullableFilter<"SavedYoutubeVideo"> | string | null
    summary?: StringFilter<"SavedYoutubeVideo"> | string
    createdAt?: DateTimeFilter<"SavedYoutubeVideo"> | Date | string
  }, "id" | "videoId">

  export type SavedYoutubeVideoOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    transcript?: SortOrder
    originalTranscript?: SortOrderInput | SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    _count?: SavedYoutubeVideoCountOrderByAggregateInput
    _max?: SavedYoutubeVideoMaxOrderByAggregateInput
    _min?: SavedYoutubeVideoMinOrderByAggregateInput
  }

  export type SavedYoutubeVideoScalarWhereWithAggregatesInput = {
    AND?: SavedYoutubeVideoScalarWhereWithAggregatesInput | SavedYoutubeVideoScalarWhereWithAggregatesInput[]
    OR?: SavedYoutubeVideoScalarWhereWithAggregatesInput[]
    NOT?: SavedYoutubeVideoScalarWhereWithAggregatesInput | SavedYoutubeVideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedYoutubeVideo"> | string
    videoId?: StringWithAggregatesFilter<"SavedYoutubeVideo"> | string
    url?: StringWithAggregatesFilter<"SavedYoutubeVideo"> | string
    title?: StringWithAggregatesFilter<"SavedYoutubeVideo"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"SavedYoutubeVideo"> | string | null
    transcript?: StringWithAggregatesFilter<"SavedYoutubeVideo"> | string
    originalTranscript?: StringNullableWithAggregatesFilter<"SavedYoutubeVideo"> | string | null
    summary?: StringWithAggregatesFilter<"SavedYoutubeVideo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedYoutubeVideo"> | Date | string
  }

  export type TrendingTopicWhereInput = {
    AND?: TrendingTopicWhereInput | TrendingTopicWhereInput[]
    OR?: TrendingTopicWhereInput[]
    NOT?: TrendingTopicWhereInput | TrendingTopicWhereInput[]
    id?: StringFilter<"TrendingTopic"> | string
    title?: StringFilter<"TrendingTopic"> | string
    formattedTraffic?: StringNullableFilter<"TrendingTopic"> | string | null
    relatedQueries?: StringNullableFilter<"TrendingTopic"> | string | null
    articles?: StringNullableFilter<"TrendingTopic"> | string | null
    trendDate?: DateTimeFilter<"TrendingTopic"> | Date | string
    createdAt?: DateTimeFilter<"TrendingTopic"> | Date | string
  }

  export type TrendingTopicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    formattedTraffic?: SortOrderInput | SortOrder
    relatedQueries?: SortOrderInput | SortOrder
    articles?: SortOrderInput | SortOrder
    trendDate?: SortOrder
    createdAt?: SortOrder
  }

  export type TrendingTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title_trendDate?: TrendingTopicTitleTrendDateCompoundUniqueInput
    AND?: TrendingTopicWhereInput | TrendingTopicWhereInput[]
    OR?: TrendingTopicWhereInput[]
    NOT?: TrendingTopicWhereInput | TrendingTopicWhereInput[]
    title?: StringFilter<"TrendingTopic"> | string
    formattedTraffic?: StringNullableFilter<"TrendingTopic"> | string | null
    relatedQueries?: StringNullableFilter<"TrendingTopic"> | string | null
    articles?: StringNullableFilter<"TrendingTopic"> | string | null
    trendDate?: DateTimeFilter<"TrendingTopic"> | Date | string
    createdAt?: DateTimeFilter<"TrendingTopic"> | Date | string
  }, "id" | "title_trendDate">

  export type TrendingTopicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    formattedTraffic?: SortOrderInput | SortOrder
    relatedQueries?: SortOrderInput | SortOrder
    articles?: SortOrderInput | SortOrder
    trendDate?: SortOrder
    createdAt?: SortOrder
    _count?: TrendingTopicCountOrderByAggregateInput
    _max?: TrendingTopicMaxOrderByAggregateInput
    _min?: TrendingTopicMinOrderByAggregateInput
  }

  export type TrendingTopicScalarWhereWithAggregatesInput = {
    AND?: TrendingTopicScalarWhereWithAggregatesInput | TrendingTopicScalarWhereWithAggregatesInput[]
    OR?: TrendingTopicScalarWhereWithAggregatesInput[]
    NOT?: TrendingTopicScalarWhereWithAggregatesInput | TrendingTopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrendingTopic"> | string
    title?: StringWithAggregatesFilter<"TrendingTopic"> | string
    formattedTraffic?: StringNullableWithAggregatesFilter<"TrendingTopic"> | string | null
    relatedQueries?: StringNullableWithAggregatesFilter<"TrendingTopic"> | string | null
    articles?: StringNullableWithAggregatesFilter<"TrendingTopic"> | string | null
    trendDate?: DateTimeWithAggregatesFilter<"TrendingTopic"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TrendingTopic"> | Date | string
  }

  export type SystemSettingWhereInput = {
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    key?: StringFilter<"SystemSetting"> | string
    value?: StringFilter<"SystemSetting"> | string
    updatedAt?: DateTimeFilter<"SystemSetting"> | Date | string
  }

  export type SystemSettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    value?: StringFilter<"SystemSetting"> | string
    updatedAt?: DateTimeFilter<"SystemSetting"> | Date | string
  }, "key">

  export type SystemSettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingCountOrderByAggregateInput
    _max?: SystemSettingMaxOrderByAggregateInput
    _min?: SystemSettingMinOrderByAggregateInput
  }

  export type SystemSettingScalarWhereWithAggregatesInput = {
    AND?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    OR?: SystemSettingScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"SystemSetting"> | string
    value?: StringWithAggregatesFilter<"SystemSetting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSetting"> | Date | string
  }

  export type TrendDocumentWhereInput = {
    AND?: TrendDocumentWhereInput | TrendDocumentWhereInput[]
    OR?: TrendDocumentWhereInput[]
    NOT?: TrendDocumentWhereInput | TrendDocumentWhereInput[]
    id?: StringFilter<"TrendDocument"> | string
    filename?: StringFilter<"TrendDocument"> | string
    uploadedAt?: DateTimeFilter<"TrendDocument"> | Date | string
    trends?: TrendListRelationFilter
  }

  export type TrendDocumentOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    uploadedAt?: SortOrder
    trends?: TrendOrderByRelationAggregateInput
  }

  export type TrendDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrendDocumentWhereInput | TrendDocumentWhereInput[]
    OR?: TrendDocumentWhereInput[]
    NOT?: TrendDocumentWhereInput | TrendDocumentWhereInput[]
    filename?: StringFilter<"TrendDocument"> | string
    uploadedAt?: DateTimeFilter<"TrendDocument"> | Date | string
    trends?: TrendListRelationFilter
  }, "id">

  export type TrendDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    uploadedAt?: SortOrder
    _count?: TrendDocumentCountOrderByAggregateInput
    _max?: TrendDocumentMaxOrderByAggregateInput
    _min?: TrendDocumentMinOrderByAggregateInput
  }

  export type TrendDocumentScalarWhereWithAggregatesInput = {
    AND?: TrendDocumentScalarWhereWithAggregatesInput | TrendDocumentScalarWhereWithAggregatesInput[]
    OR?: TrendDocumentScalarWhereWithAggregatesInput[]
    NOT?: TrendDocumentScalarWhereWithAggregatesInput | TrendDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrendDocument"> | string
    filename?: StringWithAggregatesFilter<"TrendDocument"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"TrendDocument"> | Date | string
  }

  export type TrendWhereInput = {
    AND?: TrendWhereInput | TrendWhereInput[]
    OR?: TrendWhereInput[]
    NOT?: TrendWhereInput | TrendWhereInput[]
    id?: StringFilter<"Trend"> | string
    title?: StringFilter<"Trend"> | string
    category?: StringFilter<"Trend"> | string
    horizon?: StringFilter<"Trend"> | string
    description?: StringFilter<"Trend"> | string
    impactDetail?: StringNullableFilter<"Trend"> | string | null
    signalType?: StringNullableFilter<"Trend"> | string | null
    background?: StringNullableFilter<"Trend"> | string | null
    fullText?: StringNullableFilter<"Trend"> | string | null
    imageUrl?: StringNullableFilter<"Trend"> | string | null
    isOnRadar?: BoolFilter<"Trend"> | boolean
    documentId?: StringFilter<"Trend"> | string
    createdAt?: DateTimeFilter<"Trend"> | Date | string
    document?: XOR<TrendDocumentRelationFilter, TrendDocumentWhereInput>
  }

  export type TrendOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    horizon?: SortOrder
    description?: SortOrder
    impactDetail?: SortOrderInput | SortOrder
    signalType?: SortOrderInput | SortOrder
    background?: SortOrderInput | SortOrder
    fullText?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isOnRadar?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    document?: TrendDocumentOrderByWithRelationInput
  }

  export type TrendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrendWhereInput | TrendWhereInput[]
    OR?: TrendWhereInput[]
    NOT?: TrendWhereInput | TrendWhereInput[]
    title?: StringFilter<"Trend"> | string
    category?: StringFilter<"Trend"> | string
    horizon?: StringFilter<"Trend"> | string
    description?: StringFilter<"Trend"> | string
    impactDetail?: StringNullableFilter<"Trend"> | string | null
    signalType?: StringNullableFilter<"Trend"> | string | null
    background?: StringNullableFilter<"Trend"> | string | null
    fullText?: StringNullableFilter<"Trend"> | string | null
    imageUrl?: StringNullableFilter<"Trend"> | string | null
    isOnRadar?: BoolFilter<"Trend"> | boolean
    documentId?: StringFilter<"Trend"> | string
    createdAt?: DateTimeFilter<"Trend"> | Date | string
    document?: XOR<TrendDocumentRelationFilter, TrendDocumentWhereInput>
  }, "id">

  export type TrendOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    horizon?: SortOrder
    description?: SortOrder
    impactDetail?: SortOrderInput | SortOrder
    signalType?: SortOrderInput | SortOrder
    background?: SortOrderInput | SortOrder
    fullText?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isOnRadar?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    _count?: TrendCountOrderByAggregateInput
    _max?: TrendMaxOrderByAggregateInput
    _min?: TrendMinOrderByAggregateInput
  }

  export type TrendScalarWhereWithAggregatesInput = {
    AND?: TrendScalarWhereWithAggregatesInput | TrendScalarWhereWithAggregatesInput[]
    OR?: TrendScalarWhereWithAggregatesInput[]
    NOT?: TrendScalarWhereWithAggregatesInput | TrendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trend"> | string
    title?: StringWithAggregatesFilter<"Trend"> | string
    category?: StringWithAggregatesFilter<"Trend"> | string
    horizon?: StringWithAggregatesFilter<"Trend"> | string
    description?: StringWithAggregatesFilter<"Trend"> | string
    impactDetail?: StringNullableWithAggregatesFilter<"Trend"> | string | null
    signalType?: StringNullableWithAggregatesFilter<"Trend"> | string | null
    background?: StringNullableWithAggregatesFilter<"Trend"> | string | null
    fullText?: StringNullableWithAggregatesFilter<"Trend"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Trend"> | string | null
    isOnRadar?: BoolWithAggregatesFilter<"Trend"> | boolean
    documentId?: StringWithAggregatesFilter<"Trend"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Trend"> | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    title: string
    url: string
    platform: string
    fullText: string
    summary: string
    commentSummary?: string | null
    reactions?: string | null
    imageUrl?: string | null
    discoveryKeyword?: string | null
    category?: string | null
    embedding?: string | null
    publishedAt?: Date | string | null
    isFavorite?: boolean
    createdAt?: Date | string
    comments?: CommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    title: string
    url: string
    platform: string
    fullText: string
    summary: string
    commentSummary?: string | null
    reactions?: string | null
    imageUrl?: string | null
    discoveryKeyword?: string | null
    category?: string | null
    embedding?: string | null
    publishedAt?: Date | string | null
    isFavorite?: boolean
    createdAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    fullText?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    commentSummary?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    fullText?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    commentSummary?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: string
    title: string
    url: string
    platform: string
    fullText: string
    summary: string
    commentSummary?: string | null
    reactions?: string | null
    imageUrl?: string | null
    discoveryKeyword?: string | null
    category?: string | null
    embedding?: string | null
    publishedAt?: Date | string | null
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    fullText?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    commentSummary?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    fullText?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    commentSummary?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    author: string
    text: string
    article: ArticleCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    articleId: string
    author: string
    text: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    article?: ArticleUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    articleId: string
    author: string
    text: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DiscoveryDorkCreateInput = {
    id?: string
    query: string
    label: string
    keyword?: string | null
    startDate?: string | null
    endDate?: string | null
    maxResults?: number
    language?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type DiscoveryDorkUncheckedCreateInput = {
    id?: string
    query: string
    label: string
    keyword?: string | null
    startDate?: string | null
    endDate?: string | null
    maxResults?: number
    language?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type DiscoveryDorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    maxResults?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscoveryDorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    maxResults?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscoveryDorkCreateManyInput = {
    id?: string
    query: string
    label: string
    keyword?: string | null
    startDate?: string | null
    endDate?: string | null
    maxResults?: number
    language?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type DiscoveryDorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    maxResults?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscoveryDorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    maxResults?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscoveredLinkCreateInput = {
    id?: string
    url: string
    title?: string | null
    source?: string | null
    publishedAt?: string | null
    status?: string
    relevanceScore?: number | null
    embedding?: string | null
    createdAt?: Date | string
    dorkKeyword?: string | null
    dorkLabel?: string | null
  }

  export type DiscoveredLinkUncheckedCreateInput = {
    id?: string
    url: string
    title?: string | null
    source?: string | null
    publishedAt?: string | null
    status?: string
    relevanceScore?: number | null
    embedding?: string | null
    createdAt?: Date | string
    dorkKeyword?: string | null
    dorkLabel?: string | null
  }

  export type DiscoveredLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    relevanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dorkKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    dorkLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscoveredLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    relevanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dorkKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    dorkLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscoveredLinkCreateManyInput = {
    id?: string
    url: string
    title?: string | null
    source?: string | null
    publishedAt?: string | null
    status?: string
    relevanceScore?: number | null
    embedding?: string | null
    createdAt?: Date | string
    dorkKeyword?: string | null
    dorkLabel?: string | null
  }

  export type DiscoveredLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    relevanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dorkKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    dorkLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscoveredLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    relevanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dorkKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    dorkLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatisticDatasetCreateInput = {
    id?: string
    title: string
    sourceUrl: string
    data: string
    summary?: string | null
    createdAt?: Date | string
  }

  export type StatisticDatasetUncheckedCreateInput = {
    id?: string
    title: string
    sourceUrl: string
    data: string
    summary?: string | null
    createdAt?: Date | string
  }

  export type StatisticDatasetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticDatasetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticDatasetCreateManyInput = {
    id?: string
    title: string
    sourceUrl: string
    data: string
    summary?: string | null
    createdAt?: Date | string
  }

  export type StatisticDatasetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticDatasetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeJobCreateInput = {
    id?: string
    url: string
    status?: string
    totalPages?: number | null
    processedPages?: number
    datasetId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScrapeJobUncheckedCreateInput = {
    id?: string
    url: string
    status?: string
    totalPages?: number | null
    processedPages?: number
    datasetId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScrapeJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    processedPages?: IntFieldUpdateOperationsInput | number
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    processedPages?: IntFieldUpdateOperationsInput | number
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeJobCreateManyInput = {
    id?: string
    url: string
    status?: string
    totalPages?: number | null
    processedPages?: number
    datasetId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScrapeJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    processedPages?: IntFieldUpdateOperationsInput | number
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null
    processedPages?: IntFieldUpdateOperationsInput | number
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedInAccountCreateInput = {
    id?: string
    cookieString: string
    isActive?: boolean
    lastUsed?: Date | string | null
    dailyCount?: number
    createdAt?: Date | string
  }

  export type LinkedInAccountUncheckedCreateInput = {
    id?: string
    cookieString: string
    isActive?: boolean
    lastUsed?: Date | string | null
    dailyCount?: number
    createdAt?: Date | string
  }

  export type LinkedInAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cookieString?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedInAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cookieString?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedInAccountCreateManyInput = {
    id?: string
    cookieString: string
    isActive?: boolean
    lastUsed?: Date | string | null
    dailyCount?: number
    createdAt?: Date | string
  }

  export type LinkedInAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cookieString?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedInAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cookieString?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkKeywordCreateInput = {
    id?: string
    keyword: string
    type?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type NetworkKeywordUncheckedCreateInput = {
    id?: string
    keyword: string
    type?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type NetworkKeywordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkKeywordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkKeywordCreateManyInput = {
    id?: string
    keyword: string
    type?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type NetworkKeywordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkKeywordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryProfileCreateInput = {
    id?: string
    name: string
    linkedinUrl: string
    profileImageUrl?: string | null
    headline?: string | null
    company?: string | null
    about?: string | null
    experience?: string | null
    education?: string | null
    connectionsCount?: number | null
    isActive?: boolean
    lastScrapedAt?: Date | string | null
    createdAt?: Date | string
    posts?: LinkedInPostCreateNestedManyWithoutProfileInput
    interactionsAsActor?: NetworkInteractionCreateNestedManyWithoutActorInput
    interactionsAsTarget?: NetworkInteractionCreateNestedManyWithoutTargetInput
  }

  export type IndustryProfileUncheckedCreateInput = {
    id?: string
    name: string
    linkedinUrl: string
    profileImageUrl?: string | null
    headline?: string | null
    company?: string | null
    about?: string | null
    experience?: string | null
    education?: string | null
    connectionsCount?: number | null
    isActive?: boolean
    lastScrapedAt?: Date | string | null
    createdAt?: Date | string
    posts?: LinkedInPostUncheckedCreateNestedManyWithoutProfileInput
    interactionsAsActor?: NetworkInteractionUncheckedCreateNestedManyWithoutActorInput
    interactionsAsTarget?: NetworkInteractionUncheckedCreateNestedManyWithoutTargetInput
  }

  export type IndustryProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    connectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: LinkedInPostUpdateManyWithoutProfileNestedInput
    interactionsAsActor?: NetworkInteractionUpdateManyWithoutActorNestedInput
    interactionsAsTarget?: NetworkInteractionUpdateManyWithoutTargetNestedInput
  }

  export type IndustryProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    connectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: LinkedInPostUncheckedUpdateManyWithoutProfileNestedInput
    interactionsAsActor?: NetworkInteractionUncheckedUpdateManyWithoutActorNestedInput
    interactionsAsTarget?: NetworkInteractionUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type IndustryProfileCreateManyInput = {
    id?: string
    name: string
    linkedinUrl: string
    profileImageUrl?: string | null
    headline?: string | null
    company?: string | null
    about?: string | null
    experience?: string | null
    education?: string | null
    connectionsCount?: number | null
    isActive?: boolean
    lastScrapedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type IndustryProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    connectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    connectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedInPostCreateInput = {
    id?: string
    content: string
    url?: string | null
    publishedAt?: string | null
    extractedEntities?: string | null
    createdAt?: Date | string
    profile: IndustryProfileCreateNestedOneWithoutPostsInput
    interactions?: NetworkInteractionCreateNestedManyWithoutPostInput
  }

  export type LinkedInPostUncheckedCreateInput = {
    id?: string
    profileId: string
    content: string
    url?: string | null
    publishedAt?: string | null
    extractedEntities?: string | null
    createdAt?: Date | string
    interactions?: NetworkInteractionUncheckedCreateNestedManyWithoutPostInput
  }

  export type LinkedInPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    extractedEntities?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: IndustryProfileUpdateOneRequiredWithoutPostsNestedInput
    interactions?: NetworkInteractionUpdateManyWithoutPostNestedInput
  }

  export type LinkedInPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    extractedEntities?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactions?: NetworkInteractionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type LinkedInPostCreateManyInput = {
    id?: string
    profileId: string
    content: string
    url?: string | null
    publishedAt?: string | null
    extractedEntities?: string | null
    createdAt?: Date | string
  }

  export type LinkedInPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    extractedEntities?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedInPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    extractedEntities?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkInteractionCreateInput = {
    id?: string
    type: string
    content?: string | null
    createdAt?: Date | string
    actor: IndustryProfileCreateNestedOneWithoutInteractionsAsActorInput
    target?: IndustryProfileCreateNestedOneWithoutInteractionsAsTargetInput
    post?: LinkedInPostCreateNestedOneWithoutInteractionsInput
  }

  export type NetworkInteractionUncheckedCreateInput = {
    id?: string
    actorId: string
    targetId?: string | null
    postId?: string | null
    type: string
    content?: string | null
    createdAt?: Date | string
  }

  export type NetworkInteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: IndustryProfileUpdateOneRequiredWithoutInteractionsAsActorNestedInput
    target?: IndustryProfileUpdateOneWithoutInteractionsAsTargetNestedInput
    post?: LinkedInPostUpdateOneWithoutInteractionsNestedInput
  }

  export type NetworkInteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkInteractionCreateManyInput = {
    id?: string
    actorId: string
    targetId?: string | null
    postId?: string | null
    type: string
    content?: string | null
    createdAt?: Date | string
  }

  export type NetworkInteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkInteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetMonitorCreateInput = {
    id?: string
    url: string
    name: string
    selector?: string | null
    urlFilter?: string | null
    minDate?: Date | string | null
    maxDate?: Date | string | null
    lastChecked?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TargetMonitorUncheckedCreateInput = {
    id?: string
    url: string
    name: string
    selector?: string | null
    urlFilter?: string | null
    minDate?: Date | string | null
    maxDate?: Date | string | null
    lastChecked?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TargetMonitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    urlFilter?: NullableStringFieldUpdateOperationsInput | string | null
    minDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetMonitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    urlFilter?: NullableStringFieldUpdateOperationsInput | string | null
    minDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetMonitorCreateManyInput = {
    id?: string
    url: string
    name: string
    selector?: string | null
    urlFilter?: string | null
    minDate?: Date | string | null
    maxDate?: Date | string | null
    lastChecked?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TargetMonitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    urlFilter?: NullableStringFieldUpdateOperationsInput | string | null
    minDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetMonitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    urlFilter?: NullableStringFieldUpdateOperationsInput | string | null
    minDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedYoutubeVideoCreateInput = {
    id?: string
    videoId: string
    url: string
    title: string
    imageUrl?: string | null
    transcript: string
    originalTranscript?: string | null
    summary: string
    createdAt?: Date | string
  }

  export type SavedYoutubeVideoUncheckedCreateInput = {
    id?: string
    videoId: string
    url: string
    title: string
    imageUrl?: string | null
    transcript: string
    originalTranscript?: string | null
    summary: string
    createdAt?: Date | string
  }

  export type SavedYoutubeVideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: StringFieldUpdateOperationsInput | string
    originalTranscript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedYoutubeVideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: StringFieldUpdateOperationsInput | string
    originalTranscript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedYoutubeVideoCreateManyInput = {
    id?: string
    videoId: string
    url: string
    title: string
    imageUrl?: string | null
    transcript: string
    originalTranscript?: string | null
    summary: string
    createdAt?: Date | string
  }

  export type SavedYoutubeVideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: StringFieldUpdateOperationsInput | string
    originalTranscript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedYoutubeVideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: StringFieldUpdateOperationsInput | string
    originalTranscript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendingTopicCreateInput = {
    id?: string
    title: string
    formattedTraffic?: string | null
    relatedQueries?: string | null
    articles?: string | null
    trendDate: Date | string
    createdAt?: Date | string
  }

  export type TrendingTopicUncheckedCreateInput = {
    id?: string
    title: string
    formattedTraffic?: string | null
    relatedQueries?: string | null
    articles?: string | null
    trendDate: Date | string
    createdAt?: Date | string
  }

  export type TrendingTopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    formattedTraffic?: NullableStringFieldUpdateOperationsInput | string | null
    relatedQueries?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: NullableStringFieldUpdateOperationsInput | string | null
    trendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendingTopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    formattedTraffic?: NullableStringFieldUpdateOperationsInput | string | null
    relatedQueries?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: NullableStringFieldUpdateOperationsInput | string | null
    trendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendingTopicCreateManyInput = {
    id?: string
    title: string
    formattedTraffic?: string | null
    relatedQueries?: string | null
    articles?: string | null
    trendDate: Date | string
    createdAt?: Date | string
  }

  export type TrendingTopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    formattedTraffic?: NullableStringFieldUpdateOperationsInput | string | null
    relatedQueries?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: NullableStringFieldUpdateOperationsInput | string | null
    trendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendingTopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    formattedTraffic?: NullableStringFieldUpdateOperationsInput | string | null
    relatedQueries?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: NullableStringFieldUpdateOperationsInput | string | null
    trendDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingCreateInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SystemSettingUncheckedCreateInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SystemSettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingCreateManyInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SystemSettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendDocumentCreateInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
    trends?: TrendCreateNestedManyWithoutDocumentInput
  }

  export type TrendDocumentUncheckedCreateInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
    trends?: TrendUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type TrendDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trends?: TrendUpdateManyWithoutDocumentNestedInput
  }

  export type TrendDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trends?: TrendUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type TrendDocumentCreateManyInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
  }

  export type TrendDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendCreateInput = {
    id?: string
    title: string
    category: string
    horizon: string
    description: string
    impactDetail?: string | null
    signalType?: string | null
    background?: string | null
    fullText?: string | null
    imageUrl?: string | null
    isOnRadar?: boolean
    createdAt?: Date | string
    document: TrendDocumentCreateNestedOneWithoutTrendsInput
  }

  export type TrendUncheckedCreateInput = {
    id?: string
    title: string
    category: string
    horizon: string
    description: string
    impactDetail?: string | null
    signalType?: string | null
    background?: string | null
    fullText?: string | null
    imageUrl?: string | null
    isOnRadar?: boolean
    documentId: string
    createdAt?: Date | string
  }

  export type TrendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    horizon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impactDetail?: NullableStringFieldUpdateOperationsInput | string | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isOnRadar?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: TrendDocumentUpdateOneRequiredWithoutTrendsNestedInput
  }

  export type TrendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    horizon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impactDetail?: NullableStringFieldUpdateOperationsInput | string | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isOnRadar?: BoolFieldUpdateOperationsInput | boolean
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendCreateManyInput = {
    id?: string
    title: string
    category: string
    horizon: string
    description: string
    impactDetail?: string | null
    signalType?: string | null
    background?: string | null
    fullText?: string | null
    imageUrl?: string | null
    isOnRadar?: boolean
    documentId: string
    createdAt?: Date | string
  }

  export type TrendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    horizon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impactDetail?: NullableStringFieldUpdateOperationsInput | string | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isOnRadar?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    horizon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impactDetail?: NullableStringFieldUpdateOperationsInput | string | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isOnRadar?: BoolFieldUpdateOperationsInput | boolean
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    platform?: SortOrder
    fullText?: SortOrder
    summary?: SortOrder
    commentSummary?: SortOrder
    reactions?: SortOrder
    imageUrl?: SortOrder
    discoveryKeyword?: SortOrder
    category?: SortOrder
    embedding?: SortOrder
    publishedAt?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    platform?: SortOrder
    fullText?: SortOrder
    summary?: SortOrder
    commentSummary?: SortOrder
    reactions?: SortOrder
    imageUrl?: SortOrder
    discoveryKeyword?: SortOrder
    category?: SortOrder
    embedding?: SortOrder
    publishedAt?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    platform?: SortOrder
    fullText?: SortOrder
    summary?: SortOrder
    commentSummary?: SortOrder
    reactions?: SortOrder
    imageUrl?: SortOrder
    discoveryKeyword?: SortOrder
    category?: SortOrder
    embedding?: SortOrder
    publishedAt?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ArticleRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    author?: SortOrder
    text?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    author?: SortOrder
    text?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    author?: SortOrder
    text?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DiscoveryDorkCountOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    label?: SortOrder
    keyword?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxResults?: SortOrder
    language?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscoveryDorkAvgOrderByAggregateInput = {
    maxResults?: SortOrder
  }

  export type DiscoveryDorkMaxOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    label?: SortOrder
    keyword?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxResults?: SortOrder
    language?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscoveryDorkMinOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    label?: SortOrder
    keyword?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxResults?: SortOrder
    language?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscoveryDorkSumOrderByAggregateInput = {
    maxResults?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DiscoveredLinkCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    source?: SortOrder
    publishedAt?: SortOrder
    status?: SortOrder
    relevanceScore?: SortOrder
    embedding?: SortOrder
    createdAt?: SortOrder
    dorkKeyword?: SortOrder
    dorkLabel?: SortOrder
  }

  export type DiscoveredLinkAvgOrderByAggregateInput = {
    relevanceScore?: SortOrder
  }

  export type DiscoveredLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    source?: SortOrder
    publishedAt?: SortOrder
    status?: SortOrder
    relevanceScore?: SortOrder
    embedding?: SortOrder
    createdAt?: SortOrder
    dorkKeyword?: SortOrder
    dorkLabel?: SortOrder
  }

  export type DiscoveredLinkMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    source?: SortOrder
    publishedAt?: SortOrder
    status?: SortOrder
    relevanceScore?: SortOrder
    embedding?: SortOrder
    createdAt?: SortOrder
    dorkKeyword?: SortOrder
    dorkLabel?: SortOrder
  }

  export type DiscoveredLinkSumOrderByAggregateInput = {
    relevanceScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StatisticDatasetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sourceUrl?: SortOrder
    data?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticDatasetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sourceUrl?: SortOrder
    data?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticDatasetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sourceUrl?: SortOrder
    data?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeJobCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    totalPages?: SortOrder
    processedPages?: SortOrder
    datasetId?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScrapeJobAvgOrderByAggregateInput = {
    totalPages?: SortOrder
    processedPages?: SortOrder
  }

  export type ScrapeJobMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    totalPages?: SortOrder
    processedPages?: SortOrder
    datasetId?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScrapeJobMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    totalPages?: SortOrder
    processedPages?: SortOrder
    datasetId?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScrapeJobSumOrderByAggregateInput = {
    totalPages?: SortOrder
    processedPages?: SortOrder
  }

  export type LinkedInAccountCountOrderByAggregateInput = {
    id?: SortOrder
    cookieString?: SortOrder
    isActive?: SortOrder
    lastUsed?: SortOrder
    dailyCount?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedInAccountAvgOrderByAggregateInput = {
    dailyCount?: SortOrder
  }

  export type LinkedInAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    cookieString?: SortOrder
    isActive?: SortOrder
    lastUsed?: SortOrder
    dailyCount?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedInAccountMinOrderByAggregateInput = {
    id?: SortOrder
    cookieString?: SortOrder
    isActive?: SortOrder
    lastUsed?: SortOrder
    dailyCount?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedInAccountSumOrderByAggregateInput = {
    dailyCount?: SortOrder
  }

  export type NetworkKeywordCountOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkKeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkKeywordMinOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedInPostListRelationFilter = {
    every?: LinkedInPostWhereInput
    some?: LinkedInPostWhereInput
    none?: LinkedInPostWhereInput
  }

  export type NetworkInteractionListRelationFilter = {
    every?: NetworkInteractionWhereInput
    some?: NetworkInteractionWhereInput
    none?: NetworkInteractionWhereInput
  }

  export type LinkedInPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NetworkInteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndustryProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkedinUrl?: SortOrder
    profileImageUrl?: SortOrder
    headline?: SortOrder
    company?: SortOrder
    about?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    connectionsCount?: SortOrder
    isActive?: SortOrder
    lastScrapedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IndustryProfileAvgOrderByAggregateInput = {
    connectionsCount?: SortOrder
  }

  export type IndustryProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkedinUrl?: SortOrder
    profileImageUrl?: SortOrder
    headline?: SortOrder
    company?: SortOrder
    about?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    connectionsCount?: SortOrder
    isActive?: SortOrder
    lastScrapedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IndustryProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkedinUrl?: SortOrder
    profileImageUrl?: SortOrder
    headline?: SortOrder
    company?: SortOrder
    about?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    connectionsCount?: SortOrder
    isActive?: SortOrder
    lastScrapedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IndustryProfileSumOrderByAggregateInput = {
    connectionsCount?: SortOrder
  }

  export type IndustryProfileRelationFilter = {
    is?: IndustryProfileWhereInput
    isNot?: IndustryProfileWhereInput
  }

  export type LinkedInPostCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    content?: SortOrder
    url?: SortOrder
    publishedAt?: SortOrder
    extractedEntities?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedInPostMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    content?: SortOrder
    url?: SortOrder
    publishedAt?: SortOrder
    extractedEntities?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkedInPostMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    content?: SortOrder
    url?: SortOrder
    publishedAt?: SortOrder
    extractedEntities?: SortOrder
    createdAt?: SortOrder
  }

  export type IndustryProfileNullableRelationFilter = {
    is?: IndustryProfileWhereInput | null
    isNot?: IndustryProfileWhereInput | null
  }

  export type LinkedInPostNullableRelationFilter = {
    is?: LinkedInPostWhereInput | null
    isNot?: LinkedInPostWhereInput | null
  }

  export type NetworkInteractionCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    targetId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkInteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    targetId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkInteractionMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    targetId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type TargetMonitorCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    selector?: SortOrder
    urlFilter?: SortOrder
    minDate?: SortOrder
    maxDate?: SortOrder
    lastChecked?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TargetMonitorMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    selector?: SortOrder
    urlFilter?: SortOrder
    minDate?: SortOrder
    maxDate?: SortOrder
    lastChecked?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TargetMonitorMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    selector?: SortOrder
    urlFilter?: SortOrder
    minDate?: SortOrder
    maxDate?: SortOrder
    lastChecked?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedYoutubeVideoCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    transcript?: SortOrder
    originalTranscript?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedYoutubeVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    transcript?: SortOrder
    originalTranscript?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedYoutubeVideoMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    transcript?: SortOrder
    originalTranscript?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type TrendingTopicTitleTrendDateCompoundUniqueInput = {
    title: string
    trendDate: Date | string
  }

  export type TrendingTopicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    formattedTraffic?: SortOrder
    relatedQueries?: SortOrder
    articles?: SortOrder
    trendDate?: SortOrder
    createdAt?: SortOrder
  }

  export type TrendingTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    formattedTraffic?: SortOrder
    relatedQueries?: SortOrder
    articles?: SortOrder
    trendDate?: SortOrder
    createdAt?: SortOrder
  }

  export type TrendingTopicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    formattedTraffic?: SortOrder
    relatedQueries?: SortOrder
    articles?: SortOrder
    trendDate?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemSettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrendListRelationFilter = {
    every?: TrendWhereInput
    some?: TrendWhereInput
    none?: TrendWhereInput
  }

  export type TrendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrendDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    uploadedAt?: SortOrder
  }

  export type TrendDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    uploadedAt?: SortOrder
  }

  export type TrendDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    uploadedAt?: SortOrder
  }

  export type TrendDocumentRelationFilter = {
    is?: TrendDocumentWhereInput
    isNot?: TrendDocumentWhereInput
  }

  export type TrendCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    horizon?: SortOrder
    description?: SortOrder
    impactDetail?: SortOrder
    signalType?: SortOrder
    background?: SortOrder
    fullText?: SortOrder
    imageUrl?: SortOrder
    isOnRadar?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
  }

  export type TrendMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    horizon?: SortOrder
    description?: SortOrder
    impactDetail?: SortOrder
    signalType?: SortOrder
    background?: SortOrder
    fullText?: SortOrder
    imageUrl?: SortOrder
    isOnRadar?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
  }

  export type TrendMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    horizon?: SortOrder
    description?: SortOrder
    impactDetail?: SortOrder
    signalType?: SortOrder
    background?: SortOrder
    fullText?: SortOrder
    imageUrl?: SortOrder
    isOnRadar?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentCreateNestedManyWithoutArticleInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommentUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArticleInput | CommentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArticleInput | CommentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArticleInput | CommentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArticleInput | CommentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArticleInput | CommentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArticleInput | CommentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ArticleCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput
    connect?: ArticleWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput
    upsert?: ArticleUpsertWithoutCommentsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutCommentsInput, ArticleUpdateWithoutCommentsInput>, ArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LinkedInPostCreateNestedManyWithoutProfileInput = {
    create?: XOR<LinkedInPostCreateWithoutProfileInput, LinkedInPostUncheckedCreateWithoutProfileInput> | LinkedInPostCreateWithoutProfileInput[] | LinkedInPostUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LinkedInPostCreateOrConnectWithoutProfileInput | LinkedInPostCreateOrConnectWithoutProfileInput[]
    createMany?: LinkedInPostCreateManyProfileInputEnvelope
    connect?: LinkedInPostWhereUniqueInput | LinkedInPostWhereUniqueInput[]
  }

  export type NetworkInteractionCreateNestedManyWithoutActorInput = {
    create?: XOR<NetworkInteractionCreateWithoutActorInput, NetworkInteractionUncheckedCreateWithoutActorInput> | NetworkInteractionCreateWithoutActorInput[] | NetworkInteractionUncheckedCreateWithoutActorInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutActorInput | NetworkInteractionCreateOrConnectWithoutActorInput[]
    createMany?: NetworkInteractionCreateManyActorInputEnvelope
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
  }

  export type NetworkInteractionCreateNestedManyWithoutTargetInput = {
    create?: XOR<NetworkInteractionCreateWithoutTargetInput, NetworkInteractionUncheckedCreateWithoutTargetInput> | NetworkInteractionCreateWithoutTargetInput[] | NetworkInteractionUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutTargetInput | NetworkInteractionCreateOrConnectWithoutTargetInput[]
    createMany?: NetworkInteractionCreateManyTargetInputEnvelope
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
  }

  export type LinkedInPostUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<LinkedInPostCreateWithoutProfileInput, LinkedInPostUncheckedCreateWithoutProfileInput> | LinkedInPostCreateWithoutProfileInput[] | LinkedInPostUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LinkedInPostCreateOrConnectWithoutProfileInput | LinkedInPostCreateOrConnectWithoutProfileInput[]
    createMany?: LinkedInPostCreateManyProfileInputEnvelope
    connect?: LinkedInPostWhereUniqueInput | LinkedInPostWhereUniqueInput[]
  }

  export type NetworkInteractionUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<NetworkInteractionCreateWithoutActorInput, NetworkInteractionUncheckedCreateWithoutActorInput> | NetworkInteractionCreateWithoutActorInput[] | NetworkInteractionUncheckedCreateWithoutActorInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutActorInput | NetworkInteractionCreateOrConnectWithoutActorInput[]
    createMany?: NetworkInteractionCreateManyActorInputEnvelope
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
  }

  export type NetworkInteractionUncheckedCreateNestedManyWithoutTargetInput = {
    create?: XOR<NetworkInteractionCreateWithoutTargetInput, NetworkInteractionUncheckedCreateWithoutTargetInput> | NetworkInteractionCreateWithoutTargetInput[] | NetworkInteractionUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutTargetInput | NetworkInteractionCreateOrConnectWithoutTargetInput[]
    createMany?: NetworkInteractionCreateManyTargetInputEnvelope
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
  }

  export type LinkedInPostUpdateManyWithoutProfileNestedInput = {
    create?: XOR<LinkedInPostCreateWithoutProfileInput, LinkedInPostUncheckedCreateWithoutProfileInput> | LinkedInPostCreateWithoutProfileInput[] | LinkedInPostUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LinkedInPostCreateOrConnectWithoutProfileInput | LinkedInPostCreateOrConnectWithoutProfileInput[]
    upsert?: LinkedInPostUpsertWithWhereUniqueWithoutProfileInput | LinkedInPostUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: LinkedInPostCreateManyProfileInputEnvelope
    set?: LinkedInPostWhereUniqueInput | LinkedInPostWhereUniqueInput[]
    disconnect?: LinkedInPostWhereUniqueInput | LinkedInPostWhereUniqueInput[]
    delete?: LinkedInPostWhereUniqueInput | LinkedInPostWhereUniqueInput[]
    connect?: LinkedInPostWhereUniqueInput | LinkedInPostWhereUniqueInput[]
    update?: LinkedInPostUpdateWithWhereUniqueWithoutProfileInput | LinkedInPostUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: LinkedInPostUpdateManyWithWhereWithoutProfileInput | LinkedInPostUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: LinkedInPostScalarWhereInput | LinkedInPostScalarWhereInput[]
  }

  export type NetworkInteractionUpdateManyWithoutActorNestedInput = {
    create?: XOR<NetworkInteractionCreateWithoutActorInput, NetworkInteractionUncheckedCreateWithoutActorInput> | NetworkInteractionCreateWithoutActorInput[] | NetworkInteractionUncheckedCreateWithoutActorInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutActorInput | NetworkInteractionCreateOrConnectWithoutActorInput[]
    upsert?: NetworkInteractionUpsertWithWhereUniqueWithoutActorInput | NetworkInteractionUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: NetworkInteractionCreateManyActorInputEnvelope
    set?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    disconnect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    delete?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    update?: NetworkInteractionUpdateWithWhereUniqueWithoutActorInput | NetworkInteractionUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: NetworkInteractionUpdateManyWithWhereWithoutActorInput | NetworkInteractionUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: NetworkInteractionScalarWhereInput | NetworkInteractionScalarWhereInput[]
  }

  export type NetworkInteractionUpdateManyWithoutTargetNestedInput = {
    create?: XOR<NetworkInteractionCreateWithoutTargetInput, NetworkInteractionUncheckedCreateWithoutTargetInput> | NetworkInteractionCreateWithoutTargetInput[] | NetworkInteractionUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutTargetInput | NetworkInteractionCreateOrConnectWithoutTargetInput[]
    upsert?: NetworkInteractionUpsertWithWhereUniqueWithoutTargetInput | NetworkInteractionUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: NetworkInteractionCreateManyTargetInputEnvelope
    set?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    disconnect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    delete?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    update?: NetworkInteractionUpdateWithWhereUniqueWithoutTargetInput | NetworkInteractionUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: NetworkInteractionUpdateManyWithWhereWithoutTargetInput | NetworkInteractionUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: NetworkInteractionScalarWhereInput | NetworkInteractionScalarWhereInput[]
  }

  export type LinkedInPostUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<LinkedInPostCreateWithoutProfileInput, LinkedInPostUncheckedCreateWithoutProfileInput> | LinkedInPostCreateWithoutProfileInput[] | LinkedInPostUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LinkedInPostCreateOrConnectWithoutProfileInput | LinkedInPostCreateOrConnectWithoutProfileInput[]
    upsert?: LinkedInPostUpsertWithWhereUniqueWithoutProfileInput | LinkedInPostUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: LinkedInPostCreateManyProfileInputEnvelope
    set?: LinkedInPostWhereUniqueInput | LinkedInPostWhereUniqueInput[]
    disconnect?: LinkedInPostWhereUniqueInput | LinkedInPostWhereUniqueInput[]
    delete?: LinkedInPostWhereUniqueInput | LinkedInPostWhereUniqueInput[]
    connect?: LinkedInPostWhereUniqueInput | LinkedInPostWhereUniqueInput[]
    update?: LinkedInPostUpdateWithWhereUniqueWithoutProfileInput | LinkedInPostUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: LinkedInPostUpdateManyWithWhereWithoutProfileInput | LinkedInPostUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: LinkedInPostScalarWhereInput | LinkedInPostScalarWhereInput[]
  }

  export type NetworkInteractionUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<NetworkInteractionCreateWithoutActorInput, NetworkInteractionUncheckedCreateWithoutActorInput> | NetworkInteractionCreateWithoutActorInput[] | NetworkInteractionUncheckedCreateWithoutActorInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutActorInput | NetworkInteractionCreateOrConnectWithoutActorInput[]
    upsert?: NetworkInteractionUpsertWithWhereUniqueWithoutActorInput | NetworkInteractionUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: NetworkInteractionCreateManyActorInputEnvelope
    set?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    disconnect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    delete?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    update?: NetworkInteractionUpdateWithWhereUniqueWithoutActorInput | NetworkInteractionUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: NetworkInteractionUpdateManyWithWhereWithoutActorInput | NetworkInteractionUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: NetworkInteractionScalarWhereInput | NetworkInteractionScalarWhereInput[]
  }

  export type NetworkInteractionUncheckedUpdateManyWithoutTargetNestedInput = {
    create?: XOR<NetworkInteractionCreateWithoutTargetInput, NetworkInteractionUncheckedCreateWithoutTargetInput> | NetworkInteractionCreateWithoutTargetInput[] | NetworkInteractionUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutTargetInput | NetworkInteractionCreateOrConnectWithoutTargetInput[]
    upsert?: NetworkInteractionUpsertWithWhereUniqueWithoutTargetInput | NetworkInteractionUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: NetworkInteractionCreateManyTargetInputEnvelope
    set?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    disconnect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    delete?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    update?: NetworkInteractionUpdateWithWhereUniqueWithoutTargetInput | NetworkInteractionUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: NetworkInteractionUpdateManyWithWhereWithoutTargetInput | NetworkInteractionUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: NetworkInteractionScalarWhereInput | NetworkInteractionScalarWhereInput[]
  }

  export type IndustryProfileCreateNestedOneWithoutPostsInput = {
    create?: XOR<IndustryProfileCreateWithoutPostsInput, IndustryProfileUncheckedCreateWithoutPostsInput>
    connectOrCreate?: IndustryProfileCreateOrConnectWithoutPostsInput
    connect?: IndustryProfileWhereUniqueInput
  }

  export type NetworkInteractionCreateNestedManyWithoutPostInput = {
    create?: XOR<NetworkInteractionCreateWithoutPostInput, NetworkInteractionUncheckedCreateWithoutPostInput> | NetworkInteractionCreateWithoutPostInput[] | NetworkInteractionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutPostInput | NetworkInteractionCreateOrConnectWithoutPostInput[]
    createMany?: NetworkInteractionCreateManyPostInputEnvelope
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
  }

  export type NetworkInteractionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<NetworkInteractionCreateWithoutPostInput, NetworkInteractionUncheckedCreateWithoutPostInput> | NetworkInteractionCreateWithoutPostInput[] | NetworkInteractionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutPostInput | NetworkInteractionCreateOrConnectWithoutPostInput[]
    createMany?: NetworkInteractionCreateManyPostInputEnvelope
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
  }

  export type IndustryProfileUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<IndustryProfileCreateWithoutPostsInput, IndustryProfileUncheckedCreateWithoutPostsInput>
    connectOrCreate?: IndustryProfileCreateOrConnectWithoutPostsInput
    upsert?: IndustryProfileUpsertWithoutPostsInput
    connect?: IndustryProfileWhereUniqueInput
    update?: XOR<XOR<IndustryProfileUpdateToOneWithWhereWithoutPostsInput, IndustryProfileUpdateWithoutPostsInput>, IndustryProfileUncheckedUpdateWithoutPostsInput>
  }

  export type NetworkInteractionUpdateManyWithoutPostNestedInput = {
    create?: XOR<NetworkInteractionCreateWithoutPostInput, NetworkInteractionUncheckedCreateWithoutPostInput> | NetworkInteractionCreateWithoutPostInput[] | NetworkInteractionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutPostInput | NetworkInteractionCreateOrConnectWithoutPostInput[]
    upsert?: NetworkInteractionUpsertWithWhereUniqueWithoutPostInput | NetworkInteractionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: NetworkInteractionCreateManyPostInputEnvelope
    set?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    disconnect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    delete?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    update?: NetworkInteractionUpdateWithWhereUniqueWithoutPostInput | NetworkInteractionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: NetworkInteractionUpdateManyWithWhereWithoutPostInput | NetworkInteractionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: NetworkInteractionScalarWhereInput | NetworkInteractionScalarWhereInput[]
  }

  export type NetworkInteractionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<NetworkInteractionCreateWithoutPostInput, NetworkInteractionUncheckedCreateWithoutPostInput> | NetworkInteractionCreateWithoutPostInput[] | NetworkInteractionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NetworkInteractionCreateOrConnectWithoutPostInput | NetworkInteractionCreateOrConnectWithoutPostInput[]
    upsert?: NetworkInteractionUpsertWithWhereUniqueWithoutPostInput | NetworkInteractionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: NetworkInteractionCreateManyPostInputEnvelope
    set?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    disconnect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    delete?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    connect?: NetworkInteractionWhereUniqueInput | NetworkInteractionWhereUniqueInput[]
    update?: NetworkInteractionUpdateWithWhereUniqueWithoutPostInput | NetworkInteractionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: NetworkInteractionUpdateManyWithWhereWithoutPostInput | NetworkInteractionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: NetworkInteractionScalarWhereInput | NetworkInteractionScalarWhereInput[]
  }

  export type IndustryProfileCreateNestedOneWithoutInteractionsAsActorInput = {
    create?: XOR<IndustryProfileCreateWithoutInteractionsAsActorInput, IndustryProfileUncheckedCreateWithoutInteractionsAsActorInput>
    connectOrCreate?: IndustryProfileCreateOrConnectWithoutInteractionsAsActorInput
    connect?: IndustryProfileWhereUniqueInput
  }

  export type IndustryProfileCreateNestedOneWithoutInteractionsAsTargetInput = {
    create?: XOR<IndustryProfileCreateWithoutInteractionsAsTargetInput, IndustryProfileUncheckedCreateWithoutInteractionsAsTargetInput>
    connectOrCreate?: IndustryProfileCreateOrConnectWithoutInteractionsAsTargetInput
    connect?: IndustryProfileWhereUniqueInput
  }

  export type LinkedInPostCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<LinkedInPostCreateWithoutInteractionsInput, LinkedInPostUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: LinkedInPostCreateOrConnectWithoutInteractionsInput
    connect?: LinkedInPostWhereUniqueInput
  }

  export type IndustryProfileUpdateOneRequiredWithoutInteractionsAsActorNestedInput = {
    create?: XOR<IndustryProfileCreateWithoutInteractionsAsActorInput, IndustryProfileUncheckedCreateWithoutInteractionsAsActorInput>
    connectOrCreate?: IndustryProfileCreateOrConnectWithoutInteractionsAsActorInput
    upsert?: IndustryProfileUpsertWithoutInteractionsAsActorInput
    connect?: IndustryProfileWhereUniqueInput
    update?: XOR<XOR<IndustryProfileUpdateToOneWithWhereWithoutInteractionsAsActorInput, IndustryProfileUpdateWithoutInteractionsAsActorInput>, IndustryProfileUncheckedUpdateWithoutInteractionsAsActorInput>
  }

  export type IndustryProfileUpdateOneWithoutInteractionsAsTargetNestedInput = {
    create?: XOR<IndustryProfileCreateWithoutInteractionsAsTargetInput, IndustryProfileUncheckedCreateWithoutInteractionsAsTargetInput>
    connectOrCreate?: IndustryProfileCreateOrConnectWithoutInteractionsAsTargetInput
    upsert?: IndustryProfileUpsertWithoutInteractionsAsTargetInput
    disconnect?: IndustryProfileWhereInput | boolean
    delete?: IndustryProfileWhereInput | boolean
    connect?: IndustryProfileWhereUniqueInput
    update?: XOR<XOR<IndustryProfileUpdateToOneWithWhereWithoutInteractionsAsTargetInput, IndustryProfileUpdateWithoutInteractionsAsTargetInput>, IndustryProfileUncheckedUpdateWithoutInteractionsAsTargetInput>
  }

  export type LinkedInPostUpdateOneWithoutInteractionsNestedInput = {
    create?: XOR<LinkedInPostCreateWithoutInteractionsInput, LinkedInPostUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: LinkedInPostCreateOrConnectWithoutInteractionsInput
    upsert?: LinkedInPostUpsertWithoutInteractionsInput
    disconnect?: LinkedInPostWhereInput | boolean
    delete?: LinkedInPostWhereInput | boolean
    connect?: LinkedInPostWhereUniqueInput
    update?: XOR<XOR<LinkedInPostUpdateToOneWithWhereWithoutInteractionsInput, LinkedInPostUpdateWithoutInteractionsInput>, LinkedInPostUncheckedUpdateWithoutInteractionsInput>
  }

  export type TrendCreateNestedManyWithoutDocumentInput = {
    create?: XOR<TrendCreateWithoutDocumentInput, TrendUncheckedCreateWithoutDocumentInput> | TrendCreateWithoutDocumentInput[] | TrendUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: TrendCreateOrConnectWithoutDocumentInput | TrendCreateOrConnectWithoutDocumentInput[]
    createMany?: TrendCreateManyDocumentInputEnvelope
    connect?: TrendWhereUniqueInput | TrendWhereUniqueInput[]
  }

  export type TrendUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<TrendCreateWithoutDocumentInput, TrendUncheckedCreateWithoutDocumentInput> | TrendCreateWithoutDocumentInput[] | TrendUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: TrendCreateOrConnectWithoutDocumentInput | TrendCreateOrConnectWithoutDocumentInput[]
    createMany?: TrendCreateManyDocumentInputEnvelope
    connect?: TrendWhereUniqueInput | TrendWhereUniqueInput[]
  }

  export type TrendUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<TrendCreateWithoutDocumentInput, TrendUncheckedCreateWithoutDocumentInput> | TrendCreateWithoutDocumentInput[] | TrendUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: TrendCreateOrConnectWithoutDocumentInput | TrendCreateOrConnectWithoutDocumentInput[]
    upsert?: TrendUpsertWithWhereUniqueWithoutDocumentInput | TrendUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: TrendCreateManyDocumentInputEnvelope
    set?: TrendWhereUniqueInput | TrendWhereUniqueInput[]
    disconnect?: TrendWhereUniqueInput | TrendWhereUniqueInput[]
    delete?: TrendWhereUniqueInput | TrendWhereUniqueInput[]
    connect?: TrendWhereUniqueInput | TrendWhereUniqueInput[]
    update?: TrendUpdateWithWhereUniqueWithoutDocumentInput | TrendUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: TrendUpdateManyWithWhereWithoutDocumentInput | TrendUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: TrendScalarWhereInput | TrendScalarWhereInput[]
  }

  export type TrendUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<TrendCreateWithoutDocumentInput, TrendUncheckedCreateWithoutDocumentInput> | TrendCreateWithoutDocumentInput[] | TrendUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: TrendCreateOrConnectWithoutDocumentInput | TrendCreateOrConnectWithoutDocumentInput[]
    upsert?: TrendUpsertWithWhereUniqueWithoutDocumentInput | TrendUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: TrendCreateManyDocumentInputEnvelope
    set?: TrendWhereUniqueInput | TrendWhereUniqueInput[]
    disconnect?: TrendWhereUniqueInput | TrendWhereUniqueInput[]
    delete?: TrendWhereUniqueInput | TrendWhereUniqueInput[]
    connect?: TrendWhereUniqueInput | TrendWhereUniqueInput[]
    update?: TrendUpdateWithWhereUniqueWithoutDocumentInput | TrendUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: TrendUpdateManyWithWhereWithoutDocumentInput | TrendUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: TrendScalarWhereInput | TrendScalarWhereInput[]
  }

  export type TrendDocumentCreateNestedOneWithoutTrendsInput = {
    create?: XOR<TrendDocumentCreateWithoutTrendsInput, TrendDocumentUncheckedCreateWithoutTrendsInput>
    connectOrCreate?: TrendDocumentCreateOrConnectWithoutTrendsInput
    connect?: TrendDocumentWhereUniqueInput
  }

  export type TrendDocumentUpdateOneRequiredWithoutTrendsNestedInput = {
    create?: XOR<TrendDocumentCreateWithoutTrendsInput, TrendDocumentUncheckedCreateWithoutTrendsInput>
    connectOrCreate?: TrendDocumentCreateOrConnectWithoutTrendsInput
    upsert?: TrendDocumentUpsertWithoutTrendsInput
    connect?: TrendDocumentWhereUniqueInput
    update?: XOR<XOR<TrendDocumentUpdateToOneWithWhereWithoutTrendsInput, TrendDocumentUpdateWithoutTrendsInput>, TrendDocumentUncheckedUpdateWithoutTrendsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CommentCreateWithoutArticleInput = {
    id?: string
    author: string
    text: string
  }

  export type CommentUncheckedCreateWithoutArticleInput = {
    id?: string
    author: string
    text: string
  }

  export type CommentCreateOrConnectWithoutArticleInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput>
  }

  export type CommentCreateManyArticleInputEnvelope = {
    data: CommentCreateManyArticleInput | CommentCreateManyArticleInput[]
  }

  export type CommentUpsertWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutArticleInput, CommentUncheckedUpdateWithoutArticleInput>
    create: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutArticleInput, CommentUncheckedUpdateWithoutArticleInput>
  }

  export type CommentUpdateManyWithWhereWithoutArticleInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutArticleInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    articleId?: StringFilter<"Comment"> | string
    author?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
  }

  export type ArticleCreateWithoutCommentsInput = {
    id?: string
    title: string
    url: string
    platform: string
    fullText: string
    summary: string
    commentSummary?: string | null
    reactions?: string | null
    imageUrl?: string | null
    discoveryKeyword?: string | null
    category?: string | null
    embedding?: string | null
    publishedAt?: Date | string | null
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type ArticleUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    url: string
    platform: string
    fullText: string
    summary: string
    commentSummary?: string | null
    reactions?: string | null
    imageUrl?: string | null
    discoveryKeyword?: string | null
    category?: string | null
    embedding?: string | null
    publishedAt?: Date | string | null
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutCommentsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
  }

  export type ArticleUpsertWithoutCommentsInput = {
    update: XOR<ArticleUpdateWithoutCommentsInput, ArticleUncheckedUpdateWithoutCommentsInput>
    create: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutCommentsInput, ArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type ArticleUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    fullText?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    commentSummary?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    fullText?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    commentSummary?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    embedding?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedInPostCreateWithoutProfileInput = {
    id?: string
    content: string
    url?: string | null
    publishedAt?: string | null
    extractedEntities?: string | null
    createdAt?: Date | string
    interactions?: NetworkInteractionCreateNestedManyWithoutPostInput
  }

  export type LinkedInPostUncheckedCreateWithoutProfileInput = {
    id?: string
    content: string
    url?: string | null
    publishedAt?: string | null
    extractedEntities?: string | null
    createdAt?: Date | string
    interactions?: NetworkInteractionUncheckedCreateNestedManyWithoutPostInput
  }

  export type LinkedInPostCreateOrConnectWithoutProfileInput = {
    where: LinkedInPostWhereUniqueInput
    create: XOR<LinkedInPostCreateWithoutProfileInput, LinkedInPostUncheckedCreateWithoutProfileInput>
  }

  export type LinkedInPostCreateManyProfileInputEnvelope = {
    data: LinkedInPostCreateManyProfileInput | LinkedInPostCreateManyProfileInput[]
  }

  export type NetworkInteractionCreateWithoutActorInput = {
    id?: string
    type: string
    content?: string | null
    createdAt?: Date | string
    target?: IndustryProfileCreateNestedOneWithoutInteractionsAsTargetInput
    post?: LinkedInPostCreateNestedOneWithoutInteractionsInput
  }

  export type NetworkInteractionUncheckedCreateWithoutActorInput = {
    id?: string
    targetId?: string | null
    postId?: string | null
    type: string
    content?: string | null
    createdAt?: Date | string
  }

  export type NetworkInteractionCreateOrConnectWithoutActorInput = {
    where: NetworkInteractionWhereUniqueInput
    create: XOR<NetworkInteractionCreateWithoutActorInput, NetworkInteractionUncheckedCreateWithoutActorInput>
  }

  export type NetworkInteractionCreateManyActorInputEnvelope = {
    data: NetworkInteractionCreateManyActorInput | NetworkInteractionCreateManyActorInput[]
  }

  export type NetworkInteractionCreateWithoutTargetInput = {
    id?: string
    type: string
    content?: string | null
    createdAt?: Date | string
    actor: IndustryProfileCreateNestedOneWithoutInteractionsAsActorInput
    post?: LinkedInPostCreateNestedOneWithoutInteractionsInput
  }

  export type NetworkInteractionUncheckedCreateWithoutTargetInput = {
    id?: string
    actorId: string
    postId?: string | null
    type: string
    content?: string | null
    createdAt?: Date | string
  }

  export type NetworkInteractionCreateOrConnectWithoutTargetInput = {
    where: NetworkInteractionWhereUniqueInput
    create: XOR<NetworkInteractionCreateWithoutTargetInput, NetworkInteractionUncheckedCreateWithoutTargetInput>
  }

  export type NetworkInteractionCreateManyTargetInputEnvelope = {
    data: NetworkInteractionCreateManyTargetInput | NetworkInteractionCreateManyTargetInput[]
  }

  export type LinkedInPostUpsertWithWhereUniqueWithoutProfileInput = {
    where: LinkedInPostWhereUniqueInput
    update: XOR<LinkedInPostUpdateWithoutProfileInput, LinkedInPostUncheckedUpdateWithoutProfileInput>
    create: XOR<LinkedInPostCreateWithoutProfileInput, LinkedInPostUncheckedCreateWithoutProfileInput>
  }

  export type LinkedInPostUpdateWithWhereUniqueWithoutProfileInput = {
    where: LinkedInPostWhereUniqueInput
    data: XOR<LinkedInPostUpdateWithoutProfileInput, LinkedInPostUncheckedUpdateWithoutProfileInput>
  }

  export type LinkedInPostUpdateManyWithWhereWithoutProfileInput = {
    where: LinkedInPostScalarWhereInput
    data: XOR<LinkedInPostUpdateManyMutationInput, LinkedInPostUncheckedUpdateManyWithoutProfileInput>
  }

  export type LinkedInPostScalarWhereInput = {
    AND?: LinkedInPostScalarWhereInput | LinkedInPostScalarWhereInput[]
    OR?: LinkedInPostScalarWhereInput[]
    NOT?: LinkedInPostScalarWhereInput | LinkedInPostScalarWhereInput[]
    id?: StringFilter<"LinkedInPost"> | string
    profileId?: StringFilter<"LinkedInPost"> | string
    content?: StringFilter<"LinkedInPost"> | string
    url?: StringNullableFilter<"LinkedInPost"> | string | null
    publishedAt?: StringNullableFilter<"LinkedInPost"> | string | null
    extractedEntities?: StringNullableFilter<"LinkedInPost"> | string | null
    createdAt?: DateTimeFilter<"LinkedInPost"> | Date | string
  }

  export type NetworkInteractionUpsertWithWhereUniqueWithoutActorInput = {
    where: NetworkInteractionWhereUniqueInput
    update: XOR<NetworkInteractionUpdateWithoutActorInput, NetworkInteractionUncheckedUpdateWithoutActorInput>
    create: XOR<NetworkInteractionCreateWithoutActorInput, NetworkInteractionUncheckedCreateWithoutActorInput>
  }

  export type NetworkInteractionUpdateWithWhereUniqueWithoutActorInput = {
    where: NetworkInteractionWhereUniqueInput
    data: XOR<NetworkInteractionUpdateWithoutActorInput, NetworkInteractionUncheckedUpdateWithoutActorInput>
  }

  export type NetworkInteractionUpdateManyWithWhereWithoutActorInput = {
    where: NetworkInteractionScalarWhereInput
    data: XOR<NetworkInteractionUpdateManyMutationInput, NetworkInteractionUncheckedUpdateManyWithoutActorInput>
  }

  export type NetworkInteractionScalarWhereInput = {
    AND?: NetworkInteractionScalarWhereInput | NetworkInteractionScalarWhereInput[]
    OR?: NetworkInteractionScalarWhereInput[]
    NOT?: NetworkInteractionScalarWhereInput | NetworkInteractionScalarWhereInput[]
    id?: StringFilter<"NetworkInteraction"> | string
    actorId?: StringFilter<"NetworkInteraction"> | string
    targetId?: StringNullableFilter<"NetworkInteraction"> | string | null
    postId?: StringNullableFilter<"NetworkInteraction"> | string | null
    type?: StringFilter<"NetworkInteraction"> | string
    content?: StringNullableFilter<"NetworkInteraction"> | string | null
    createdAt?: DateTimeFilter<"NetworkInteraction"> | Date | string
  }

  export type NetworkInteractionUpsertWithWhereUniqueWithoutTargetInput = {
    where: NetworkInteractionWhereUniqueInput
    update: XOR<NetworkInteractionUpdateWithoutTargetInput, NetworkInteractionUncheckedUpdateWithoutTargetInput>
    create: XOR<NetworkInteractionCreateWithoutTargetInput, NetworkInteractionUncheckedCreateWithoutTargetInput>
  }

  export type NetworkInteractionUpdateWithWhereUniqueWithoutTargetInput = {
    where: NetworkInteractionWhereUniqueInput
    data: XOR<NetworkInteractionUpdateWithoutTargetInput, NetworkInteractionUncheckedUpdateWithoutTargetInput>
  }

  export type NetworkInteractionUpdateManyWithWhereWithoutTargetInput = {
    where: NetworkInteractionScalarWhereInput
    data: XOR<NetworkInteractionUpdateManyMutationInput, NetworkInteractionUncheckedUpdateManyWithoutTargetInput>
  }

  export type IndustryProfileCreateWithoutPostsInput = {
    id?: string
    name: string
    linkedinUrl: string
    profileImageUrl?: string | null
    headline?: string | null
    company?: string | null
    about?: string | null
    experience?: string | null
    education?: string | null
    connectionsCount?: number | null
    isActive?: boolean
    lastScrapedAt?: Date | string | null
    createdAt?: Date | string
    interactionsAsActor?: NetworkInteractionCreateNestedManyWithoutActorInput
    interactionsAsTarget?: NetworkInteractionCreateNestedManyWithoutTargetInput
  }

  export type IndustryProfileUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    linkedinUrl: string
    profileImageUrl?: string | null
    headline?: string | null
    company?: string | null
    about?: string | null
    experience?: string | null
    education?: string | null
    connectionsCount?: number | null
    isActive?: boolean
    lastScrapedAt?: Date | string | null
    createdAt?: Date | string
    interactionsAsActor?: NetworkInteractionUncheckedCreateNestedManyWithoutActorInput
    interactionsAsTarget?: NetworkInteractionUncheckedCreateNestedManyWithoutTargetInput
  }

  export type IndustryProfileCreateOrConnectWithoutPostsInput = {
    where: IndustryProfileWhereUniqueInput
    create: XOR<IndustryProfileCreateWithoutPostsInput, IndustryProfileUncheckedCreateWithoutPostsInput>
  }

  export type NetworkInteractionCreateWithoutPostInput = {
    id?: string
    type: string
    content?: string | null
    createdAt?: Date | string
    actor: IndustryProfileCreateNestedOneWithoutInteractionsAsActorInput
    target?: IndustryProfileCreateNestedOneWithoutInteractionsAsTargetInput
  }

  export type NetworkInteractionUncheckedCreateWithoutPostInput = {
    id?: string
    actorId: string
    targetId?: string | null
    type: string
    content?: string | null
    createdAt?: Date | string
  }

  export type NetworkInteractionCreateOrConnectWithoutPostInput = {
    where: NetworkInteractionWhereUniqueInput
    create: XOR<NetworkInteractionCreateWithoutPostInput, NetworkInteractionUncheckedCreateWithoutPostInput>
  }

  export type NetworkInteractionCreateManyPostInputEnvelope = {
    data: NetworkInteractionCreateManyPostInput | NetworkInteractionCreateManyPostInput[]
  }

  export type IndustryProfileUpsertWithoutPostsInput = {
    update: XOR<IndustryProfileUpdateWithoutPostsInput, IndustryProfileUncheckedUpdateWithoutPostsInput>
    create: XOR<IndustryProfileCreateWithoutPostsInput, IndustryProfileUncheckedCreateWithoutPostsInput>
    where?: IndustryProfileWhereInput
  }

  export type IndustryProfileUpdateToOneWithWhereWithoutPostsInput = {
    where?: IndustryProfileWhereInput
    data: XOR<IndustryProfileUpdateWithoutPostsInput, IndustryProfileUncheckedUpdateWithoutPostsInput>
  }

  export type IndustryProfileUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    connectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactionsAsActor?: NetworkInteractionUpdateManyWithoutActorNestedInput
    interactionsAsTarget?: NetworkInteractionUpdateManyWithoutTargetNestedInput
  }

  export type IndustryProfileUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    connectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactionsAsActor?: NetworkInteractionUncheckedUpdateManyWithoutActorNestedInput
    interactionsAsTarget?: NetworkInteractionUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type NetworkInteractionUpsertWithWhereUniqueWithoutPostInput = {
    where: NetworkInteractionWhereUniqueInput
    update: XOR<NetworkInteractionUpdateWithoutPostInput, NetworkInteractionUncheckedUpdateWithoutPostInput>
    create: XOR<NetworkInteractionCreateWithoutPostInput, NetworkInteractionUncheckedCreateWithoutPostInput>
  }

  export type NetworkInteractionUpdateWithWhereUniqueWithoutPostInput = {
    where: NetworkInteractionWhereUniqueInput
    data: XOR<NetworkInteractionUpdateWithoutPostInput, NetworkInteractionUncheckedUpdateWithoutPostInput>
  }

  export type NetworkInteractionUpdateManyWithWhereWithoutPostInput = {
    where: NetworkInteractionScalarWhereInput
    data: XOR<NetworkInteractionUpdateManyMutationInput, NetworkInteractionUncheckedUpdateManyWithoutPostInput>
  }

  export type IndustryProfileCreateWithoutInteractionsAsActorInput = {
    id?: string
    name: string
    linkedinUrl: string
    profileImageUrl?: string | null
    headline?: string | null
    company?: string | null
    about?: string | null
    experience?: string | null
    education?: string | null
    connectionsCount?: number | null
    isActive?: boolean
    lastScrapedAt?: Date | string | null
    createdAt?: Date | string
    posts?: LinkedInPostCreateNestedManyWithoutProfileInput
    interactionsAsTarget?: NetworkInteractionCreateNestedManyWithoutTargetInput
  }

  export type IndustryProfileUncheckedCreateWithoutInteractionsAsActorInput = {
    id?: string
    name: string
    linkedinUrl: string
    profileImageUrl?: string | null
    headline?: string | null
    company?: string | null
    about?: string | null
    experience?: string | null
    education?: string | null
    connectionsCount?: number | null
    isActive?: boolean
    lastScrapedAt?: Date | string | null
    createdAt?: Date | string
    posts?: LinkedInPostUncheckedCreateNestedManyWithoutProfileInput
    interactionsAsTarget?: NetworkInteractionUncheckedCreateNestedManyWithoutTargetInput
  }

  export type IndustryProfileCreateOrConnectWithoutInteractionsAsActorInput = {
    where: IndustryProfileWhereUniqueInput
    create: XOR<IndustryProfileCreateWithoutInteractionsAsActorInput, IndustryProfileUncheckedCreateWithoutInteractionsAsActorInput>
  }

  export type IndustryProfileCreateWithoutInteractionsAsTargetInput = {
    id?: string
    name: string
    linkedinUrl: string
    profileImageUrl?: string | null
    headline?: string | null
    company?: string | null
    about?: string | null
    experience?: string | null
    education?: string | null
    connectionsCount?: number | null
    isActive?: boolean
    lastScrapedAt?: Date | string | null
    createdAt?: Date | string
    posts?: LinkedInPostCreateNestedManyWithoutProfileInput
    interactionsAsActor?: NetworkInteractionCreateNestedManyWithoutActorInput
  }

  export type IndustryProfileUncheckedCreateWithoutInteractionsAsTargetInput = {
    id?: string
    name: string
    linkedinUrl: string
    profileImageUrl?: string | null
    headline?: string | null
    company?: string | null
    about?: string | null
    experience?: string | null
    education?: string | null
    connectionsCount?: number | null
    isActive?: boolean
    lastScrapedAt?: Date | string | null
    createdAt?: Date | string
    posts?: LinkedInPostUncheckedCreateNestedManyWithoutProfileInput
    interactionsAsActor?: NetworkInteractionUncheckedCreateNestedManyWithoutActorInput
  }

  export type IndustryProfileCreateOrConnectWithoutInteractionsAsTargetInput = {
    where: IndustryProfileWhereUniqueInput
    create: XOR<IndustryProfileCreateWithoutInteractionsAsTargetInput, IndustryProfileUncheckedCreateWithoutInteractionsAsTargetInput>
  }

  export type LinkedInPostCreateWithoutInteractionsInput = {
    id?: string
    content: string
    url?: string | null
    publishedAt?: string | null
    extractedEntities?: string | null
    createdAt?: Date | string
    profile: IndustryProfileCreateNestedOneWithoutPostsInput
  }

  export type LinkedInPostUncheckedCreateWithoutInteractionsInput = {
    id?: string
    profileId: string
    content: string
    url?: string | null
    publishedAt?: string | null
    extractedEntities?: string | null
    createdAt?: Date | string
  }

  export type LinkedInPostCreateOrConnectWithoutInteractionsInput = {
    where: LinkedInPostWhereUniqueInput
    create: XOR<LinkedInPostCreateWithoutInteractionsInput, LinkedInPostUncheckedCreateWithoutInteractionsInput>
  }

  export type IndustryProfileUpsertWithoutInteractionsAsActorInput = {
    update: XOR<IndustryProfileUpdateWithoutInteractionsAsActorInput, IndustryProfileUncheckedUpdateWithoutInteractionsAsActorInput>
    create: XOR<IndustryProfileCreateWithoutInteractionsAsActorInput, IndustryProfileUncheckedCreateWithoutInteractionsAsActorInput>
    where?: IndustryProfileWhereInput
  }

  export type IndustryProfileUpdateToOneWithWhereWithoutInteractionsAsActorInput = {
    where?: IndustryProfileWhereInput
    data: XOR<IndustryProfileUpdateWithoutInteractionsAsActorInput, IndustryProfileUncheckedUpdateWithoutInteractionsAsActorInput>
  }

  export type IndustryProfileUpdateWithoutInteractionsAsActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    connectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: LinkedInPostUpdateManyWithoutProfileNestedInput
    interactionsAsTarget?: NetworkInteractionUpdateManyWithoutTargetNestedInput
  }

  export type IndustryProfileUncheckedUpdateWithoutInteractionsAsActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    connectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: LinkedInPostUncheckedUpdateManyWithoutProfileNestedInput
    interactionsAsTarget?: NetworkInteractionUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type IndustryProfileUpsertWithoutInteractionsAsTargetInput = {
    update: XOR<IndustryProfileUpdateWithoutInteractionsAsTargetInput, IndustryProfileUncheckedUpdateWithoutInteractionsAsTargetInput>
    create: XOR<IndustryProfileCreateWithoutInteractionsAsTargetInput, IndustryProfileUncheckedCreateWithoutInteractionsAsTargetInput>
    where?: IndustryProfileWhereInput
  }

  export type IndustryProfileUpdateToOneWithWhereWithoutInteractionsAsTargetInput = {
    where?: IndustryProfileWhereInput
    data: XOR<IndustryProfileUpdateWithoutInteractionsAsTargetInput, IndustryProfileUncheckedUpdateWithoutInteractionsAsTargetInput>
  }

  export type IndustryProfileUpdateWithoutInteractionsAsTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    connectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: LinkedInPostUpdateManyWithoutProfileNestedInput
    interactionsAsActor?: NetworkInteractionUpdateManyWithoutActorNestedInput
  }

  export type IndustryProfileUncheckedUpdateWithoutInteractionsAsTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    connectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: LinkedInPostUncheckedUpdateManyWithoutProfileNestedInput
    interactionsAsActor?: NetworkInteractionUncheckedUpdateManyWithoutActorNestedInput
  }

  export type LinkedInPostUpsertWithoutInteractionsInput = {
    update: XOR<LinkedInPostUpdateWithoutInteractionsInput, LinkedInPostUncheckedUpdateWithoutInteractionsInput>
    create: XOR<LinkedInPostCreateWithoutInteractionsInput, LinkedInPostUncheckedCreateWithoutInteractionsInput>
    where?: LinkedInPostWhereInput
  }

  export type LinkedInPostUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: LinkedInPostWhereInput
    data: XOR<LinkedInPostUpdateWithoutInteractionsInput, LinkedInPostUncheckedUpdateWithoutInteractionsInput>
  }

  export type LinkedInPostUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    extractedEntities?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: IndustryProfileUpdateOneRequiredWithoutPostsNestedInput
  }

  export type LinkedInPostUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    extractedEntities?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendCreateWithoutDocumentInput = {
    id?: string
    title: string
    category: string
    horizon: string
    description: string
    impactDetail?: string | null
    signalType?: string | null
    background?: string | null
    fullText?: string | null
    imageUrl?: string | null
    isOnRadar?: boolean
    createdAt?: Date | string
  }

  export type TrendUncheckedCreateWithoutDocumentInput = {
    id?: string
    title: string
    category: string
    horizon: string
    description: string
    impactDetail?: string | null
    signalType?: string | null
    background?: string | null
    fullText?: string | null
    imageUrl?: string | null
    isOnRadar?: boolean
    createdAt?: Date | string
  }

  export type TrendCreateOrConnectWithoutDocumentInput = {
    where: TrendWhereUniqueInput
    create: XOR<TrendCreateWithoutDocumentInput, TrendUncheckedCreateWithoutDocumentInput>
  }

  export type TrendCreateManyDocumentInputEnvelope = {
    data: TrendCreateManyDocumentInput | TrendCreateManyDocumentInput[]
  }

  export type TrendUpsertWithWhereUniqueWithoutDocumentInput = {
    where: TrendWhereUniqueInput
    update: XOR<TrendUpdateWithoutDocumentInput, TrendUncheckedUpdateWithoutDocumentInput>
    create: XOR<TrendCreateWithoutDocumentInput, TrendUncheckedCreateWithoutDocumentInput>
  }

  export type TrendUpdateWithWhereUniqueWithoutDocumentInput = {
    where: TrendWhereUniqueInput
    data: XOR<TrendUpdateWithoutDocumentInput, TrendUncheckedUpdateWithoutDocumentInput>
  }

  export type TrendUpdateManyWithWhereWithoutDocumentInput = {
    where: TrendScalarWhereInput
    data: XOR<TrendUpdateManyMutationInput, TrendUncheckedUpdateManyWithoutDocumentInput>
  }

  export type TrendScalarWhereInput = {
    AND?: TrendScalarWhereInput | TrendScalarWhereInput[]
    OR?: TrendScalarWhereInput[]
    NOT?: TrendScalarWhereInput | TrendScalarWhereInput[]
    id?: StringFilter<"Trend"> | string
    title?: StringFilter<"Trend"> | string
    category?: StringFilter<"Trend"> | string
    horizon?: StringFilter<"Trend"> | string
    description?: StringFilter<"Trend"> | string
    impactDetail?: StringNullableFilter<"Trend"> | string | null
    signalType?: StringNullableFilter<"Trend"> | string | null
    background?: StringNullableFilter<"Trend"> | string | null
    fullText?: StringNullableFilter<"Trend"> | string | null
    imageUrl?: StringNullableFilter<"Trend"> | string | null
    isOnRadar?: BoolFilter<"Trend"> | boolean
    documentId?: StringFilter<"Trend"> | string
    createdAt?: DateTimeFilter<"Trend"> | Date | string
  }

  export type TrendDocumentCreateWithoutTrendsInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
  }

  export type TrendDocumentUncheckedCreateWithoutTrendsInput = {
    id?: string
    filename: string
    uploadedAt?: Date | string
  }

  export type TrendDocumentCreateOrConnectWithoutTrendsInput = {
    where: TrendDocumentWhereUniqueInput
    create: XOR<TrendDocumentCreateWithoutTrendsInput, TrendDocumentUncheckedCreateWithoutTrendsInput>
  }

  export type TrendDocumentUpsertWithoutTrendsInput = {
    update: XOR<TrendDocumentUpdateWithoutTrendsInput, TrendDocumentUncheckedUpdateWithoutTrendsInput>
    create: XOR<TrendDocumentCreateWithoutTrendsInput, TrendDocumentUncheckedCreateWithoutTrendsInput>
    where?: TrendDocumentWhereInput
  }

  export type TrendDocumentUpdateToOneWithWhereWithoutTrendsInput = {
    where?: TrendDocumentWhereInput
    data: XOR<TrendDocumentUpdateWithoutTrendsInput, TrendDocumentUncheckedUpdateWithoutTrendsInput>
  }

  export type TrendDocumentUpdateWithoutTrendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendDocumentUncheckedUpdateWithoutTrendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyArticleInput = {
    id?: string
    author: string
    text: string
  }

  export type CommentUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedInPostCreateManyProfileInput = {
    id?: string
    content: string
    url?: string | null
    publishedAt?: string | null
    extractedEntities?: string | null
    createdAt?: Date | string
  }

  export type NetworkInteractionCreateManyActorInput = {
    id?: string
    targetId?: string | null
    postId?: string | null
    type: string
    content?: string | null
    createdAt?: Date | string
  }

  export type NetworkInteractionCreateManyTargetInput = {
    id?: string
    actorId: string
    postId?: string | null
    type: string
    content?: string | null
    createdAt?: Date | string
  }

  export type LinkedInPostUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    extractedEntities?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactions?: NetworkInteractionUpdateManyWithoutPostNestedInput
  }

  export type LinkedInPostUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    extractedEntities?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactions?: NetworkInteractionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type LinkedInPostUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableStringFieldUpdateOperationsInput | string | null
    extractedEntities?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkInteractionUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: IndustryProfileUpdateOneWithoutInteractionsAsTargetNestedInput
    post?: LinkedInPostUpdateOneWithoutInteractionsNestedInput
  }

  export type NetworkInteractionUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkInteractionUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkInteractionUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: IndustryProfileUpdateOneRequiredWithoutInteractionsAsActorNestedInput
    post?: LinkedInPostUpdateOneWithoutInteractionsNestedInput
  }

  export type NetworkInteractionUncheckedUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkInteractionUncheckedUpdateManyWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkInteractionCreateManyPostInput = {
    id?: string
    actorId: string
    targetId?: string | null
    type: string
    content?: string | null
    createdAt?: Date | string
  }

  export type NetworkInteractionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: IndustryProfileUpdateOneRequiredWithoutInteractionsAsActorNestedInput
    target?: IndustryProfileUpdateOneWithoutInteractionsAsTargetNestedInput
  }

  export type NetworkInteractionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkInteractionUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendCreateManyDocumentInput = {
    id?: string
    title: string
    category: string
    horizon: string
    description: string
    impactDetail?: string | null
    signalType?: string | null
    background?: string | null
    fullText?: string | null
    imageUrl?: string | null
    isOnRadar?: boolean
    createdAt?: Date | string
  }

  export type TrendUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    horizon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impactDetail?: NullableStringFieldUpdateOperationsInput | string | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isOnRadar?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    horizon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impactDetail?: NullableStringFieldUpdateOperationsInput | string | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isOnRadar?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    horizon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impactDetail?: NullableStringFieldUpdateOperationsInput | string | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isOnRadar?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ArticleCountOutputTypeDefaultArgs instead
     */
    export type ArticleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArticleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IndustryProfileCountOutputTypeDefaultArgs instead
     */
    export type IndustryProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IndustryProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LinkedInPostCountOutputTypeDefaultArgs instead
     */
    export type LinkedInPostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LinkedInPostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrendDocumentCountOutputTypeDefaultArgs instead
     */
    export type TrendDocumentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrendDocumentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArticleDefaultArgs instead
     */
    export type ArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArticleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiscoveryDorkDefaultArgs instead
     */
    export type DiscoveryDorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiscoveryDorkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiscoveredLinkDefaultArgs instead
     */
    export type DiscoveredLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiscoveredLinkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatisticDatasetDefaultArgs instead
     */
    export type StatisticDatasetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatisticDatasetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScrapeJobDefaultArgs instead
     */
    export type ScrapeJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScrapeJobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LinkedInAccountDefaultArgs instead
     */
    export type LinkedInAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LinkedInAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NetworkKeywordDefaultArgs instead
     */
    export type NetworkKeywordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NetworkKeywordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IndustryProfileDefaultArgs instead
     */
    export type IndustryProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IndustryProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LinkedInPostDefaultArgs instead
     */
    export type LinkedInPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LinkedInPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NetworkInteractionDefaultArgs instead
     */
    export type NetworkInteractionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NetworkInteractionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TargetMonitorDefaultArgs instead
     */
    export type TargetMonitorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TargetMonitorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavedYoutubeVideoDefaultArgs instead
     */
    export type SavedYoutubeVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavedYoutubeVideoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrendingTopicDefaultArgs instead
     */
    export type TrendingTopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrendingTopicDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemSettingDefaultArgs instead
     */
    export type SystemSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrendDocumentDefaultArgs instead
     */
    export type TrendDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrendDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrendDefaultArgs instead
     */
    export type TrendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrendDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}