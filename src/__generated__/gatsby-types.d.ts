/* eslint-disable */


declare namespace GatsbyTypes {

type Maybe<T> = T | null;
type InputMaybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  GatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

type AVIFOptions = {
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
  readonly speed: InputMaybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: InputMaybe<Scalars['Int']>;
};

type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type Directory_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};

type DirectorySortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<DirectoryFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly opacity: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
  readonly url: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'changeTime'
  | 'childImageSharp.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.contentFilePath'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.id'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.contentFilePath'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.original.width'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.contentFilePath'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'children'
  | 'childrenImageSharp'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.contentFilePath'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.contentFilePath'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.contentFilePath'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prettySize'
  | 'publicURL'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid'
  | 'url';

type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize: InputMaybe<IntQueryOperatorInput>;
  readonly blocks: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly publicURL: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};

type FileSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<FileFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

type GatsbyImageDataQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['GatsbyImageData']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
  readonly ne: InputMaybe<Scalars['GatsbyImageData']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
};

type GatsbyImageFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type GatsbyImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type GatsbyImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageCropFocus =
  | 17
  | 0
  | 2
  | 16
  | 1
  | 5
  | 8
  | 3
  | 6
  | 7
  | 4;

type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | ''
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type ImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type ImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageSharp = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['GatsbyImageData'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
};


type ImageSharp_fixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_fluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


type ImageSharp_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AVIFOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JPGOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PNGOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_resizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type ImageSharpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'fixed.aspectRatio'
  | 'fixed.base64'
  | 'fixed.height'
  | 'fixed.originalName'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcSetWebp'
  | 'fixed.srcWebp'
  | 'fixed.tracedSVG'
  | 'fixed.width'
  | 'fluid.aspectRatio'
  | 'fluid.base64'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationHeight'
  | 'fluid.presentationWidth'
  | 'fluid.sizes'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcSetWebp'
  | 'fluid.srcWebp'
  | 'fluid.tracedSVG'
  | 'gatsbyImageData'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'original.height'
  | 'original.src'
  | 'original.width'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'resize.aspectRatio'
  | 'resize.height'
  | 'resize.originalName'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width';

type ImageSharpFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly base64: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
};

type ImageSharpFixedFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Maybe<Scalars['String']>;
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
};

type ImageSharpFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg: InputMaybe<StringQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};

type ImageSharpOriginal = {
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
};

type ImageSharpOriginalFilterInput = {
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type ImageSharpResizeFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly contentFilePath: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly contentFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type JPGOptions = {
  readonly progressive: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type JSONQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

type MarkdownExcerptFormats =
  | 'HTML'
  | 'MARKDOWN'
  | 'PLAIN';

type MarkdownHeading = {
  readonly depth: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
};

type MarkdownHeadingFilterInput = {
  readonly depth: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly value: InputMaybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: InputMaybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownRemark = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
};


type MarkdownRemark_excerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: InputMaybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  heading: InputMaybe<Scalars['String']>;
  maxDepth: InputMaybe<Scalars['Int']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
};

type MarkdownRemarkConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'excerpt'
  | 'excerptAst'
  | 'frontmatter.title'
  | 'headings'
  | 'headings.depth'
  | 'headings.id'
  | 'headings.value'
  | 'html'
  | 'htmlAst'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'rawMarkdownBody'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words';

type MarkdownRemarkFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly excerptAst: InputMaybe<JSONQueryOperatorInput>;
  readonly frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly headings: InputMaybe<MarkdownHeadingFilterListInput>;
  readonly html: InputMaybe<StringQueryOperatorInput>;
  readonly htmlAst: InputMaybe<JSONQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly rawMarkdownBody: InputMaybe<StringQueryOperatorInput>;
  readonly tableOfContents: InputMaybe<StringQueryOperatorInput>;
  readonly timeToRead: InputMaybe<IntQueryOperatorInput>;
  readonly wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: InputMaybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: InputMaybe<IntQueryOperatorInput>;
  readonly sentences: InputMaybe<IntQueryOperatorInput>;
  readonly words: InputMaybe<IntQueryOperatorInput>;
};

type Mdx = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
};


type Mdx_excerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: InputMaybe<Scalars['Int']>;
};

type MdxConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  field: MdxFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MdxConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_sumArgs = {
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'excerpt'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'tableOfContents';

type MdxFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly tableOfContents: InputMaybe<JSONQueryOperatorInput>;
};

type MdxGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MdxGroupConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_groupArgs = {
  field: MdxFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MdxGroupConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_sumArgs = {
  field: MdxFieldsEnum;
};

type MdxSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<MdxFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

/** Node Interface */
type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

type PNGOptions = {
  readonly compressionSpeed: InputMaybe<Scalars['Int']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly alphaMax: InputMaybe<Scalars['Float']>;
  readonly background: InputMaybe<Scalars['String']>;
  readonly blackOnWhite: InputMaybe<Scalars['Boolean']>;
  readonly color: InputMaybe<Scalars['String']>;
  readonly optCurve: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance: InputMaybe<Scalars['Float']>;
  readonly threshold: InputMaybe<Scalars['Int']>;
  readonly turdSize: InputMaybe<Scalars['Float']>;
  readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'left'
  | 'majority'
  | 'minority'
  | 'right'
  | 'white';

type Query = {
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly allMdx: MdxConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly allVelogPost: VelogPostConnection;
  readonly allVelogSeries: VelogSeriesConnection;
  readonly allVelogTag: VelogTagConnection;
  readonly allVelogUser: VelogUserConnection;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly mdx: Maybe<Mdx>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly velogPost: Maybe<VelogPost>;
  readonly velogSeries: Maybe<VelogSeries>;
  readonly velogTag: Maybe<VelogTag>;
  readonly velogUser: Maybe<VelogUser>;
};


type Query_allDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<DirectorySortInput>;
};


type Query_allFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<FileSortInput>;
};


type Query_allImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ImageSharpSortInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: InputMaybe<MarkdownRemarkFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<MarkdownRemarkSortInput>;
};


type Query_allMdxArgs = {
  filter: InputMaybe<MdxFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<MdxSortInput>;
};


type Query_allSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteSortInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
};


type Query_allSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteFunctionSortInput>;
};


type Query_allSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePageSortInput>;
};


type Query_allSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePluginSortInput>;
};


type Query_allVelogPostArgs = {
  filter: InputMaybe<VelogPostFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<VelogPostSortInput>;
};


type Query_allVelogSeriesArgs = {
  filter: InputMaybe<VelogSeriesFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<VelogSeriesSortInput>;
};


type Query_allVelogTagArgs = {
  filter: InputMaybe<VelogTagFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<VelogTagSortInput>;
};


type Query_allVelogUserArgs = {
  filter: InputMaybe<VelogUserFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<VelogUserSortInput>;
};


type Query_directoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_fileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_imageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


type Query_markdownRemarkArgs = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  excerptAst: InputMaybe<JSONQueryOperatorInput>;
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings: InputMaybe<MarkdownHeadingFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  htmlAst: InputMaybe<JSONQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>;
  tableOfContents: InputMaybe<StringQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};


type Query_mdxArgs = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  tableOfContents: InputMaybe<JSONQueryOperatorInput>;
};


type Query_siteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


type Query_sitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


type Query_sitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};


type Query_velogPostArgs = {
  author: InputMaybe<VelogUserFilterInput>;
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isMarkdown: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  rawContent: InputMaybe<StringQueryOperatorInput>;
  series: InputMaybe<VelogPostSeriesFilterInput>;
  shortDescription: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tags: InputMaybe<VelogTagFilterListInput>;
  thumbnail: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  velogId: InputMaybe<StringQueryOperatorInput>;
  velogUrl: InputMaybe<StringQueryOperatorInput>;
};


type Query_velogSeriesArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  owner: InputMaybe<VelogUserFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  posts: InputMaybe<VelogPostFilterListInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  thumbnail: InputMaybe<FileFilterInput>;
  velogId: InputMaybe<StringQueryOperatorInput>;
  velogUrl: InputMaybe<StringQueryOperatorInput>;
};


type Query_velogTagArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  owner: InputMaybe<VelogUserFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  posts: InputMaybe<VelogPostFilterListInput>;
  thumbnail: InputMaybe<FileFilterInput>;
  velogId: InputMaybe<StringQueryOperatorInput>;
  velogUrl: InputMaybe<StringQueryOperatorInput>;
};


type Query_velogUserArgs = {
  aboutHtml: InputMaybe<StringQueryOperatorInput>;
  bio: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  displayName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  isCertified: InputMaybe<BooleanQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  posts: InputMaybe<VelogPostFilterListInput>;
  socialProfile: InputMaybe<VelogUserSocialProfileFilterInput>;
  thumbnail: InputMaybe<FileFilterInput>;
  username: InputMaybe<StringQueryOperatorInput>;
  velogId: InputMaybe<StringQueryOperatorInput>;
  velogUrl: InputMaybe<StringQueryOperatorInput>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly graphqlTypegen: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


type Site_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


type SiteBuildMetadata_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id';

type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'graphqlTypegen'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'jsxRuntime'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pathPrefix'
  | 'polyfill'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.title'
  | 'trailingSlash';

type SiteFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'absoluteCompiledFilePath'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'functionRoute'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'matchPath'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pluginName'
  | 'relativeCompiledFilePath';

type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};

type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'component'
  | 'componentChunkName'
  | 'id'
  | 'internalComponentName'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'matchPath'
  | 'pageContext'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'path'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.contentFilePath'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.id'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.contentFilePath'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.name'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.contentFilePath'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.resolve'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.version';

type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};

type SitePageSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePageFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'browserAPIs'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'nodeAPIs'
  | 'packageJson'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'resolve'
  | 'ssrAPIs'
  | 'version';

type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePluginFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};

type TransformOptions = {
  readonly cropFocus: InputMaybe<ImageCropFocus>;
  readonly duotone: InputMaybe<DuotoneGradient>;
  readonly fit: InputMaybe<ImageFit>;
  readonly grayscale: InputMaybe<Scalars['Boolean']>;
  readonly rotate: InputMaybe<Scalars['Int']>;
  readonly trim: InputMaybe<Scalars['Float']>;
};

type VelogPost = Node & {
  readonly author: VelogUser;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isMarkdown: Maybe<Scalars['Boolean']>;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Scalars['Date'];
  readonly rawContent: Scalars['String'];
  readonly series: Maybe<VelogPostSeries>;
  readonly shortDescription: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly tags: ReadonlyArray<VelogTag>;
  readonly thumbnail: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly updatedAt: Scalars['Date'];
  readonly velogId: Scalars['String'];
  readonly velogUrl: Scalars['String'];
};


type VelogPost_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type VelogPost_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type VelogPostConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<VelogPostEdge>;
  readonly group: ReadonlyArray<VelogPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<VelogPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type VelogPostConnection_distinctArgs = {
  field: VelogPostFieldsEnum;
};


