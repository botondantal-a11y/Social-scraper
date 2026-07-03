
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.ArticleScalarFieldEnum = {
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

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  articleId: 'articleId',
  author: 'author',
  text: 'text'
};

exports.Prisma.DiscoveryDorkScalarFieldEnum = {
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

exports.Prisma.DiscoveredLinkScalarFieldEnum = {
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

exports.Prisma.StatisticDatasetScalarFieldEnum = {
  id: 'id',
  title: 'title',
  sourceUrl: 'sourceUrl',
  data: 'data',
  summary: 'summary',
  createdAt: 'createdAt'
};

exports.Prisma.ScrapeJobScalarFieldEnum = {
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

exports.Prisma.LinkedInAccountScalarFieldEnum = {
  id: 'id',
  cookieString: 'cookieString',
  isActive: 'isActive',
  lastUsed: 'lastUsed',
  dailyCount: 'dailyCount',
  createdAt: 'createdAt'
};

exports.Prisma.NetworkKeywordScalarFieldEnum = {
  id: 'id',
  keyword: 'keyword',
  type: 'type',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.IndustryProfileScalarFieldEnum = {
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

exports.Prisma.LinkedInPostScalarFieldEnum = {
  id: 'id',
  profileId: 'profileId',
  content: 'content',
  url: 'url',
  publishedAt: 'publishedAt',
  extractedEntities: 'extractedEntities',
  createdAt: 'createdAt'
};

exports.Prisma.NetworkInteractionScalarFieldEnum = {
  id: 'id',
  actorId: 'actorId',
  targetId: 'targetId',
  postId: 'postId',
  type: 'type',
  content: 'content',
  createdAt: 'createdAt'
};

exports.Prisma.TargetMonitorScalarFieldEnum = {
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

exports.Prisma.SavedYoutubeVideoScalarFieldEnum = {
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

exports.Prisma.TrendingTopicScalarFieldEnum = {
  id: 'id',
  title: 'title',
  formattedTraffic: 'formattedTraffic',
  relatedQueries: 'relatedQueries',
  articles: 'articles',
  trendDate: 'trendDate',
  createdAt: 'createdAt'
};

exports.Prisma.SystemSettingScalarFieldEnum = {
  key: 'key',
  value: 'value',
  updatedAt: 'updatedAt'
};

exports.Prisma.TrendDocumentScalarFieldEnum = {
  id: 'id',
  filename: 'filename',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.TrendScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
