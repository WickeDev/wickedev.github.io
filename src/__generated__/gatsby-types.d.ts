/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly mode: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly context: Maybe<SitePageContext>;
};

type SitePageContext = {
  readonly html: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly subPluginPaths: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly path: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly sourceMap: Maybe<Scalars['Boolean']>;
  readonly autoLabel: Maybe<Scalars['String']>;
  readonly labelFormat: Maybe<Scalars['String']>;
  readonly cssPropOptimization: Maybe<Scalars['Boolean']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly classPrefix: Maybe<Scalars['String']>;
  readonly showLineNumbers: Maybe<Scalars['Boolean']>;
  readonly noInlineHighlight: Maybe<Scalars['Boolean']>;
  readonly languageExtensions: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsLanguageExtensions>>>;
  readonly prompt: Maybe<SitePluginPluginOptionsPrompt>;
  readonly name: Maybe<Scalars['String']>;
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lessBabel: Maybe<Scalars['Boolean']>;
  readonly mediaTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly root: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly trackingId: Maybe<Scalars['String']>;
  readonly head: Maybe<Scalars['Boolean']>;
  readonly anonymize: Maybe<Scalars['Boolean']>;
  readonly respectDNT: Maybe<Scalars['Boolean']>;
  readonly pageTransitionDelay: Maybe<Scalars['Int']>;
  readonly enableWebVitalsTracking: Maybe<Scalars['Boolean']>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly entryLimit: Maybe<Scalars['Int']>;
  readonly query: Maybe<Scalars['String']>;
  readonly username: Maybe<Scalars['String']>;
  readonly baseUrl: Maybe<Scalars['String']>;
  readonly endpoint: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly classPrefix: Maybe<Scalars['String']>;
  readonly showLineNumbers: Maybe<Scalars['Boolean']>;
  readonly noInlineHighlight: Maybe<Scalars['Boolean']>;
  readonly languageExtensions: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensions>>>;
  readonly prompt: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPrompt>;
};

type SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensions = {
  readonly language: Maybe<Scalars['String']>;
  readonly extend: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsPluginOptionsPrompt = {
  readonly user: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
  readonly global: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsLanguageExtensions = {
  readonly language: Maybe<Scalars['String']>;
  readonly extend: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPrompt = {
  readonly user: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
  readonly global: Maybe<Scalars['Boolean']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type VelogUser = Node & {
  readonly velogId: Scalars['String'];
  readonly velogUrl: Scalars['String'];
  readonly username: Scalars['String'];
  readonly displayName: Scalars['String'];
  readonly bio: Maybe<Scalars['String']>;
  readonly aboutHtml: Maybe<Scalars['String']>;
  readonly isCertified: Scalars['Boolean'];
  readonly thumbnail: Maybe<File>;
  readonly socialProfile: VelogUserSocialProfile;
  readonly posts: ReadonlyArray<VelogPost>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type VelogUserSocialProfile = {
  readonly url: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly github: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
};

type VelogTag = Node & {
  readonly velogId: Scalars['String'];
  readonly velogUrl: Scalars['String'];
  readonly owner: VelogUser;
  readonly name: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly thumbnail: Maybe<File>;
  readonly posts: ReadonlyArray<VelogPost>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type VelogPost = Node & {
  readonly velogId: Scalars['String'];
  readonly velogUrl: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly title: Scalars['String'];
  readonly rawContent: Scalars['String'];
  readonly shortDescription: Scalars['String'];
  readonly thumbnail: Maybe<Scalars['String']>;
  readonly publishedAt: Scalars['Date'];
  readonly updatedAt: Scalars['Date'];
  readonly author: VelogUser;
  readonly tags: ReadonlyArray<VelogTag>;
  readonly series: Maybe<VelogPostSeries>;
  readonly isMarkdown: Maybe<Scalars['Boolean']>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type VelogPost_publishedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type VelogPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type VelogPostSeries = {
  readonly index: Scalars['Int'];
  readonly node: VelogSeries;
  readonly velogId: Maybe<Scalars['String']>;
  readonly seriesPosts: Maybe<ReadonlyArray<Maybe<VelogPostSeriesSeriesPosts>>>;
};

type VelogPostSeriesSeriesPosts = {
  readonly index: Maybe<Scalars['Int']>;
  readonly item: Maybe<VelogPostSeriesSeriesPostsItem>;
};

type VelogPostSeriesSeriesPostsItem = {
  readonly velogId: Maybe<Scalars['String']>;
};

type VelogSeries = Node & {
  readonly velogId: Scalars['String'];
  readonly velogUrl: Scalars['String'];
  readonly name: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly slug: Scalars['String'];
  readonly thumbnail: Maybe<File>;
  readonly owner: VelogUser;
  readonly posts: ReadonlyArray<VelogPost>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};


type MdxFrontmatter = {
  readonly title: Scalars['String'];
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type Mdx = Node & {
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly velogUser: Maybe<VelogUser>;
  readonly allVelogUser: VelogUserConnection;
  readonly velogTag: Maybe<VelogTag>;
  readonly allVelogTag: VelogTagConnection;
  readonly velogPost: Maybe<VelogPost>;
  readonly allVelogPost: VelogPostConnection;
  readonly velogSeries: Maybe<VelogSeries>;
  readonly allVelogSeries: VelogSeriesConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  mode: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  context: Maybe<SitePageContextFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  subPluginPaths: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_velogUserArgs = {
  velogId: Maybe<StringQueryOperatorInput>;
  velogUrl: Maybe<StringQueryOperatorInput>;
  username: Maybe<StringQueryOperatorInput>;
  displayName: Maybe<StringQueryOperatorInput>;
  bio: Maybe<StringQueryOperatorInput>;
  aboutHtml: Maybe<StringQueryOperatorInput>;
  isCertified: Maybe<BooleanQueryOperatorInput>;
  thumbnail: Maybe<FileFilterInput>;
  socialProfile: Maybe<VelogUserSocialProfileFilterInput>;
  posts: Maybe<VelogPostFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allVelogUserArgs = {
  filter: Maybe<VelogUserFilterInput>;
  sort: Maybe<VelogUserSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_velogTagArgs = {
  velogId: Maybe<StringQueryOperatorInput>;
  velogUrl: Maybe<StringQueryOperatorInput>;
  owner: Maybe<VelogUserFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  thumbnail: Maybe<FileFilterInput>;
  posts: Maybe<VelogPostFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allVelogTagArgs = {
  filter: Maybe<VelogTagFilterInput>;
  sort: Maybe<VelogTagSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_velogPostArgs = {
  velogId: Maybe<StringQueryOperatorInput>;
  velogUrl: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  rawContent: Maybe<StringQueryOperatorInput>;
  shortDescription: Maybe<StringQueryOperatorInput>;
  thumbnail: Maybe<StringQueryOperatorInput>;
  publishedAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  author: Maybe<VelogUserFilterInput>;
  tags: Maybe<VelogTagFilterListInput>;
  series: Maybe<VelogPostSeriesFilterInput>;
  isMarkdown: Maybe<BooleanQueryOperatorInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allVelogPostArgs = {
  filter: Maybe<VelogPostFilterInput>;
  sort: Maybe<VelogPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_velogSeriesArgs = {
  velogId: Maybe<StringQueryOperatorInput>;
  velogUrl: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  thumbnail: Maybe<FileFilterInput>;
  owner: Maybe<VelogUserFilterInput>;
  posts: Maybe<VelogPostFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allVelogSeriesArgs = {
  filter: Maybe<VelogSeriesFilterInput>;
  sort: Maybe<VelogSeriesSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
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


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
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


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
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


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
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


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
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


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
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


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
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


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
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


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly subPluginPaths: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMap: Maybe<BooleanQueryOperatorInput>;
  readonly autoLabel: Maybe<StringQueryOperatorInput>;
  readonly labelFormat: Maybe<StringQueryOperatorInput>;
  readonly cssPropOptimization: Maybe<BooleanQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly classPrefix: Maybe<StringQueryOperatorInput>;
  readonly showLineNumbers: Maybe<BooleanQueryOperatorInput>;
  readonly noInlineHighlight: Maybe<BooleanQueryOperatorInput>;
  readonly languageExtensions: Maybe<SitePluginPluginOptionsLanguageExtensionsFilterListInput>;
  readonly prompt: Maybe<SitePluginPluginOptionsPromptFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly lessBabel: Maybe<BooleanQueryOperatorInput>;
  readonly mediaTypes: Maybe<StringQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly trackingId: Maybe<StringQueryOperatorInput>;
  readonly head: Maybe<BooleanQueryOperatorInput>;
  readonly anonymize: Maybe<BooleanQueryOperatorInput>;
  readonly respectDNT: Maybe<BooleanQueryOperatorInput>;
  readonly pageTransitionDelay: Maybe<IntQueryOperatorInput>;
  readonly enableWebVitalsTracking: Maybe<BooleanQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly entryLimit: Maybe<IntQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly username: Maybe<StringQueryOperatorInput>;
  readonly baseUrl: Maybe<StringQueryOperatorInput>;
  readonly endpoint: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
};

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly classPrefix: Maybe<StringQueryOperatorInput>;
  readonly showLineNumbers: Maybe<BooleanQueryOperatorInput>;
  readonly noInlineHighlight: Maybe<BooleanQueryOperatorInput>;
  readonly languageExtensions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensionsFilterListInput>;
  readonly prompt: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPromptFilterInput>;
};

type SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensionsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensionsFilterInput>;
};

type SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensionsFilterInput = {
  readonly language: Maybe<StringQueryOperatorInput>;
  readonly extend: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsPluginOptionsPromptFilterInput = {
  readonly user: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly global: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsLanguageExtensionsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsLanguageExtensionsFilterInput>;
};

type SitePluginPluginOptionsLanguageExtensionsFilterInput = {
  readonly language: Maybe<StringQueryOperatorInput>;
  readonly extend: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPromptFilterInput = {
  readonly user: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly global: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageContextFilterInput = {
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
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


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.subPluginPaths'
  | 'pluginCreator.pluginOptions.plugins'
  | 'pluginCreator.pluginOptions.plugins.resolve'
  | 'pluginCreator.pluginOptions.plugins.id'
  | 'pluginCreator.pluginOptions.plugins.name'
  | 'pluginCreator.pluginOptions.plugins.version'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.sourceMap'
  | 'pluginCreator.pluginOptions.autoLabel'
  | 'pluginCreator.pluginOptions.labelFormat'
  | 'pluginCreator.pluginOptions.cssPropOptimization'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.classPrefix'
  | 'pluginCreator.pluginOptions.showLineNumbers'
  | 'pluginCreator.pluginOptions.noInlineHighlight'
  | 'pluginCreator.pluginOptions.languageExtensions'
  | 'pluginCreator.pluginOptions.languageExtensions.language'
  | 'pluginCreator.pluginOptions.languageExtensions.extend'
  | 'pluginCreator.pluginOptions.prompt.user'
  | 'pluginCreator.pluginOptions.prompt.host'
  | 'pluginCreator.pluginOptions.prompt.global'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.extensions'
  | 'pluginCreator.pluginOptions.lessBabel'
  | 'pluginCreator.pluginOptions.mediaTypes'
  | 'pluginCreator.pluginOptions.root'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.trackingId'
  | 'pluginCreator.pluginOptions.head'
  | 'pluginCreator.pluginOptions.anonymize'
  | 'pluginCreator.pluginOptions.respectDNT'
  | 'pluginCreator.pluginOptions.pageTransitionDelay'
  | 'pluginCreator.pluginOptions.enableWebVitalsTracking'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.entryLimit'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.pluginOptions.username'
  | 'pluginCreator.pluginOptions.baseUrl'
  | 'pluginCreator.pluginOptions.endpoint'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreatorId'
  | 'mode'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'context.html'
  | 'context.title';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
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


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly mode: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
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


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'subPluginPaths'
  | 'pluginOptions.plugins'
  | 'pluginOptions.plugins.resolve'
  | 'pluginOptions.plugins.id'
  | 'pluginOptions.plugins.name'
  | 'pluginOptions.plugins.version'
  | 'pluginOptions.plugins.pluginOptions.classPrefix'
  | 'pluginOptions.plugins.pluginOptions.showLineNumbers'
  | 'pluginOptions.plugins.pluginOptions.noInlineHighlight'
  | 'pluginOptions.plugins.pluginOptions.languageExtensions'
  | 'pluginOptions.path'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.sourceMap'
  | 'pluginOptions.autoLabel'
  | 'pluginOptions.labelFormat'
  | 'pluginOptions.cssPropOptimization'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.classPrefix'
  | 'pluginOptions.showLineNumbers'
  | 'pluginOptions.noInlineHighlight'
  | 'pluginOptions.languageExtensions'
  | 'pluginOptions.languageExtensions.language'
  | 'pluginOptions.languageExtensions.extend'
  | 'pluginOptions.prompt.user'
  | 'pluginOptions.prompt.host'
  | 'pluginOptions.prompt.global'
  | 'pluginOptions.name'
  | 'pluginOptions.extensions'
  | 'pluginOptions.lessBabel'
  | 'pluginOptions.mediaTypes'
  | 'pluginOptions.root'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.trackingId'
  | 'pluginOptions.head'
  | 'pluginOptions.anonymize'
  | 'pluginOptions.respectDNT'
  | 'pluginOptions.pageTransitionDelay'
  | 'pluginOptions.enableWebVitalsTracking'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.entryLimit'
  | 'pluginOptions.query'
  | 'pluginOptions.username'
  | 'pluginOptions.baseUrl'
  | 'pluginOptions.endpoint'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.keywords'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
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


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
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


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
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


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type VelogUserSocialProfileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly github: Maybe<StringQueryOperatorInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
};

type VelogPostFilterListInput = {
  readonly elemMatch: Maybe<VelogPostFilterInput>;
};

type VelogPostFilterInput = {
  readonly velogId: Maybe<StringQueryOperatorInput>;
  readonly velogUrl: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly rawContent: Maybe<StringQueryOperatorInput>;
  readonly shortDescription: Maybe<StringQueryOperatorInput>;
  readonly thumbnail: Maybe<StringQueryOperatorInput>;
  readonly publishedAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly author: Maybe<VelogUserFilterInput>;
  readonly tags: Maybe<VelogTagFilterListInput>;
  readonly series: Maybe<VelogPostSeriesFilterInput>;
  readonly isMarkdown: Maybe<BooleanQueryOperatorInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type VelogUserFilterInput = {
  readonly velogId: Maybe<StringQueryOperatorInput>;
  readonly velogUrl: Maybe<StringQueryOperatorInput>;
  readonly username: Maybe<StringQueryOperatorInput>;
  readonly displayName: Maybe<StringQueryOperatorInput>;
  readonly bio: Maybe<StringQueryOperatorInput>;
  readonly aboutHtml: Maybe<StringQueryOperatorInput>;
  readonly isCertified: Maybe<BooleanQueryOperatorInput>;
  readonly thumbnail: Maybe<FileFilterInput>;
  readonly socialProfile: Maybe<VelogUserSocialProfileFilterInput>;
  readonly posts: Maybe<VelogPostFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type VelogTagFilterListInput = {
  readonly elemMatch: Maybe<VelogTagFilterInput>;
};

type VelogTagFilterInput = {
  readonly velogId: Maybe<StringQueryOperatorInput>;
  readonly velogUrl: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<VelogUserFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly thumbnail: Maybe<FileFilterInput>;
  readonly posts: Maybe<VelogPostFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type VelogPostSeriesFilterInput = {
  readonly index: Maybe<IntQueryOperatorInput>;
  readonly node: Maybe<VelogSeriesFilterInput>;
  readonly velogId: Maybe<StringQueryOperatorInput>;
  readonly seriesPosts: Maybe<VelogPostSeriesSeriesPostsFilterListInput>;
};

type VelogSeriesFilterInput = {
  readonly velogId: Maybe<StringQueryOperatorInput>;
  readonly velogUrl: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly thumbnail: Maybe<FileFilterInput>;
  readonly owner: Maybe<VelogUserFilterInput>;
  readonly posts: Maybe<VelogPostFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type VelogPostSeriesSeriesPostsFilterListInput = {
  readonly elemMatch: Maybe<VelogPostSeriesSeriesPostsFilterInput>;
};

type VelogPostSeriesSeriesPostsFilterInput = {
  readonly index: Maybe<IntQueryOperatorInput>;
  readonly item: Maybe<VelogPostSeriesSeriesPostsItemFilterInput>;
};

type VelogPostSeriesSeriesPostsItemFilterInput = {
  readonly velogId: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MdxFilterListInput = {
  readonly elemMatch: Maybe<MdxFilterInput>;
};

type MdxFilterInput = {
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type VelogUserConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<VelogUserEdge>;
  readonly nodes: ReadonlyArray<VelogUser>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<VelogUserGroupConnection>;
};


type VelogUserConnection_distinctArgs = {
  field: VelogUserFieldsEnum;
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


type VelogUserConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: VelogUserFieldsEnum;
};

type VelogUserEdge = {
  readonly next: Maybe<VelogUser>;
  readonly node: VelogUser;
  readonly previous: Maybe<VelogUser>;
};

type VelogUserFieldsEnum =
  | 'velogId'
  | 'velogUrl'
  | 'username'
  | 'displayName'
  | 'bio'
  | 'aboutHtml'
  | 'isCertified'
  | 'thumbnail.sourceInstanceName'
  | 'thumbnail.absolutePath'
  | 'thumbnail.relativePath'
  | 'thumbnail.extension'
  | 'thumbnail.size'
  | 'thumbnail.prettySize'
  | 'thumbnail.modifiedTime'
  | 'thumbnail.accessTime'
  | 'thumbnail.changeTime'
  | 'thumbnail.birthTime'
  | 'thumbnail.root'
  | 'thumbnail.dir'
  | 'thumbnail.base'
  | 'thumbnail.ext'
  | 'thumbnail.name'
  | 'thumbnail.relativeDirectory'
  | 'thumbnail.dev'
  | 'thumbnail.mode'
  | 'thumbnail.nlink'
  | 'thumbnail.uid'
  | 'thumbnail.gid'
  | 'thumbnail.rdev'
  | 'thumbnail.ino'
  | 'thumbnail.atimeMs'
  | 'thumbnail.mtimeMs'
  | 'thumbnail.ctimeMs'
  | 'thumbnail.atime'
  | 'thumbnail.mtime'
  | 'thumbnail.ctime'
  | 'thumbnail.birthtime'
  | 'thumbnail.birthtimeMs'
  | 'thumbnail.blksize'
  | 'thumbnail.blocks'
  | 'thumbnail.url'
  | 'thumbnail.publicURL'
  | 'thumbnail.childrenImageSharp'
  | 'thumbnail.childrenImageSharp.fixed.base64'
  | 'thumbnail.childrenImageSharp.fixed.tracedSVG'
  | 'thumbnail.childrenImageSharp.fixed.aspectRatio'
  | 'thumbnail.childrenImageSharp.fixed.width'
  | 'thumbnail.childrenImageSharp.fixed.height'
  | 'thumbnail.childrenImageSharp.fixed.src'
  | 'thumbnail.childrenImageSharp.fixed.srcSet'
  | 'thumbnail.childrenImageSharp.fixed.srcWebp'
  | 'thumbnail.childrenImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fixed.originalName'
  | 'thumbnail.childrenImageSharp.fluid.base64'
  | 'thumbnail.childrenImageSharp.fluid.tracedSVG'
  | 'thumbnail.childrenImageSharp.fluid.aspectRatio'
  | 'thumbnail.childrenImageSharp.fluid.src'
  | 'thumbnail.childrenImageSharp.fluid.srcSet'
  | 'thumbnail.childrenImageSharp.fluid.srcWebp'
  | 'thumbnail.childrenImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fluid.sizes'
  | 'thumbnail.childrenImageSharp.fluid.originalImg'
  | 'thumbnail.childrenImageSharp.fluid.originalName'
  | 'thumbnail.childrenImageSharp.fluid.presentationWidth'
  | 'thumbnail.childrenImageSharp.fluid.presentationHeight'
  | 'thumbnail.childrenImageSharp.gatsbyImageData'
  | 'thumbnail.childrenImageSharp.original.width'
  | 'thumbnail.childrenImageSharp.original.height'
  | 'thumbnail.childrenImageSharp.original.src'
  | 'thumbnail.childrenImageSharp.resize.src'
  | 'thumbnail.childrenImageSharp.resize.tracedSVG'
  | 'thumbnail.childrenImageSharp.resize.width'
  | 'thumbnail.childrenImageSharp.resize.height'
  | 'thumbnail.childrenImageSharp.resize.aspectRatio'
  | 'thumbnail.childrenImageSharp.resize.originalName'
  | 'thumbnail.childrenImageSharp.id'
  | 'thumbnail.childrenImageSharp.parent.id'
  | 'thumbnail.childrenImageSharp.parent.children'
  | 'thumbnail.childrenImageSharp.children'
  | 'thumbnail.childrenImageSharp.children.id'
  | 'thumbnail.childrenImageSharp.children.children'
  | 'thumbnail.childrenImageSharp.internal.content'
  | 'thumbnail.childrenImageSharp.internal.contentDigest'
  | 'thumbnail.childrenImageSharp.internal.description'
  | 'thumbnail.childrenImageSharp.internal.fieldOwners'
  | 'thumbnail.childrenImageSharp.internal.ignoreType'
  | 'thumbnail.childrenImageSharp.internal.mediaType'
  | 'thumbnail.childrenImageSharp.internal.owner'
  | 'thumbnail.childrenImageSharp.internal.type'
  | 'thumbnail.childImageSharp.fixed.base64'
  | 'thumbnail.childImageSharp.fixed.tracedSVG'
  | 'thumbnail.childImageSharp.fixed.aspectRatio'
  | 'thumbnail.childImageSharp.fixed.width'
  | 'thumbnail.childImageSharp.fixed.height'
  | 'thumbnail.childImageSharp.fixed.src'
  | 'thumbnail.childImageSharp.fixed.srcSet'
  | 'thumbnail.childImageSharp.fixed.srcWebp'
  | 'thumbnail.childImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childImageSharp.fixed.originalName'
  | 'thumbnail.childImageSharp.fluid.base64'
  | 'thumbnail.childImageSharp.fluid.tracedSVG'
  | 'thumbnail.childImageSharp.fluid.aspectRatio'
  | 'thumbnail.childImageSharp.fluid.src'
  | 'thumbnail.childImageSharp.fluid.srcSet'
  | 'thumbnail.childImageSharp.fluid.srcWebp'
  | 'thumbnail.childImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childImageSharp.fluid.sizes'
  | 'thumbnail.childImageSharp.fluid.originalImg'
  | 'thumbnail.childImageSharp.fluid.originalName'
  | 'thumbnail.childImageSharp.fluid.presentationWidth'
  | 'thumbnail.childImageSharp.fluid.presentationHeight'
  | 'thumbnail.childImageSharp.gatsbyImageData'
  | 'thumbnail.childImageSharp.original.width'
  | 'thumbnail.childImageSharp.original.height'
  | 'thumbnail.childImageSharp.original.src'
  | 'thumbnail.childImageSharp.resize.src'
  | 'thumbnail.childImageSharp.resize.tracedSVG'
  | 'thumbnail.childImageSharp.resize.width'
  | 'thumbnail.childImageSharp.resize.height'
  | 'thumbnail.childImageSharp.resize.aspectRatio'
  | 'thumbnail.childImageSharp.resize.originalName'
  | 'thumbnail.childImageSharp.id'
  | 'thumbnail.childImageSharp.parent.id'
  | 'thumbnail.childImageSharp.parent.children'
  | 'thumbnail.childImageSharp.children'
  | 'thumbnail.childImageSharp.children.id'
  | 'thumbnail.childImageSharp.children.children'
  | 'thumbnail.childImageSharp.internal.content'
  | 'thumbnail.childImageSharp.internal.contentDigest'
  | 'thumbnail.childImageSharp.internal.description'
  | 'thumbnail.childImageSharp.internal.fieldOwners'
  | 'thumbnail.childImageSharp.internal.ignoreType'
  | 'thumbnail.childImageSharp.internal.mediaType'
  | 'thumbnail.childImageSharp.internal.owner'
  | 'thumbnail.childImageSharp.internal.type'
  | 'thumbnail.id'
  | 'thumbnail.parent.id'
  | 'thumbnail.parent.parent.id'
  | 'thumbnail.parent.parent.children'
  | 'thumbnail.parent.children'
  | 'thumbnail.parent.children.id'
  | 'thumbnail.parent.children.children'
  | 'thumbnail.parent.internal.content'
  | 'thumbnail.parent.internal.contentDigest'
  | 'thumbnail.parent.internal.description'
  | 'thumbnail.parent.internal.fieldOwners'
  | 'thumbnail.parent.internal.ignoreType'
  | 'thumbnail.parent.internal.mediaType'
  | 'thumbnail.parent.internal.owner'
  | 'thumbnail.parent.internal.type'
  | 'thumbnail.children'
  | 'thumbnail.children.id'
  | 'thumbnail.children.parent.id'
  | 'thumbnail.children.parent.children'
  | 'thumbnail.children.children'
  | 'thumbnail.children.children.id'
  | 'thumbnail.children.children.children'
  | 'thumbnail.children.internal.content'
  | 'thumbnail.children.internal.contentDigest'
  | 'thumbnail.children.internal.description'
  | 'thumbnail.children.internal.fieldOwners'
  | 'thumbnail.children.internal.ignoreType'
  | 'thumbnail.children.internal.mediaType'
  | 'thumbnail.children.internal.owner'
  | 'thumbnail.children.internal.type'
  | 'thumbnail.internal.content'
  | 'thumbnail.internal.contentDigest'
  | 'thumbnail.internal.description'
  | 'thumbnail.internal.fieldOwners'
  | 'thumbnail.internal.ignoreType'
  | 'thumbnail.internal.mediaType'
  | 'thumbnail.internal.owner'
  | 'thumbnail.internal.type'
  | 'socialProfile.url'
  | 'socialProfile.email'
  | 'socialProfile.github'
  | 'socialProfile.facebook'
  | 'socialProfile.twitter'
  | 'posts'
  | 'posts.velogId'
  | 'posts.velogUrl'
  | 'posts.slug'
  | 'posts.title'
  | 'posts.rawContent'
  | 'posts.shortDescription'
  | 'posts.thumbnail'
  | 'posts.publishedAt'
  | 'posts.updatedAt'
  | 'posts.author.velogId'
  | 'posts.author.velogUrl'
  | 'posts.author.username'
  | 'posts.author.displayName'
  | 'posts.author.bio'
  | 'posts.author.aboutHtml'
  | 'posts.author.isCertified'
  | 'posts.author.thumbnail.sourceInstanceName'
  | 'posts.author.thumbnail.absolutePath'
  | 'posts.author.thumbnail.relativePath'
  | 'posts.author.thumbnail.extension'
  | 'posts.author.thumbnail.size'
  | 'posts.author.thumbnail.prettySize'
  | 'posts.author.thumbnail.modifiedTime'
  | 'posts.author.thumbnail.accessTime'
  | 'posts.author.thumbnail.changeTime'
  | 'posts.author.thumbnail.birthTime'
  | 'posts.author.thumbnail.root'
  | 'posts.author.thumbnail.dir'
  | 'posts.author.thumbnail.base'
  | 'posts.author.thumbnail.ext'
  | 'posts.author.thumbnail.name'
  | 'posts.author.thumbnail.relativeDirectory'
  | 'posts.author.thumbnail.dev'
  | 'posts.author.thumbnail.mode'
  | 'posts.author.thumbnail.nlink'
  | 'posts.author.thumbnail.uid'
  | 'posts.author.thumbnail.gid'
  | 'posts.author.thumbnail.rdev'
  | 'posts.author.thumbnail.ino'
  | 'posts.author.thumbnail.atimeMs'
  | 'posts.author.thumbnail.mtimeMs'
  | 'posts.author.thumbnail.ctimeMs'
  | 'posts.author.thumbnail.atime'
  | 'posts.author.thumbnail.mtime'
  | 'posts.author.thumbnail.ctime'
  | 'posts.author.thumbnail.birthtime'
  | 'posts.author.thumbnail.birthtimeMs'
  | 'posts.author.thumbnail.blksize'
  | 'posts.author.thumbnail.blocks'
  | 'posts.author.thumbnail.url'
  | 'posts.author.thumbnail.publicURL'
  | 'posts.author.thumbnail.childrenImageSharp'
  | 'posts.author.thumbnail.id'
  | 'posts.author.thumbnail.children'
  | 'posts.author.socialProfile.url'
  | 'posts.author.socialProfile.email'
  | 'posts.author.socialProfile.github'
  | 'posts.author.socialProfile.facebook'
  | 'posts.author.socialProfile.twitter'
  | 'posts.author.posts'
  | 'posts.author.posts.velogId'
  | 'posts.author.posts.velogUrl'
  | 'posts.author.posts.slug'
  | 'posts.author.posts.title'
  | 'posts.author.posts.rawContent'
  | 'posts.author.posts.shortDescription'
  | 'posts.author.posts.thumbnail'
  | 'posts.author.posts.publishedAt'
  | 'posts.author.posts.updatedAt'
  | 'posts.author.posts.tags'
  | 'posts.author.posts.isMarkdown'
  | 'posts.author.posts.childrenMarkdownRemark'
  | 'posts.author.posts.childrenMdx'
  | 'posts.author.posts.id'
  | 'posts.author.posts.children'
  | 'posts.author.id'
  | 'posts.author.parent.id'
  | 'posts.author.parent.children'
  | 'posts.author.children'
  | 'posts.author.children.id'
  | 'posts.author.children.children'
  | 'posts.author.internal.content'
  | 'posts.author.internal.contentDigest'
  | 'posts.author.internal.description'
  | 'posts.author.internal.fieldOwners'
  | 'posts.author.internal.ignoreType'
  | 'posts.author.internal.mediaType'
  | 'posts.author.internal.owner'
  | 'posts.author.internal.type'
  | 'posts.tags'
  | 'posts.tags.velogId'
  | 'posts.tags.velogUrl'
  | 'posts.tags.owner.velogId'
  | 'posts.tags.owner.velogUrl'
  | 'posts.tags.owner.username'
  | 'posts.tags.owner.displayName'
  | 'posts.tags.owner.bio'
  | 'posts.tags.owner.aboutHtml'
  | 'posts.tags.owner.isCertified'
  | 'posts.tags.owner.posts'
  | 'posts.tags.owner.id'
  | 'posts.tags.owner.children'
  | 'posts.tags.name'
  | 'posts.tags.description'
  | 'posts.tags.thumbnail.sourceInstanceName'
  | 'posts.tags.thumbnail.absolutePath'
  | 'posts.tags.thumbnail.relativePath'
  | 'posts.tags.thumbnail.extension'
  | 'posts.tags.thumbnail.size'
  | 'posts.tags.thumbnail.prettySize'
  | 'posts.tags.thumbnail.modifiedTime'
  | 'posts.tags.thumbnail.accessTime'
  | 'posts.tags.thumbnail.changeTime'
  | 'posts.tags.thumbnail.birthTime'
  | 'posts.tags.thumbnail.root'
  | 'posts.tags.thumbnail.dir'
  | 'posts.tags.thumbnail.base'
  | 'posts.tags.thumbnail.ext'
  | 'posts.tags.thumbnail.name'
  | 'posts.tags.thumbnail.relativeDirectory'
  | 'posts.tags.thumbnail.dev'
  | 'posts.tags.thumbnail.mode'
  | 'posts.tags.thumbnail.nlink'
  | 'posts.tags.thumbnail.uid'
  | 'posts.tags.thumbnail.gid'
  | 'posts.tags.thumbnail.rdev'
  | 'posts.tags.thumbnail.ino'
  | 'posts.tags.thumbnail.atimeMs'
  | 'posts.tags.thumbnail.mtimeMs'
  | 'posts.tags.thumbnail.ctimeMs'
  | 'posts.tags.thumbnail.atime'
  | 'posts.tags.thumbnail.mtime'
  | 'posts.tags.thumbnail.ctime'
  | 'posts.tags.thumbnail.birthtime'
  | 'posts.tags.thumbnail.birthtimeMs'
  | 'posts.tags.thumbnail.blksize'
  | 'posts.tags.thumbnail.blocks'
  | 'posts.tags.thumbnail.url'
  | 'posts.tags.thumbnail.publicURL'
  | 'posts.tags.thumbnail.childrenImageSharp'
  | 'posts.tags.thumbnail.id'
  | 'posts.tags.thumbnail.children'
  | 'posts.tags.posts'
  | 'posts.tags.posts.velogId'
  | 'posts.tags.posts.velogUrl'
  | 'posts.tags.posts.slug'
  | 'posts.tags.posts.title'
  | 'posts.tags.posts.rawContent'
  | 'posts.tags.posts.shortDescription'
  | 'posts.tags.posts.thumbnail'
  | 'posts.tags.posts.publishedAt'
  | 'posts.tags.posts.updatedAt'
  | 'posts.tags.posts.tags'
  | 'posts.tags.posts.isMarkdown'
  | 'posts.tags.posts.childrenMarkdownRemark'
  | 'posts.tags.posts.childrenMdx'
  | 'posts.tags.posts.id'
  | 'posts.tags.posts.children'
  | 'posts.tags.id'
  | 'posts.tags.parent.id'
  | 'posts.tags.parent.children'
  | 'posts.tags.children'
  | 'posts.tags.children.id'
  | 'posts.tags.children.children'
  | 'posts.tags.internal.content'
  | 'posts.tags.internal.contentDigest'
  | 'posts.tags.internal.description'
  | 'posts.tags.internal.fieldOwners'
  | 'posts.tags.internal.ignoreType'
  | 'posts.tags.internal.mediaType'
  | 'posts.tags.internal.owner'
  | 'posts.tags.internal.type'
  | 'posts.series.index'
  | 'posts.series.node.velogId'
  | 'posts.series.node.velogUrl'
  | 'posts.series.node.name'
  | 'posts.series.node.description'
  | 'posts.series.node.slug'
  | 'posts.series.node.posts'
  | 'posts.series.node.id'
  | 'posts.series.node.children'
  | 'posts.series.velogId'
  | 'posts.series.seriesPosts'
  | 'posts.series.seriesPosts.index'
  | 'posts.isMarkdown'
  | 'posts.childrenMarkdownRemark'
  | 'posts.childrenMarkdownRemark.id'
  | 'posts.childrenMarkdownRemark.frontmatter.title'
  | 'posts.childrenMarkdownRemark.excerpt'
  | 'posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'posts.childrenMarkdownRemark.html'
  | 'posts.childrenMarkdownRemark.htmlAst'
  | 'posts.childrenMarkdownRemark.excerptAst'
  | 'posts.childrenMarkdownRemark.headings'
  | 'posts.childrenMarkdownRemark.headings.id'
  | 'posts.childrenMarkdownRemark.headings.value'
  | 'posts.childrenMarkdownRemark.headings.depth'
  | 'posts.childrenMarkdownRemark.timeToRead'
  | 'posts.childrenMarkdownRemark.tableOfContents'
  | 'posts.childrenMarkdownRemark.wordCount.paragraphs'
  | 'posts.childrenMarkdownRemark.wordCount.sentences'
  | 'posts.childrenMarkdownRemark.wordCount.words'
  | 'posts.childrenMarkdownRemark.parent.id'
  | 'posts.childrenMarkdownRemark.parent.children'
  | 'posts.childrenMarkdownRemark.children'
  | 'posts.childrenMarkdownRemark.children.id'
  | 'posts.childrenMarkdownRemark.children.children'
  | 'posts.childrenMarkdownRemark.internal.content'
  | 'posts.childrenMarkdownRemark.internal.contentDigest'
  | 'posts.childrenMarkdownRemark.internal.description'
  | 'posts.childrenMarkdownRemark.internal.fieldOwners'
  | 'posts.childrenMarkdownRemark.internal.ignoreType'
  | 'posts.childrenMarkdownRemark.internal.mediaType'
  | 'posts.childrenMarkdownRemark.internal.owner'
  | 'posts.childrenMarkdownRemark.internal.type'
  | 'posts.childMarkdownRemark.id'
  | 'posts.childMarkdownRemark.frontmatter.title'
  | 'posts.childMarkdownRemark.excerpt'
  | 'posts.childMarkdownRemark.rawMarkdownBody'
  | 'posts.childMarkdownRemark.html'
  | 'posts.childMarkdownRemark.htmlAst'
  | 'posts.childMarkdownRemark.excerptAst'
  | 'posts.childMarkdownRemark.headings'
  | 'posts.childMarkdownRemark.headings.id'
  | 'posts.childMarkdownRemark.headings.value'
  | 'posts.childMarkdownRemark.headings.depth'
  | 'posts.childMarkdownRemark.timeToRead'
  | 'posts.childMarkdownRemark.tableOfContents'
  | 'posts.childMarkdownRemark.wordCount.paragraphs'
  | 'posts.childMarkdownRemark.wordCount.sentences'
  | 'posts.childMarkdownRemark.wordCount.words'
  | 'posts.childMarkdownRemark.parent.id'
  | 'posts.childMarkdownRemark.parent.children'
  | 'posts.childMarkdownRemark.children'
  | 'posts.childMarkdownRemark.children.id'
  | 'posts.childMarkdownRemark.children.children'
  | 'posts.childMarkdownRemark.internal.content'
  | 'posts.childMarkdownRemark.internal.contentDigest'
  | 'posts.childMarkdownRemark.internal.description'
  | 'posts.childMarkdownRemark.internal.fieldOwners'
  | 'posts.childMarkdownRemark.internal.ignoreType'
  | 'posts.childMarkdownRemark.internal.mediaType'
  | 'posts.childMarkdownRemark.internal.owner'
  | 'posts.childMarkdownRemark.internal.type'
  | 'posts.childrenMdx'
  | 'posts.childrenMdx.rawBody'
  | 'posts.childrenMdx.fileAbsolutePath'
  | 'posts.childrenMdx.frontmatter.title'
  | 'posts.childrenMdx.slug'
  | 'posts.childrenMdx.body'
  | 'posts.childrenMdx.excerpt'
  | 'posts.childrenMdx.headings'
  | 'posts.childrenMdx.headings.value'
  | 'posts.childrenMdx.headings.depth'
  | 'posts.childrenMdx.html'
  | 'posts.childrenMdx.mdxAST'
  | 'posts.childrenMdx.tableOfContents'
  | 'posts.childrenMdx.timeToRead'
  | 'posts.childrenMdx.wordCount.paragraphs'
  | 'posts.childrenMdx.wordCount.sentences'
  | 'posts.childrenMdx.wordCount.words'
  | 'posts.childrenMdx.id'
  | 'posts.childrenMdx.parent.id'
  | 'posts.childrenMdx.parent.children'
  | 'posts.childrenMdx.children'
  | 'posts.childrenMdx.children.id'
  | 'posts.childrenMdx.children.children'
  | 'posts.childrenMdx.internal.content'
  | 'posts.childrenMdx.internal.contentDigest'
  | 'posts.childrenMdx.internal.description'
  | 'posts.childrenMdx.internal.fieldOwners'
  | 'posts.childrenMdx.internal.ignoreType'
  | 'posts.childrenMdx.internal.mediaType'
  | 'posts.childrenMdx.internal.owner'
  | 'posts.childrenMdx.internal.type'
  | 'posts.childMdx.rawBody'
  | 'posts.childMdx.fileAbsolutePath'
  | 'posts.childMdx.frontmatter.title'
  | 'posts.childMdx.slug'
  | 'posts.childMdx.body'
  | 'posts.childMdx.excerpt'
  | 'posts.childMdx.headings'
  | 'posts.childMdx.headings.value'
  | 'posts.childMdx.headings.depth'
  | 'posts.childMdx.html'
  | 'posts.childMdx.mdxAST'
  | 'posts.childMdx.tableOfContents'
  | 'posts.childMdx.timeToRead'
  | 'posts.childMdx.wordCount.paragraphs'
  | 'posts.childMdx.wordCount.sentences'
  | 'posts.childMdx.wordCount.words'
  | 'posts.childMdx.id'
  | 'posts.childMdx.parent.id'
  | 'posts.childMdx.parent.children'
  | 'posts.childMdx.children'
  | 'posts.childMdx.children.id'
  | 'posts.childMdx.children.children'
  | 'posts.childMdx.internal.content'
  | 'posts.childMdx.internal.contentDigest'
  | 'posts.childMdx.internal.description'
  | 'posts.childMdx.internal.fieldOwners'
  | 'posts.childMdx.internal.ignoreType'
  | 'posts.childMdx.internal.mediaType'
  | 'posts.childMdx.internal.owner'
  | 'posts.childMdx.internal.type'
  | 'posts.id'
  | 'posts.parent.id'
  | 'posts.parent.parent.id'
  | 'posts.parent.parent.children'
  | 'posts.parent.children'
  | 'posts.parent.children.id'
  | 'posts.parent.children.children'
  | 'posts.parent.internal.content'
  | 'posts.parent.internal.contentDigest'
  | 'posts.parent.internal.description'
  | 'posts.parent.internal.fieldOwners'
  | 'posts.parent.internal.ignoreType'
  | 'posts.parent.internal.mediaType'
  | 'posts.parent.internal.owner'
  | 'posts.parent.internal.type'
  | 'posts.children'
  | 'posts.children.id'
  | 'posts.children.parent.id'
  | 'posts.children.parent.children'
  | 'posts.children.children'
  | 'posts.children.children.id'
  | 'posts.children.children.children'
  | 'posts.children.internal.content'
  | 'posts.children.internal.contentDigest'
  | 'posts.children.internal.description'
  | 'posts.children.internal.fieldOwners'
  | 'posts.children.internal.ignoreType'
  | 'posts.children.internal.mediaType'
  | 'posts.children.internal.owner'
  | 'posts.children.internal.type'
  | 'posts.internal.content'
  | 'posts.internal.contentDigest'
  | 'posts.internal.description'
  | 'posts.internal.fieldOwners'
  | 'posts.internal.ignoreType'
  | 'posts.internal.mediaType'
  | 'posts.internal.owner'
  | 'posts.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type VelogUserGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<VelogUserEdge>;
  readonly nodes: ReadonlyArray<VelogUser>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<VelogUserGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type VelogUserGroupConnection_distinctArgs = {
  field: VelogUserFieldsEnum;
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


type VelogUserGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: VelogUserFieldsEnum;
};

type VelogUserSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<VelogUserFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type VelogTagConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<VelogTagEdge>;
  readonly nodes: ReadonlyArray<VelogTag>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<VelogTagGroupConnection>;
};


type VelogTagConnection_distinctArgs = {
  field: VelogTagFieldsEnum;
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


type VelogTagConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: VelogTagFieldsEnum;
};

type VelogTagEdge = {
  readonly next: Maybe<VelogTag>;
  readonly node: VelogTag;
  readonly previous: Maybe<VelogTag>;
};

type VelogTagFieldsEnum =
  | 'velogId'
  | 'velogUrl'
  | 'owner.velogId'
  | 'owner.velogUrl'
  | 'owner.username'
  | 'owner.displayName'
  | 'owner.bio'
  | 'owner.aboutHtml'
  | 'owner.isCertified'
  | 'owner.thumbnail.sourceInstanceName'
  | 'owner.thumbnail.absolutePath'
  | 'owner.thumbnail.relativePath'
  | 'owner.thumbnail.extension'
  | 'owner.thumbnail.size'
  | 'owner.thumbnail.prettySize'
  | 'owner.thumbnail.modifiedTime'
  | 'owner.thumbnail.accessTime'
  | 'owner.thumbnail.changeTime'
  | 'owner.thumbnail.birthTime'
  | 'owner.thumbnail.root'
  | 'owner.thumbnail.dir'
  | 'owner.thumbnail.base'
  | 'owner.thumbnail.ext'
  | 'owner.thumbnail.name'
  | 'owner.thumbnail.relativeDirectory'
  | 'owner.thumbnail.dev'
  | 'owner.thumbnail.mode'
  | 'owner.thumbnail.nlink'
  | 'owner.thumbnail.uid'
  | 'owner.thumbnail.gid'
  | 'owner.thumbnail.rdev'
  | 'owner.thumbnail.ino'
  | 'owner.thumbnail.atimeMs'
  | 'owner.thumbnail.mtimeMs'
  | 'owner.thumbnail.ctimeMs'
  | 'owner.thumbnail.atime'
  | 'owner.thumbnail.mtime'
  | 'owner.thumbnail.ctime'
  | 'owner.thumbnail.birthtime'
  | 'owner.thumbnail.birthtimeMs'
  | 'owner.thumbnail.blksize'
  | 'owner.thumbnail.blocks'
  | 'owner.thumbnail.url'
  | 'owner.thumbnail.publicURL'
  | 'owner.thumbnail.childrenImageSharp'
  | 'owner.thumbnail.childrenImageSharp.gatsbyImageData'
  | 'owner.thumbnail.childrenImageSharp.id'
  | 'owner.thumbnail.childrenImageSharp.children'
  | 'owner.thumbnail.childImageSharp.gatsbyImageData'
  | 'owner.thumbnail.childImageSharp.id'
  | 'owner.thumbnail.childImageSharp.children'
  | 'owner.thumbnail.id'
  | 'owner.thumbnail.parent.id'
  | 'owner.thumbnail.parent.children'
  | 'owner.thumbnail.children'
  | 'owner.thumbnail.children.id'
  | 'owner.thumbnail.children.children'
  | 'owner.thumbnail.internal.content'
  | 'owner.thumbnail.internal.contentDigest'
  | 'owner.thumbnail.internal.description'
  | 'owner.thumbnail.internal.fieldOwners'
  | 'owner.thumbnail.internal.ignoreType'
  | 'owner.thumbnail.internal.mediaType'
  | 'owner.thumbnail.internal.owner'
  | 'owner.thumbnail.internal.type'
  | 'owner.socialProfile.url'
  | 'owner.socialProfile.email'
  | 'owner.socialProfile.github'
  | 'owner.socialProfile.facebook'
  | 'owner.socialProfile.twitter'
  | 'owner.posts'
  | 'owner.posts.velogId'
  | 'owner.posts.velogUrl'
  | 'owner.posts.slug'
  | 'owner.posts.title'
  | 'owner.posts.rawContent'
  | 'owner.posts.shortDescription'
  | 'owner.posts.thumbnail'
  | 'owner.posts.publishedAt'
  | 'owner.posts.updatedAt'
  | 'owner.posts.author.velogId'
  | 'owner.posts.author.velogUrl'
  | 'owner.posts.author.username'
  | 'owner.posts.author.displayName'
  | 'owner.posts.author.bio'
  | 'owner.posts.author.aboutHtml'
  | 'owner.posts.author.isCertified'
  | 'owner.posts.author.posts'
  | 'owner.posts.author.id'
  | 'owner.posts.author.children'
  | 'owner.posts.tags'
  | 'owner.posts.tags.velogId'
  | 'owner.posts.tags.velogUrl'
  | 'owner.posts.tags.name'
  | 'owner.posts.tags.description'
  | 'owner.posts.tags.posts'
  | 'owner.posts.tags.id'
  | 'owner.posts.tags.children'
  | 'owner.posts.series.index'
  | 'owner.posts.series.velogId'
  | 'owner.posts.series.seriesPosts'
  | 'owner.posts.isMarkdown'
  | 'owner.posts.childrenMarkdownRemark'
  | 'owner.posts.childrenMarkdownRemark.id'
  | 'owner.posts.childrenMarkdownRemark.excerpt'
  | 'owner.posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'owner.posts.childrenMarkdownRemark.html'
  | 'owner.posts.childrenMarkdownRemark.htmlAst'
  | 'owner.posts.childrenMarkdownRemark.excerptAst'
  | 'owner.posts.childrenMarkdownRemark.headings'
  | 'owner.posts.childrenMarkdownRemark.timeToRead'
  | 'owner.posts.childrenMarkdownRemark.tableOfContents'
  | 'owner.posts.childrenMarkdownRemark.children'
  | 'owner.posts.childMarkdownRemark.id'
  | 'owner.posts.childMarkdownRemark.excerpt'
  | 'owner.posts.childMarkdownRemark.rawMarkdownBody'
  | 'owner.posts.childMarkdownRemark.html'
  | 'owner.posts.childMarkdownRemark.htmlAst'
  | 'owner.posts.childMarkdownRemark.excerptAst'
  | 'owner.posts.childMarkdownRemark.headings'
  | 'owner.posts.childMarkdownRemark.timeToRead'
  | 'owner.posts.childMarkdownRemark.tableOfContents'
  | 'owner.posts.childMarkdownRemark.children'
  | 'owner.posts.childrenMdx'
  | 'owner.posts.childrenMdx.rawBody'
  | 'owner.posts.childrenMdx.fileAbsolutePath'
  | 'owner.posts.childrenMdx.slug'
  | 'owner.posts.childrenMdx.body'
  | 'owner.posts.childrenMdx.excerpt'
  | 'owner.posts.childrenMdx.headings'
  | 'owner.posts.childrenMdx.html'
  | 'owner.posts.childrenMdx.mdxAST'
  | 'owner.posts.childrenMdx.tableOfContents'
  | 'owner.posts.childrenMdx.timeToRead'
  | 'owner.posts.childrenMdx.id'
  | 'owner.posts.childrenMdx.children'
  | 'owner.posts.childMdx.rawBody'
  | 'owner.posts.childMdx.fileAbsolutePath'
  | 'owner.posts.childMdx.slug'
  | 'owner.posts.childMdx.body'
  | 'owner.posts.childMdx.excerpt'
  | 'owner.posts.childMdx.headings'
  | 'owner.posts.childMdx.html'
  | 'owner.posts.childMdx.mdxAST'
  | 'owner.posts.childMdx.tableOfContents'
  | 'owner.posts.childMdx.timeToRead'
  | 'owner.posts.childMdx.id'
  | 'owner.posts.childMdx.children'
  | 'owner.posts.id'
  | 'owner.posts.parent.id'
  | 'owner.posts.parent.children'
  | 'owner.posts.children'
  | 'owner.posts.children.id'
  | 'owner.posts.children.children'
  | 'owner.posts.internal.content'
  | 'owner.posts.internal.contentDigest'
  | 'owner.posts.internal.description'
  | 'owner.posts.internal.fieldOwners'
  | 'owner.posts.internal.ignoreType'
  | 'owner.posts.internal.mediaType'
  | 'owner.posts.internal.owner'
  | 'owner.posts.internal.type'
  | 'owner.id'
  | 'owner.parent.id'
  | 'owner.parent.parent.id'
  | 'owner.parent.parent.children'
  | 'owner.parent.children'
  | 'owner.parent.children.id'
  | 'owner.parent.children.children'
  | 'owner.parent.internal.content'
  | 'owner.parent.internal.contentDigest'
  | 'owner.parent.internal.description'
  | 'owner.parent.internal.fieldOwners'
  | 'owner.parent.internal.ignoreType'
  | 'owner.parent.internal.mediaType'
  | 'owner.parent.internal.owner'
  | 'owner.parent.internal.type'
  | 'owner.children'
  | 'owner.children.id'
  | 'owner.children.parent.id'
  | 'owner.children.parent.children'
  | 'owner.children.children'
  | 'owner.children.children.id'
  | 'owner.children.children.children'
  | 'owner.children.internal.content'
  | 'owner.children.internal.contentDigest'
  | 'owner.children.internal.description'
  | 'owner.children.internal.fieldOwners'
  | 'owner.children.internal.ignoreType'
  | 'owner.children.internal.mediaType'
  | 'owner.children.internal.owner'
  | 'owner.children.internal.type'
  | 'owner.internal.content'
  | 'owner.internal.contentDigest'
  | 'owner.internal.description'
  | 'owner.internal.fieldOwners'
  | 'owner.internal.ignoreType'
  | 'owner.internal.mediaType'
  | 'owner.internal.owner'
  | 'owner.internal.type'
  | 'name'
  | 'description'
  | 'thumbnail.sourceInstanceName'
  | 'thumbnail.absolutePath'
  | 'thumbnail.relativePath'
  | 'thumbnail.extension'
  | 'thumbnail.size'
  | 'thumbnail.prettySize'
  | 'thumbnail.modifiedTime'
  | 'thumbnail.accessTime'
  | 'thumbnail.changeTime'
  | 'thumbnail.birthTime'
  | 'thumbnail.root'
  | 'thumbnail.dir'
  | 'thumbnail.base'
  | 'thumbnail.ext'
  | 'thumbnail.name'
  | 'thumbnail.relativeDirectory'
  | 'thumbnail.dev'
  | 'thumbnail.mode'
  | 'thumbnail.nlink'
  | 'thumbnail.uid'
  | 'thumbnail.gid'
  | 'thumbnail.rdev'
  | 'thumbnail.ino'
  | 'thumbnail.atimeMs'
  | 'thumbnail.mtimeMs'
  | 'thumbnail.ctimeMs'
  | 'thumbnail.atime'
  | 'thumbnail.mtime'
  | 'thumbnail.ctime'
  | 'thumbnail.birthtime'
  | 'thumbnail.birthtimeMs'
  | 'thumbnail.blksize'
  | 'thumbnail.blocks'
  | 'thumbnail.url'
  | 'thumbnail.publicURL'
  | 'thumbnail.childrenImageSharp'
  | 'thumbnail.childrenImageSharp.fixed.base64'
  | 'thumbnail.childrenImageSharp.fixed.tracedSVG'
  | 'thumbnail.childrenImageSharp.fixed.aspectRatio'
  | 'thumbnail.childrenImageSharp.fixed.width'
  | 'thumbnail.childrenImageSharp.fixed.height'
  | 'thumbnail.childrenImageSharp.fixed.src'
  | 'thumbnail.childrenImageSharp.fixed.srcSet'
  | 'thumbnail.childrenImageSharp.fixed.srcWebp'
  | 'thumbnail.childrenImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fixed.originalName'
  | 'thumbnail.childrenImageSharp.fluid.base64'
  | 'thumbnail.childrenImageSharp.fluid.tracedSVG'
  | 'thumbnail.childrenImageSharp.fluid.aspectRatio'
  | 'thumbnail.childrenImageSharp.fluid.src'
  | 'thumbnail.childrenImageSharp.fluid.srcSet'
  | 'thumbnail.childrenImageSharp.fluid.srcWebp'
  | 'thumbnail.childrenImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fluid.sizes'
  | 'thumbnail.childrenImageSharp.fluid.originalImg'
  | 'thumbnail.childrenImageSharp.fluid.originalName'
  | 'thumbnail.childrenImageSharp.fluid.presentationWidth'
  | 'thumbnail.childrenImageSharp.fluid.presentationHeight'
  | 'thumbnail.childrenImageSharp.gatsbyImageData'
  | 'thumbnail.childrenImageSharp.original.width'
  | 'thumbnail.childrenImageSharp.original.height'
  | 'thumbnail.childrenImageSharp.original.src'
  | 'thumbnail.childrenImageSharp.resize.src'
  | 'thumbnail.childrenImageSharp.resize.tracedSVG'
  | 'thumbnail.childrenImageSharp.resize.width'
  | 'thumbnail.childrenImageSharp.resize.height'
  | 'thumbnail.childrenImageSharp.resize.aspectRatio'
  | 'thumbnail.childrenImageSharp.resize.originalName'
  | 'thumbnail.childrenImageSharp.id'
  | 'thumbnail.childrenImageSharp.parent.id'
  | 'thumbnail.childrenImageSharp.parent.children'
  | 'thumbnail.childrenImageSharp.children'
  | 'thumbnail.childrenImageSharp.children.id'
  | 'thumbnail.childrenImageSharp.children.children'
  | 'thumbnail.childrenImageSharp.internal.content'
  | 'thumbnail.childrenImageSharp.internal.contentDigest'
  | 'thumbnail.childrenImageSharp.internal.description'
  | 'thumbnail.childrenImageSharp.internal.fieldOwners'
  | 'thumbnail.childrenImageSharp.internal.ignoreType'
  | 'thumbnail.childrenImageSharp.internal.mediaType'
  | 'thumbnail.childrenImageSharp.internal.owner'
  | 'thumbnail.childrenImageSharp.internal.type'
  | 'thumbnail.childImageSharp.fixed.base64'
  | 'thumbnail.childImageSharp.fixed.tracedSVG'
  | 'thumbnail.childImageSharp.fixed.aspectRatio'
  | 'thumbnail.childImageSharp.fixed.width'
  | 'thumbnail.childImageSharp.fixed.height'
  | 'thumbnail.childImageSharp.fixed.src'
  | 'thumbnail.childImageSharp.fixed.srcSet'
  | 'thumbnail.childImageSharp.fixed.srcWebp'
  | 'thumbnail.childImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childImageSharp.fixed.originalName'
  | 'thumbnail.childImageSharp.fluid.base64'
  | 'thumbnail.childImageSharp.fluid.tracedSVG'
  | 'thumbnail.childImageSharp.fluid.aspectRatio'
  | 'thumbnail.childImageSharp.fluid.src'
  | 'thumbnail.childImageSharp.fluid.srcSet'
  | 'thumbnail.childImageSharp.fluid.srcWebp'
  | 'thumbnail.childImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childImageSharp.fluid.sizes'
  | 'thumbnail.childImageSharp.fluid.originalImg'
  | 'thumbnail.childImageSharp.fluid.originalName'
  | 'thumbnail.childImageSharp.fluid.presentationWidth'
  | 'thumbnail.childImageSharp.fluid.presentationHeight'
  | 'thumbnail.childImageSharp.gatsbyImageData'
  | 'thumbnail.childImageSharp.original.width'
  | 'thumbnail.childImageSharp.original.height'
  | 'thumbnail.childImageSharp.original.src'
  | 'thumbnail.childImageSharp.resize.src'
  | 'thumbnail.childImageSharp.resize.tracedSVG'
  | 'thumbnail.childImageSharp.resize.width'
  | 'thumbnail.childImageSharp.resize.height'
  | 'thumbnail.childImageSharp.resize.aspectRatio'
  | 'thumbnail.childImageSharp.resize.originalName'
  | 'thumbnail.childImageSharp.id'
  | 'thumbnail.childImageSharp.parent.id'
  | 'thumbnail.childImageSharp.parent.children'
  | 'thumbnail.childImageSharp.children'
  | 'thumbnail.childImageSharp.children.id'
  | 'thumbnail.childImageSharp.children.children'
  | 'thumbnail.childImageSharp.internal.content'
  | 'thumbnail.childImageSharp.internal.contentDigest'
  | 'thumbnail.childImageSharp.internal.description'
  | 'thumbnail.childImageSharp.internal.fieldOwners'
  | 'thumbnail.childImageSharp.internal.ignoreType'
  | 'thumbnail.childImageSharp.internal.mediaType'
  | 'thumbnail.childImageSharp.internal.owner'
  | 'thumbnail.childImageSharp.internal.type'
  | 'thumbnail.id'
  | 'thumbnail.parent.id'
  | 'thumbnail.parent.parent.id'
  | 'thumbnail.parent.parent.children'
  | 'thumbnail.parent.children'
  | 'thumbnail.parent.children.id'
  | 'thumbnail.parent.children.children'
  | 'thumbnail.parent.internal.content'
  | 'thumbnail.parent.internal.contentDigest'
  | 'thumbnail.parent.internal.description'
  | 'thumbnail.parent.internal.fieldOwners'
  | 'thumbnail.parent.internal.ignoreType'
  | 'thumbnail.parent.internal.mediaType'
  | 'thumbnail.parent.internal.owner'
  | 'thumbnail.parent.internal.type'
  | 'thumbnail.children'
  | 'thumbnail.children.id'
  | 'thumbnail.children.parent.id'
  | 'thumbnail.children.parent.children'
  | 'thumbnail.children.children'
  | 'thumbnail.children.children.id'
  | 'thumbnail.children.children.children'
  | 'thumbnail.children.internal.content'
  | 'thumbnail.children.internal.contentDigest'
  | 'thumbnail.children.internal.description'
  | 'thumbnail.children.internal.fieldOwners'
  | 'thumbnail.children.internal.ignoreType'
  | 'thumbnail.children.internal.mediaType'
  | 'thumbnail.children.internal.owner'
  | 'thumbnail.children.internal.type'
  | 'thumbnail.internal.content'
  | 'thumbnail.internal.contentDigest'
  | 'thumbnail.internal.description'
  | 'thumbnail.internal.fieldOwners'
  | 'thumbnail.internal.ignoreType'
  | 'thumbnail.internal.mediaType'
  | 'thumbnail.internal.owner'
  | 'thumbnail.internal.type'
  | 'posts'
  | 'posts.velogId'
  | 'posts.velogUrl'
  | 'posts.slug'
  | 'posts.title'
  | 'posts.rawContent'
  | 'posts.shortDescription'
  | 'posts.thumbnail'
  | 'posts.publishedAt'
  | 'posts.updatedAt'
  | 'posts.author.velogId'
  | 'posts.author.velogUrl'
  | 'posts.author.username'
  | 'posts.author.displayName'
  | 'posts.author.bio'
  | 'posts.author.aboutHtml'
  | 'posts.author.isCertified'
  | 'posts.author.thumbnail.sourceInstanceName'
  | 'posts.author.thumbnail.absolutePath'
  | 'posts.author.thumbnail.relativePath'
  | 'posts.author.thumbnail.extension'
  | 'posts.author.thumbnail.size'
  | 'posts.author.thumbnail.prettySize'
  | 'posts.author.thumbnail.modifiedTime'
  | 'posts.author.thumbnail.accessTime'
  | 'posts.author.thumbnail.changeTime'
  | 'posts.author.thumbnail.birthTime'
  | 'posts.author.thumbnail.root'
  | 'posts.author.thumbnail.dir'
  | 'posts.author.thumbnail.base'
  | 'posts.author.thumbnail.ext'
  | 'posts.author.thumbnail.name'
  | 'posts.author.thumbnail.relativeDirectory'
  | 'posts.author.thumbnail.dev'
  | 'posts.author.thumbnail.mode'
  | 'posts.author.thumbnail.nlink'
  | 'posts.author.thumbnail.uid'
  | 'posts.author.thumbnail.gid'
  | 'posts.author.thumbnail.rdev'
  | 'posts.author.thumbnail.ino'
  | 'posts.author.thumbnail.atimeMs'
  | 'posts.author.thumbnail.mtimeMs'
  | 'posts.author.thumbnail.ctimeMs'
  | 'posts.author.thumbnail.atime'
  | 'posts.author.thumbnail.mtime'
  | 'posts.author.thumbnail.ctime'
  | 'posts.author.thumbnail.birthtime'
  | 'posts.author.thumbnail.birthtimeMs'
  | 'posts.author.thumbnail.blksize'
  | 'posts.author.thumbnail.blocks'
  | 'posts.author.thumbnail.url'
  | 'posts.author.thumbnail.publicURL'
  | 'posts.author.thumbnail.childrenImageSharp'
  | 'posts.author.thumbnail.id'
  | 'posts.author.thumbnail.children'
  | 'posts.author.socialProfile.url'
  | 'posts.author.socialProfile.email'
  | 'posts.author.socialProfile.github'
  | 'posts.author.socialProfile.facebook'
  | 'posts.author.socialProfile.twitter'
  | 'posts.author.posts'
  | 'posts.author.posts.velogId'
  | 'posts.author.posts.velogUrl'
  | 'posts.author.posts.slug'
  | 'posts.author.posts.title'
  | 'posts.author.posts.rawContent'
  | 'posts.author.posts.shortDescription'
  | 'posts.author.posts.thumbnail'
  | 'posts.author.posts.publishedAt'
  | 'posts.author.posts.updatedAt'
  | 'posts.author.posts.tags'
  | 'posts.author.posts.isMarkdown'
  | 'posts.author.posts.childrenMarkdownRemark'
  | 'posts.author.posts.childrenMdx'
  | 'posts.author.posts.id'
  | 'posts.author.posts.children'
  | 'posts.author.id'
  | 'posts.author.parent.id'
  | 'posts.author.parent.children'
  | 'posts.author.children'
  | 'posts.author.children.id'
  | 'posts.author.children.children'
  | 'posts.author.internal.content'
  | 'posts.author.internal.contentDigest'
  | 'posts.author.internal.description'
  | 'posts.author.internal.fieldOwners'
  | 'posts.author.internal.ignoreType'
  | 'posts.author.internal.mediaType'
  | 'posts.author.internal.owner'
  | 'posts.author.internal.type'
  | 'posts.tags'
  | 'posts.tags.velogId'
  | 'posts.tags.velogUrl'
  | 'posts.tags.owner.velogId'
  | 'posts.tags.owner.velogUrl'
  | 'posts.tags.owner.username'
  | 'posts.tags.owner.displayName'
  | 'posts.tags.owner.bio'
  | 'posts.tags.owner.aboutHtml'
  | 'posts.tags.owner.isCertified'
  | 'posts.tags.owner.posts'
  | 'posts.tags.owner.id'
  | 'posts.tags.owner.children'
  | 'posts.tags.name'
  | 'posts.tags.description'
  | 'posts.tags.thumbnail.sourceInstanceName'
  | 'posts.tags.thumbnail.absolutePath'
  | 'posts.tags.thumbnail.relativePath'
  | 'posts.tags.thumbnail.extension'
  | 'posts.tags.thumbnail.size'
  | 'posts.tags.thumbnail.prettySize'
  | 'posts.tags.thumbnail.modifiedTime'
  | 'posts.tags.thumbnail.accessTime'
  | 'posts.tags.thumbnail.changeTime'
  | 'posts.tags.thumbnail.birthTime'
  | 'posts.tags.thumbnail.root'
  | 'posts.tags.thumbnail.dir'
  | 'posts.tags.thumbnail.base'
  | 'posts.tags.thumbnail.ext'
  | 'posts.tags.thumbnail.name'
  | 'posts.tags.thumbnail.relativeDirectory'
  | 'posts.tags.thumbnail.dev'
  | 'posts.tags.thumbnail.mode'
  | 'posts.tags.thumbnail.nlink'
  | 'posts.tags.thumbnail.uid'
  | 'posts.tags.thumbnail.gid'
  | 'posts.tags.thumbnail.rdev'
  | 'posts.tags.thumbnail.ino'
  | 'posts.tags.thumbnail.atimeMs'
  | 'posts.tags.thumbnail.mtimeMs'
  | 'posts.tags.thumbnail.ctimeMs'
  | 'posts.tags.thumbnail.atime'
  | 'posts.tags.thumbnail.mtime'
  | 'posts.tags.thumbnail.ctime'
  | 'posts.tags.thumbnail.birthtime'
  | 'posts.tags.thumbnail.birthtimeMs'
  | 'posts.tags.thumbnail.blksize'
  | 'posts.tags.thumbnail.blocks'
  | 'posts.tags.thumbnail.url'
  | 'posts.tags.thumbnail.publicURL'
  | 'posts.tags.thumbnail.childrenImageSharp'
  | 'posts.tags.thumbnail.id'
  | 'posts.tags.thumbnail.children'
  | 'posts.tags.posts'
  | 'posts.tags.posts.velogId'
  | 'posts.tags.posts.velogUrl'
  | 'posts.tags.posts.slug'
  | 'posts.tags.posts.title'
  | 'posts.tags.posts.rawContent'
  | 'posts.tags.posts.shortDescription'
  | 'posts.tags.posts.thumbnail'
  | 'posts.tags.posts.publishedAt'
  | 'posts.tags.posts.updatedAt'
  | 'posts.tags.posts.tags'
  | 'posts.tags.posts.isMarkdown'
  | 'posts.tags.posts.childrenMarkdownRemark'
  | 'posts.tags.posts.childrenMdx'
  | 'posts.tags.posts.id'
  | 'posts.tags.posts.children'
  | 'posts.tags.id'
  | 'posts.tags.parent.id'
  | 'posts.tags.parent.children'
  | 'posts.tags.children'
  | 'posts.tags.children.id'
  | 'posts.tags.children.children'
  | 'posts.tags.internal.content'
  | 'posts.tags.internal.contentDigest'
  | 'posts.tags.internal.description'
  | 'posts.tags.internal.fieldOwners'
  | 'posts.tags.internal.ignoreType'
  | 'posts.tags.internal.mediaType'
  | 'posts.tags.internal.owner'
  | 'posts.tags.internal.type'
  | 'posts.series.index'
  | 'posts.series.node.velogId'
  | 'posts.series.node.velogUrl'
  | 'posts.series.node.name'
  | 'posts.series.node.description'
  | 'posts.series.node.slug'
  | 'posts.series.node.posts'
  | 'posts.series.node.id'
  | 'posts.series.node.children'
  | 'posts.series.velogId'
  | 'posts.series.seriesPosts'
  | 'posts.series.seriesPosts.index'
  | 'posts.isMarkdown'
  | 'posts.childrenMarkdownRemark'
  | 'posts.childrenMarkdownRemark.id'
  | 'posts.childrenMarkdownRemark.frontmatter.title'
  | 'posts.childrenMarkdownRemark.excerpt'
  | 'posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'posts.childrenMarkdownRemark.html'
  | 'posts.childrenMarkdownRemark.htmlAst'
  | 'posts.childrenMarkdownRemark.excerptAst'
  | 'posts.childrenMarkdownRemark.headings'
  | 'posts.childrenMarkdownRemark.headings.id'
  | 'posts.childrenMarkdownRemark.headings.value'
  | 'posts.childrenMarkdownRemark.headings.depth'
  | 'posts.childrenMarkdownRemark.timeToRead'
  | 'posts.childrenMarkdownRemark.tableOfContents'
  | 'posts.childrenMarkdownRemark.wordCount.paragraphs'
  | 'posts.childrenMarkdownRemark.wordCount.sentences'
  | 'posts.childrenMarkdownRemark.wordCount.words'
  | 'posts.childrenMarkdownRemark.parent.id'
  | 'posts.childrenMarkdownRemark.parent.children'
  | 'posts.childrenMarkdownRemark.children'
  | 'posts.childrenMarkdownRemark.children.id'
  | 'posts.childrenMarkdownRemark.children.children'
  | 'posts.childrenMarkdownRemark.internal.content'
  | 'posts.childrenMarkdownRemark.internal.contentDigest'
  | 'posts.childrenMarkdownRemark.internal.description'
  | 'posts.childrenMarkdownRemark.internal.fieldOwners'
  | 'posts.childrenMarkdownRemark.internal.ignoreType'
  | 'posts.childrenMarkdownRemark.internal.mediaType'
  | 'posts.childrenMarkdownRemark.internal.owner'
  | 'posts.childrenMarkdownRemark.internal.type'
  | 'posts.childMarkdownRemark.id'
  | 'posts.childMarkdownRemark.frontmatter.title'
  | 'posts.childMarkdownRemark.excerpt'
  | 'posts.childMarkdownRemark.rawMarkdownBody'
  | 'posts.childMarkdownRemark.html'
  | 'posts.childMarkdownRemark.htmlAst'
  | 'posts.childMarkdownRemark.excerptAst'
  | 'posts.childMarkdownRemark.headings'
  | 'posts.childMarkdownRemark.headings.id'
  | 'posts.childMarkdownRemark.headings.value'
  | 'posts.childMarkdownRemark.headings.depth'
  | 'posts.childMarkdownRemark.timeToRead'
  | 'posts.childMarkdownRemark.tableOfContents'
  | 'posts.childMarkdownRemark.wordCount.paragraphs'
  | 'posts.childMarkdownRemark.wordCount.sentences'
  | 'posts.childMarkdownRemark.wordCount.words'
  | 'posts.childMarkdownRemark.parent.id'
  | 'posts.childMarkdownRemark.parent.children'
  | 'posts.childMarkdownRemark.children'
  | 'posts.childMarkdownRemark.children.id'
  | 'posts.childMarkdownRemark.children.children'
  | 'posts.childMarkdownRemark.internal.content'
  | 'posts.childMarkdownRemark.internal.contentDigest'
  | 'posts.childMarkdownRemark.internal.description'
  | 'posts.childMarkdownRemark.internal.fieldOwners'
  | 'posts.childMarkdownRemark.internal.ignoreType'
  | 'posts.childMarkdownRemark.internal.mediaType'
  | 'posts.childMarkdownRemark.internal.owner'
  | 'posts.childMarkdownRemark.internal.type'
  | 'posts.childrenMdx'
  | 'posts.childrenMdx.rawBody'
  | 'posts.childrenMdx.fileAbsolutePath'
  | 'posts.childrenMdx.frontmatter.title'
  | 'posts.childrenMdx.slug'
  | 'posts.childrenMdx.body'
  | 'posts.childrenMdx.excerpt'
  | 'posts.childrenMdx.headings'
  | 'posts.childrenMdx.headings.value'
  | 'posts.childrenMdx.headings.depth'
  | 'posts.childrenMdx.html'
  | 'posts.childrenMdx.mdxAST'
  | 'posts.childrenMdx.tableOfContents'
  | 'posts.childrenMdx.timeToRead'
  | 'posts.childrenMdx.wordCount.paragraphs'
  | 'posts.childrenMdx.wordCount.sentences'
  | 'posts.childrenMdx.wordCount.words'
  | 'posts.childrenMdx.id'
  | 'posts.childrenMdx.parent.id'
  | 'posts.childrenMdx.parent.children'
  | 'posts.childrenMdx.children'
  | 'posts.childrenMdx.children.id'
  | 'posts.childrenMdx.children.children'
  | 'posts.childrenMdx.internal.content'
  | 'posts.childrenMdx.internal.contentDigest'
  | 'posts.childrenMdx.internal.description'
  | 'posts.childrenMdx.internal.fieldOwners'
  | 'posts.childrenMdx.internal.ignoreType'
  | 'posts.childrenMdx.internal.mediaType'
  | 'posts.childrenMdx.internal.owner'
  | 'posts.childrenMdx.internal.type'
  | 'posts.childMdx.rawBody'
  | 'posts.childMdx.fileAbsolutePath'
  | 'posts.childMdx.frontmatter.title'
  | 'posts.childMdx.slug'
  | 'posts.childMdx.body'
  | 'posts.childMdx.excerpt'
  | 'posts.childMdx.headings'
  | 'posts.childMdx.headings.value'
  | 'posts.childMdx.headings.depth'
  | 'posts.childMdx.html'
  | 'posts.childMdx.mdxAST'
  | 'posts.childMdx.tableOfContents'
  | 'posts.childMdx.timeToRead'
  | 'posts.childMdx.wordCount.paragraphs'
  | 'posts.childMdx.wordCount.sentences'
  | 'posts.childMdx.wordCount.words'
  | 'posts.childMdx.id'
  | 'posts.childMdx.parent.id'
  | 'posts.childMdx.parent.children'
  | 'posts.childMdx.children'
  | 'posts.childMdx.children.id'
  | 'posts.childMdx.children.children'
  | 'posts.childMdx.internal.content'
  | 'posts.childMdx.internal.contentDigest'
  | 'posts.childMdx.internal.description'
  | 'posts.childMdx.internal.fieldOwners'
  | 'posts.childMdx.internal.ignoreType'
  | 'posts.childMdx.internal.mediaType'
  | 'posts.childMdx.internal.owner'
  | 'posts.childMdx.internal.type'
  | 'posts.id'
  | 'posts.parent.id'
  | 'posts.parent.parent.id'
  | 'posts.parent.parent.children'
  | 'posts.parent.children'
  | 'posts.parent.children.id'
  | 'posts.parent.children.children'
  | 'posts.parent.internal.content'
  | 'posts.parent.internal.contentDigest'
  | 'posts.parent.internal.description'
  | 'posts.parent.internal.fieldOwners'
  | 'posts.parent.internal.ignoreType'
  | 'posts.parent.internal.mediaType'
  | 'posts.parent.internal.owner'
  | 'posts.parent.internal.type'
  | 'posts.children'
  | 'posts.children.id'
  | 'posts.children.parent.id'
  | 'posts.children.parent.children'
  | 'posts.children.children'
  | 'posts.children.children.id'
  | 'posts.children.children.children'
  | 'posts.children.internal.content'
  | 'posts.children.internal.contentDigest'
  | 'posts.children.internal.description'
  | 'posts.children.internal.fieldOwners'
  | 'posts.children.internal.ignoreType'
  | 'posts.children.internal.mediaType'
  | 'posts.children.internal.owner'
  | 'posts.children.internal.type'
  | 'posts.internal.content'
  | 'posts.internal.contentDigest'
  | 'posts.internal.description'
  | 'posts.internal.fieldOwners'
  | 'posts.internal.ignoreType'
  | 'posts.internal.mediaType'
  | 'posts.internal.owner'
  | 'posts.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type VelogTagGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<VelogTagEdge>;
  readonly nodes: ReadonlyArray<VelogTag>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<VelogTagGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type VelogTagGroupConnection_distinctArgs = {
  field: VelogTagFieldsEnum;
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


type VelogTagGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: VelogTagFieldsEnum;
};

type VelogTagSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<VelogTagFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type VelogPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<VelogPostEdge>;
  readonly nodes: ReadonlyArray<VelogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<VelogPostGroupConnection>;
};


type VelogPostConnection_distinctArgs = {
  field: VelogPostFieldsEnum;
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


type VelogPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: VelogPostFieldsEnum;
};

type VelogPostEdge = {
  readonly next: Maybe<VelogPost>;
  readonly node: VelogPost;
  readonly previous: Maybe<VelogPost>;
};

type VelogPostFieldsEnum =
  | 'velogId'
  | 'velogUrl'
  | 'slug'
  | 'title'
  | 'rawContent'
  | 'shortDescription'
  | 'thumbnail'
  | 'publishedAt'
  | 'updatedAt'
  | 'author.velogId'
  | 'author.velogUrl'
  | 'author.username'
  | 'author.displayName'
  | 'author.bio'
  | 'author.aboutHtml'
  | 'author.isCertified'
  | 'author.thumbnail.sourceInstanceName'
  | 'author.thumbnail.absolutePath'
  | 'author.thumbnail.relativePath'
  | 'author.thumbnail.extension'
  | 'author.thumbnail.size'
  | 'author.thumbnail.prettySize'
  | 'author.thumbnail.modifiedTime'
  | 'author.thumbnail.accessTime'
  | 'author.thumbnail.changeTime'
  | 'author.thumbnail.birthTime'
  | 'author.thumbnail.root'
  | 'author.thumbnail.dir'
  | 'author.thumbnail.base'
  | 'author.thumbnail.ext'
  | 'author.thumbnail.name'
  | 'author.thumbnail.relativeDirectory'
  | 'author.thumbnail.dev'
  | 'author.thumbnail.mode'
  | 'author.thumbnail.nlink'
  | 'author.thumbnail.uid'
  | 'author.thumbnail.gid'
  | 'author.thumbnail.rdev'
  | 'author.thumbnail.ino'
  | 'author.thumbnail.atimeMs'
  | 'author.thumbnail.mtimeMs'
  | 'author.thumbnail.ctimeMs'
  | 'author.thumbnail.atime'
  | 'author.thumbnail.mtime'
  | 'author.thumbnail.ctime'
  | 'author.thumbnail.birthtime'
  | 'author.thumbnail.birthtimeMs'
  | 'author.thumbnail.blksize'
  | 'author.thumbnail.blocks'
  | 'author.thumbnail.url'
  | 'author.thumbnail.publicURL'
  | 'author.thumbnail.childrenImageSharp'
  | 'author.thumbnail.childrenImageSharp.gatsbyImageData'
  | 'author.thumbnail.childrenImageSharp.id'
  | 'author.thumbnail.childrenImageSharp.children'
  | 'author.thumbnail.childImageSharp.gatsbyImageData'
  | 'author.thumbnail.childImageSharp.id'
  | 'author.thumbnail.childImageSharp.children'
  | 'author.thumbnail.id'
  | 'author.thumbnail.parent.id'
  | 'author.thumbnail.parent.children'
  | 'author.thumbnail.children'
  | 'author.thumbnail.children.id'
  | 'author.thumbnail.children.children'
  | 'author.thumbnail.internal.content'
  | 'author.thumbnail.internal.contentDigest'
  | 'author.thumbnail.internal.description'
  | 'author.thumbnail.internal.fieldOwners'
  | 'author.thumbnail.internal.ignoreType'
  | 'author.thumbnail.internal.mediaType'
  | 'author.thumbnail.internal.owner'
  | 'author.thumbnail.internal.type'
  | 'author.socialProfile.url'
  | 'author.socialProfile.email'
  | 'author.socialProfile.github'
  | 'author.socialProfile.facebook'
  | 'author.socialProfile.twitter'
  | 'author.posts'
  | 'author.posts.velogId'
  | 'author.posts.velogUrl'
  | 'author.posts.slug'
  | 'author.posts.title'
  | 'author.posts.rawContent'
  | 'author.posts.shortDescription'
  | 'author.posts.thumbnail'
  | 'author.posts.publishedAt'
  | 'author.posts.updatedAt'
  | 'author.posts.author.velogId'
  | 'author.posts.author.velogUrl'
  | 'author.posts.author.username'
  | 'author.posts.author.displayName'
  | 'author.posts.author.bio'
  | 'author.posts.author.aboutHtml'
  | 'author.posts.author.isCertified'
  | 'author.posts.author.posts'
  | 'author.posts.author.id'
  | 'author.posts.author.children'
  | 'author.posts.tags'
  | 'author.posts.tags.velogId'
  | 'author.posts.tags.velogUrl'
  | 'author.posts.tags.name'
  | 'author.posts.tags.description'
  | 'author.posts.tags.posts'
  | 'author.posts.tags.id'
  | 'author.posts.tags.children'
  | 'author.posts.series.index'
  | 'author.posts.series.velogId'
  | 'author.posts.series.seriesPosts'
  | 'author.posts.isMarkdown'
  | 'author.posts.childrenMarkdownRemark'
  | 'author.posts.childrenMarkdownRemark.id'
  | 'author.posts.childrenMarkdownRemark.excerpt'
  | 'author.posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.posts.childrenMarkdownRemark.html'
  | 'author.posts.childrenMarkdownRemark.htmlAst'
  | 'author.posts.childrenMarkdownRemark.excerptAst'
  | 'author.posts.childrenMarkdownRemark.headings'
  | 'author.posts.childrenMarkdownRemark.timeToRead'
  | 'author.posts.childrenMarkdownRemark.tableOfContents'
  | 'author.posts.childrenMarkdownRemark.children'
  | 'author.posts.childMarkdownRemark.id'
  | 'author.posts.childMarkdownRemark.excerpt'
  | 'author.posts.childMarkdownRemark.rawMarkdownBody'
  | 'author.posts.childMarkdownRemark.html'
  | 'author.posts.childMarkdownRemark.htmlAst'
  | 'author.posts.childMarkdownRemark.excerptAst'
  | 'author.posts.childMarkdownRemark.headings'
  | 'author.posts.childMarkdownRemark.timeToRead'
  | 'author.posts.childMarkdownRemark.tableOfContents'
  | 'author.posts.childMarkdownRemark.children'
  | 'author.posts.childrenMdx'
  | 'author.posts.childrenMdx.rawBody'
  | 'author.posts.childrenMdx.fileAbsolutePath'
  | 'author.posts.childrenMdx.slug'
  | 'author.posts.childrenMdx.body'
  | 'author.posts.childrenMdx.excerpt'
  | 'author.posts.childrenMdx.headings'
  | 'author.posts.childrenMdx.html'
  | 'author.posts.childrenMdx.mdxAST'
  | 'author.posts.childrenMdx.tableOfContents'
  | 'author.posts.childrenMdx.timeToRead'
  | 'author.posts.childrenMdx.id'
  | 'author.posts.childrenMdx.children'
  | 'author.posts.childMdx.rawBody'
  | 'author.posts.childMdx.fileAbsolutePath'
  | 'author.posts.childMdx.slug'
  | 'author.posts.childMdx.body'
  | 'author.posts.childMdx.excerpt'
  | 'author.posts.childMdx.headings'
  | 'author.posts.childMdx.html'
  | 'author.posts.childMdx.mdxAST'
  | 'author.posts.childMdx.tableOfContents'
  | 'author.posts.childMdx.timeToRead'
  | 'author.posts.childMdx.id'
  | 'author.posts.childMdx.children'
  | 'author.posts.id'
  | 'author.posts.parent.id'
  | 'author.posts.parent.children'
  | 'author.posts.children'
  | 'author.posts.children.id'
  | 'author.posts.children.children'
  | 'author.posts.internal.content'
  | 'author.posts.internal.contentDigest'
  | 'author.posts.internal.description'
  | 'author.posts.internal.fieldOwners'
  | 'author.posts.internal.ignoreType'
  | 'author.posts.internal.mediaType'
  | 'author.posts.internal.owner'
  | 'author.posts.internal.type'
  | 'author.id'
  | 'author.parent.id'
  | 'author.parent.parent.id'
  | 'author.parent.parent.children'
  | 'author.parent.children'
  | 'author.parent.children.id'
  | 'author.parent.children.children'
  | 'author.parent.internal.content'
  | 'author.parent.internal.contentDigest'
  | 'author.parent.internal.description'
  | 'author.parent.internal.fieldOwners'
  | 'author.parent.internal.ignoreType'
  | 'author.parent.internal.mediaType'
  | 'author.parent.internal.owner'
  | 'author.parent.internal.type'
  | 'author.children'
  | 'author.children.id'
  | 'author.children.parent.id'
  | 'author.children.parent.children'
  | 'author.children.children'
  | 'author.children.children.id'
  | 'author.children.children.children'
  | 'author.children.internal.content'
  | 'author.children.internal.contentDigest'
  | 'author.children.internal.description'
  | 'author.children.internal.fieldOwners'
  | 'author.children.internal.ignoreType'
  | 'author.children.internal.mediaType'
  | 'author.children.internal.owner'
  | 'author.children.internal.type'
  | 'author.internal.content'
  | 'author.internal.contentDigest'
  | 'author.internal.description'
  | 'author.internal.fieldOwners'
  | 'author.internal.ignoreType'
  | 'author.internal.mediaType'
  | 'author.internal.owner'
  | 'author.internal.type'
  | 'tags'
  | 'tags.velogId'
  | 'tags.velogUrl'
  | 'tags.owner.velogId'
  | 'tags.owner.velogUrl'
  | 'tags.owner.username'
  | 'tags.owner.displayName'
  | 'tags.owner.bio'
  | 'tags.owner.aboutHtml'
  | 'tags.owner.isCertified'
  | 'tags.owner.thumbnail.sourceInstanceName'
  | 'tags.owner.thumbnail.absolutePath'
  | 'tags.owner.thumbnail.relativePath'
  | 'tags.owner.thumbnail.extension'
  | 'tags.owner.thumbnail.size'
  | 'tags.owner.thumbnail.prettySize'
  | 'tags.owner.thumbnail.modifiedTime'
  | 'tags.owner.thumbnail.accessTime'
  | 'tags.owner.thumbnail.changeTime'
  | 'tags.owner.thumbnail.birthTime'
  | 'tags.owner.thumbnail.root'
  | 'tags.owner.thumbnail.dir'
  | 'tags.owner.thumbnail.base'
  | 'tags.owner.thumbnail.ext'
  | 'tags.owner.thumbnail.name'
  | 'tags.owner.thumbnail.relativeDirectory'
  | 'tags.owner.thumbnail.dev'
  | 'tags.owner.thumbnail.mode'
  | 'tags.owner.thumbnail.nlink'
  | 'tags.owner.thumbnail.uid'
  | 'tags.owner.thumbnail.gid'
  | 'tags.owner.thumbnail.rdev'
  | 'tags.owner.thumbnail.ino'
  | 'tags.owner.thumbnail.atimeMs'
  | 'tags.owner.thumbnail.mtimeMs'
  | 'tags.owner.thumbnail.ctimeMs'
  | 'tags.owner.thumbnail.atime'
  | 'tags.owner.thumbnail.mtime'
  | 'tags.owner.thumbnail.ctime'
  | 'tags.owner.thumbnail.birthtime'
  | 'tags.owner.thumbnail.birthtimeMs'
  | 'tags.owner.thumbnail.blksize'
  | 'tags.owner.thumbnail.blocks'
  | 'tags.owner.thumbnail.url'
  | 'tags.owner.thumbnail.publicURL'
  | 'tags.owner.thumbnail.childrenImageSharp'
  | 'tags.owner.thumbnail.id'
  | 'tags.owner.thumbnail.children'
  | 'tags.owner.socialProfile.url'
  | 'tags.owner.socialProfile.email'
  | 'tags.owner.socialProfile.github'
  | 'tags.owner.socialProfile.facebook'
  | 'tags.owner.socialProfile.twitter'
  | 'tags.owner.posts'
  | 'tags.owner.posts.velogId'
  | 'tags.owner.posts.velogUrl'
  | 'tags.owner.posts.slug'
  | 'tags.owner.posts.title'
  | 'tags.owner.posts.rawContent'
  | 'tags.owner.posts.shortDescription'
  | 'tags.owner.posts.thumbnail'
  | 'tags.owner.posts.publishedAt'
  | 'tags.owner.posts.updatedAt'
  | 'tags.owner.posts.tags'
  | 'tags.owner.posts.isMarkdown'
  | 'tags.owner.posts.childrenMarkdownRemark'
  | 'tags.owner.posts.childrenMdx'
  | 'tags.owner.posts.id'
  | 'tags.owner.posts.children'
  | 'tags.owner.id'
  | 'tags.owner.parent.id'
  | 'tags.owner.parent.children'
  | 'tags.owner.children'
  | 'tags.owner.children.id'
  | 'tags.owner.children.children'
  | 'tags.owner.internal.content'
  | 'tags.owner.internal.contentDigest'
  | 'tags.owner.internal.description'
  | 'tags.owner.internal.fieldOwners'
  | 'tags.owner.internal.ignoreType'
  | 'tags.owner.internal.mediaType'
  | 'tags.owner.internal.owner'
  | 'tags.owner.internal.type'
  | 'tags.name'
  | 'tags.description'
  | 'tags.thumbnail.sourceInstanceName'
  | 'tags.thumbnail.absolutePath'
  | 'tags.thumbnail.relativePath'
  | 'tags.thumbnail.extension'
  | 'tags.thumbnail.size'
  | 'tags.thumbnail.prettySize'
  | 'tags.thumbnail.modifiedTime'
  | 'tags.thumbnail.accessTime'
  | 'tags.thumbnail.changeTime'
  | 'tags.thumbnail.birthTime'
  | 'tags.thumbnail.root'
  | 'tags.thumbnail.dir'
  | 'tags.thumbnail.base'
  | 'tags.thumbnail.ext'
  | 'tags.thumbnail.name'
  | 'tags.thumbnail.relativeDirectory'
  | 'tags.thumbnail.dev'
  | 'tags.thumbnail.mode'
  | 'tags.thumbnail.nlink'
  | 'tags.thumbnail.uid'
  | 'tags.thumbnail.gid'
  | 'tags.thumbnail.rdev'
  | 'tags.thumbnail.ino'
  | 'tags.thumbnail.atimeMs'
  | 'tags.thumbnail.mtimeMs'
  | 'tags.thumbnail.ctimeMs'
  | 'tags.thumbnail.atime'
  | 'tags.thumbnail.mtime'
  | 'tags.thumbnail.ctime'
  | 'tags.thumbnail.birthtime'
  | 'tags.thumbnail.birthtimeMs'
  | 'tags.thumbnail.blksize'
  | 'tags.thumbnail.blocks'
  | 'tags.thumbnail.url'
  | 'tags.thumbnail.publicURL'
  | 'tags.thumbnail.childrenImageSharp'
  | 'tags.thumbnail.childrenImageSharp.gatsbyImageData'
  | 'tags.thumbnail.childrenImageSharp.id'
  | 'tags.thumbnail.childrenImageSharp.children'
  | 'tags.thumbnail.childImageSharp.gatsbyImageData'
  | 'tags.thumbnail.childImageSharp.id'
  | 'tags.thumbnail.childImageSharp.children'
  | 'tags.thumbnail.id'
  | 'tags.thumbnail.parent.id'
  | 'tags.thumbnail.parent.children'
  | 'tags.thumbnail.children'
  | 'tags.thumbnail.children.id'
  | 'tags.thumbnail.children.children'
  | 'tags.thumbnail.internal.content'
  | 'tags.thumbnail.internal.contentDigest'
  | 'tags.thumbnail.internal.description'
  | 'tags.thumbnail.internal.fieldOwners'
  | 'tags.thumbnail.internal.ignoreType'
  | 'tags.thumbnail.internal.mediaType'
  | 'tags.thumbnail.internal.owner'
  | 'tags.thumbnail.internal.type'
  | 'tags.posts'
  | 'tags.posts.velogId'
  | 'tags.posts.velogUrl'
  | 'tags.posts.slug'
  | 'tags.posts.title'
  | 'tags.posts.rawContent'
  | 'tags.posts.shortDescription'
  | 'tags.posts.thumbnail'
  | 'tags.posts.publishedAt'
  | 'tags.posts.updatedAt'
  | 'tags.posts.author.velogId'
  | 'tags.posts.author.velogUrl'
  | 'tags.posts.author.username'
  | 'tags.posts.author.displayName'
  | 'tags.posts.author.bio'
  | 'tags.posts.author.aboutHtml'
  | 'tags.posts.author.isCertified'
  | 'tags.posts.author.posts'
  | 'tags.posts.author.id'
  | 'tags.posts.author.children'
  | 'tags.posts.tags'
  | 'tags.posts.tags.velogId'
  | 'tags.posts.tags.velogUrl'
  | 'tags.posts.tags.name'
  | 'tags.posts.tags.description'
  | 'tags.posts.tags.posts'
  | 'tags.posts.tags.id'
  | 'tags.posts.tags.children'
  | 'tags.posts.series.index'
  | 'tags.posts.series.velogId'
  | 'tags.posts.series.seriesPosts'
  | 'tags.posts.isMarkdown'
  | 'tags.posts.childrenMarkdownRemark'
  | 'tags.posts.childrenMarkdownRemark.id'
  | 'tags.posts.childrenMarkdownRemark.excerpt'
  | 'tags.posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'tags.posts.childrenMarkdownRemark.html'
  | 'tags.posts.childrenMarkdownRemark.htmlAst'
  | 'tags.posts.childrenMarkdownRemark.excerptAst'
  | 'tags.posts.childrenMarkdownRemark.headings'
  | 'tags.posts.childrenMarkdownRemark.timeToRead'
  | 'tags.posts.childrenMarkdownRemark.tableOfContents'
  | 'tags.posts.childrenMarkdownRemark.children'
  | 'tags.posts.childMarkdownRemark.id'
  | 'tags.posts.childMarkdownRemark.excerpt'
  | 'tags.posts.childMarkdownRemark.rawMarkdownBody'
  | 'tags.posts.childMarkdownRemark.html'
  | 'tags.posts.childMarkdownRemark.htmlAst'
  | 'tags.posts.childMarkdownRemark.excerptAst'
  | 'tags.posts.childMarkdownRemark.headings'
  | 'tags.posts.childMarkdownRemark.timeToRead'
  | 'tags.posts.childMarkdownRemark.tableOfContents'
  | 'tags.posts.childMarkdownRemark.children'
  | 'tags.posts.childrenMdx'
  | 'tags.posts.childrenMdx.rawBody'
  | 'tags.posts.childrenMdx.fileAbsolutePath'
  | 'tags.posts.childrenMdx.slug'
  | 'tags.posts.childrenMdx.body'
  | 'tags.posts.childrenMdx.excerpt'
  | 'tags.posts.childrenMdx.headings'
  | 'tags.posts.childrenMdx.html'
  | 'tags.posts.childrenMdx.mdxAST'
  | 'tags.posts.childrenMdx.tableOfContents'
  | 'tags.posts.childrenMdx.timeToRead'
  | 'tags.posts.childrenMdx.id'
  | 'tags.posts.childrenMdx.children'
  | 'tags.posts.childMdx.rawBody'
  | 'tags.posts.childMdx.fileAbsolutePath'
  | 'tags.posts.childMdx.slug'
  | 'tags.posts.childMdx.body'
  | 'tags.posts.childMdx.excerpt'
  | 'tags.posts.childMdx.headings'
  | 'tags.posts.childMdx.html'
  | 'tags.posts.childMdx.mdxAST'
  | 'tags.posts.childMdx.tableOfContents'
  | 'tags.posts.childMdx.timeToRead'
  | 'tags.posts.childMdx.id'
  | 'tags.posts.childMdx.children'
  | 'tags.posts.id'
  | 'tags.posts.parent.id'
  | 'tags.posts.parent.children'
  | 'tags.posts.children'
  | 'tags.posts.children.id'
  | 'tags.posts.children.children'
  | 'tags.posts.internal.content'
  | 'tags.posts.internal.contentDigest'
  | 'tags.posts.internal.description'
  | 'tags.posts.internal.fieldOwners'
  | 'tags.posts.internal.ignoreType'
  | 'tags.posts.internal.mediaType'
  | 'tags.posts.internal.owner'
  | 'tags.posts.internal.type'
  | 'tags.id'
  | 'tags.parent.id'
  | 'tags.parent.parent.id'
  | 'tags.parent.parent.children'
  | 'tags.parent.children'
  | 'tags.parent.children.id'
  | 'tags.parent.children.children'
  | 'tags.parent.internal.content'
  | 'tags.parent.internal.contentDigest'
  | 'tags.parent.internal.description'
  | 'tags.parent.internal.fieldOwners'
  | 'tags.parent.internal.ignoreType'
  | 'tags.parent.internal.mediaType'
  | 'tags.parent.internal.owner'
  | 'tags.parent.internal.type'
  | 'tags.children'
  | 'tags.children.id'
  | 'tags.children.parent.id'
  | 'tags.children.parent.children'
  | 'tags.children.children'
  | 'tags.children.children.id'
  | 'tags.children.children.children'
  | 'tags.children.internal.content'
  | 'tags.children.internal.contentDigest'
  | 'tags.children.internal.description'
  | 'tags.children.internal.fieldOwners'
  | 'tags.children.internal.ignoreType'
  | 'tags.children.internal.mediaType'
  | 'tags.children.internal.owner'
  | 'tags.children.internal.type'
  | 'tags.internal.content'
  | 'tags.internal.contentDigest'
  | 'tags.internal.description'
  | 'tags.internal.fieldOwners'
  | 'tags.internal.ignoreType'
  | 'tags.internal.mediaType'
  | 'tags.internal.owner'
  | 'tags.internal.type'
  | 'series.index'
  | 'series.node.velogId'
  | 'series.node.velogUrl'
  | 'series.node.name'
  | 'series.node.description'
  | 'series.node.slug'
  | 'series.node.thumbnail.sourceInstanceName'
  | 'series.node.thumbnail.absolutePath'
  | 'series.node.thumbnail.relativePath'
  | 'series.node.thumbnail.extension'
  | 'series.node.thumbnail.size'
  | 'series.node.thumbnail.prettySize'
  | 'series.node.thumbnail.modifiedTime'
  | 'series.node.thumbnail.accessTime'
  | 'series.node.thumbnail.changeTime'
  | 'series.node.thumbnail.birthTime'
  | 'series.node.thumbnail.root'
  | 'series.node.thumbnail.dir'
  | 'series.node.thumbnail.base'
  | 'series.node.thumbnail.ext'
  | 'series.node.thumbnail.name'
  | 'series.node.thumbnail.relativeDirectory'
  | 'series.node.thumbnail.dev'
  | 'series.node.thumbnail.mode'
  | 'series.node.thumbnail.nlink'
  | 'series.node.thumbnail.uid'
  | 'series.node.thumbnail.gid'
  | 'series.node.thumbnail.rdev'
  | 'series.node.thumbnail.ino'
  | 'series.node.thumbnail.atimeMs'
  | 'series.node.thumbnail.mtimeMs'
  | 'series.node.thumbnail.ctimeMs'
  | 'series.node.thumbnail.atime'
  | 'series.node.thumbnail.mtime'
  | 'series.node.thumbnail.ctime'
  | 'series.node.thumbnail.birthtime'
  | 'series.node.thumbnail.birthtimeMs'
  | 'series.node.thumbnail.blksize'
  | 'series.node.thumbnail.blocks'
  | 'series.node.thumbnail.url'
  | 'series.node.thumbnail.publicURL'
  | 'series.node.thumbnail.childrenImageSharp'
  | 'series.node.thumbnail.id'
  | 'series.node.thumbnail.children'
  | 'series.node.owner.velogId'
  | 'series.node.owner.velogUrl'
  | 'series.node.owner.username'
  | 'series.node.owner.displayName'
  | 'series.node.owner.bio'
  | 'series.node.owner.aboutHtml'
  | 'series.node.owner.isCertified'
  | 'series.node.owner.posts'
  | 'series.node.owner.id'
  | 'series.node.owner.children'
  | 'series.node.posts'
  | 'series.node.posts.velogId'
  | 'series.node.posts.velogUrl'
  | 'series.node.posts.slug'
  | 'series.node.posts.title'
  | 'series.node.posts.rawContent'
  | 'series.node.posts.shortDescription'
  | 'series.node.posts.thumbnail'
  | 'series.node.posts.publishedAt'
  | 'series.node.posts.updatedAt'
  | 'series.node.posts.tags'
  | 'series.node.posts.isMarkdown'
  | 'series.node.posts.childrenMarkdownRemark'
  | 'series.node.posts.childrenMdx'
  | 'series.node.posts.id'
  | 'series.node.posts.children'
  | 'series.node.id'
  | 'series.node.parent.id'
  | 'series.node.parent.children'
  | 'series.node.children'
  | 'series.node.children.id'
  | 'series.node.children.children'
  | 'series.node.internal.content'
  | 'series.node.internal.contentDigest'
  | 'series.node.internal.description'
  | 'series.node.internal.fieldOwners'
  | 'series.node.internal.ignoreType'
  | 'series.node.internal.mediaType'
  | 'series.node.internal.owner'
  | 'series.node.internal.type'
  | 'series.velogId'
  | 'series.seriesPosts'
  | 'series.seriesPosts.index'
  | 'series.seriesPosts.item.velogId'
  | 'isMarkdown'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type VelogPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<VelogPostEdge>;
  readonly nodes: ReadonlyArray<VelogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<VelogPostGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type VelogPostGroupConnection_distinctArgs = {
  field: VelogPostFieldsEnum;
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


type VelogPostGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: VelogPostFieldsEnum;
};

type VelogPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<VelogPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type VelogSeriesConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<VelogSeriesEdge>;
  readonly nodes: ReadonlyArray<VelogSeries>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<VelogSeriesGroupConnection>;
};


type VelogSeriesConnection_distinctArgs = {
  field: VelogSeriesFieldsEnum;
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


type VelogSeriesConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: VelogSeriesFieldsEnum;
};

type VelogSeriesEdge = {
  readonly next: Maybe<VelogSeries>;
  readonly node: VelogSeries;
  readonly previous: Maybe<VelogSeries>;
};

type VelogSeriesFieldsEnum =
  | 'velogId'
  | 'velogUrl'
  | 'name'
  | 'description'
  | 'slug'
  | 'thumbnail.sourceInstanceName'
  | 'thumbnail.absolutePath'
  | 'thumbnail.relativePath'
  | 'thumbnail.extension'
  | 'thumbnail.size'
  | 'thumbnail.prettySize'
  | 'thumbnail.modifiedTime'
  | 'thumbnail.accessTime'
  | 'thumbnail.changeTime'
  | 'thumbnail.birthTime'
  | 'thumbnail.root'
  | 'thumbnail.dir'
  | 'thumbnail.base'
  | 'thumbnail.ext'
  | 'thumbnail.name'
  | 'thumbnail.relativeDirectory'
  | 'thumbnail.dev'
  | 'thumbnail.mode'
  | 'thumbnail.nlink'
  | 'thumbnail.uid'
  | 'thumbnail.gid'
  | 'thumbnail.rdev'
  | 'thumbnail.ino'
  | 'thumbnail.atimeMs'
  | 'thumbnail.mtimeMs'
  | 'thumbnail.ctimeMs'
  | 'thumbnail.atime'
  | 'thumbnail.mtime'
  | 'thumbnail.ctime'
  | 'thumbnail.birthtime'
  | 'thumbnail.birthtimeMs'
  | 'thumbnail.blksize'
  | 'thumbnail.blocks'
  | 'thumbnail.url'
  | 'thumbnail.publicURL'
  | 'thumbnail.childrenImageSharp'
  | 'thumbnail.childrenImageSharp.fixed.base64'
  | 'thumbnail.childrenImageSharp.fixed.tracedSVG'
  | 'thumbnail.childrenImageSharp.fixed.aspectRatio'
  | 'thumbnail.childrenImageSharp.fixed.width'
  | 'thumbnail.childrenImageSharp.fixed.height'
  | 'thumbnail.childrenImageSharp.fixed.src'
  | 'thumbnail.childrenImageSharp.fixed.srcSet'
  | 'thumbnail.childrenImageSharp.fixed.srcWebp'
  | 'thumbnail.childrenImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fixed.originalName'
  | 'thumbnail.childrenImageSharp.fluid.base64'
  | 'thumbnail.childrenImageSharp.fluid.tracedSVG'
  | 'thumbnail.childrenImageSharp.fluid.aspectRatio'
  | 'thumbnail.childrenImageSharp.fluid.src'
  | 'thumbnail.childrenImageSharp.fluid.srcSet'
  | 'thumbnail.childrenImageSharp.fluid.srcWebp'
  | 'thumbnail.childrenImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childrenImageSharp.fluid.sizes'
  | 'thumbnail.childrenImageSharp.fluid.originalImg'
  | 'thumbnail.childrenImageSharp.fluid.originalName'
  | 'thumbnail.childrenImageSharp.fluid.presentationWidth'
  | 'thumbnail.childrenImageSharp.fluid.presentationHeight'
  | 'thumbnail.childrenImageSharp.gatsbyImageData'
  | 'thumbnail.childrenImageSharp.original.width'
  | 'thumbnail.childrenImageSharp.original.height'
  | 'thumbnail.childrenImageSharp.original.src'
  | 'thumbnail.childrenImageSharp.resize.src'
  | 'thumbnail.childrenImageSharp.resize.tracedSVG'
  | 'thumbnail.childrenImageSharp.resize.width'
  | 'thumbnail.childrenImageSharp.resize.height'
  | 'thumbnail.childrenImageSharp.resize.aspectRatio'
  | 'thumbnail.childrenImageSharp.resize.originalName'
  | 'thumbnail.childrenImageSharp.id'
  | 'thumbnail.childrenImageSharp.parent.id'
  | 'thumbnail.childrenImageSharp.parent.children'
  | 'thumbnail.childrenImageSharp.children'
  | 'thumbnail.childrenImageSharp.children.id'
  | 'thumbnail.childrenImageSharp.children.children'
  | 'thumbnail.childrenImageSharp.internal.content'
  | 'thumbnail.childrenImageSharp.internal.contentDigest'
  | 'thumbnail.childrenImageSharp.internal.description'
  | 'thumbnail.childrenImageSharp.internal.fieldOwners'
  | 'thumbnail.childrenImageSharp.internal.ignoreType'
  | 'thumbnail.childrenImageSharp.internal.mediaType'
  | 'thumbnail.childrenImageSharp.internal.owner'
  | 'thumbnail.childrenImageSharp.internal.type'
  | 'thumbnail.childImageSharp.fixed.base64'
  | 'thumbnail.childImageSharp.fixed.tracedSVG'
  | 'thumbnail.childImageSharp.fixed.aspectRatio'
  | 'thumbnail.childImageSharp.fixed.width'
  | 'thumbnail.childImageSharp.fixed.height'
  | 'thumbnail.childImageSharp.fixed.src'
  | 'thumbnail.childImageSharp.fixed.srcSet'
  | 'thumbnail.childImageSharp.fixed.srcWebp'
  | 'thumbnail.childImageSharp.fixed.srcSetWebp'
  | 'thumbnail.childImageSharp.fixed.originalName'
  | 'thumbnail.childImageSharp.fluid.base64'
  | 'thumbnail.childImageSharp.fluid.tracedSVG'
  | 'thumbnail.childImageSharp.fluid.aspectRatio'
  | 'thumbnail.childImageSharp.fluid.src'
  | 'thumbnail.childImageSharp.fluid.srcSet'
  | 'thumbnail.childImageSharp.fluid.srcWebp'
  | 'thumbnail.childImageSharp.fluid.srcSetWebp'
  | 'thumbnail.childImageSharp.fluid.sizes'
  | 'thumbnail.childImageSharp.fluid.originalImg'
  | 'thumbnail.childImageSharp.fluid.originalName'
  | 'thumbnail.childImageSharp.fluid.presentationWidth'
  | 'thumbnail.childImageSharp.fluid.presentationHeight'
  | 'thumbnail.childImageSharp.gatsbyImageData'
  | 'thumbnail.childImageSharp.original.width'
  | 'thumbnail.childImageSharp.original.height'
  | 'thumbnail.childImageSharp.original.src'
  | 'thumbnail.childImageSharp.resize.src'
  | 'thumbnail.childImageSharp.resize.tracedSVG'
  | 'thumbnail.childImageSharp.resize.width'
  | 'thumbnail.childImageSharp.resize.height'
  | 'thumbnail.childImageSharp.resize.aspectRatio'
  | 'thumbnail.childImageSharp.resize.originalName'
  | 'thumbnail.childImageSharp.id'
  | 'thumbnail.childImageSharp.parent.id'
  | 'thumbnail.childImageSharp.parent.children'
  | 'thumbnail.childImageSharp.children'
  | 'thumbnail.childImageSharp.children.id'
  | 'thumbnail.childImageSharp.children.children'
  | 'thumbnail.childImageSharp.internal.content'
  | 'thumbnail.childImageSharp.internal.contentDigest'
  | 'thumbnail.childImageSharp.internal.description'
  | 'thumbnail.childImageSharp.internal.fieldOwners'
  | 'thumbnail.childImageSharp.internal.ignoreType'
  | 'thumbnail.childImageSharp.internal.mediaType'
  | 'thumbnail.childImageSharp.internal.owner'
  | 'thumbnail.childImageSharp.internal.type'
  | 'thumbnail.id'
  | 'thumbnail.parent.id'
  | 'thumbnail.parent.parent.id'
  | 'thumbnail.parent.parent.children'
  | 'thumbnail.parent.children'
  | 'thumbnail.parent.children.id'
  | 'thumbnail.parent.children.children'
  | 'thumbnail.parent.internal.content'
  | 'thumbnail.parent.internal.contentDigest'
  | 'thumbnail.parent.internal.description'
  | 'thumbnail.parent.internal.fieldOwners'
  | 'thumbnail.parent.internal.ignoreType'
  | 'thumbnail.parent.internal.mediaType'
  | 'thumbnail.parent.internal.owner'
  | 'thumbnail.parent.internal.type'
  | 'thumbnail.children'
  | 'thumbnail.children.id'
  | 'thumbnail.children.parent.id'
  | 'thumbnail.children.parent.children'
  | 'thumbnail.children.children'
  | 'thumbnail.children.children.id'
  | 'thumbnail.children.children.children'
  | 'thumbnail.children.internal.content'
  | 'thumbnail.children.internal.contentDigest'
  | 'thumbnail.children.internal.description'
  | 'thumbnail.children.internal.fieldOwners'
  | 'thumbnail.children.internal.ignoreType'
  | 'thumbnail.children.internal.mediaType'
  | 'thumbnail.children.internal.owner'
  | 'thumbnail.children.internal.type'
  | 'thumbnail.internal.content'
  | 'thumbnail.internal.contentDigest'
  | 'thumbnail.internal.description'
  | 'thumbnail.internal.fieldOwners'
  | 'thumbnail.internal.ignoreType'
  | 'thumbnail.internal.mediaType'
  | 'thumbnail.internal.owner'
  | 'thumbnail.internal.type'
  | 'owner.velogId'
  | 'owner.velogUrl'
  | 'owner.username'
  | 'owner.displayName'
  | 'owner.bio'
  | 'owner.aboutHtml'
  | 'owner.isCertified'
  | 'owner.thumbnail.sourceInstanceName'
  | 'owner.thumbnail.absolutePath'
  | 'owner.thumbnail.relativePath'
  | 'owner.thumbnail.extension'
  | 'owner.thumbnail.size'
  | 'owner.thumbnail.prettySize'
  | 'owner.thumbnail.modifiedTime'
  | 'owner.thumbnail.accessTime'
  | 'owner.thumbnail.changeTime'
  | 'owner.thumbnail.birthTime'
  | 'owner.thumbnail.root'
  | 'owner.thumbnail.dir'
  | 'owner.thumbnail.base'
  | 'owner.thumbnail.ext'
  | 'owner.thumbnail.name'
  | 'owner.thumbnail.relativeDirectory'
  | 'owner.thumbnail.dev'
  | 'owner.thumbnail.mode'
  | 'owner.thumbnail.nlink'
  | 'owner.thumbnail.uid'
  | 'owner.thumbnail.gid'
  | 'owner.thumbnail.rdev'
  | 'owner.thumbnail.ino'
  | 'owner.thumbnail.atimeMs'
  | 'owner.thumbnail.mtimeMs'
  | 'owner.thumbnail.ctimeMs'
  | 'owner.thumbnail.atime'
  | 'owner.thumbnail.mtime'
  | 'owner.thumbnail.ctime'
  | 'owner.thumbnail.birthtime'
  | 'owner.thumbnail.birthtimeMs'
  | 'owner.thumbnail.blksize'
  | 'owner.thumbnail.blocks'
  | 'owner.thumbnail.url'
  | 'owner.thumbnail.publicURL'
  | 'owner.thumbnail.childrenImageSharp'
  | 'owner.thumbnail.childrenImageSharp.gatsbyImageData'
  | 'owner.thumbnail.childrenImageSharp.id'
  | 'owner.thumbnail.childrenImageSharp.children'
  | 'owner.thumbnail.childImageSharp.gatsbyImageData'
  | 'owner.thumbnail.childImageSharp.id'
  | 'owner.thumbnail.childImageSharp.children'
  | 'owner.thumbnail.id'
  | 'owner.thumbnail.parent.id'
  | 'owner.thumbnail.parent.children'
  | 'owner.thumbnail.children'
  | 'owner.thumbnail.children.id'
  | 'owner.thumbnail.children.children'
  | 'owner.thumbnail.internal.content'
  | 'owner.thumbnail.internal.contentDigest'
  | 'owner.thumbnail.internal.description'
  | 'owner.thumbnail.internal.fieldOwners'
  | 'owner.thumbnail.internal.ignoreType'
  | 'owner.thumbnail.internal.mediaType'
  | 'owner.thumbnail.internal.owner'
  | 'owner.thumbnail.internal.type'
  | 'owner.socialProfile.url'
  | 'owner.socialProfile.email'
  | 'owner.socialProfile.github'
  | 'owner.socialProfile.facebook'
  | 'owner.socialProfile.twitter'
  | 'owner.posts'
  | 'owner.posts.velogId'
  | 'owner.posts.velogUrl'
  | 'owner.posts.slug'
  | 'owner.posts.title'
  | 'owner.posts.rawContent'
  | 'owner.posts.shortDescription'
  | 'owner.posts.thumbnail'
  | 'owner.posts.publishedAt'
  | 'owner.posts.updatedAt'
  | 'owner.posts.author.velogId'
  | 'owner.posts.author.velogUrl'
  | 'owner.posts.author.username'
  | 'owner.posts.author.displayName'
  | 'owner.posts.author.bio'
  | 'owner.posts.author.aboutHtml'
  | 'owner.posts.author.isCertified'
  | 'owner.posts.author.posts'
  | 'owner.posts.author.id'
  | 'owner.posts.author.children'
  | 'owner.posts.tags'
  | 'owner.posts.tags.velogId'
  | 'owner.posts.tags.velogUrl'
  | 'owner.posts.tags.name'
  | 'owner.posts.tags.description'
  | 'owner.posts.tags.posts'
  | 'owner.posts.tags.id'
  | 'owner.posts.tags.children'
  | 'owner.posts.series.index'
  | 'owner.posts.series.velogId'
  | 'owner.posts.series.seriesPosts'
  | 'owner.posts.isMarkdown'
  | 'owner.posts.childrenMarkdownRemark'
  | 'owner.posts.childrenMarkdownRemark.id'
  | 'owner.posts.childrenMarkdownRemark.excerpt'
  | 'owner.posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'owner.posts.childrenMarkdownRemark.html'
  | 'owner.posts.childrenMarkdownRemark.htmlAst'
  | 'owner.posts.childrenMarkdownRemark.excerptAst'
  | 'owner.posts.childrenMarkdownRemark.headings'
  | 'owner.posts.childrenMarkdownRemark.timeToRead'
  | 'owner.posts.childrenMarkdownRemark.tableOfContents'
  | 'owner.posts.childrenMarkdownRemark.children'
  | 'owner.posts.childMarkdownRemark.id'
  | 'owner.posts.childMarkdownRemark.excerpt'
  | 'owner.posts.childMarkdownRemark.rawMarkdownBody'
  | 'owner.posts.childMarkdownRemark.html'
  | 'owner.posts.childMarkdownRemark.htmlAst'
  | 'owner.posts.childMarkdownRemark.excerptAst'
  | 'owner.posts.childMarkdownRemark.headings'
  | 'owner.posts.childMarkdownRemark.timeToRead'
  | 'owner.posts.childMarkdownRemark.tableOfContents'
  | 'owner.posts.childMarkdownRemark.children'
  | 'owner.posts.childrenMdx'
  | 'owner.posts.childrenMdx.rawBody'
  | 'owner.posts.childrenMdx.fileAbsolutePath'
  | 'owner.posts.childrenMdx.slug'
  | 'owner.posts.childrenMdx.body'
  | 'owner.posts.childrenMdx.excerpt'
  | 'owner.posts.childrenMdx.headings'
  | 'owner.posts.childrenMdx.html'
  | 'owner.posts.childrenMdx.mdxAST'
  | 'owner.posts.childrenMdx.tableOfContents'
  | 'owner.posts.childrenMdx.timeToRead'
  | 'owner.posts.childrenMdx.id'
  | 'owner.posts.childrenMdx.children'
  | 'owner.posts.childMdx.rawBody'
  | 'owner.posts.childMdx.fileAbsolutePath'
  | 'owner.posts.childMdx.slug'
  | 'owner.posts.childMdx.body'
  | 'owner.posts.childMdx.excerpt'
  | 'owner.posts.childMdx.headings'
  | 'owner.posts.childMdx.html'
  | 'owner.posts.childMdx.mdxAST'
  | 'owner.posts.childMdx.tableOfContents'
  | 'owner.posts.childMdx.timeToRead'
  | 'owner.posts.childMdx.id'
  | 'owner.posts.childMdx.children'
  | 'owner.posts.id'
  | 'owner.posts.parent.id'
  | 'owner.posts.parent.children'
  | 'owner.posts.children'
  | 'owner.posts.children.id'
  | 'owner.posts.children.children'
  | 'owner.posts.internal.content'
  | 'owner.posts.internal.contentDigest'
  | 'owner.posts.internal.description'
  | 'owner.posts.internal.fieldOwners'
  | 'owner.posts.internal.ignoreType'
  | 'owner.posts.internal.mediaType'
  | 'owner.posts.internal.owner'
  | 'owner.posts.internal.type'
  | 'owner.id'
  | 'owner.parent.id'
  | 'owner.parent.parent.id'
  | 'owner.parent.parent.children'
  | 'owner.parent.children'
  | 'owner.parent.children.id'
  | 'owner.parent.children.children'
  | 'owner.parent.internal.content'
  | 'owner.parent.internal.contentDigest'
  | 'owner.parent.internal.description'
  | 'owner.parent.internal.fieldOwners'
  | 'owner.parent.internal.ignoreType'
  | 'owner.parent.internal.mediaType'
  | 'owner.parent.internal.owner'
  | 'owner.parent.internal.type'
  | 'owner.children'
  | 'owner.children.id'
  | 'owner.children.parent.id'
  | 'owner.children.parent.children'
  | 'owner.children.children'
  | 'owner.children.children.id'
  | 'owner.children.children.children'
  | 'owner.children.internal.content'
  | 'owner.children.internal.contentDigest'
  | 'owner.children.internal.description'
  | 'owner.children.internal.fieldOwners'
  | 'owner.children.internal.ignoreType'
  | 'owner.children.internal.mediaType'
  | 'owner.children.internal.owner'
  | 'owner.children.internal.type'
  | 'owner.internal.content'
  | 'owner.internal.contentDigest'
  | 'owner.internal.description'
  | 'owner.internal.fieldOwners'
  | 'owner.internal.ignoreType'
  | 'owner.internal.mediaType'
  | 'owner.internal.owner'
  | 'owner.internal.type'
  | 'posts'
  | 'posts.velogId'
  | 'posts.velogUrl'
  | 'posts.slug'
  | 'posts.title'
  | 'posts.rawContent'
  | 'posts.shortDescription'
  | 'posts.thumbnail'
  | 'posts.publishedAt'
  | 'posts.updatedAt'
  | 'posts.author.velogId'
  | 'posts.author.velogUrl'
  | 'posts.author.username'
  | 'posts.author.displayName'
  | 'posts.author.bio'
  | 'posts.author.aboutHtml'
  | 'posts.author.isCertified'
  | 'posts.author.thumbnail.sourceInstanceName'
  | 'posts.author.thumbnail.absolutePath'
  | 'posts.author.thumbnail.relativePath'
  | 'posts.author.thumbnail.extension'
  | 'posts.author.thumbnail.size'
  | 'posts.author.thumbnail.prettySize'
  | 'posts.author.thumbnail.modifiedTime'
  | 'posts.author.thumbnail.accessTime'
  | 'posts.author.thumbnail.changeTime'
  | 'posts.author.thumbnail.birthTime'
  | 'posts.author.thumbnail.root'
  | 'posts.author.thumbnail.dir'
  | 'posts.author.thumbnail.base'
  | 'posts.author.thumbnail.ext'
  | 'posts.author.thumbnail.name'
  | 'posts.author.thumbnail.relativeDirectory'
  | 'posts.author.thumbnail.dev'
  | 'posts.author.thumbnail.mode'
  | 'posts.author.thumbnail.nlink'
  | 'posts.author.thumbnail.uid'
  | 'posts.author.thumbnail.gid'
  | 'posts.author.thumbnail.rdev'
  | 'posts.author.thumbnail.ino'
  | 'posts.author.thumbnail.atimeMs'
  | 'posts.author.thumbnail.mtimeMs'
  | 'posts.author.thumbnail.ctimeMs'
  | 'posts.author.thumbnail.atime'
  | 'posts.author.thumbnail.mtime'
  | 'posts.author.thumbnail.ctime'
  | 'posts.author.thumbnail.birthtime'
  | 'posts.author.thumbnail.birthtimeMs'
  | 'posts.author.thumbnail.blksize'
  | 'posts.author.thumbnail.blocks'
  | 'posts.author.thumbnail.url'
  | 'posts.author.thumbnail.publicURL'
  | 'posts.author.thumbnail.childrenImageSharp'
  | 'posts.author.thumbnail.id'
  | 'posts.author.thumbnail.children'
  | 'posts.author.socialProfile.url'
  | 'posts.author.socialProfile.email'
  | 'posts.author.socialProfile.github'
  | 'posts.author.socialProfile.facebook'
  | 'posts.author.socialProfile.twitter'
  | 'posts.author.posts'
  | 'posts.author.posts.velogId'
  | 'posts.author.posts.velogUrl'
  | 'posts.author.posts.slug'
  | 'posts.author.posts.title'
  | 'posts.author.posts.rawContent'
  | 'posts.author.posts.shortDescription'
  | 'posts.author.posts.thumbnail'
  | 'posts.author.posts.publishedAt'
  | 'posts.author.posts.updatedAt'
  | 'posts.author.posts.tags'
  | 'posts.author.posts.isMarkdown'
  | 'posts.author.posts.childrenMarkdownRemark'
  | 'posts.author.posts.childrenMdx'
  | 'posts.author.posts.id'
  | 'posts.author.posts.children'
  | 'posts.author.id'
  | 'posts.author.parent.id'
  | 'posts.author.parent.children'
  | 'posts.author.children'
  | 'posts.author.children.id'
  | 'posts.author.children.children'
  | 'posts.author.internal.content'
  | 'posts.author.internal.contentDigest'
  | 'posts.author.internal.description'
  | 'posts.author.internal.fieldOwners'
  | 'posts.author.internal.ignoreType'
  | 'posts.author.internal.mediaType'
  | 'posts.author.internal.owner'
  | 'posts.author.internal.type'
  | 'posts.tags'
  | 'posts.tags.velogId'
  | 'posts.tags.velogUrl'
  | 'posts.tags.owner.velogId'
  | 'posts.tags.owner.velogUrl'
  | 'posts.tags.owner.username'
  | 'posts.tags.owner.displayName'
  | 'posts.tags.owner.bio'
  | 'posts.tags.owner.aboutHtml'
  | 'posts.tags.owner.isCertified'
  | 'posts.tags.owner.posts'
  | 'posts.tags.owner.id'
  | 'posts.tags.owner.children'
  | 'posts.tags.name'
  | 'posts.tags.description'
  | 'posts.tags.thumbnail.sourceInstanceName'
  | 'posts.tags.thumbnail.absolutePath'
  | 'posts.tags.thumbnail.relativePath'
  | 'posts.tags.thumbnail.extension'
  | 'posts.tags.thumbnail.size'
  | 'posts.tags.thumbnail.prettySize'
  | 'posts.tags.thumbnail.modifiedTime'
  | 'posts.tags.thumbnail.accessTime'
  | 'posts.tags.thumbnail.changeTime'
  | 'posts.tags.thumbnail.birthTime'
  | 'posts.tags.thumbnail.root'
  | 'posts.tags.thumbnail.dir'
  | 'posts.tags.thumbnail.base'
  | 'posts.tags.thumbnail.ext'
  | 'posts.tags.thumbnail.name'
  | 'posts.tags.thumbnail.relativeDirectory'
  | 'posts.tags.thumbnail.dev'
  | 'posts.tags.thumbnail.mode'
  | 'posts.tags.thumbnail.nlink'
  | 'posts.tags.thumbnail.uid'
  | 'posts.tags.thumbnail.gid'
  | 'posts.tags.thumbnail.rdev'
  | 'posts.tags.thumbnail.ino'
  | 'posts.tags.thumbnail.atimeMs'
  | 'posts.tags.thumbnail.mtimeMs'
  | 'posts.tags.thumbnail.ctimeMs'
  | 'posts.tags.thumbnail.atime'
  | 'posts.tags.thumbnail.mtime'
  | 'posts.tags.thumbnail.ctime'
  | 'posts.tags.thumbnail.birthtime'
  | 'posts.tags.thumbnail.birthtimeMs'
  | 'posts.tags.thumbnail.blksize'
  | 'posts.tags.thumbnail.blocks'
  | 'posts.tags.thumbnail.url'
  | 'posts.tags.thumbnail.publicURL'
  | 'posts.tags.thumbnail.childrenImageSharp'
  | 'posts.tags.thumbnail.id'
  | 'posts.tags.thumbnail.children'
  | 'posts.tags.posts'
  | 'posts.tags.posts.velogId'
  | 'posts.tags.posts.velogUrl'
  | 'posts.tags.posts.slug'
  | 'posts.tags.posts.title'
  | 'posts.tags.posts.rawContent'
  | 'posts.tags.posts.shortDescription'
  | 'posts.tags.posts.thumbnail'
  | 'posts.tags.posts.publishedAt'
  | 'posts.tags.posts.updatedAt'
  | 'posts.tags.posts.tags'
  | 'posts.tags.posts.isMarkdown'
  | 'posts.tags.posts.childrenMarkdownRemark'
  | 'posts.tags.posts.childrenMdx'
  | 'posts.tags.posts.id'
  | 'posts.tags.posts.children'
  | 'posts.tags.id'
  | 'posts.tags.parent.id'
  | 'posts.tags.parent.children'
  | 'posts.tags.children'
  | 'posts.tags.children.id'
  | 'posts.tags.children.children'
  | 'posts.tags.internal.content'
  | 'posts.tags.internal.contentDigest'
  | 'posts.tags.internal.description'
  | 'posts.tags.internal.fieldOwners'
  | 'posts.tags.internal.ignoreType'
  | 'posts.tags.internal.mediaType'
  | 'posts.tags.internal.owner'
  | 'posts.tags.internal.type'
  | 'posts.series.index'
  | 'posts.series.node.velogId'
  | 'posts.series.node.velogUrl'
  | 'posts.series.node.name'
  | 'posts.series.node.description'
  | 'posts.series.node.slug'
  | 'posts.series.node.posts'
  | 'posts.series.node.id'
  | 'posts.series.node.children'
  | 'posts.series.velogId'
  | 'posts.series.seriesPosts'
  | 'posts.series.seriesPosts.index'
  | 'posts.isMarkdown'
  | 'posts.childrenMarkdownRemark'
  | 'posts.childrenMarkdownRemark.id'
  | 'posts.childrenMarkdownRemark.frontmatter.title'
  | 'posts.childrenMarkdownRemark.excerpt'
  | 'posts.childrenMarkdownRemark.rawMarkdownBody'
  | 'posts.childrenMarkdownRemark.html'
  | 'posts.childrenMarkdownRemark.htmlAst'
  | 'posts.childrenMarkdownRemark.excerptAst'
  | 'posts.childrenMarkdownRemark.headings'
  | 'posts.childrenMarkdownRemark.headings.id'
  | 'posts.childrenMarkdownRemark.headings.value'
  | 'posts.childrenMarkdownRemark.headings.depth'
  | 'posts.childrenMarkdownRemark.timeToRead'
  | 'posts.childrenMarkdownRemark.tableOfContents'
  | 'posts.childrenMarkdownRemark.wordCount.paragraphs'
  | 'posts.childrenMarkdownRemark.wordCount.sentences'
  | 'posts.childrenMarkdownRemark.wordCount.words'
  | 'posts.childrenMarkdownRemark.parent.id'
  | 'posts.childrenMarkdownRemark.parent.children'
  | 'posts.childrenMarkdownRemark.children'
  | 'posts.childrenMarkdownRemark.children.id'
  | 'posts.childrenMarkdownRemark.children.children'
  | 'posts.childrenMarkdownRemark.internal.content'
  | 'posts.childrenMarkdownRemark.internal.contentDigest'
  | 'posts.childrenMarkdownRemark.internal.description'
  | 'posts.childrenMarkdownRemark.internal.fieldOwners'
  | 'posts.childrenMarkdownRemark.internal.ignoreType'
  | 'posts.childrenMarkdownRemark.internal.mediaType'
  | 'posts.childrenMarkdownRemark.internal.owner'
  | 'posts.childrenMarkdownRemark.internal.type'
  | 'posts.childMarkdownRemark.id'
  | 'posts.childMarkdownRemark.frontmatter.title'
  | 'posts.childMarkdownRemark.excerpt'
  | 'posts.childMarkdownRemark.rawMarkdownBody'
  | 'posts.childMarkdownRemark.html'
  | 'posts.childMarkdownRemark.htmlAst'
  | 'posts.childMarkdownRemark.excerptAst'
  | 'posts.childMarkdownRemark.headings'
  | 'posts.childMarkdownRemark.headings.id'
  | 'posts.childMarkdownRemark.headings.value'
  | 'posts.childMarkdownRemark.headings.depth'
  | 'posts.childMarkdownRemark.timeToRead'
  | 'posts.childMarkdownRemark.tableOfContents'
  | 'posts.childMarkdownRemark.wordCount.paragraphs'
  | 'posts.childMarkdownRemark.wordCount.sentences'
  | 'posts.childMarkdownRemark.wordCount.words'
  | 'posts.childMarkdownRemark.parent.id'
  | 'posts.childMarkdownRemark.parent.children'
  | 'posts.childMarkdownRemark.children'
  | 'posts.childMarkdownRemark.children.id'
  | 'posts.childMarkdownRemark.children.children'
  | 'posts.childMarkdownRemark.internal.content'
  | 'posts.childMarkdownRemark.internal.contentDigest'
  | 'posts.childMarkdownRemark.internal.description'
  | 'posts.childMarkdownRemark.internal.fieldOwners'
  | 'posts.childMarkdownRemark.internal.ignoreType'
  | 'posts.childMarkdownRemark.internal.mediaType'
  | 'posts.childMarkdownRemark.internal.owner'
  | 'posts.childMarkdownRemark.internal.type'
  | 'posts.childrenMdx'
  | 'posts.childrenMdx.rawBody'
  | 'posts.childrenMdx.fileAbsolutePath'
  | 'posts.childrenMdx.frontmatter.title'
  | 'posts.childrenMdx.slug'
  | 'posts.childrenMdx.body'
  | 'posts.childrenMdx.excerpt'
  | 'posts.childrenMdx.headings'
  | 'posts.childrenMdx.headings.value'
  | 'posts.childrenMdx.headings.depth'
  | 'posts.childrenMdx.html'
  | 'posts.childrenMdx.mdxAST'
  | 'posts.childrenMdx.tableOfContents'
  | 'posts.childrenMdx.timeToRead'
  | 'posts.childrenMdx.wordCount.paragraphs'
  | 'posts.childrenMdx.wordCount.sentences'
  | 'posts.childrenMdx.wordCount.words'
  | 'posts.childrenMdx.id'
  | 'posts.childrenMdx.parent.id'
  | 'posts.childrenMdx.parent.children'
  | 'posts.childrenMdx.children'
  | 'posts.childrenMdx.children.id'
  | 'posts.childrenMdx.children.children'
  | 'posts.childrenMdx.internal.content'
  | 'posts.childrenMdx.internal.contentDigest'
  | 'posts.childrenMdx.internal.description'
  | 'posts.childrenMdx.internal.fieldOwners'
  | 'posts.childrenMdx.internal.ignoreType'
  | 'posts.childrenMdx.internal.mediaType'
  | 'posts.childrenMdx.internal.owner'
  | 'posts.childrenMdx.internal.type'
  | 'posts.childMdx.rawBody'
  | 'posts.childMdx.fileAbsolutePath'
  | 'posts.childMdx.frontmatter.title'
  | 'posts.childMdx.slug'
  | 'posts.childMdx.body'
  | 'posts.childMdx.excerpt'
  | 'posts.childMdx.headings'
  | 'posts.childMdx.headings.value'
  | 'posts.childMdx.headings.depth'
  | 'posts.childMdx.html'
  | 'posts.childMdx.mdxAST'
  | 'posts.childMdx.tableOfContents'
  | 'posts.childMdx.timeToRead'
  | 'posts.childMdx.wordCount.paragraphs'
  | 'posts.childMdx.wordCount.sentences'
  | 'posts.childMdx.wordCount.words'
  | 'posts.childMdx.id'
  | 'posts.childMdx.parent.id'
  | 'posts.childMdx.parent.children'
  | 'posts.childMdx.children'
  | 'posts.childMdx.children.id'
  | 'posts.childMdx.children.children'
  | 'posts.childMdx.internal.content'
  | 'posts.childMdx.internal.contentDigest'
  | 'posts.childMdx.internal.description'
  | 'posts.childMdx.internal.fieldOwners'
  | 'posts.childMdx.internal.ignoreType'
  | 'posts.childMdx.internal.mediaType'
  | 'posts.childMdx.internal.owner'
  | 'posts.childMdx.internal.type'
  | 'posts.id'
  | 'posts.parent.id'
  | 'posts.parent.parent.id'
  | 'posts.parent.parent.children'
  | 'posts.parent.children'
  | 'posts.parent.children.id'
  | 'posts.parent.children.children'
  | 'posts.parent.internal.content'
  | 'posts.parent.internal.contentDigest'
  | 'posts.parent.internal.description'
  | 'posts.parent.internal.fieldOwners'
  | 'posts.parent.internal.ignoreType'
  | 'posts.parent.internal.mediaType'
  | 'posts.parent.internal.owner'
  | 'posts.parent.internal.type'
  | 'posts.children'
  | 'posts.children.id'
  | 'posts.children.parent.id'
  | 'posts.children.parent.children'
  | 'posts.children.children'
  | 'posts.children.children.id'
  | 'posts.children.children.children'
  | 'posts.children.internal.content'
  | 'posts.children.internal.contentDigest'
  | 'posts.children.internal.description'
  | 'posts.children.internal.fieldOwners'
  | 'posts.children.internal.ignoreType'
  | 'posts.children.internal.mediaType'
  | 'posts.children.internal.owner'
  | 'posts.children.internal.type'
  | 'posts.internal.content'
  | 'posts.internal.contentDigest'
  | 'posts.internal.description'
  | 'posts.internal.fieldOwners'
  | 'posts.internal.ignoreType'
  | 'posts.internal.mediaType'
  | 'posts.internal.owner'
  | 'posts.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type VelogSeriesGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<VelogSeriesEdge>;
  readonly nodes: ReadonlyArray<VelogSeries>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<VelogSeriesGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type VelogSeriesGroupConnection_distinctArgs = {
  field: VelogSeriesFieldsEnum;
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


type VelogSeriesGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: VelogSeriesFieldsEnum;
};

type VelogSeriesSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<VelogSeriesFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
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


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
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


type MarkdownRemarkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
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


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter.title'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings.value'
  | 'headings.depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MdxGroupConnection_distinctArgs = {
  field: MdxFieldsEnum;
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


type MdxGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
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


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
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


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}