type VelogPostConnection_groupArgs = {
  field: VelogPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type VelogPostConnection_maxArgs = {
  field: VelogPostFieldsEnum;
};


type VelogPostConnection_minArgs = {
  field: VelogPostFieldsEnum;
};


type VelogPostConnection_sumArgs = {
  field: VelogPostFieldsEnum;
};

type VelogPostEdge = {
  readonly next: Maybe<VelogPost>;
  readonly node: VelogPost;
  readonly previous: Maybe<VelogPost>;
};

type VelogPostFieldsEnum =
  | 'author.aboutHtml'
  | 'author.bio'
  | 'author.children'
  | 'author.children.children'
  | 'author.children.children.children'
  | 'author.children.children.id'
  | 'author.children.id'
  | 'author.children.internal.content'
  | 'author.children.internal.contentDigest'
  | 'author.children.internal.contentFilePath'
  | 'author.children.internal.description'
  | 'author.children.internal.fieldOwners'
  | 'author.children.internal.ignoreType'
  | 'author.children.internal.mediaType'
  | 'author.children.internal.owner'
  | 'author.children.internal.type'
  | 'author.children.parent.children'
  | 'author.children.parent.id'
  | 'author.displayName'
  | 'author.id'
  | 'author.internal.content'
  | 'author.internal.contentDigest'
  | 'author.internal.contentFilePath'
  | 'author.internal.description'
  | 'author.internal.fieldOwners'
  | 'author.internal.ignoreType'
  | 'author.internal.mediaType'
  | 'author.internal.owner'
  | 'author.internal.type'
  | 'author.isCertified'
  | 'author.parent.children'
  | 'author.parent.children.children'
  | 'author.parent.children.id'
  | 'author.parent.id'
  | 'author.parent.internal.content'
  | 'author.parent.internal.contentDigest'
  | 'author.parent.internal.contentFilePath'
  | 'author.parent.internal.description'
  | 'author.parent.internal.fieldOwners'
  | 'author.parent.internal.ignoreType'
  | 'author.parent.internal.mediaType'
  | 'author.parent.internal.owner'
  | 'author.parent.internal.type'
  | 'author.parent.parent.children'
  | 'author.parent.parent.id'
  | 'author.posts'
  | 'author.posts.author.aboutHtml'
  | 'author.posts.author.bio'
  | 'author.posts.author.children'
  | 'author.posts.author.displayName'
  | 'author.posts.author.id'
  | 'author.posts.author.isCertified'
  | 'author.posts.author.posts'
  | 'author.posts.author.username'
  | 'author.posts.author.velogId'
  | 'author.posts.author.velogUrl'
  | 'author.posts.childMarkdownRemark.children'
  | 'author.posts.childMarkdownRemark.excerpt'
  | 'author.posts.childMarkdownRemark.excerptAst'
  | 'author.posts.childMarkdownRemark.headings'
  | 'author.posts.childMarkdownRemark.html'
  | 'author.posts.childMarkdownRemark.htmlAst'
  | 'author.posts.childMarkdownRemark.id'
  | 'author.posts.childMarkdownRemark.rawMarkdownBody'
  | 'author.posts.childMarkdownRemark.tableOfContents'
  | 'author.posts.childMarkdownRemark.timeToRead'
  | 'author.posts.children'
  | 'author.posts.childrenMarkdownRemark'
  | 'author.posts.childrenMarkdownRemark.children'
  | 'author.posts.childrenMarkdownRemark.excerpt'
  | 'author.posts.childrenMarkdownRemark.excerptAst'
  | 'author.posts.childrenMarkdownRemark.headings'
  | 'author.posts.childrenMarkdownRemark.html'
  | 'author.posts.childrenMarkdownRemark.htmlAst'
  | 'author.posts.childrenMarkdownRemark.id'
  | 'author.posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.posts.childrenMarkdownRemark.tableOfContents'
  | 'author.posts.childrenMarkdownRemark.timeToRead'
  | 'author.posts.children.children'
  | 'author.posts.children.id'
  | 'author.posts.id'
  | 'author.posts.internal.content'
  | 'author.posts.internal.contentDigest'
  | 'author.posts.internal.contentFilePath'
  | 'author.posts.internal.description'
  | 'author.posts.internal.fieldOwners'
  | 'author.posts.internal.ignoreType'
  | 'author.posts.internal.mediaType'
  | 'author.posts.internal.owner'
  | 'author.posts.internal.type'
  | 'author.posts.isMarkdown'
  | 'author.posts.parent.children'
  | 'author.posts.parent.id'
  | 'author.posts.publishedAt'
  | 'author.posts.rawContent'
  | 'author.posts.series.index'
  | 'author.posts.series.seriesPosts'
  | 'author.posts.series.velogId'
  | 'author.posts.shortDescription'
  | 'author.posts.slug'
  | 'author.posts.tags'
  | 'author.posts.tags.children'
  | 'author.posts.tags.description'
  | 'author.posts.tags.id'
  | 'author.posts.tags.name'
  | 'author.posts.tags.posts'
  | 'author.posts.tags.velogId'
  | 'author.posts.tags.velogUrl'
  | 'author.posts.thumbnail'
  | 'author.posts.title'
  | 'author.posts.updatedAt'
  | 'author.posts.velogId'
  | 'author.posts.velogUrl'
  | 'author.socialProfile.email'
  | 'author.socialProfile.facebook'
  | 'author.socialProfile.github'
  | 'author.socialProfile.twitter'
  | 'author.socialProfile.url'
  | 'author.thumbnail.absolutePath'
  | 'author.thumbnail.accessTime'
  | 'author.thumbnail.atime'
  | 'author.thumbnail.atimeMs'
  | 'author.thumbnail.base'
  | 'author.thumbnail.birthTime'
  | 'author.thumbnail.birthtime'
  | 'author.thumbnail.birthtimeMs'
  | 'author.thumbnail.blksize'
  | 'author.thumbnail.blocks'
  | 'author.thumbnail.changeTime'
  | 'author.thumbnail.childImageSharp.children'
  | 'author.thumbnail.childImageSharp.gatsbyImageData'
  | 'author.thumbnail.childImageSharp.id'
  | 'author.thumbnail.children'
  | 'author.thumbnail.childrenImageSharp'
  | 'author.thumbnail.childrenImageSharp.children'
  | 'author.thumbnail.childrenImageSharp.gatsbyImageData'
  | 'author.thumbnail.childrenImageSharp.id'
  | 'author.thumbnail.children.children'
  | 'author.thumbnail.children.id'
  | 'author.thumbnail.ctime'
  | 'author.thumbnail.ctimeMs'
  | 'author.thumbnail.dev'
  | 'author.thumbnail.dir'
  | 'author.thumbnail.ext'
  | 'author.thumbnail.extension'
  | 'author.thumbnail.gid'
  | 'author.thumbnail.id'
  | 'author.thumbnail.ino'
  | 'author.thumbnail.internal.content'
  | 'author.thumbnail.internal.contentDigest'
  | 'author.thumbnail.internal.contentFilePath'
  | 'author.thumbnail.internal.description'
  | 'author.thumbnail.internal.fieldOwners'
  | 'author.thumbnail.internal.ignoreType'
  | 'author.thumbnail.internal.mediaType'
  | 'author.thumbnail.internal.owner'
  | 'author.thumbnail.internal.type'
  | 'author.thumbnail.mode'
  | 'author.thumbnail.modifiedTime'
  | 'author.thumbnail.mtime'
  | 'author.thumbnail.mtimeMs'
  | 'author.thumbnail.name'
  | 'author.thumbnail.nlink'
  | 'author.thumbnail.parent.children'
  | 'author.thumbnail.parent.id'
  | 'author.thumbnail.prettySize'
  | 'author.thumbnail.publicURL'
  | 'author.thumbnail.rdev'
  | 'author.thumbnail.relativeDirectory'
  | 'author.thumbnail.relativePath'
  | 'author.thumbnail.root'
  | 'author.thumbnail.size'
  | 'author.thumbnail.sourceInstanceName'
  | 'author.thumbnail.uid'
  | 'author.thumbnail.url'
  | 'author.username'
  | 'author.velogId'
  | 'author.velogUrl'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.contentFilePath'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.contentFilePath'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.contentFilePath'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'children'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.contentFilePath'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.contentFilePath'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.contentFilePath'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isMarkdown'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'publishedAt'
  | 'rawContent'
  | 'series.index'
  | 'series.node.children'
  | 'series.node.children.children'
  | 'series.node.children.id'
  | 'series.node.description'
  | 'series.node.id'
  | 'series.node.internal.content'
  | 'series.node.internal.contentDigest'
  | 'series.node.internal.contentFilePath'
  | 'series.node.internal.description'
  | 'series.node.internal.fieldOwners'
  | 'series.node.internal.ignoreType'
  | 'series.node.internal.mediaType'
  | 'series.node.internal.owner'
  | 'series.node.internal.type'
  | 'series.node.name'
  | 'series.node.owner.aboutHtml'
  | 'series.node.owner.bio'
  | 'series.node.owner.children'
  | 'series.node.owner.displayName'
  | 'series.node.owner.id'
  | 'series.node.owner.isCertified'
  | 'series.node.owner.posts'
  | 'series.node.owner.username'
  | 'series.node.owner.velogId'
  | 'series.node.owner.velogUrl'
  | 'series.node.parent.children'
  | 'series.node.parent.id'
  | 'series.node.posts'
  | 'series.node.posts.children'
  | 'series.node.posts.childrenMarkdownRemark'
  | 'series.node.posts.id'
  | 'series.node.posts.isMarkdown'
  | 'series.node.posts.publishedAt'
  | 'series.node.posts.rawContent'
  | 'series.node.posts.shortDescription'
  | 'series.node.posts.slug'
  | 'series.node.posts.tags'
  | 'series.node.posts.thumbnail'
  | 'series.node.posts.title'
  | 'series.node.posts.updatedAt'
  | 'series.node.posts.velogId'
  | 'series.node.posts.velogUrl'
  | 'series.node.slug'
  | 'series.node.thumbnail.absolutePath'
  | 'series.node.thumbnail.accessTime'
  | 'series.node.thumbnail.atime'
  | 'series.node.thumbnail.atimeMs'
  | 'series.node.thumbnail.base'
  | 'series.node.thumbnail.birthTime'
  | 'series.node.thumbnail.birthtime'
  | 'series.node.thumbnail.birthtimeMs'
  | 'series.node.thumbnail.blksize'
  | 'series.node.thumbnail.blocks'
  | 'series.node.thumbnail.changeTime'
  | 'series.node.thumbnail.children'
  | 'series.node.thumbnail.childrenImageSharp'
  | 'series.node.thumbnail.ctime'
  | 'series.node.thumbnail.ctimeMs'
  | 'series.node.thumbnail.dev'
  | 'series.node.thumbnail.dir'
  | 'series.node.thumbnail.ext'
  | 'series.node.thumbnail.extension'
  | 'series.node.thumbnail.gid'
  | 'series.node.thumbnail.id'
  | 'series.node.thumbnail.ino'
  | 'series.node.thumbnail.mode'
  | 'series.node.thumbnail.modifiedTime'
  | 'series.node.thumbnail.mtime'
  | 'series.node.thumbnail.mtimeMs'
  | 'series.node.thumbnail.name'
  | 'series.node.thumbnail.nlink'
  | 'series.node.thumbnail.prettySize'
  | 'series.node.thumbnail.publicURL'
  | 'series.node.thumbnail.rdev'
  | 'series.node.thumbnail.relativeDirectory'
  | 'series.node.thumbnail.relativePath'
  | 'series.node.thumbnail.root'
  | 'series.node.thumbnail.size'
  | 'series.node.thumbnail.sourceInstanceName'
  | 'series.node.thumbnail.uid'
  | 'series.node.thumbnail.url'
  | 'series.node.velogId'
  | 'series.node.velogUrl'
  | 'series.seriesPosts'
  | 'series.seriesPosts.index'
  | 'series.seriesPosts.item.velogId'
  | 'series.velogId'
  | 'shortDescription'
  | 'slug'
  | 'tags'
  | 'tags.children'
  | 'tags.children.children'
  | 'tags.children.children.children'
  | 'tags.children.children.id'
  | 'tags.children.id'
  | 'tags.children.internal.content'
  | 'tags.children.internal.contentDigest'
  | 'tags.children.internal.contentFilePath'
  | 'tags.children.internal.description'
  | 'tags.children.internal.fieldOwners'
  | 'tags.children.internal.ignoreType'
  | 'tags.children.internal.mediaType'
  | 'tags.children.internal.owner'
  | 'tags.children.internal.type'
  | 'tags.children.parent.children'
  | 'tags.children.parent.id'
  | 'tags.description'
  | 'tags.id'
  | 'tags.internal.content'
  | 'tags.internal.contentDigest'
  | 'tags.internal.contentFilePath'
  | 'tags.internal.description'
  | 'tags.internal.fieldOwners'
  | 'tags.internal.ignoreType'
  | 'tags.internal.mediaType'
  | 'tags.internal.owner'
  | 'tags.internal.type'
  | 'tags.name'
  | 'tags.owner.aboutHtml'
  | 'tags.owner.bio'
  | 'tags.owner.children'
  | 'tags.owner.children.children'
  | 'tags.owner.children.id'
  | 'tags.owner.displayName'
  | 'tags.owner.id'
  | 'tags.owner.internal.content'
  | 'tags.owner.internal.contentDigest'
  | 'tags.owner.internal.contentFilePath'
  | 'tags.owner.internal.description'
  | 'tags.owner.internal.fieldOwners'
  | 'tags.owner.internal.ignoreType'
  | 'tags.owner.internal.mediaType'
  | 'tags.owner.internal.owner'
  | 'tags.owner.internal.type'
  | 'tags.owner.isCertified'
  | 'tags.owner.parent.children'
  | 'tags.owner.parent.id'
  | 'tags.owner.posts'
  | 'tags.owner.posts.children'
  | 'tags.owner.posts.childrenMarkdownRemark'
  | 'tags.owner.posts.id'
  | 'tags.owner.posts.isMarkdown'
  | 'tags.owner.posts.publishedAt'
  | 'tags.owner.posts.rawContent'
  | 'tags.owner.posts.shortDescription'
  | 'tags.owner.posts.slug'
  | 'tags.owner.posts.tags'
  | 'tags.owner.posts.thumbnail'
  | 'tags.owner.posts.title'
  | 'tags.owner.posts.updatedAt'
  | 'tags.owner.posts.velogId'
  | 'tags.owner.posts.velogUrl'
  | 'tags.owner.socialProfile.email'
  | 'tags.owner.socialProfile.facebook'
  | 'tags.owner.socialProfile.github'
  | 'tags.owner.socialProfile.twitter'
  | 'tags.owner.socialProfile.url'
  | 'tags.owner.thumbnail.absolutePath'
  | 'tags.owner.thumbnail.accessTime'
  | 'tags.owner.thumbnail.atime'
  | 'tags.owner.thumbnail.atimeMs'
  | 'tags.owner.thumbnail.base'
  | 'tags.owner.thumbnail.birthTime'
  | 'tags.owner.thumbnail.birthtime'
  | 'tags.owner.thumbnail.birthtimeMs'
  | 'tags.owner.thumbnail.blksize'
  | 'tags.owner.thumbnail.blocks'
  | 'tags.owner.thumbnail.changeTime'
  | 'tags.owner.thumbnail.children'
  | 'tags.owner.thumbnail.childrenImageSharp'
  | 'tags.owner.thumbnail.ctime'
  | 'tags.owner.thumbnail.ctimeMs'
  | 'tags.owner.thumbnail.dev'
  | 'tags.owner.thumbnail.dir'
  | 'tags.owner.thumbnail.ext'
  | 'tags.owner.thumbnail.extension'
  | 'tags.owner.thumbnail.gid'
  | 'tags.owner.thumbnail.id'
  | 'tags.owner.thumbnail.ino'
  | 'tags.owner.thumbnail.mode'
  | 'tags.owner.thumbnail.modifiedTime'
  | 'tags.owner.thumbnail.mtime'
  | 'tags.owner.thumbnail.mtimeMs'
  | 'tags.owner.thumbnail.name'
  | 'tags.owner.thumbnail.nlink'
  | 'tags.owner.thumbnail.prettySize'
  | 'tags.owner.thumbnail.publicURL'
  | 'tags.owner.thumbnail.rdev'
  | 'tags.owner.thumbnail.relativeDirectory'
  | 'tags.owner.thumbnail.relativePath'
  | 'tags.owner.thumbnail.root'
  | 'tags.owner.thumbnail.size'
  | 'tags.owner.thumbnail.sourceInstanceName'
  | 'tags.owner.thumbnail.uid'
  | 'tags.owner.thumbnail.url'
  | 'tags.owner.username'
  | 'tags.owner.velogId'
  | 'tags.owner.velogUrl'
  | 'tags.parent.children'
  | 'tags.parent.children.children'
  | 'tags.parent.children.id'
  | 'tags.parent.id'
  | 'tags.parent.internal.content'
  | 'tags.parent.internal.contentDigest'
  | 'tags.parent.internal.contentFilePath'
  | 'tags.parent.internal.description'
  | 'tags.parent.internal.fieldOwners'
  | 'tags.parent.internal.ignoreType'
  | 'tags.parent.internal.mediaType'
  | 'tags.parent.internal.owner'
  | 'tags.parent.internal.type'
  | 'tags.parent.parent.children'
  | 'tags.parent.parent.id'
  | 'tags.posts'
  | 'tags.posts.author.aboutHtml'
  | 'tags.posts.author.bio'
  | 'tags.posts.author.children'
  | 'tags.posts.author.displayName'
  | 'tags.posts.author.id'
  | 'tags.posts.author.isCertified'
  | 'tags.posts.author.posts'
  | 'tags.posts.author.username'
  | 'tags.posts.author.velogId'
  | 'tags.posts.author.velogUrl'
  | 'tags.posts.childMarkdownRemark.children'
  | 'tags.posts.childMarkdownRemark.excerpt'
  | 'tags.posts.childMarkdownRemark.excerptAst'
  | 'tags.posts.childMarkdownRemark.headings'
  | 'tags.posts.childMarkdownRemark.html'
  | 'tags.posts.childMarkdownRemark.htmlAst'
  | 'tags.posts.childMarkdownRemark.id'
  | 'tags.posts.childMarkdownRemark.rawMarkdownBody'
  | 'tags.posts.childMarkdownRemark.tableOfContents'
  | 'tags.posts.childMarkdownRemark.timeToRead'
  | 'tags.posts.children'
  | 'tags.posts.childrenMarkdownRemark'
  | 'tags.posts.childrenMarkdownRemark.children'
  | 'tags.posts.childrenMarkdownRemark.excerpt'
  | 'tags.posts.childrenMarkdownRemark.excerptAst'
  | 'tags.posts.childrenMarkdownRemark.headings'
  | 'tags.posts.childrenMarkdownRemark.html'
  | 'tags.posts.childrenMarkdownRemark.htmlAst'
  | 'tags.posts.childrenMarkdownRemark.id'
  | 'tags.posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'tags.posts.childrenMarkdownRemark.tableOfContents'
  | 'tags.posts.childrenMarkdownRemark.timeToRead'
  | 'tags.posts.children.children'
  | 'tags.posts.children.id'
  | 'tags.posts.id'
  | 'tags.posts.internal.content'
  | 'tags.posts.internal.contentDigest'
  | 'tags.posts.internal.contentFilePath'
  | 'tags.posts.internal.description'
  | 'tags.posts.internal.fieldOwners'
  | 'tags.posts.internal.ignoreType'
  | 'tags.posts.internal.mediaType'
  | 'tags.posts.internal.owner'
  | 'tags.posts.internal.type'
  | 'tags.posts.isMarkdown'
  | 'tags.posts.parent.children'
  | 'tags.posts.parent.id'
  | 'tags.posts.publishedAt'
  | 'tags.posts.rawContent'
  | 'tags.posts.series.index'
  | 'tags.posts.series.seriesPosts'
  | 'tags.posts.series.velogId'
  | 'tags.posts.shortDescription'
  | 'tags.posts.slug'
  | 'tags.posts.tags'
  | 'tags.posts.tags.children'
  | 'tags.posts.tags.description'
  | 'tags.posts.tags.id'
  | 'tags.posts.tags.name'
  | 'tags.posts.tags.posts'
  | 'tags.posts.tags.velogId'
  | 'tags.posts.tags.velogUrl'
  | 'tags.posts.thumbnail'
  | 'tags.posts.title'
  | 'tags.posts.updatedAt'
  | 'tags.posts.velogId'
  | 'tags.posts.velogUrl'
  | 'tags.thumbnail.absolutePath'
  | 'tags.thumbnail.accessTime'
  | 'tags.thumbnail.atime'
  | 'tags.thumbnail.atimeMs'
  | 'tags.thumbnail.base'
  | 'tags.thumbnail.birthTime'
  | 'tags.thumbnail.birthtime'
  | 'tags.thumbnail.birthtimeMs'
  | 'tags.thumbnail.blksize'
  | 'tags.thumbnail.blocks'
  | 'tags.thumbnail.changeTime'
  | 'tags.thumbnail.childImageSharp.children'
  | 'tags.thumbnail.childImageSharp.gatsbyImageData'
  | 'tags.thumbnail.childImageSharp.id'
  | 'tags.thumbnail.children'
  | 'tags.thumbnail.childrenImageSharp'
  | 'tags.thumbnail.childrenImageSharp.children'
  | 'tags.thumbnail.childrenImageSharp.gatsbyImageData'
  | 'tags.thumbnail.childrenImageSharp.id'
  | 'tags.thumbnail.children.children'
  | 'tags.thumbnail.children.id'
  | 'tags.thumbnail.ctime'
  | 'tags.thumbnail.ctimeMs'
  | 'tags.thumbnail.dev'
  | 'tags.thumbnail.dir'
  | 'tags.thumbnail.ext'
  | 'tags.thumbnail.extension'
  | 'tags.thumbnail.gid'
  | 'tags.thumbnail.id'
  | 'tags.thumbnail.ino'
  | 'tags.thumbnail.internal.content'
  | 'tags.thumbnail.internal.contentDigest'
  | 'tags.thumbnail.internal.contentFilePath'
  | 'tags.thumbnail.internal.description'
  | 'tags.thumbnail.internal.fieldOwners'
  | 'tags.thumbnail.internal.ignoreType'
  | 'tags.thumbnail.internal.mediaType'
  | 'tags.thumbnail.internal.owner'
  | 'tags.thumbnail.internal.type'
  | 'tags.thumbnail.mode'
  | 'tags.thumbnail.modifiedTime'
  | 'tags.thumbnail.mtime'
  | 'tags.thumbnail.mtimeMs'
  | 'tags.thumbnail.name'
  | 'tags.thumbnail.nlink'
  | 'tags.thumbnail.parent.children'
  | 'tags.thumbnail.parent.id'
  | 'tags.thumbnail.prettySize'
  | 'tags.thumbnail.publicURL'
  | 'tags.thumbnail.rdev'
  | 'tags.thumbnail.relativeDirectory'
  | 'tags.thumbnail.relativePath'
  | 'tags.thumbnail.root'
  | 'tags.thumbnail.size'
  | 'tags.thumbnail.sourceInstanceName'
  | 'tags.thumbnail.uid'
  | 'tags.thumbnail.url'
  | 'tags.velogId'
  | 'tags.velogUrl'
  | 'thumbnail'
  | 'title'
  | 'updatedAt'
  | 'velogId'
  | 'velogUrl';

type VelogPostFilterInput = {
  readonly author: InputMaybe<VelogUserFilterInput>;
  readonly childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isMarkdown: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly rawContent: InputMaybe<StringQueryOperatorInput>;
  readonly series: InputMaybe<VelogPostSeriesFilterInput>;
  readonly shortDescription: InputMaybe<StringQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly tags: InputMaybe<VelogTagFilterListInput>;
  readonly thumbnail: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly velogId: InputMaybe<StringQueryOperatorInput>;
  readonly velogUrl: InputMaybe<StringQueryOperatorInput>;
};

type VelogPostFilterListInput = {
  readonly elemMatch: InputMaybe<VelogPostFilterInput>;
};

type VelogPostGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<VelogPostEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<VelogPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<VelogPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type VelogPostGroupConnection_distinctArgs = {
  field: VelogPostFieldsEnum;
};


type VelogPostGroupConnection_groupArgs = {
  field: VelogPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type VelogPostGroupConnection_maxArgs = {
  field: VelogPostFieldsEnum;
};


type VelogPostGroupConnection_minArgs = {
  field: VelogPostFieldsEnum;
};


type VelogPostGroupConnection_sumArgs = {
  field: VelogPostFieldsEnum;
};

type VelogPostSeries = {
  readonly index: Scalars['Int'];
  readonly node: VelogSeries;
  readonly seriesPosts: Maybe<ReadonlyArray<Maybe<VelogPostSeriesSeriesPosts>>>;
  readonly velogId: Maybe<Scalars['String']>;
};

type VelogPostSeriesFilterInput = {
  readonly index: InputMaybe<IntQueryOperatorInput>;
  readonly node: InputMaybe<VelogSeriesFilterInput>;
  readonly seriesPosts: InputMaybe<VelogPostSeriesSeriesPostsFilterListInput>;
  readonly velogId: InputMaybe<StringQueryOperatorInput>;
};

type VelogPostSeriesSeriesPosts = {
  readonly index: Maybe<Scalars['Int']>;
  readonly item: Maybe<VelogPostSeriesSeriesPostsItem>;
};

type VelogPostSeriesSeriesPostsFilterInput = {
  readonly index: InputMaybe<IntQueryOperatorInput>;
  readonly item: InputMaybe<VelogPostSeriesSeriesPostsItemFilterInput>;
};

type VelogPostSeriesSeriesPostsFilterListInput = {
  readonly elemMatch: InputMaybe<VelogPostSeriesSeriesPostsFilterInput>;
};

type VelogPostSeriesSeriesPostsItem = {
  readonly velogId: Maybe<Scalars['String']>;
};

type VelogPostSeriesSeriesPostsItemFilterInput = {
  readonly velogId: InputMaybe<StringQueryOperatorInput>;
};

type VelogPostSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<VelogPostFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type VelogSeries = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Scalars['String'];
  readonly owner: VelogUser;
  readonly parent: Maybe<Node>;
  readonly posts: ReadonlyArray<VelogPost>;
  readonly slug: Scalars['String'];
  readonly thumbnail: Maybe<File>;
  readonly velogId: Scalars['String'];
  readonly velogUrl: Scalars['String'];
};

type VelogSeriesConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<VelogSeriesEdge>;
  readonly group: ReadonlyArray<VelogSeriesGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<VelogSeries>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type VelogSeriesConnection_distinctArgs = {
  field: VelogSeriesFieldsEnum;
};


type VelogSeriesConnection_groupArgs = {
  field: VelogSeriesFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type VelogSeriesConnection_maxArgs = {
  field: VelogSeriesFieldsEnum;
};


type VelogSeriesConnection_minArgs = {
  field: VelogSeriesFieldsEnum;
};


type VelogSeriesConnection_sumArgs = {
  field: VelogSeriesFieldsEnum;
};

type VelogSeriesEdge = {
  readonly next: Maybe<VelogSeries>;
  readonly node: VelogSeries;
  readonly previous: Maybe<VelogSeries>;
};

type VelogSeriesFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'description'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'owner.aboutHtml'
  | 'owner.bio'
  | 'owner.children'
  | 'owner.children.children'
  | 'owner.children.children.children'
  | 'owner.children.children.id'
  | 'owner.children.id'
  | 'owner.children.internal.content'
  | 'owner.children.internal.contentDigest'
  | 'owner.children.internal.contentFilePath'
  | 'owner.children.internal.description'
  | 'owner.children.internal.fieldOwners'
  | 'owner.children.internal.ignoreType'
  | 'owner.children.internal.mediaType'
  | 'owner.children.internal.owner'
  | 'owner.children.internal.type'
  | 'owner.children.parent.children'
  | 'owner.children.parent.id'
  | 'owner.displayName'
  | 'owner.id'
  | 'owner.internal.content'
  | 'owner.internal.contentDigest'
  | 'owner.internal.contentFilePath'
  | 'owner.internal.description'
  | 'owner.internal.fieldOwners'
  | 'owner.internal.ignoreType'
  | 'owner.internal.mediaType'
  | 'owner.internal.owner'
  | 'owner.internal.type'
  | 'owner.isCertified'
  | 'owner.parent.children'
  | 'owner.parent.children.children'
  | 'owner.parent.children.id'
  | 'owner.parent.id'
  | 'owner.parent.internal.content'
  | 'owner.parent.internal.contentDigest'
  | 'owner.parent.internal.contentFilePath'
  | 'owner.parent.internal.description'
  | 'owner.parent.internal.fieldOwners'
  | 'owner.parent.internal.ignoreType'
  | 'owner.parent.internal.mediaType'
  | 'owner.parent.internal.owner'
  | 'owner.parent.internal.type'
  | 'owner.parent.parent.children'
  | 'owner.parent.parent.id'
  | 'owner.posts'
  | 'owner.posts.author.aboutHtml'
  | 'owner.posts.author.bio'
  | 'owner.posts.author.children'
  | 'owner.posts.author.displayName'
  | 'owner.posts.author.id'
  | 'owner.posts.author.isCertified'
  | 'owner.posts.author.posts'
  | 'owner.posts.author.username'
  | 'owner.posts.author.velogId'
  | 'owner.posts.author.velogUrl'
  | 'owner.posts.childMarkdownRemark.children'
  | 'owner.posts.childMarkdownRemark.excerpt'
  | 'owner.posts.childMarkdownRemark.excerptAst'
  | 'owner.posts.childMarkdownRemark.headings'
  | 'owner.posts.childMarkdownRemark.html'
  | 'owner.posts.childMarkdownRemark.htmlAst'
  | 'owner.posts.childMarkdownRemark.id'
  | 'owner.posts.childMarkdownRemark.rawMarkdownBody'
  | 'owner.posts.childMarkdownRemark.tableOfContents'
  | 'owner.posts.childMarkdownRemark.timeToRead'
  | 'owner.posts.children'
  | 'owner.posts.childrenMarkdownRemark'
  | 'owner.posts.childrenMarkdownRemark.children'
  | 'owner.posts.childrenMarkdownRemark.excerpt'
  | 'owner.posts.childrenMarkdownRemark.excerptAst'
  | 'owner.posts.childrenMarkdownRemark.headings'
  | 'owner.posts.childrenMarkdownRemark.html'
  | 'owner.posts.childrenMarkdownRemark.htmlAst'
  | 'owner.posts.childrenMarkdownRemark.id'
  | 'owner.posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'owner.posts.childrenMarkdownRemark.tableOfContents'
  | 'owner.posts.childrenMarkdownRemark.timeToRead'
  | 'owner.posts.children.children'
  | 'owner.posts.children.id'
  | 'owner.posts.id'
  | 'owner.posts.internal.content'
  | 'owner.posts.internal.contentDigest'
  | 'owner.posts.internal.contentFilePath'
  | 'owner.posts.internal.description'
  | 'owner.posts.internal.fieldOwners'
  | 'owner.posts.internal.ignoreType'
  | 'owner.posts.internal.mediaType'
  | 'owner.posts.internal.owner'
  | 'owner.posts.internal.type'
  | 'owner.posts.isMarkdown'
  | 'owner.posts.parent.children'
  | 'owner.posts.parent.id'
  | 'owner.posts.publishedAt'
  | 'owner.posts.rawContent'
  | 'owner.posts.series.index'
  | 'owner.posts.series.seriesPosts'
  | 'owner.posts.series.velogId'
  | 'owner.posts.shortDescription'
  | 'owner.posts.slug'
  | 'owner.posts.tags'
  | 'owner.posts.tags.children'
  | 'owner.posts.tags.description'
  | 'owner.posts.tags.id'
  | 'owner.posts.tags.name'
  | 'owner.posts.tags.posts'
  | 'owner.posts.tags.velogId'
  | 'owner.posts.tags.velogUrl'
  | 'owner.posts.thumbnail'
  | 'owner.posts.title'
  | 'owner.posts.updatedAt'
  | 'owner.posts.velogId'
  | 'owner.posts.velogUrl'
  | 'owner.socialProfile.email'
  | 'owner.socialProfile.facebook'
  | 'owner.socialProfile.github'
  | 'owner.socialProfile.twitter'
  | 'owner.socialProfile.url'
  | 'owner.thumbnail.absolutePath'
  | 'owner.thumbnail.accessTime'
  | 'owner.thumbnail.atime'
  | 'owner.thumbnail.atimeMs'
  | 'owner.thumbnail.base'
  | 'owner.thumbnail.birthTime'
  | 'owner.thumbnail.birthtime'
  | 'owner.thumbnail.birthtimeMs'
  | 'owner.thumbnail.blksize'
  | 'owner.thumbnail.blocks'
  | 'owner.thumbnail.changeTime'
  | 'owner.thumbnail.childImageSharp.children'
  | 'owner.thumbnail.childImageSharp.gatsbyImageData'
  | 'owner.thumbnail.childImageSharp.id'
  | 'owner.thumbnail.children'
  | 'owner.thumbnail.childrenImageSharp'
  | 'owner.thumbnail.childrenImageSharp.children'
  | 'owner.thumbnail.childrenImageSharp.gatsbyImageData'
  | 'owner.thumbnail.childrenImageSharp.id'
  | 'owner.thumbnail.children.children'
  | 'owner.thumbnail.children.id'
  | 'owner.thumbnail.ctime'
  | 'owner.thumbnail.ctimeMs'
  | 'owner.thumbnail.dev'
  | 'owner.thumbnail.dir'
  | 'owner.thumbnail.ext'
  | 'owner.thumbnail.extension'
  | 'owner.thumbnail.gid'
  | 'owner.thumbnail.id'
  | 'owner.thumbnail.ino'
  | 'owner.thumbnail.internal.content'
  | 'owner.thumbnail.internal.contentDigest'
  | 'owner.thumbnail.internal.contentFilePath'
  | 'owner.thumbnail.internal.description'
  | 'owner.thumbnail.internal.fieldOwners'
  | 'owner.thumbnail.internal.ignoreType'
  | 'owner.thumbnail.internal.mediaType'
  | 'owner.thumbnail.internal.owner'
  | 'owner.thumbnail.internal.type'
  | 'owner.thumbnail.mode'
  | 'owner.thumbnail.modifiedTime'
  | 'owner.thumbnail.mtime'
  | 'owner.thumbnail.mtimeMs'
  | 'owner.thumbnail.name'
  | 'owner.thumbnail.nlink'
  | 'owner.thumbnail.parent.children'
  | 'owner.thumbnail.parent.id'
  | 'owner.thumbnail.prettySize'
  | 'owner.thumbnail.publicURL'
  | 'owner.thumbnail.rdev'
  | 'owner.thumbnail.relativeDirectory'
  | 'owner.thumbnail.relativePath'
  | 'owner.thumbnail.root'
  | 'owner.thumbnail.size'
  | 'owner.thumbnail.sourceInstanceName'
  | 'owner.thumbnail.uid'
  | 'owner.thumbnail.url'
  | 'owner.username'
  | 'owner.velogId'
  | 'owner.velogUrl'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'posts'
  | 'posts.author.aboutHtml'
  | 'posts.author.bio'
  | 'posts.author.children'
  | 'posts.author.children.children'
  | 'posts.author.children.id'
  | 'posts.author.displayName'
  | 'posts.author.id'
  | 'posts.author.internal.content'
  | 'posts.author.internal.contentDigest'
  | 'posts.author.internal.contentFilePath'
  | 'posts.author.internal.description'
  | 'posts.author.internal.fieldOwners'
  | 'posts.author.internal.ignoreType'
  | 'posts.author.internal.mediaType'
  | 'posts.author.internal.owner'
  | 'posts.author.internal.type'
  | 'posts.author.isCertified'
  | 'posts.author.parent.children'
  | 'posts.author.parent.id'
  | 'posts.author.posts'
  | 'posts.author.posts.children'
  | 'posts.author.posts.childrenMarkdownRemark'
  | 'posts.author.posts.id'
  | 'posts.author.posts.isMarkdown'
  | 'posts.author.posts.publishedAt'
  | 'posts.author.posts.rawContent'
  | 'posts.author.posts.shortDescription'
  | 'posts.author.posts.slug'
  | 'posts.author.posts.tags'
  | 'posts.author.posts.thumbnail'
  | 'posts.author.posts.title'
  | 'posts.author.posts.updatedAt'
  | 'posts.author.posts.velogId'
  | 'posts.author.posts.velogUrl'
  | 'posts.author.socialProfile.email'
  | 'posts.author.socialProfile.facebook'
  | 'posts.author.socialProfile.github'
  | 'posts.author.socialProfile.twitter'
  | 'posts.author.socialProfile.url'
  | 'posts.author.thumbnail.absolutePath'
  | 'posts.author.thumbnail.accessTime'
  | 'posts.author.thumbnail.atime'
  | 'posts.author.thumbnail.atimeMs'
  | 'posts.author.thumbnail.base'
  | 'posts.author.thumbnail.birthTime'
  | 'posts.author.thumbnail.birthtime'
  | 'posts.author.thumbnail.birthtimeMs'
  | 'posts.author.thumbnail.blksize'
  | 'posts.author.thumbnail.blocks'
  | 'posts.author.thumbnail.changeTime'
  | 'posts.author.thumbnail.children'
  | 'posts.author.thumbnail.childrenImageSharp'
  | 'posts.author.thumbnail.ctime'
  | 'posts.author.thumbnail.ctimeMs'
  | 'posts.author.thumbnail.dev'
  | 'posts.author.thumbnail.dir'
  | 'posts.author.thumbnail.ext'
  | 'posts.author.thumbnail.extension'
  | 'posts.author.thumbnail.gid'
  | 'posts.author.thumbnail.id'
  | 'posts.author.thumbnail.ino'
  | 'posts.author.thumbnail.mode'
  | 'posts.author.thumbnail.modifiedTime'
  | 'posts.author.thumbnail.mtime'
  | 'posts.author.thumbnail.mtimeMs'
  | 'posts.author.thumbnail.name'
  | 'posts.author.thumbnail.nlink'
  | 'posts.author.thumbnail.prettySize'
  | 'posts.author.thumbnail.publicURL'
  | 'posts.author.thumbnail.rdev'
  | 'posts.author.thumbnail.relativeDirectory'
  | 'posts.author.thumbnail.relativePath'
  | 'posts.author.thumbnail.root'
  | 'posts.author.thumbnail.size'
  | 'posts.author.thumbnail.sourceInstanceName'
  | 'posts.author.thumbnail.uid'
  | 'posts.author.thumbnail.url'
  | 'posts.author.username'
  | 'posts.author.velogId'
  | 'posts.author.velogUrl'
  | 'posts.childMarkdownRemark.children'
  | 'posts.childMarkdownRemark.children.children'
  | 'posts.childMarkdownRemark.children.id'
  | 'posts.childMarkdownRemark.excerpt'
  | 'posts.childMarkdownRemark.excerptAst'
  | 'posts.childMarkdownRemark.frontmatter.title'
  | 'posts.childMarkdownRemark.headings'
  | 'posts.childMarkdownRemark.headings.depth'
  | 'posts.childMarkdownRemark.headings.id'
  | 'posts.childMarkdownRemark.headings.value'
  | 'posts.childMarkdownRemark.html'
  | 'posts.childMarkdownRemark.htmlAst'
  | 'posts.childMarkdownRemark.id'
  | 'posts.childMarkdownRemark.internal.content'
  | 'posts.childMarkdownRemark.internal.contentDigest'
  | 'posts.childMarkdownRemark.internal.contentFilePath'
  | 'posts.childMarkdownRemark.internal.description'
  | 'posts.childMarkdownRemark.internal.fieldOwners'
  | 'posts.childMarkdownRemark.internal.ignoreType'
  | 'posts.childMarkdownRemark.internal.mediaType'
  | 'posts.childMarkdownRemark.internal.owner'
  | 'posts.childMarkdownRemark.internal.type'
  | 'posts.childMarkdownRemark.parent.children'
  | 'posts.childMarkdownRemark.parent.id'
  | 'posts.childMarkdownRemark.rawMarkdownBody'
  | 'posts.childMarkdownRemark.tableOfContents'
  | 'posts.childMarkdownRemark.timeToRead'
  | 'posts.childMarkdownRemark.wordCount.paragraphs'
  | 'posts.childMarkdownRemark.wordCount.sentences'
  | 'posts.childMarkdownRemark.wordCount.words'
  | 'posts.children'
  | 'posts.childrenMarkdownRemark'
  | 'posts.childrenMarkdownRemark.children'
  | 'posts.childrenMarkdownRemark.children.children'
  | 'posts.childrenMarkdownRemark.children.id'
  | 'posts.childrenMarkdownRemark.excerpt'
  | 'posts.childrenMarkdownRemark.excerptAst'
  | 'posts.childrenMarkdownRemark.frontmatter.title'
  | 'posts.childrenMarkdownRemark.headings'
  | 'posts.childrenMarkdownRemark.headings.depth'
  | 'posts.childrenMarkdownRemark.headings.id'
  | 'posts.childrenMarkdownRemark.headings.value'
  | 'posts.childrenMarkdownRemark.html'
  | 'posts.childrenMarkdownRemark.htmlAst'
  | 'posts.childrenMarkdownRemark.id'
  | 'posts.childrenMarkdownRemark.internal.content'
  | 'posts.childrenMarkdownRemark.internal.contentDigest'
  | 'posts.childrenMarkdownRemark.internal.contentFilePath'
  | 'posts.childrenMarkdownRemark.internal.description'
  | 'posts.childrenMarkdownRemark.internal.fieldOwners'
  | 'posts.childrenMarkdownRemark.internal.ignoreType'
  | 'posts.childrenMarkdownRemark.internal.mediaType'
  | 'posts.childrenMarkdownRemark.internal.owner'
  | 'posts.childrenMarkdownRemark.internal.type'
  | 'posts.childrenMarkdownRemark.parent.children'
  | 'posts.childrenMarkdownRemark.parent.id'
  | 'posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'posts.childrenMarkdownRemark.tableOfContents'
  | 'posts.childrenMarkdownRemark.timeToRead'
  | 'posts.childrenMarkdownRemark.wordCount.paragraphs'
  | 'posts.childrenMarkdownRemark.wordCount.sentences'
  | 'posts.childrenMarkdownRemark.wordCount.words'
  | 'posts.children.children'
  | 'posts.children.children.children'
  | 'posts.children.children.id'
  | 'posts.children.id'
  | 'posts.children.internal.content'
  | 'posts.children.internal.contentDigest'
  | 'posts.children.internal.contentFilePath'
  | 'posts.children.internal.description'
  | 'posts.children.internal.fieldOwners'
  | 'posts.children.internal.ignoreType'
  | 'posts.children.internal.mediaType'
  | 'posts.children.internal.owner'
  | 'posts.children.internal.type'
  | 'posts.children.parent.children'
  | 'posts.children.parent.id'
  | 'posts.id'
  | 'posts.internal.content'
  | 'posts.internal.contentDigest'
  | 'posts.internal.contentFilePath'
  | 'posts.internal.description'
  | 'posts.internal.fieldOwners'
  | 'posts.internal.ignoreType'
  | 'posts.internal.mediaType'
  | 'posts.internal.owner'
  | 'posts.internal.type'
  | 'posts.isMarkdown'
  | 'posts.parent.children'
  | 'posts.parent.children.children'
  | 'posts.parent.children.id'
  | 'posts.parent.id'
  | 'posts.parent.internal.content'
  | 'posts.parent.internal.contentDigest'
  | 'posts.parent.internal.contentFilePath'
  | 'posts.parent.internal.description'
  | 'posts.parent.internal.fieldOwners'
  | 'posts.parent.internal.ignoreType'
  | 'posts.parent.internal.mediaType'
  | 'posts.parent.internal.owner'
  | 'posts.parent.internal.type'
  | 'posts.parent.parent.children'
  | 'posts.parent.parent.id'
  | 'posts.publishedAt'
  | 'posts.rawContent'
  | 'posts.series.index'
  | 'posts.series.node.children'
  | 'posts.series.node.description'
  | 'posts.series.node.id'
  | 'posts.series.node.name'
  | 'posts.series.node.posts'
  | 'posts.series.node.slug'
  | 'posts.series.node.velogId'
  | 'posts.series.node.velogUrl'
  | 'posts.series.seriesPosts'
  | 'posts.series.seriesPosts.index'
  | 'posts.series.velogId'
  | 'posts.shortDescription'
  | 'posts.slug'
  | 'posts.tags'
  | 'posts.tags.children'
  | 'posts.tags.children.children'
  | 'posts.tags.children.id'
  | 'posts.tags.description'
  | 'posts.tags.id'
  | 'posts.tags.internal.content'
  | 'posts.tags.internal.contentDigest'
  | 'posts.tags.internal.contentFilePath'
  | 'posts.tags.internal.description'
  | 'posts.tags.internal.fieldOwners'
  | 'posts.tags.internal.ignoreType'
  | 'posts.tags.internal.mediaType'
  | 'posts.tags.internal.owner'
  | 'posts.tags.internal.type'
  | 'posts.tags.name'
  | 'posts.tags.owner.aboutHtml'
  | 'posts.tags.owner.bio'
  | 'posts.tags.owner.children'
  | 'posts.tags.owner.displayName'
  | 'posts.tags.owner.id'
  | 'posts.tags.owner.isCertified'
  | 'posts.tags.owner.posts'
  | 'posts.tags.owner.username'
  | 'posts.tags.owner.velogId'
  | 'posts.tags.owner.velogUrl'
  | 'posts.tags.parent.children'
  | 'posts.tags.parent.id'
  | 'posts.tags.posts'
  | 'posts.tags.posts.children'
  | 'posts.tags.posts.childrenMarkdownRemark'
  | 'posts.tags.posts.id'
  | 'posts.tags.posts.isMarkdown'
  | 'posts.tags.posts.publishedAt'
  | 'posts.tags.posts.rawContent'
  | 'posts.tags.posts.shortDescription'
  | 'posts.tags.posts.slug'
  | 'posts.tags.posts.tags'
  | 'posts.tags.posts.thumbnail'
  | 'posts.tags.posts.title'
  | 'posts.tags.posts.updatedAt'
  | 'posts.tags.posts.velogId'
  | 'posts.tags.posts.velogUrl'
  | 'posts.tags.thumbnail.absolutePath'
  | 'posts.tags.thumbnail.accessTime'
  | 'posts.tags.thumbnail.atime'
  | 'posts.tags.thumbnail.atimeMs'
  | 'posts.tags.thumbnail.base'
  | 'posts.tags.thumbnail.birthTime'
  | 'posts.tags.thumbnail.birthtime'
  | 'posts.tags.thumbnail.birthtimeMs'
  | 'posts.tags.thumbnail.blksize'
  | 'posts.tags.thumbnail.blocks'
  | 'posts.tags.thumbnail.changeTime'
  | 'posts.tags.thumbnail.children'
  | 'posts.tags.thumbnail.childrenImageSharp'
  | 'posts.tags.thumbnail.ctime'
  | 'posts.tags.thumbnail.ctimeMs'
  | 'posts.tags.thumbnail.dev'
  | 'posts.tags.thumbnail.dir'
  | 'posts.tags.thumbnail.ext'
  | 'posts.tags.thumbnail.extension'
  | 'posts.tags.thumbnail.gid'
  | 'posts.tags.thumbnail.id'
  | 'posts.tags.thumbnail.ino'
  | 'posts.tags.thumbnail.mode'
  | 'posts.tags.thumbnail.modifiedTime'
  | 'posts.tags.thumbnail.mtime'
  | 'posts.tags.thumbnail.mtimeMs'
  | 'posts.tags.thumbnail.name'
  | 'posts.tags.thumbnail.nlink'
  | 'posts.tags.thumbnail.prettySize'
  | 'posts.tags.thumbnail.publicURL'
  | 'posts.tags.thumbnail.rdev'
  | 'posts.tags.thumbnail.relativeDirectory'
  | 'posts.tags.thumbnail.relativePath'
  | 'posts.tags.thumbnail.root'
  | 'posts.tags.thumbnail.size'
  | 'posts.tags.thumbnail.sourceInstanceName'
  | 'posts.tags.thumbnail.uid'
  | 'posts.tags.thumbnail.url'
  | 'posts.tags.velogId'
  | 'posts.tags.velogUrl'
  | 'posts.thumbnail'
  | 'posts.title'
  | 'posts.updatedAt'
  | 'posts.velogId'
  | 'posts.velogUrl'
  | 'slug'
  | 'thumbnail.absolutePath'
  | 'thumbnail.accessTime'
  | 'thumbnail.atime'
  | 'thumbnail.atimeMs'
  | 'thumbnail.base'
  | 'thumbnail.birthTime'
  | 'thumbnail.birthtime'
  | 'thumbnail.birthtimeMs'
  | 'thumbnail.blksize'
  | 'thumbnail.blocks'
  | 'thumbnail.changeTime'
  | 'thumbnail.childImageSharp.children'
  | 'thumbnail.childImageSharp.children.children'
  | 'thumbnail.childImageSharp.children.id'
  | 'thumbnail.childImageSharp.fixed.aspectRatio'
  | 'thumbnail.childImageSharp.fixed.base64'
  | 'thumbnail.childImageSharp.fixed.height'
  | 'thumbnail.childImageSharp.fixed.originalName'
  | 'thumbnail.childImageSharp.fixed.src'
  | 'thumbnail.childImageSharp.fixed.srcSet'
  | 'thumbnail.childImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childImageSharp.fixed.srcWebp'
  | 'thumbnail.childImageSharp.fixed.tracedSVG'
  | 'thumbnail.childImageSharp.fixed.width'
  | 'thumbnail.childImageSharp.fluid.aspectRatio'
  | 'thumbnail.childImageSharp.fluid.base64'
  | 'thumbnail.childImageSharp.fluid.originalImg'
  | 'thumbnail.childImageSharp.fluid.originalName'
  | 'thumbnail.childImageSharp.fluid.presentationHeight'
  | 'thumbnail.childImageSharp.fluid.presentationWidth'
  | 'thumbnail.childImageSharp.fluid.sizes'
  | 'thumbnail.childImageSharp.fluid.src'
  | 'thumbnail.childImageSharp.fluid.srcSet'
  | 'thumbnail.childImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childImageSharp.fluid.srcWebp'
  | 'thumbnail.childImageSharp.fluid.tracedSVG'
  | 'thumbnail.childImageSharp.gatsbyImageData'
  | 'thumbnail.childImageSharp.id'
  | 'thumbnail.childImageSharp.internal.content'
  | 'thumbnail.childImageSharp.internal.contentDigest'
  | 'thumbnail.childImageSharp.internal.contentFilePath'
  | 'thumbnail.childImageSharp.internal.description'
  | 'thumbnail.childImageSharp.internal.fieldOwners'
  | 'thumbnail.childImageSharp.internal.ignoreType'
  | 'thumbnail.childImageSharp.internal.mediaType'
  | 'thumbnail.childImageSharp.internal.owner'
  | 'thumbnail.childImageSharp.internal.type'
  | 'thumbnail.childImageSharp.original.height'
  | 'thumbnail.childImageSharp.original.src'
  | 'thumbnail.childImageSharp.original.width'
  | 'thumbnail.childImageSharp.parent.children'
  | 'thumbnail.childImageSharp.parent.id'
  | 'thumbnail.childImageSharp.resize.aspectRatio'
  | 'thumbnail.childImageSharp.resize.height'
  | 'thumbnail.childImageSharp.resize.originalName'
  | 'thumbnail.childImageSharp.resize.src'
  | 'thumbnail.childImageSharp.resize.tracedSVG'
  | 'thumbnail.childImageSharp.resize.width'
  | 'thumbnail.children'
  | 'thumbnail.childrenImageSharp'
  | 'thumbnail.childrenImageSharp.children'
  | 'thumbnail.childrenImageSharp.children.children'
  | 'thumbnail.childrenImageSharp.children.id'
  | 'thumbnail.childrenImageSharp.fixed.aspectRatio'
  | 'thumbnail.childrenImageSharp.fixed.base64'
  | 'thumbnail.childrenImageSharp.fixed.height'
  | 'thumbnail.childrenImageSharp.fixed.originalName'
  | 'thumbnail.childrenImageSharp.fixed.src'
  | 'thumbnail.childrenImageSharp.fixed.srcSet'
  | 'thumbnail.childrenImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fixed.srcWebp'
  | 'thumbnail.childrenImageSharp.fixed.tracedSVG'
  | 'thumbnail.childrenImageSharp.fixed.width'
  | 'thumbnail.childrenImageSharp.fluid.aspectRatio'
  | 'thumbnail.childrenImageSharp.fluid.base64'
  | 'thumbnail.childrenImageSharp.fluid.originalImg'
  | 'thumbnail.childrenImageSharp.fluid.originalName'
  | 'thumbnail.childrenImageSharp.fluid.presentationHeight'
  | 'thumbnail.childrenImageSharp.fluid.presentationWidth'
  | 'thumbnail.childrenImageSharp.fluid.sizes'
  | 'thumbnail.childrenImageSharp.fluid.src'
  | 'thumbnail.childrenImageSharp.fluid.srcSet'
  | 'thumbnail.childrenImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fluid.srcWebp'
  | 'thumbnail.childrenImageSharp.fluid.tracedSVG'
  | 'thumbnail.childrenImageSharp.gatsbyImageData'
  | 'thumbnail.childrenImageSharp.id'
  | 'thumbnail.childrenImageSharp.internal.content'
  | 'thumbnail.childrenImageSharp.internal.contentDigest'
  | 'thumbnail.childrenImageSharp.internal.contentFilePath'
  | 'thumbnail.childrenImageSharp.internal.description'
  | 'thumbnail.childrenImageSharp.internal.fieldOwners'
  | 'thumbnail.childrenImageSharp.internal.ignoreType'
  | 'thumbnail.childrenImageSharp.internal.mediaType'
  | 'thumbnail.childrenImageSharp.internal.owner'
  | 'thumbnail.childrenImageSharp.internal.type'
  | 'thumbnail.childrenImageSharp.original.height'
  | 'thumbnail.childrenImageSharp.original.src'
  | 'thumbnail.childrenImageSharp.original.width'
  | 'thumbnail.childrenImageSharp.parent.children'
  | 'thumbnail.childrenImageSharp.parent.id'
  | 'thumbnail.childrenImageSharp.resize.aspectRatio'
  | 'thumbnail.childrenImageSharp.resize.height'
  | 'thumbnail.childrenImageSharp.resize.originalName'
  | 'thumbnail.childrenImageSharp.resize.src'
  | 'thumbnail.childrenImageSharp.resize.tracedSVG'
  | 'thumbnail.childrenImageSharp.resize.width'
  | 'thumbnail.children.children'
  | 'thumbnail.children.children.children'
  | 'thumbnail.children.children.id'
  | 'thumbnail.children.id'
  | 'thumbnail.children.internal.content'
  | 'thumbnail.children.internal.contentDigest'
  | 'thumbnail.children.internal.contentFilePath'
  | 'thumbnail.children.internal.description'
  | 'thumbnail.children.internal.fieldOwners'
  | 'thumbnail.children.internal.ignoreType'
  | 'thumbnail.children.internal.mediaType'
  | 'thumbnail.children.internal.owner'
  | 'thumbnail.children.internal.type'
  | 'thumbnail.children.parent.children'
  | 'thumbnail.children.parent.id'
  | 'thumbnail.ctime'
  | 'thumbnail.ctimeMs'
  | 'thumbnail.dev'
  | 'thumbnail.dir'
  | 'thumbnail.ext'
  | 'thumbnail.extension'
  | 'thumbnail.gid'
  | 'thumbnail.id'
  | 'thumbnail.ino'
  | 'thumbnail.internal.content'
  | 'thumbnail.internal.contentDigest'
  | 'thumbnail.internal.contentFilePath'
  | 'thumbnail.internal.description'
  | 'thumbnail.internal.fieldOwners'
  | 'thumbnail.internal.ignoreType'
  | 'thumbnail.internal.mediaType'
  | 'thumbnail.internal.owner'
  | 'thumbnail.internal.type'
  | 'thumbnail.mode'
  | 'thumbnail.modifiedTime'
  | 'thumbnail.mtime'
  | 'thumbnail.mtimeMs'
  | 'thumbnail.name'
  | 'thumbnail.nlink'
  | 'thumbnail.parent.children'
  | 'thumbnail.parent.children.children'
  | 'thumbnail.parent.children.id'
  | 'thumbnail.parent.id'
  | 'thumbnail.parent.internal.content'
  | 'thumbnail.parent.internal.contentDigest'
  | 'thumbnail.parent.internal.contentFilePath'
  | 'thumbnail.parent.internal.description'
  | 'thumbnail.parent.internal.fieldOwners'
  | 'thumbnail.parent.internal.ignoreType'
  | 'thumbnail.parent.internal.mediaType'
  | 'thumbnail.parent.internal.owner'
  | 'thumbnail.parent.internal.type'
  | 'thumbnail.parent.parent.children'
  | 'thumbnail.parent.parent.id'
  | 'thumbnail.prettySize'
  | 'thumbnail.publicURL'
  | 'thumbnail.rdev'
  | 'thumbnail.relativeDirectory'
  | 'thumbnail.relativePath'
  | 'thumbnail.root'
  | 'thumbnail.size'
  | 'thumbnail.sourceInstanceName'
  | 'thumbnail.uid'
  | 'thumbnail.url'
  | 'velogId'
  | 'velogUrl';

type VelogSeriesFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<VelogUserFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly posts: InputMaybe<VelogPostFilterListInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly thumbnail: InputMaybe<FileFilterInput>;
  readonly velogId: InputMaybe<StringQueryOperatorInput>;
  readonly velogUrl: InputMaybe<StringQueryOperatorInput>;
};

type VelogSeriesGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<VelogSeriesEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<VelogSeriesGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<VelogSeries>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type VelogSeriesGroupConnection_distinctArgs = {
  field: VelogSeriesFieldsEnum;
};


type VelogSeriesGroupConnection_groupArgs = {
  field: VelogSeriesFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type VelogSeriesGroupConnection_maxArgs = {
  field: VelogSeriesFieldsEnum;
};


type VelogSeriesGroupConnection_minArgs = {
  field: VelogSeriesFieldsEnum;
};


type VelogSeriesGroupConnection_sumArgs = {
  field: VelogSeriesFieldsEnum;
};

type VelogSeriesSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<VelogSeriesFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type VelogTag = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Scalars['String'];
  readonly owner: VelogUser;
  readonly parent: Maybe<Node>;
  readonly posts: ReadonlyArray<VelogPost>;
  readonly thumbnail: Maybe<File>;
  readonly velogId: Scalars['String'];
  readonly velogUrl: Scalars['String'];
};

type VelogTagConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<VelogTagEdge>;
  readonly group: ReadonlyArray<VelogTagGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<VelogTag>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type VelogTagConnection_distinctArgs = {
  field: VelogTagFieldsEnum;
};


type VelogTagConnection_groupArgs = {
  field: VelogTagFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type VelogTagConnection_maxArgs = {
  field: VelogTagFieldsEnum;
};


type VelogTagConnection_minArgs = {
  field: VelogTagFieldsEnum;
};


type VelogTagConnection_sumArgs = {
  field: VelogTagFieldsEnum;
};

type VelogTagEdge = {
  readonly next: Maybe<VelogTag>;
  readonly node: VelogTag;
  readonly previous: Maybe<VelogTag>;
};

type VelogTagFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'description'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'owner.aboutHtml'
  | 'owner.bio'
  | 'owner.children'
  | 'owner.children.children'
  | 'owner.children.children.children'
  | 'owner.children.children.id'
  | 'owner.children.id'
  | 'owner.children.internal.content'
  | 'owner.children.internal.contentDigest'
  | 'owner.children.internal.contentFilePath'
  | 'owner.children.internal.description'
  | 'owner.children.internal.fieldOwners'
  | 'owner.children.internal.ignoreType'
  | 'owner.children.internal.mediaType'
  | 'owner.children.internal.owner'
  | 'owner.children.internal.type'
  | 'owner.children.parent.children'
  | 'owner.children.parent.id'
  | 'owner.displayName'
  | 'owner.id'
  | 'owner.internal.content'
  | 'owner.internal.contentDigest'
  | 'owner.internal.contentFilePath'
  | 'owner.internal.description'
  | 'owner.internal.fieldOwners'
  | 'owner.internal.ignoreType'
  | 'owner.internal.mediaType'
  | 'owner.internal.owner'
  | 'owner.internal.type'
  | 'owner.isCertified'
  | 'owner.parent.children'
  | 'owner.parent.children.children'
  | 'owner.parent.children.id'
  | 'owner.parent.id'
  | 'owner.parent.internal.content'
  | 'owner.parent.internal.contentDigest'
  | 'owner.parent.internal.contentFilePath'
  | 'owner.parent.internal.description'
  | 'owner.parent.internal.fieldOwners'
  | 'owner.parent.internal.ignoreType'
  | 'owner.parent.internal.mediaType'
  | 'owner.parent.internal.owner'
  | 'owner.parent.internal.type'
  | 'owner.parent.parent.children'
  | 'owner.parent.parent.id'
  | 'owner.posts'
  | 'owner.posts.author.aboutHtml'
  | 'owner.posts.author.bio'
  | 'owner.posts.author.children'
  | 'owner.posts.author.displayName'
  | 'owner.posts.author.id'
  | 'owner.posts.author.isCertified'
  | 'owner.posts.author.posts'
  | 'owner.posts.author.username'
  | 'owner.posts.author.velogId'
  | 'owner.posts.author.velogUrl'
  | 'owner.posts.childMarkdownRemark.children'
  | 'owner.posts.childMarkdownRemark.excerpt'
  | 'owner.posts.childMarkdownRemark.excerptAst'
  | 'owner.posts.childMarkdownRemark.headings'
  | 'owner.posts.childMarkdownRemark.html'
  | 'owner.posts.childMarkdownRemark.htmlAst'
  | 'owner.posts.childMarkdownRemark.id'
  | 'owner.posts.childMarkdownRemark.rawMarkdownBody'
  | 'owner.posts.childMarkdownRemark.tableOfContents'
  | 'owner.posts.childMarkdownRemark.timeToRead'
  | 'owner.posts.children'
  | 'owner.posts.childrenMarkdownRemark'
  | 'owner.posts.childrenMarkdownRemark.children'
  | 'owner.posts.childrenMarkdownRemark.excerpt'
  | 'owner.posts.childrenMarkdownRemark.excerptAst'
  | 'owner.posts.childrenMarkdownRemark.headings'
  | 'owner.posts.childrenMarkdownRemark.html'
  | 'owner.posts.childrenMarkdownRemark.htmlAst'
  | 'owner.posts.childrenMarkdownRemark.id'
  | 'owner.posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'owner.posts.childrenMarkdownRemark.tableOfContents'
  | 'owner.posts.childrenMarkdownRemark.timeToRead'
  | 'owner.posts.children.children'
  | 'owner.posts.children.id'
  | 'owner.posts.id'
  | 'owner.posts.internal.content'
  | 'owner.posts.internal.contentDigest'
  | 'owner.posts.internal.contentFilePath'
  | 'owner.posts.internal.description'
  | 'owner.posts.internal.fieldOwners'
  | 'owner.posts.internal.ignoreType'
  | 'owner.posts.internal.mediaType'
  | 'owner.posts.internal.owner'
  | 'owner.posts.internal.type'
  | 'owner.posts.isMarkdown'
  | 'owner.posts.parent.children'
  | 'owner.posts.parent.id'
  | 'owner.posts.publishedAt'
  | 'owner.posts.rawContent'
  | 'owner.posts.series.index'
  | 'owner.posts.series.seriesPosts'
  | 'owner.posts.series.velogId'
  | 'owner.posts.shortDescription'
  | 'owner.posts.slug'
  | 'owner.posts.tags'
  | 'owner.posts.tags.children'
  | 'owner.posts.tags.description'
  | 'owner.posts.tags.id'
  | 'owner.posts.tags.name'
  | 'owner.posts.tags.posts'
  | 'owner.posts.tags.velogId'
  | 'owner.posts.tags.velogUrl'
  | 'owner.posts.thumbnail'
  | 'owner.posts.title'
  | 'owner.posts.updatedAt'
  | 'owner.posts.velogId'
  | 'owner.posts.velogUrl'
  | 'owner.socialProfile.email'
  | 'owner.socialProfile.facebook'
  | 'owner.socialProfile.github'
  | 'owner.socialProfile.twitter'
  | 'owner.socialProfile.url'
  | 'owner.thumbnail.absolutePath'
  | 'owner.thumbnail.accessTime'
  | 'owner.thumbnail.atime'
  | 'owner.thumbnail.atimeMs'
  | 'owner.thumbnail.base'
  | 'owner.thumbnail.birthTime'
  | 'owner.thumbnail.birthtime'
  | 'owner.thumbnail.birthtimeMs'
  | 'owner.thumbnail.blksize'
  | 'owner.thumbnail.blocks'
  | 'owner.thumbnail.changeTime'
  | 'owner.thumbnail.childImageSharp.children'
  | 'owner.thumbnail.childImageSharp.gatsbyImageData'
  | 'owner.thumbnail.childImageSharp.id'
  | 'owner.thumbnail.children'
  | 'owner.thumbnail.childrenImageSharp'
  | 'owner.thumbnail.childrenImageSharp.children'
  | 'owner.thumbnail.childrenImageSharp.gatsbyImageData'
  | 'owner.thumbnail.childrenImageSharp.id'
  | 'owner.thumbnail.children.children'
  | 'owner.thumbnail.children.id'
  | 'owner.thumbnail.ctime'
  | 'owner.thumbnail.ctimeMs'
  | 'owner.thumbnail.dev'
  | 'owner.thumbnail.dir'
  | 'owner.thumbnail.ext'
  | 'owner.thumbnail.extension'
  | 'owner.thumbnail.gid'
  | 'owner.thumbnail.id'
  | 'owner.thumbnail.ino'
  | 'owner.thumbnail.internal.content'
  | 'owner.thumbnail.internal.contentDigest'
  | 'owner.thumbnail.internal.contentFilePath'
  | 'owner.thumbnail.internal.description'
  | 'owner.thumbnail.internal.fieldOwners'
  | 'owner.thumbnail.internal.ignoreType'
  | 'owner.thumbnail.internal.mediaType'
  | 'owner.thumbnail.internal.owner'
  | 'owner.thumbnail.internal.type'
  | 'owner.thumbnail.mode'
  | 'owner.thumbnail.modifiedTime'
  | 'owner.thumbnail.mtime'
  | 'owner.thumbnail.mtimeMs'
  | 'owner.thumbnail.name'
  | 'owner.thumbnail.nlink'
  | 'owner.thumbnail.parent.children'
  | 'owner.thumbnail.parent.id'
  | 'owner.thumbnail.prettySize'
  | 'owner.thumbnail.publicURL'
  | 'owner.thumbnail.rdev'
  | 'owner.thumbnail.relativeDirectory'
  | 'owner.thumbnail.relativePath'
  | 'owner.thumbnail.root'
  | 'owner.thumbnail.size'
  | 'owner.thumbnail.sourceInstanceName'
  | 'owner.thumbnail.uid'
  | 'owner.thumbnail.url'
  | 'owner.username'
  | 'owner.velogId'
  | 'owner.velogUrl'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'posts'
  | 'posts.author.aboutHtml'
  | 'posts.author.bio'
  | 'posts.author.children'
  | 'posts.author.children.children'
  | 'posts.author.children.id'
  | 'posts.author.displayName'
  | 'posts.author.id'
  | 'posts.author.internal.content'
  | 'posts.author.internal.contentDigest'
  | 'posts.author.internal.contentFilePath'
  | 'posts.author.internal.description'
  | 'posts.author.internal.fieldOwners'
  | 'posts.author.internal.ignoreType'
  | 'posts.author.internal.mediaType'
  | 'posts.author.internal.owner'
  | 'posts.author.internal.type'
  | 'posts.author.isCertified'
  | 'posts.author.parent.children'
  | 'posts.author.parent.id'
  | 'posts.author.posts'
  | 'posts.author.posts.children'
  | 'posts.author.posts.childrenMarkdownRemark'
  | 'posts.author.posts.id'
  | 'posts.author.posts.isMarkdown'
  | 'posts.author.posts.publishedAt'
  | 'posts.author.posts.rawContent'
  | 'posts.author.posts.shortDescription'
  | 'posts.author.posts.slug'
  | 'posts.author.posts.tags'
  | 'posts.author.posts.thumbnail'
  | 'posts.author.posts.title'
  | 'posts.author.posts.updatedAt'
  | 'posts.author.posts.velogId'
  | 'posts.author.posts.velogUrl'
  | 'posts.author.socialProfile.email'
  | 'posts.author.socialProfile.facebook'
  | 'posts.author.socialProfile.github'
  | 'posts.author.socialProfile.twitter'
  | 'posts.author.socialProfile.url'
  | 'posts.author.thumbnail.absolutePath'
  | 'posts.author.thumbnail.accessTime'
  | 'posts.author.thumbnail.atime'
  | 'posts.author.thumbnail.atimeMs'
  | 'posts.author.thumbnail.base'
  | 'posts.author.thumbnail.birthTime'
  | 'posts.author.thumbnail.birthtime'
  | 'posts.author.thumbnail.birthtimeMs'
  | 'posts.author.thumbnail.blksize'
  | 'posts.author.thumbnail.blocks'
  | 'posts.author.thumbnail.changeTime'
  | 'posts.author.thumbnail.children'
  | 'posts.author.thumbnail.childrenImageSharp'
  | 'posts.author.thumbnail.ctime'
  | 'posts.author.thumbnail.ctimeMs'
  | 'posts.author.thumbnail.dev'
  | 'posts.author.thumbnail.dir'
  | 'posts.author.thumbnail.ext'
  | 'posts.author.thumbnail.extension'
  | 'posts.author.thumbnail.gid'
  | 'posts.author.thumbnail.id'
  | 'posts.author.thumbnail.ino'
  | 'posts.author.thumbnail.mode'
  | 'posts.author.thumbnail.modifiedTime'
  | 'posts.author.thumbnail.mtime'
  | 'posts.author.thumbnail.mtimeMs'
  | 'posts.author.thumbnail.name'
  | 'posts.author.thumbnail.nlink'
  | 'posts.author.thumbnail.prettySize'
  | 'posts.author.thumbnail.publicURL'
  | 'posts.author.thumbnail.rdev'
  | 'posts.author.thumbnail.relativeDirectory'
  | 'posts.author.thumbnail.relativePath'
  | 'posts.author.thumbnail.root'
  | 'posts.author.thumbnail.size'
  | 'posts.author.thumbnail.sourceInstanceName'
  | 'posts.author.thumbnail.uid'
  | 'posts.author.thumbnail.url'
  | 'posts.author.username'
  | 'posts.author.velogId'
  | 'posts.author.velogUrl'
  | 'posts.childMarkdownRemark.children'
  | 'posts.childMarkdownRemark.children.children'
  | 'posts.childMarkdownRemark.children.id'
  | 'posts.childMarkdownRemark.excerpt'
  | 'posts.childMarkdownRemark.excerptAst'
  | 'posts.childMarkdownRemark.frontmatter.title'
  | 'posts.childMarkdownRemark.headings'
  | 'posts.childMarkdownRemark.headings.depth'
  | 'posts.childMarkdownRemark.headings.id'
  | 'posts.childMarkdownRemark.headings.value'
  | 'posts.childMarkdownRemark.html'
  | 'posts.childMarkdownRemark.htmlAst'
  | 'posts.childMarkdownRemark.id'
  | 'posts.childMarkdownRemark.internal.content'
  | 'posts.childMarkdownRemark.internal.contentDigest'
  | 'posts.childMarkdownRemark.internal.contentFilePath'
  | 'posts.childMarkdownRemark.internal.description'
  | 'posts.childMarkdownRemark.internal.fieldOwners'
  | 'posts.childMarkdownRemark.internal.ignoreType'
  | 'posts.childMarkdownRemark.internal.mediaType'
  | 'posts.childMarkdownRemark.internal.owner'
  | 'posts.childMarkdownRemark.internal.type'
  | 'posts.childMarkdownRemark.parent.children'
  | 'posts.childMarkdownRemark.parent.id'
  | 'posts.childMarkdownRemark.rawMarkdownBody'
  | 'posts.childMarkdownRemark.tableOfContents'
  | 'posts.childMarkdownRemark.timeToRead'
  | 'posts.childMarkdownRemark.wordCount.paragraphs'
  | 'posts.childMarkdownRemark.wordCount.sentences'
  | 'posts.childMarkdownRemark.wordCount.words'
  | 'posts.children'
  | 'posts.childrenMarkdownRemark'
  | 'posts.childrenMarkdownRemark.children'
  | 'posts.childrenMarkdownRemark.children.children'
  | 'posts.childrenMarkdownRemark.children.id'
  | 'posts.childrenMarkdownRemark.excerpt'
  | 'posts.childrenMarkdownRemark.excerptAst'
  | 'posts.childrenMarkdownRemark.frontmatter.title'
  | 'posts.childrenMarkdownRemark.headings'
  | 'posts.childrenMarkdownRemark.headings.depth'
  | 'posts.childrenMarkdownRemark.headings.id'
  | 'posts.childrenMarkdownRemark.headings.value'
  | 'posts.childrenMarkdownRemark.html'
  | 'posts.childrenMarkdownRemark.htmlAst'
  | 'posts.childrenMarkdownRemark.id'
  | 'posts.childrenMarkdownRemark.internal.content'
  | 'posts.childrenMarkdownRemark.internal.contentDigest'
  | 'posts.childrenMarkdownRemark.internal.contentFilePath'
  | 'posts.childrenMarkdownRemark.internal.description'
  | 'posts.childrenMarkdownRemark.internal.fieldOwners'
  | 'posts.childrenMarkdownRemark.internal.ignoreType'
  | 'posts.childrenMarkdownRemark.internal.mediaType'
  | 'posts.childrenMarkdownRemark.internal.owner'
  | 'posts.childrenMarkdownRemark.internal.type'
  | 'posts.childrenMarkdownRemark.parent.children'
  | 'posts.childrenMarkdownRemark.parent.id'
  | 'posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'posts.childrenMarkdownRemark.tableOfContents'
  | 'posts.childrenMarkdownRemark.timeToRead'
  | 'posts.childrenMarkdownRemark.wordCount.paragraphs'
  | 'posts.childrenMarkdownRemark.wordCount.sentences'
  | 'posts.childrenMarkdownRemark.wordCount.words'
  | 'posts.children.children'
  | 'posts.children.children.children'
  | 'posts.children.children.id'
  | 'posts.children.id'
  | 'posts.children.internal.content'
  | 'posts.children.internal.contentDigest'
  | 'posts.children.internal.contentFilePath'
  | 'posts.children.internal.description'
  | 'posts.children.internal.fieldOwners'
  | 'posts.children.internal.ignoreType'
  | 'posts.children.internal.mediaType'
  | 'posts.children.internal.owner'
  | 'posts.children.internal.type'
  | 'posts.children.parent.children'
  | 'posts.children.parent.id'
  | 'posts.id'
  | 'posts.internal.content'
  | 'posts.internal.contentDigest'
  | 'posts.internal.contentFilePath'
  | 'posts.internal.description'
  | 'posts.internal.fieldOwners'
  | 'posts.internal.ignoreType'
  | 'posts.internal.mediaType'
  | 'posts.internal.owner'
  | 'posts.internal.type'
  | 'posts.isMarkdown'
  | 'posts.parent.children'
  | 'posts.parent.children.children'
  | 'posts.parent.children.id'
  | 'posts.parent.id'
  | 'posts.parent.internal.content'
  | 'posts.parent.internal.contentDigest'
  | 'posts.parent.internal.contentFilePath'
  | 'posts.parent.internal.description'
  | 'posts.parent.internal.fieldOwners'
  | 'posts.parent.internal.ignoreType'
  | 'posts.parent.internal.mediaType'
  | 'posts.parent.internal.owner'
  | 'posts.parent.internal.type'
  | 'posts.parent.parent.children'
  | 'posts.parent.parent.id'
  | 'posts.publishedAt'
  | 'posts.rawContent'
  | 'posts.series.index'
  | 'posts.series.node.children'
  | 'posts.series.node.description'
  | 'posts.series.node.id'
  | 'posts.series.node.name'
  | 'posts.series.node.posts'
  | 'posts.series.node.slug'
  | 'posts.series.node.velogId'
  | 'posts.series.node.velogUrl'
  | 'posts.series.seriesPosts'
  | 'posts.series.seriesPosts.index'
  | 'posts.series.velogId'
  | 'posts.shortDescription'
  | 'posts.slug'
  | 'posts.tags'
  | 'posts.tags.children'
  | 'posts.tags.children.children'
  | 'posts.tags.children.id'
  | 'posts.tags.description'
  | 'posts.tags.id'
  | 'posts.tags.internal.content'
  | 'posts.tags.internal.contentDigest'
  | 'posts.tags.internal.contentFilePath'
  | 'posts.tags.internal.description'
  | 'posts.tags.internal.fieldOwners'
  | 'posts.tags.internal.ignoreType'
  | 'posts.tags.internal.mediaType'
  | 'posts.tags.internal.owner'
  | 'posts.tags.internal.type'
  | 'posts.tags.name'
  | 'posts.tags.owner.aboutHtml'
  | 'posts.tags.owner.bio'
  | 'posts.tags.owner.children'
  | 'posts.tags.owner.displayName'
  | 'posts.tags.owner.id'
  | 'posts.tags.owner.isCertified'
  | 'posts.tags.owner.posts'
  | 'posts.tags.owner.username'
  | 'posts.tags.owner.velogId'
  | 'posts.tags.owner.velogUrl'
  | 'posts.tags.parent.children'
  | 'posts.tags.parent.id'
  | 'posts.tags.posts'
  | 'posts.tags.posts.children'
  | 'posts.tags.posts.childrenMarkdownRemark'
  | 'posts.tags.posts.id'
  | 'posts.tags.posts.isMarkdown'
  | 'posts.tags.posts.publishedAt'
  | 'posts.tags.posts.rawContent'
  | 'posts.tags.posts.shortDescription'
  | 'posts.tags.posts.slug'
  | 'posts.tags.posts.tags'
  | 'posts.tags.posts.thumbnail'
  | 'posts.tags.posts.title'
  | 'posts.tags.posts.updatedAt'
  | 'posts.tags.posts.velogId'
  | 'posts.tags.posts.velogUrl'
  | 'posts.tags.thumbnail.absolutePath'
  | 'posts.tags.thumbnail.accessTime'
  | 'posts.tags.thumbnail.atime'
  | 'posts.tags.thumbnail.atimeMs'
  | 'posts.tags.thumbnail.base'
  | 'posts.tags.thumbnail.birthTime'
  | 'posts.tags.thumbnail.birthtime'
  | 'posts.tags.thumbnail.birthtimeMs'
  | 'posts.tags.thumbnail.blksize'
  | 'posts.tags.thumbnail.blocks'
  | 'posts.tags.thumbnail.changeTime'
  | 'posts.tags.thumbnail.children'
  | 'posts.tags.thumbnail.childrenImageSharp'
  | 'posts.tags.thumbnail.ctime'
  | 'posts.tags.thumbnail.ctimeMs'
  | 'posts.tags.thumbnail.dev'
  | 'posts.tags.thumbnail.dir'
  | 'posts.tags.thumbnail.ext'
  | 'posts.tags.thumbnail.extension'
  | 'posts.tags.thumbnail.gid'
  | 'posts.tags.thumbnail.id'
  | 'posts.tags.thumbnail.ino'
  | 'posts.tags.thumbnail.mode'
  | 'posts.tags.thumbnail.modifiedTime'
  | 'posts.tags.thumbnail.mtime'
  | 'posts.tags.thumbnail.mtimeMs'
  | 'posts.tags.thumbnail.name'
  | 'posts.tags.thumbnail.nlink'
  | 'posts.tags.thumbnail.prettySize'
  | 'posts.tags.thumbnail.publicURL'
  | 'posts.tags.thumbnail.rdev'
  | 'posts.tags.thumbnail.relativeDirectory'
  | 'posts.tags.thumbnail.relativePath'
  | 'posts.tags.thumbnail.root'
  | 'posts.tags.thumbnail.size'
  | 'posts.tags.thumbnail.sourceInstanceName'
  | 'posts.tags.thumbnail.uid'
  | 'posts.tags.thumbnail.url'
  | 'posts.tags.velogId'
  | 'posts.tags.velogUrl'
  | 'posts.thumbnail'
  | 'posts.title'
  | 'posts.updatedAt'
  | 'posts.velogId'
  | 'posts.velogUrl'
  | 'thumbnail.absolutePath'
  | 'thumbnail.accessTime'
  | 'thumbnail.atime'
  | 'thumbnail.atimeMs'
  | 'thumbnail.base'
  | 'thumbnail.birthTime'
  | 'thumbnail.birthtime'
  | 'thumbnail.birthtimeMs'
  | 'thumbnail.blksize'
  | 'thumbnail.blocks'
  | 'thumbnail.changeTime'
  | 'thumbnail.childImageSharp.children'
  | 'thumbnail.childImageSharp.children.children'
  | 'thumbnail.childImageSharp.children.id'
  | 'thumbnail.childImageSharp.fixed.aspectRatio'
  | 'thumbnail.childImageSharp.fixed.base64'
  | 'thumbnail.childImageSharp.fixed.height'
  | 'thumbnail.childImageSharp.fixed.originalName'
  | 'thumbnail.childImageSharp.fixed.src'
  | 'thumbnail.childImageSharp.fixed.srcSet'
  | 'thumbnail.childImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childImageSharp.fixed.srcWebp'
  | 'thumbnail.childImageSharp.fixed.tracedSVG'
  | 'thumbnail.childImageSharp.fixed.width'
  | 'thumbnail.childImageSharp.fluid.aspectRatio'
  | 'thumbnail.childImageSharp.fluid.base64'
  | 'thumbnail.childImageSharp.fluid.originalImg'
  | 'thumbnail.childImageSharp.fluid.originalName'
  | 'thumbnail.childImageSharp.fluid.presentationHeight'
  | 'thumbnail.childImageSharp.fluid.presentationWidth'
  | 'thumbnail.childImageSharp.fluid.sizes'
  | 'thumbnail.childImageSharp.fluid.src'
  | 'thumbnail.childImageSharp.fluid.srcSet'
  | 'thumbnail.childImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childImageSharp.fluid.srcWebp'
  | 'thumbnail.childImageSharp.fluid.tracedSVG'
  | 'thumbnail.childImageSharp.gatsbyImageData'
  | 'thumbnail.childImageSharp.id'
  | 'thumbnail.childImageSharp.internal.content'
  | 'thumbnail.childImageSharp.internal.contentDigest'
  | 'thumbnail.childImageSharp.internal.contentFilePath'
  | 'thumbnail.childImageSharp.internal.description'
  | 'thumbnail.childImageSharp.internal.fieldOwners'
  | 'thumbnail.childImageSharp.internal.ignoreType'
  | 'thumbnail.childImageSharp.internal.mediaType'
  | 'thumbnail.childImageSharp.internal.owner'
  | 'thumbnail.childImageSharp.internal.type'
  | 'thumbnail.childImageSharp.original.height'
  | 'thumbnail.childImageSharp.original.src'
  | 'thumbnail.childImageSharp.original.width'
  | 'thumbnail.childImageSharp.parent.children'
  | 'thumbnail.childImageSharp.parent.id'
  | 'thumbnail.childImageSharp.resize.aspectRatio'
  | 'thumbnail.childImageSharp.resize.height'
  | 'thumbnail.childImageSharp.resize.originalName'
  | 'thumbnail.childImageSharp.resize.src'
  | 'thumbnail.childImageSharp.resize.tracedSVG'
  | 'thumbnail.childImageSharp.resize.width'
  | 'thumbnail.children'
  | 'thumbnail.childrenImageSharp'
  | 'thumbnail.childrenImageSharp.children'
  | 'thumbnail.childrenImageSharp.children.children'
  | 'thumbnail.childrenImageSharp.children.id'
  | 'thumbnail.childrenImageSharp.fixed.aspectRatio'
  | 'thumbnail.childrenImageSharp.fixed.base64'
  | 'thumbnail.childrenImageSharp.fixed.height'
  | 'thumbnail.childrenImageSharp.fixed.originalName'
  | 'thumbnail.childrenImageSharp.fixed.src'
  | 'thumbnail.childrenImageSharp.fixed.srcSet'
  | 'thumbnail.childrenImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fixed.srcWebp'
  | 'thumbnail.childrenImageSharp.fixed.tracedSVG'
  | 'thumbnail.childrenImageSharp.fixed.width'
  | 'thumbnail.childrenImageSharp.fluid.aspectRatio'
  | 'thumbnail.childrenImageSharp.fluid.base64'
  | 'thumbnail.childrenImageSharp.fluid.originalImg'
  | 'thumbnail.childrenImageSharp.fluid.originalName'
  | 'thumbnail.childrenImageSharp.fluid.presentationHeight'
  | 'thumbnail.childrenImageSharp.fluid.presentationWidth'
  | 'thumbnail.childrenImageSharp.fluid.sizes'
  | 'thumbnail.childrenImageSharp.fluid.src'
  | 'thumbnail.childrenImageSharp.fluid.srcSet'
  | 'thumbnail.childrenImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fluid.srcWebp'
  | 'thumbnail.childrenImageSharp.fluid.tracedSVG'
  | 'thumbnail.childrenImageSharp.gatsbyImageData'
  | 'thumbnail.childrenImageSharp.id'
  | 'thumbnail.childrenImageSharp.internal.content'
  | 'thumbnail.childrenImageSharp.internal.contentDigest'
  | 'thumbnail.childrenImageSharp.internal.contentFilePath'
  | 'thumbnail.childrenImageSharp.internal.description'
  | 'thumbnail.childrenImageSharp.internal.fieldOwners'
  | 'thumbnail.childrenImageSharp.internal.ignoreType'
  | 'thumbnail.childrenImageSharp.internal.mediaType'
  | 'thumbnail.childrenImageSharp.internal.owner'
  | 'thumbnail.childrenImageSharp.internal.type'
  | 'thumbnail.childrenImageSharp.original.height'
  | 'thumbnail.childrenImageSharp.original.src'
  | 'thumbnail.childrenImageSharp.original.width'
  | 'thumbnail.childrenImageSharp.parent.children'
  | 'thumbnail.childrenImageSharp.parent.id'
  | 'thumbnail.childrenImageSharp.resize.aspectRatio'
  | 'thumbnail.childrenImageSharp.resize.height'
  | 'thumbnail.childrenImageSharp.resize.originalName'
  | 'thumbnail.childrenImageSharp.resize.src'
  | 'thumbnail.childrenImageSharp.resize.tracedSVG'
  | 'thumbnail.childrenImageSharp.resize.width'
  | 'thumbnail.children.children'
  | 'thumbnail.children.children.children'
  | 'thumbnail.children.children.id'
  | 'thumbnail.children.id'
  | 'thumbnail.children.internal.content'
  | 'thumbnail.children.internal.contentDigest'
  | 'thumbnail.children.internal.contentFilePath'
  | 'thumbnail.children.internal.description'
  | 'thumbnail.children.internal.fieldOwners'
  | 'thumbnail.children.internal.ignoreType'
  | 'thumbnail.children.internal.mediaType'
  | 'thumbnail.children.internal.owner'
  | 'thumbnail.children.internal.type'
  | 'thumbnail.children.parent.children'
  | 'thumbnail.children.parent.id'
  | 'thumbnail.ctime'
  | 'thumbnail.ctimeMs'
  | 'thumbnail.dev'
  | 'thumbnail.dir'
  | 'thumbnail.ext'
  | 'thumbnail.extension'
  | 'thumbnail.gid'
  | 'thumbnail.id'
  | 'thumbnail.ino'
  | 'thumbnail.internal.content'
  | 'thumbnail.internal.contentDigest'
  | 'thumbnail.internal.contentFilePath'
  | 'thumbnail.internal.description'
  | 'thumbnail.internal.fieldOwners'
  | 'thumbnail.internal.ignoreType'
  | 'thumbnail.internal.mediaType'
  | 'thumbnail.internal.owner'
  | 'thumbnail.internal.type'
  | 'thumbnail.mode'
  | 'thumbnail.modifiedTime'
  | 'thumbnail.mtime'
  | 'thumbnail.mtimeMs'
  | 'thumbnail.name'
  | 'thumbnail.nlink'
  | 'thumbnail.parent.children'
  | 'thumbnail.parent.children.children'
  | 'thumbnail.parent.children.id'
  | 'thumbnail.parent.id'
  | 'thumbnail.parent.internal.content'
  | 'thumbnail.parent.internal.contentDigest'
  | 'thumbnail.parent.internal.contentFilePath'
  | 'thumbnail.parent.internal.description'
  | 'thumbnail.parent.internal.fieldOwners'
  | 'thumbnail.parent.internal.ignoreType'
  | 'thumbnail.parent.internal.mediaType'
  | 'thumbnail.parent.internal.owner'
  | 'thumbnail.parent.internal.type'
  | 'thumbnail.parent.parent.children'
  | 'thumbnail.parent.parent.id'
  | 'thumbnail.prettySize'
  | 'thumbnail.publicURL'
  | 'thumbnail.rdev'
  | 'thumbnail.relativeDirectory'
  | 'thumbnail.relativePath'
  | 'thumbnail.root'
  | 'thumbnail.size'
  | 'thumbnail.sourceInstanceName'
  | 'thumbnail.uid'
  | 'thumbnail.url'
  | 'velogId'
  | 'velogUrl';

type VelogTagFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<VelogUserFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly posts: InputMaybe<VelogPostFilterListInput>;
  readonly thumbnail: InputMaybe<FileFilterInput>;
  readonly velogId: InputMaybe<StringQueryOperatorInput>;
  readonly velogUrl: InputMaybe<StringQueryOperatorInput>;
};

type VelogTagFilterListInput = {
  readonly elemMatch: InputMaybe<VelogTagFilterInput>;
};

type VelogTagGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<VelogTagEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<VelogTagGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<VelogTag>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type VelogTagGroupConnection_distinctArgs = {
  field: VelogTagFieldsEnum;
};


type VelogTagGroupConnection_groupArgs = {
  field: VelogTagFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type VelogTagGroupConnection_maxArgs = {
  field: VelogTagFieldsEnum;
};


type VelogTagGroupConnection_minArgs = {
  field: VelogTagFieldsEnum;
};


type VelogTagGroupConnection_sumArgs = {
  field: VelogTagFieldsEnum;
};

type VelogTagSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<VelogTagFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type VelogUser = Node & {
  readonly aboutHtml: Maybe<Scalars['String']>;
  readonly bio: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly displayName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly isCertified: Scalars['Boolean'];
  readonly parent: Maybe<Node>;
  readonly posts: ReadonlyArray<VelogPost>;
  readonly socialProfile: VelogUserSocialProfile;
  readonly thumbnail: Maybe<File>;
  readonly username: Scalars['String'];
  readonly velogId: Scalars['String'];
  readonly velogUrl: Scalars['String'];
};

type VelogUserConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<VelogUserEdge>;
  readonly group: ReadonlyArray<VelogUserGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<VelogUser>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type VelogUserConnection_distinctArgs = {
  field: VelogUserFieldsEnum;
};


type VelogUserConnection_groupArgs = {
  field: VelogUserFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type VelogUserConnection_maxArgs = {
  field: VelogUserFieldsEnum;
};


type VelogUserConnection_minArgs = {
  field: VelogUserFieldsEnum;
};


type VelogUserConnection_sumArgs = {
  field: VelogUserFieldsEnum;
};

type VelogUserEdge = {
  readonly next: Maybe<VelogUser>;
  readonly node: VelogUser;
  readonly previous: Maybe<VelogUser>;
};

type VelogUserFieldsEnum =
  | 'aboutHtml'
  | 'bio'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.contentFilePath'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.contentFilePath'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.contentFilePath'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'displayName'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.contentFilePath'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCertified'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.contentFilePath'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.contentFilePath'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.contentFilePath'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'posts'
  | 'posts.author.aboutHtml'
  | 'posts.author.bio'
  | 'posts.author.children'
  | 'posts.author.children.children'
  | 'posts.author.children.id'
  | 'posts.author.displayName'
  | 'posts.author.id'
  | 'posts.author.internal.content'
  | 'posts.author.internal.contentDigest'
  | 'posts.author.internal.contentFilePath'
  | 'posts.author.internal.description'
  | 'posts.author.internal.fieldOwners'
  | 'posts.author.internal.ignoreType'
  | 'posts.author.internal.mediaType'
  | 'posts.author.internal.owner'
  | 'posts.author.internal.type'
  | 'posts.author.isCertified'
  | 'posts.author.parent.children'
  | 'posts.author.parent.id'
  | 'posts.author.posts'
  | 'posts.author.posts.children'
  | 'posts.author.posts.childrenMarkdownRemark'
  | 'posts.author.posts.id'
  | 'posts.author.posts.isMarkdown'
  | 'posts.author.posts.publishedAt'
  | 'posts.author.posts.rawContent'
  | 'posts.author.posts.shortDescription'
  | 'posts.author.posts.slug'
  | 'posts.author.posts.tags'
  | 'posts.author.posts.thumbnail'
  | 'posts.author.posts.title'
  | 'posts.author.posts.updatedAt'
  | 'posts.author.posts.velogId'
  | 'posts.author.posts.velogUrl'
  | 'posts.author.socialProfile.email'
  | 'posts.author.socialProfile.facebook'
  | 'posts.author.socialProfile.github'
  | 'posts.author.socialProfile.twitter'
  | 'posts.author.socialProfile.url'
  | 'posts.author.thumbnail.absolutePath'
  | 'posts.author.thumbnail.accessTime'
  | 'posts.author.thumbnail.atime'
  | 'posts.author.thumbnail.atimeMs'
  | 'posts.author.thumbnail.base'
  | 'posts.author.thumbnail.birthTime'
  | 'posts.author.thumbnail.birthtime'
  | 'posts.author.thumbnail.birthtimeMs'
  | 'posts.author.thumbnail.blksize'
  | 'posts.author.thumbnail.blocks'
  | 'posts.author.thumbnail.changeTime'
  | 'posts.author.thumbnail.children'
  | 'posts.author.thumbnail.childrenImageSharp'
  | 'posts.author.thumbnail.ctime'
  | 'posts.author.thumbnail.ctimeMs'
  | 'posts.author.thumbnail.dev'
  | 'posts.author.thumbnail.dir'
  | 'posts.author.thumbnail.ext'
  | 'posts.author.thumbnail.extension'
  | 'posts.author.thumbnail.gid'
  | 'posts.author.thumbnail.id'
  | 'posts.author.thumbnail.ino'
  | 'posts.author.thumbnail.mode'
  | 'posts.author.thumbnail.modifiedTime'
  | 'posts.author.thumbnail.mtime'
  | 'posts.author.thumbnail.mtimeMs'
  | 'posts.author.thumbnail.name'
  | 'posts.author.thumbnail.nlink'
  | 'posts.author.thumbnail.prettySize'
  | 'posts.author.thumbnail.publicURL'
  | 'posts.author.thumbnail.rdev'
  | 'posts.author.thumbnail.relativeDirectory'
  | 'posts.author.thumbnail.relativePath'
  | 'posts.author.thumbnail.root'
  | 'posts.author.thumbnail.size'
  | 'posts.author.thumbnail.sourceInstanceName'
  | 'posts.author.thumbnail.uid'
  | 'posts.author.thumbnail.url'
  | 'posts.author.username'
  | 'posts.author.velogId'
  | 'posts.author.velogUrl'
  | 'posts.childMarkdownRemark.children'
  | 'posts.childMarkdownRemark.children.children'
  | 'posts.childMarkdownRemark.children.id'
  | 'posts.childMarkdownRemark.excerpt'
  | 'posts.childMarkdownRemark.excerptAst'
  | 'posts.childMarkdownRemark.frontmatter.title'
  | 'posts.childMarkdownRemark.headings'
  | 'posts.childMarkdownRemark.headings.depth'
  | 'posts.childMarkdownRemark.headings.id'
  | 'posts.childMarkdownRemark.headings.value'
  | 'posts.childMarkdownRemark.html'
  | 'posts.childMarkdownRemark.htmlAst'
  | 'posts.childMarkdownRemark.id'
  | 'posts.childMarkdownRemark.internal.content'
  | 'posts.childMarkdownRemark.internal.contentDigest'
  | 'posts.childMarkdownRemark.internal.contentFilePath'
  | 'posts.childMarkdownRemark.internal.description'
  | 'posts.childMarkdownRemark.internal.fieldOwners'
  | 'posts.childMarkdownRemark.internal.ignoreType'
  | 'posts.childMarkdownRemark.internal.mediaType'
  | 'posts.childMarkdownRemark.internal.owner'
  | 'posts.childMarkdownRemark.internal.type'
  | 'posts.childMarkdownRemark.parent.children'
  | 'posts.childMarkdownRemark.parent.id'
  | 'posts.childMarkdownRemark.rawMarkdownBody'
  | 'posts.childMarkdownRemark.tableOfContents'
  | 'posts.childMarkdownRemark.timeToRead'
  | 'posts.childMarkdownRemark.wordCount.paragraphs'
  | 'posts.childMarkdownRemark.wordCount.sentences'
  | 'posts.childMarkdownRemark.wordCount.words'
  | 'posts.children'
  | 'posts.childrenMarkdownRemark'
  | 'posts.childrenMarkdownRemark.children'
  | 'posts.childrenMarkdownRemark.children.children'
  | 'posts.childrenMarkdownRemark.children.id'
  | 'posts.childrenMarkdownRemark.excerpt'
  | 'posts.childrenMarkdownRemark.excerptAst'
  | 'posts.childrenMarkdownRemark.frontmatter.title'
  | 'posts.childrenMarkdownRemark.headings'
  | 'posts.childrenMarkdownRemark.headings.depth'
  | 'posts.childrenMarkdownRemark.headings.id'
  | 'posts.childrenMarkdownRemark.headings.value'
  | 'posts.childrenMarkdownRemark.html'
  | 'posts.childrenMarkdownRemark.htmlAst'
  | 'posts.childrenMarkdownRemark.id'
  | 'posts.childrenMarkdownRemark.internal.content'
  | 'posts.childrenMarkdownRemark.internal.contentDigest'
  | 'posts.childrenMarkdownRemark.internal.contentFilePath'
  | 'posts.childrenMarkdownRemark.internal.description'
  | 'posts.childrenMarkdownRemark.internal.fieldOwners'
  | 'posts.childrenMarkdownRemark.internal.ignoreType'
  | 'posts.childrenMarkdownRemark.internal.mediaType'
  | 'posts.childrenMarkdownRemark.internal.owner'
  | 'posts.childrenMarkdownRemark.internal.type'
  | 'posts.childrenMarkdownRemark.parent.children'
  | 'posts.childrenMarkdownRemark.parent.id'
  | 'posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'posts.childrenMarkdownRemark.tableOfContents'
  | 'posts.childrenMarkdownRemark.timeToRead'
  | 'posts.childrenMarkdownRemark.wordCount.paragraphs'
  | 'posts.childrenMarkdownRemark.wordCount.sentences'
  | 'posts.childrenMarkdownRemark.wordCount.words'
  | 'posts.children.children'
  | 'posts.children.children.children'
  | 'posts.children.children.id'
  | 'posts.children.id'
  | 'posts.children.internal.content'
  | 'posts.children.internal.contentDigest'
  | 'posts.children.internal.contentFilePath'
  | 'posts.children.internal.description'
  | 'posts.children.internal.fieldOwners'
  | 'posts.children.internal.ignoreType'
  | 'posts.children.internal.mediaType'
  | 'posts.children.internal.owner'
  | 'posts.children.internal.type'
  | 'posts.children.parent.children'
  | 'posts.children.parent.id'
  | 'posts.id'
  | 'posts.internal.content'
  | 'posts.internal.contentDigest'
  | 'posts.internal.contentFilePath'
  | 'posts.internal.description'
  | 'posts.internal.fieldOwners'
  | 'posts.internal.ignoreType'
  | 'posts.internal.mediaType'
  | 'posts.internal.owner'
  | 'posts.internal.type'
  | 'posts.isMarkdown'
  | 'posts.parent.children'
  | 'posts.parent.children.children'
  | 'posts.parent.children.id'
  | 'posts.parent.id'
  | 'posts.parent.internal.content'
  | 'posts.parent.internal.contentDigest'
  | 'posts.parent.internal.contentFilePath'
  | 'posts.parent.internal.description'
  | 'posts.parent.internal.fieldOwners'
  | 'posts.parent.internal.ignoreType'
  | 'posts.parent.internal.mediaType'
  | 'posts.parent.internal.owner'
  | 'posts.parent.internal.type'
  | 'posts.parent.parent.children'
  | 'posts.parent.parent.id'
  | 'posts.publishedAt'
  | 'posts.rawContent'
  | 'posts.series.index'
  | 'posts.series.node.children'
  | 'posts.series.node.description'
  | 'posts.series.node.id'
  | 'posts.series.node.name'
  | 'posts.series.node.posts'
  | 'posts.series.node.slug'
  | 'posts.series.node.velogId'
  | 'posts.series.node.velogUrl'
  | 'posts.series.seriesPosts'
  | 'posts.series.seriesPosts.index'
  | 'posts.series.velogId'
  | 'posts.shortDescription'
  | 'posts.slug'
  | 'posts.tags'
  | 'posts.tags.children'
  | 'posts.tags.children.children'
  | 'posts.tags.children.id'
  | 'posts.tags.description'
  | 'posts.tags.id'
  | 'posts.tags.internal.content'
  | 'posts.tags.internal.contentDigest'
  | 'posts.tags.internal.contentFilePath'
  | 'posts.tags.internal.description'
  | 'posts.tags.internal.fieldOwners'
  | 'posts.tags.internal.ignoreType'
  | 'posts.tags.internal.mediaType'
  | 'posts.tags.internal.owner'
  | 'posts.tags.internal.type'
  | 'posts.tags.name'
  | 'posts.tags.owner.aboutHtml'
  | 'posts.tags.owner.bio'
  | 'posts.tags.owner.children'
  | 'posts.tags.owner.displayName'
  | 'posts.tags.owner.id'
  | 'posts.tags.owner.isCertified'
  | 'posts.tags.owner.posts'
  | 'posts.tags.owner.username'
  | 'posts.tags.owner.velogId'
  | 'posts.tags.owner.velogUrl'
  | 'posts.tags.parent.children'
  | 'posts.tags.parent.id'
  | 'posts.tags.posts'
  | 'posts.tags.posts.children'
  | 'posts.tags.posts.childrenMarkdownRemark'
  | 'posts.tags.posts.id'
  | 'posts.tags.posts.isMarkdown'
  | 'posts.tags.posts.publishedAt'
  | 'posts.tags.posts.rawContent'
  | 'posts.tags.posts.shortDescription'
  | 'posts.tags.posts.slug'
  | 'posts.tags.posts.tags'
  | 'posts.tags.posts.thumbnail'
  | 'posts.tags.posts.title'
  | 'posts.tags.posts.updatedAt'
  | 'posts.tags.posts.velogId'
  | 'posts.tags.posts.velogUrl'
  | 'posts.tags.thumbnail.absolutePath'
  | 'posts.tags.thumbnail.accessTime'
  | 'posts.tags.thumbnail.atime'
  | 'posts.tags.thumbnail.atimeMs'
  | 'posts.tags.thumbnail.base'
  | 'posts.tags.thumbnail.birthTime'
  | 'posts.tags.thumbnail.birthtime'
  | 'posts.tags.thumbnail.birthtimeMs'
  | 'posts.tags.thumbnail.blksize'
  | 'posts.tags.thumbnail.blocks'
  | 'posts.tags.thumbnail.changeTime'
  | 'posts.tags.thumbnail.children'
  | 'posts.tags.thumbnail.childrenImageSharp'
  | 'posts.tags.thumbnail.ctime'
  | 'posts.tags.thumbnail.ctimeMs'
  | 'posts.tags.thumbnail.dev'
  | 'posts.tags.thumbnail.dir'
  | 'posts.tags.thumbnail.ext'
  | 'posts.tags.thumbnail.extension'
  | 'posts.tags.thumbnail.gid'
  | 'posts.tags.thumbnail.id'
  | 'posts.tags.thumbnail.ino'
  | 'posts.tags.thumbnail.mode'
  | 'posts.tags.thumbnail.modifiedTime'
  | 'posts.tags.thumbnail.mtime'
  | 'posts.tags.thumbnail.mtimeMs'
  | 'posts.tags.thumbnail.name'
  | 'posts.tags.thumbnail.nlink'
  | 'posts.tags.thumbnail.prettySize'
  | 'posts.tags.thumbnail.publicURL'
  | 'posts.tags.thumbnail.rdev'
  | 'posts.tags.thumbnail.relativeDirectory'
  | 'posts.tags.thumbnail.relativePath'
  | 'posts.tags.thumbnail.root'
  | 'posts.tags.thumbnail.size'
  | 'posts.tags.thumbnail.sourceInstanceName'
  | 'posts.tags.thumbnail.uid'
  | 'posts.tags.thumbnail.url'
  | 'posts.tags.velogId'
  | 'posts.tags.velogUrl'
  | 'posts.thumbnail'
  | 'posts.title'
  | 'posts.updatedAt'
  | 'posts.velogId'
  | 'posts.velogUrl'
  | 'socialProfile.email'
  | 'socialProfile.facebook'
  | 'socialProfile.github'
  | 'socialProfile.twitter'
  | 'socialProfile.url'
  | 'thumbnail.absolutePath'
  | 'thumbnail.accessTime'
  | 'thumbnail.atime'
  | 'thumbnail.atimeMs'
  | 'thumbnail.base'
  | 'thumbnail.birthTime'
  | 'thumbnail.birthtime'
  | 'thumbnail.birthtimeMs'
  | 'thumbnail.blksize'
  | 'thumbnail.blocks'
  | 'thumbnail.changeTime'
  | 'thumbnail.childImageSharp.children'
  | 'thumbnail.childImageSharp.children.children'
  | 'thumbnail.childImageSharp.children.id'
  | 'thumbnail.childImageSharp.fixed.aspectRatio'
  | 'thumbnail.childImageSharp.fixed.base64'
  | 'thumbnail.childImageSharp.fixed.height'
  | 'thumbnail.childImageSharp.fixed.originalName'
  | 'thumbnail.childImageSharp.fixed.src'
  | 'thumbnail.childImageSharp.fixed.srcSet'
  | 'thumbnail.childImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childImageSharp.fixed.srcWebp'
  | 'thumbnail.childImageSharp.fixed.tracedSVG'
  | 'thumbnail.childImageSharp.fixed.width'
  | 'thumbnail.childImageSharp.fluid.aspectRatio'
  | 'thumbnail.childImageSharp.fluid.base64'
  | 'thumbnail.childImageSharp.fluid.originalImg'
  | 'thumbnail.childImageSharp.fluid.originalName'
  | 'thumbnail.childImageSharp.fluid.presentationHeight'
  | 'thumbnail.childImageSharp.fluid.presentationWidth'
  | 'thumbnail.childImageSharp.fluid.sizes'
  | 'thumbnail.childImageSharp.fluid.src'
  | 'thumbnail.childImageSharp.fluid.srcSet'
  | 'thumbnail.childImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childImageSharp.fluid.srcWebp'
  | 'thumbnail.childImageSharp.fluid.tracedSVG'
  | 'thumbnail.childImageSharp.gatsbyImageData'
  | 'thumbnail.childImageSharp.id'
  | 'thumbnail.childImageSharp.internal.content'
  | 'thumbnail.childImageSharp.internal.contentDigest'
  | 'thumbnail.childImageSharp.internal.contentFilePath'
  | 'thumbnail.childImageSharp.internal.description'
  | 'thumbnail.childImageSharp.internal.fieldOwners'
  | 'thumbnail.childImageSharp.internal.ignoreType'
  | 'thumbnail.childImageSharp.internal.mediaType'
  | 'thumbnail.childImageSharp.internal.owner'
  | 'thumbnail.childImageSharp.internal.type'
  | 'thumbnail.childImageSharp.original.height'
  | 'thumbnail.childImageSharp.original.src'
  | 'thumbnail.childImageSharp.original.width'
  | 'thumbnail.childImageSharp.parent.children'
  | 'thumbnail.childImageSharp.parent.id'
  | 'thumbnail.childImageSharp.resize.aspectRatio'
  | 'thumbnail.childImageSharp.resize.height'
  | 'thumbnail.childImageSharp.resize.originalName'
  | 'thumbnail.childImageSharp.resize.src'
  | 'thumbnail.childImageSharp.resize.tracedSVG'
  | 'thumbnail.childImageSharp.resize.width'
  | 'thumbnail.children'
  | 'thumbnail.childrenImageSharp'
  | 'thumbnail.childrenImageSharp.children'
  | 'thumbnail.childrenImageSharp.children.children'
  | 'thumbnail.childrenImageSharp.children.id'
  | 'thumbnail.childrenImageSharp.fixed.aspectRatio'
  | 'thumbnail.childrenImageSharp.fixed.base64'
  | 'thumbnail.childrenImageSharp.fixed.height'
  | 'thumbnail.childrenImageSharp.fixed.originalName'
  | 'thumbnail.childrenImageSharp.fixed.src'
  | 'thumbnail.childrenImageSharp.fixed.srcSet'
  | 'thumbnail.childrenImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fixed.srcWebp'
  | 'thumbnail.childrenImageSharp.fixed.tracedSVG'
  | 'thumbnail.childrenImageSharp.fixed.width'
  | 'thumbnail.childrenImageSharp.fluid.aspectRatio'
  | 'thumbnail.childrenImageSharp.fluid.base64'
  | 'thumbnail.childrenImageSharp.fluid.originalImg'
  | 'thumbnail.childrenImageSharp.fluid.originalName'
  | 'thumbnail.childrenImageSharp.fluid.presentationHeight'
  | 'thumbnail.childrenImageSharp.fluid.presentationWidth'
  | 'thumbnail.childrenImageSharp.fluid.sizes'
  | 'thumbnail.childrenImageSharp.fluid.src'
  | 'thumbnail.childrenImageSharp.fluid.srcSet'
  | 'thumbnail.childrenImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fluid.srcWebp'
  | 'thumbnail.childrenImageSharp.fluid.tracedSVG'
  | 'thumbnail.childrenImageSharp.gatsbyImageData'
  | 'thumbnail.childrenImageSharp.id'
  | 'thumbnail.childrenImageSharp.internal.content'
  | 'thumbnail.childrenImageSharp.internal.contentDigest'
  | 'thumbnail.childrenImageSharp.internal.contentFilePath'
  | 'thumbnail.childrenImageSharp.internal.description'
  | 'thumbnail.childrenImageSharp.internal.fieldOwners'
  | 'thumbnail.childrenImageSharp.internal.ignoreType'
  | 'thumbnail.childrenImageSharp.internal.mediaType'
  | 'thumbnail.childrenImageSharp.internal.owner'
  | 'thumbnail.childrenImageSharp.internal.type'
  | 'thumbnail.childrenImageSharp.original.height'
  | 'thumbnail.childrenImageSharp.original.src'
  | 'thumbnail.childrenImageSharp.original.width'
  | 'thumbnail.childrenImageSharp.parent.children'
  | 'thumbnail.childrenImageSharp.parent.id'
  | 'thumbnail.childrenImageSharp.resize.aspectRatio'
  | 'thumbnail.childrenImageSharp.resize.height'
  | 'thumbnail.childrenImageSharp.resize.originalName'
  | 'thumbnail.childrenImageSharp.resize.src'
  | 'thumbnail.childrenImageSharp.resize.tracedSVG'
  | 'thumbnail.childrenImageSharp.resize.width'
  | 'thumbnail.children.children'
  | 'thumbnail.children.children.children'
  | 'thumbnail.children.children.id'
  | 'thumbnail.children.id'
  | 'thumbnail.children.internal.content'
  | 'thumbnail.children.internal.contentDigest'
  | 'thumbnail.children.internal.contentFilePath'
  | 'thumbnail.children.internal.description'
  | 'thumbnail.children.internal.fieldOwners'
  | 'thumbnail.children.internal.ignoreType'
  | 'thumbnail.children.internal.mediaType'
  | 'thumbnail.children.internal.owner'
  | 'thumbnail.children.internal.type'
  | 'thumbnail.children.parent.children'
  | 'thumbnail.children.parent.id'
  | 'thumbnail.ctime'
  | 'thumbnail.ctimeMs'
  | 'thumbnail.dev'
  | 'thumbnail.dir'
  | 'thumbnail.ext'
  | 'thumbnail.extension'
  | 'thumbnail.gid'
  | 'thumbnail.id'
  | 'thumbnail.ino'
  | 'thumbnail.internal.content'
  | 'thumbnail.internal.contentDigest'
  | 'thumbnail.internal.contentFilePath'
  | 'thumbnail.internal.description'
  | 'thumbnail.internal.fieldOwners'
  | 'thumbnail.internal.ignoreType'
  | 'thumbnail.internal.mediaType'
  | 'thumbnail.internal.owner'
  | 'thumbnail.internal.type'
  | 'thumbnail.mode'
  | 'thumbnail.modifiedTime'
  | 'thumbnail.mtime'
  | 'thumbnail.mtimeMs'
  | 'thumbnail.name'
  | 'thumbnail.nlink'
  | 'thumbnail.parent.children'
  | 'thumbnail.parent.children.children'
  | 'thumbnail.parent.children.id'
  | 'thumbnail.parent.id'
  | 'thumbnail.parent.internal.content'
  | 'thumbnail.parent.internal.contentDigest'
  | 'thumbnail.parent.internal.contentFilePath'
  | 'thumbnail.parent.internal.description'
  | 'thumbnail.parent.internal.fieldOwners'
  | 'thumbnail.parent.internal.ignoreType'
  | 'thumbnail.parent.internal.mediaType'
  | 'thumbnail.parent.internal.owner'
  | 'thumbnail.parent.internal.type'
  | 'thumbnail.parent.parent.children'
  | 'thumbnail.parent.parent.id'
  | 'thumbnail.prettySize'
  | 'thumbnail.publicURL'
  | 'thumbnail.rdev'
  | 'thumbnail.relativeDirectory'
  | 'thumbnail.relativePath'
  | 'thumbnail.root'
  | 'thumbnail.size'
  | 'thumbnail.sourceInstanceName'
  | 'thumbnail.uid'
  | 'thumbnail.url'
  | 'username'
  | 'velogId'
  | 'velogUrl';

type VelogUserFilterInput = {
  readonly aboutHtml: InputMaybe<StringQueryOperatorInput>;
  readonly bio: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly displayName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly isCertified: InputMaybe<BooleanQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly posts: InputMaybe<VelogPostFilterListInput>;
  readonly socialProfile: InputMaybe<VelogUserSocialProfileFilterInput>;
  readonly thumbnail: InputMaybe<FileFilterInput>;
  readonly username: InputMaybe<StringQueryOperatorInput>;
  readonly velogId: InputMaybe<StringQueryOperatorInput>;
  readonly velogUrl: InputMaybe<StringQueryOperatorInput>;
};

type VelogUserGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<VelogUserEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<VelogUserGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<VelogUser>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type VelogUserGroupConnection_distinctArgs = {
  field: VelogUserFieldsEnum;
};


type VelogUserGroupConnection_groupArgs = {
  field: VelogUserFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type VelogUserGroupConnection_maxArgs = {
  field: VelogUserFieldsEnum;
};


type VelogUserGroupConnection_minArgs = {
  field: VelogUserFieldsEnum;
};


type VelogUserGroupConnection_sumArgs = {
  field: VelogUserFieldsEnum;
};

type VelogUserSocialProfile = {
  readonly email: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly github: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type VelogUserSocialProfileFilterInput = {
  readonly email: InputMaybe<StringQueryOperatorInput>;
  readonly facebook: InputMaybe<StringQueryOperatorInput>;
  readonly github: InputMaybe<StringQueryOperatorInput>;
  readonly twitter: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type VelogUserSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<VelogUserFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type WebPOptions = {
  readonly quality: InputMaybe<Scalars['Int']>;
};

type MyAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


type MyAllPostsQuery = { readonly velogUser: { readonly posts: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly childMarkdownRemark: { readonly excerpt: string | null } | null }> } | null };


}
