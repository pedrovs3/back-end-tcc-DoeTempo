
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


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

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  postal_code: 'postal_code',
  number: 'number',
  complement: 'complement'
};

exports.Prisma.AttachedLinkScalarFieldEnum = {
  id: 'id',
  attached_link: 'attached_link',
  id_source: 'id_source',
  id_user: 'id_user',
  id_ngo: 'id_ngo'
};

exports.Prisma.CampaignAddressScalarFieldEnum = {
  id: 'id',
  id_campaign: 'id_campaign',
  id_address: 'id_address'
};

exports.Prisma.CampaignCausesScalarFieldEnum = {
  id: 'id',
  id_cause: 'id_cause',
  id_campaign: 'id_campaign'
};

exports.Prisma.CampaignParticipantsScalarFieldEnum = {
  id: 'id',
  id_campaign: 'id_campaign',
  id_user: 'id_user',
  id_status: 'id_status'
};

exports.Prisma.CampaignPhotosScalarFieldEnum = {
  id: 'id',
  photo_url: 'photo_url',
  id_campaign: 'id_campaign'
};

exports.Prisma.CampaignScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  begin_date: 'begin_date',
  end_date: 'end_date',
  home_office: 'home_office',
  id_ngo: 'id_ngo',
  how_to_contribute: 'how_to_contribute',
  prerequisites: 'prerequisites',
  created_at: 'created_at',
  is_active: 'is_active'
};

exports.Prisma.CausesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description'
};

exports.Prisma.CommentLikesScalarFieldEnum = {
  id: 'id',
  id_comment: 'id_comment',
  id_user: 'id_user',
  id_ngo: 'id_ngo'
};

exports.Prisma.CommentNgoScalarFieldEnum = {
  id: 'id',
  id_comment: 'id_comment',
  id_ngo: 'id_ngo'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  content: 'content',
  created_at: 'created_at',
  id_post: 'id_post'
};

exports.Prisma.CommentUserScalarFieldEnum = {
  id: 'id',
  id_comment: 'id_comment',
  id_user: 'id_user'
};

exports.Prisma.FollowingScalarFieldEnum = {
  id: 'id',
  id_user: 'id_user',
  id_ngo: 'id_ngo',
  id_status: 'id_status'
};

exports.Prisma.GenderScalarFieldEnum = {
  id: 'id',
  name: 'name',
  abbreviation: 'abbreviation'
};

exports.Prisma.NGOScalarFieldEnum = {
  id: 'id',
  name: 'name',
  cnpj: 'cnpj',
  foundation_date: 'foundation_date',
  description: 'description',
  email: 'email',
  password: 'password',
  id_type: 'id_type',
  photo_url: 'photo_url',
  banner_photo: 'banner_photo',
  created_at: 'created_at'
};

exports.Prisma.NgoAddressScalarFieldEnum = {
  id: 'id',
  id_ngo: 'id_ngo',
  id_address: 'id_address'
};

exports.Prisma.NgoCausesScalarFieldEnum = {
  id: 'id',
  id_causes: 'id_causes',
  id_ngo: 'id_ngo'
};

exports.Prisma.NgoPhoneScalarFieldEnum = {
  id: 'id',
  id_ngo: 'id_ngo',
  id_phone: 'id_phone'
};

exports.Prisma.PhoneScalarFieldEnum = {
  id: 'id',
  number: 'number'
};

exports.Prisma.PostLikesScalarFieldEnum = {
  id: 'id',
  id_user: 'id_user',
  id_ngo: 'id_ngo',
  id_post: 'id_post'
};

exports.Prisma.PostNgoScalarFieldEnum = {
  id: 'id',
  id_post: 'id_post',
  id_ngo: 'id_ngo'
};

exports.Prisma.PostPhotoScalarFieldEnum = {
  id: 'id',
  id_post: 'id_post',
  photo_url: 'photo_url'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  content: 'content',
  created_at: 'created_at'
};

exports.Prisma.PostUserScalarFieldEnum = {
  id: 'id',
  id_post: 'id_post',
  id_user: 'id_user'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.SourceScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.StatusScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TypeScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.UserAddressScalarFieldEnum = {
  id: 'id',
  id_address: 'id_address',
  id_user: 'id_user'
};

exports.Prisma.UserPhoneScalarFieldEnum = {
  id: 'id',
  id_phone: 'id_phone',
  id_user: 'id_user'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  cpf: 'cpf',
  id_gender: 'id_gender',
  birthdate: 'birthdate',
  rg: 'rg',
  id_type: 'id_type',
  description: 'description',
  banner_photo: 'banner_photo',
  photo_url: 'photo_url',
  created_at: 'created_at'
};


exports.Prisma.ModelName = {
  User: 'User',
  Gender: 'Gender',
  Phone: 'Phone',
  Address: 'Address',
  UserAddress: 'UserAddress',
  Campaign: 'Campaign',
  CampaignAddress: 'CampaignAddress',
  CampaignCauses: 'CampaignCauses',
  CampaignParticipants: 'CampaignParticipants',
  CampaignPhotos: 'CampaignPhotos',
  Causes: 'Causes',
  Following: 'Following',
  NGO: 'NGO',
  NgoAddress: 'NgoAddress',
  NgoCauses: 'NgoCauses',
  NgoPhone: 'NgoPhone',
  UserPhone: 'UserPhone',
  Type: 'Type',
  Post: 'Post',
  PostPhoto: 'PostPhoto',
  PostNgo: 'PostNgo',
  PostUser: 'PostUser',
  Comment: 'Comment',
  CommentUser: 'CommentUser',
  CommentNgo: 'CommentNgo',
  CommentLikes: 'CommentLikes',
  PostLikes: 'PostLikes',
  AttachedLink: 'AttachedLink',
  Source: 'Source',
  Status: 'Status'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
