// This was generated. Do not edit.
// deno-lint-ignore-file
// deno-fmt-ignore-file

export class Class {
}

export class Error extends Class {
  "@type" = "error"
  code: number;
  message: string;

  constructor(params: { code: number, message: string }) {
    super();
    this.code = params.code;
    this.message = params.message;
  }
}

export class Ok extends Class {
  "@type" = "ok"

  constructor(params: {}) {
    super();
  }
}

export class TdlibParameters extends Class {
  "@type" = "tdlibParameters"
  api_hash: string;
  api_id: number;
  application_version: string;
  database_directory: string;
  device_model: string;
  enable_storage_optimizer: boolean;
  files_directory: string;
  ignore_file_names: boolean;
  system_language_code: string;
  system_version: string;
  use_chat_info_database: boolean;
  use_file_database: boolean;
  use_message_database: boolean;
  use_secret_chats: boolean;
  use_test_dc: boolean;

  constructor(params: { api_hash: string, api_id: number, application_version: string, database_directory: string, device_model: string, enable_storage_optimizer: boolean, files_directory: string, ignore_file_names: boolean, system_language_code: string, system_version: string, use_chat_info_database: boolean, use_file_database: boolean, use_message_database: boolean, use_secret_chats: boolean, use_test_dc: boolean }) {
    super();
    this.api_hash = params.api_hash;
    this.api_id = params.api_id;
    this.application_version = params.application_version;
    this.database_directory = params.database_directory;
    this.device_model = params.device_model;
    this.enable_storage_optimizer = params.enable_storage_optimizer;
    this.files_directory = params.files_directory;
    this.ignore_file_names = params.ignore_file_names;
    this.system_language_code = params.system_language_code;
    this.system_version = params.system_version;
    this.use_chat_info_database = params.use_chat_info_database;
    this.use_file_database = params.use_file_database;
    this.use_message_database = params.use_message_database;
    this.use_secret_chats = params.use_secret_chats;
    this.use_test_dc = params.use_test_dc;
  }
}

/**
 * Provides information about the method by which an authentication code is delivered to the user
 */
export class AuthenticationCodeType extends Class {
}

export class AuthenticationCodeTypeTelegramMessage extends AuthenticationCodeType {
  "@type" = "authenticationCodeTypeTelegramMessage"
  length: number;

  constructor(params: { length: number }) {
    super();
    this.length = params.length;
  }
}

export class AuthenticationCodeTypeSms extends AuthenticationCodeType {
  "@type" = "authenticationCodeTypeSms"
  length: number;

  constructor(params: { length: number }) {
    super();
    this.length = params.length;
  }
}

export class AuthenticationCodeTypeCall extends AuthenticationCodeType {
  "@type" = "authenticationCodeTypeCall"
  length: number;

  constructor(params: { length: number }) {
    super();
    this.length = params.length;
  }
}

export class AuthenticationCodeTypeFlashCall extends AuthenticationCodeType {
  "@type" = "authenticationCodeTypeFlashCall"
  pattern: string;

  constructor(params: { pattern: string }) {
    super();
    this.pattern = params.pattern;
  }
}

export class AuthenticationCodeTypeMissedCall extends AuthenticationCodeType {
  "@type" = "authenticationCodeTypeMissedCall"
  length: number;
  phone_number_prefix: string;

  constructor(params: { length: number, phone_number_prefix: string }) {
    super();
    this.length = params.length;
    this.phone_number_prefix = params.phone_number_prefix;
  }
}

export class AuthenticationCodeInfo extends Class {
  "@type" = "authenticationCodeInfo"
  next_type: AuthenticationCodeType;
  phone_number: string;
  timeout: number;
  type: AuthenticationCodeType;

  constructor(params: { next_type: AuthenticationCodeType, phone_number: string, timeout: number, type: AuthenticationCodeType }) {
    super();
    this.next_type = params.next_type;
    this.phone_number = params.phone_number;
    this.timeout = params.timeout;
    this.type = params.type;
  }
}

export class EmailAddressAuthenticationCodeInfo extends Class {
  "@type" = "emailAddressAuthenticationCodeInfo"
  email_address_pattern: string;
  length: number;

  constructor(params: { email_address_pattern: string, length: number }) {
    super();
    this.email_address_pattern = params.email_address_pattern;
    this.length = params.length;
  }
}

export class TextEntity extends Class {
  "@type" = "textEntity"
  length: number;
  offset: number;
  type: TextEntityType;

  constructor(params: { length: number, offset: number, type: TextEntityType }) {
    super();
    this.length = params.length;
    this.offset = params.offset;
    this.type = params.type;
  }
}

export class TextEntities extends Class {
  "@type" = "textEntities"
  entities: TextEntity[];

  constructor(params: { entities: TextEntity[] }) {
    super();
    this.entities = params.entities;
  }
}

export class FormattedText extends Class {
  "@type" = "formattedText"
  entities: TextEntity[];
  text: string;

  constructor(params: { entities: TextEntity[], text: string }) {
    super();
    this.entities = params.entities;
    this.text = params.text;
  }
}

export class TermsOfService extends Class {
  "@type" = "termsOfService"
  min_user_age: number;
  show_popup: boolean;
  text: FormattedText;

  constructor(params: { min_user_age: number, show_popup: boolean, text: FormattedText }) {
    super();
    this.min_user_age = params.min_user_age;
    this.show_popup = params.show_popup;
    this.text = params.text;
  }
}

/**
 * Represents the current authorization state of the TDLib client
 */
export class AuthorizationState extends Class {
}

export class AuthorizationStateWaitTdlibParameters extends AuthorizationState {
  "@type" = "authorizationStateWaitTdlibParameters"

  constructor(params: {}) {
    super();
  }
}

export class AuthorizationStateWaitEncryptionKey extends AuthorizationState {
  "@type" = "authorizationStateWaitEncryptionKey"
  is_encrypted: boolean;

  constructor(params: { is_encrypted: boolean }) {
    super();
    this.is_encrypted = params.is_encrypted;
  }
}

export class AuthorizationStateWaitPhoneNumber extends AuthorizationState {
  "@type" = "authorizationStateWaitPhoneNumber"

  constructor(params: {}) {
    super();
  }
}

export class AuthorizationStateWaitCode extends AuthorizationState {
  "@type" = "authorizationStateWaitCode"
  code_info: AuthenticationCodeInfo;

  constructor(params: { code_info: AuthenticationCodeInfo }) {
    super();
    this.code_info = params.code_info;
  }
}

export class AuthorizationStateWaitOtherDeviceConfirmation extends AuthorizationState {
  "@type" = "authorizationStateWaitOtherDeviceConfirmation"
  link: string;

  constructor(params: { link: string }) {
    super();
    this.link = params.link;
  }
}

export class AuthorizationStateWaitRegistration extends AuthorizationState {
  "@type" = "authorizationStateWaitRegistration"
  terms_of_service: TermsOfService;

  constructor(params: { terms_of_service: TermsOfService }) {
    super();
    this.terms_of_service = params.terms_of_service;
  }
}

export class AuthorizationStateWaitPassword extends AuthorizationState {
  "@type" = "authorizationStateWaitPassword"
  has_recovery_email_address: boolean;
  password_hint: string;
  recovery_email_address_pattern: string;

  constructor(params: { has_recovery_email_address: boolean, password_hint: string, recovery_email_address_pattern: string }) {
    super();
    this.has_recovery_email_address = params.has_recovery_email_address;
    this.password_hint = params.password_hint;
    this.recovery_email_address_pattern = params.recovery_email_address_pattern;
  }
}

export class AuthorizationStateReady extends AuthorizationState {
  "@type" = "authorizationStateReady"

  constructor(params: {}) {
    super();
  }
}

export class AuthorizationStateLoggingOut extends AuthorizationState {
  "@type" = "authorizationStateLoggingOut"

  constructor(params: {}) {
    super();
  }
}

export class AuthorizationStateClosing extends AuthorizationState {
  "@type" = "authorizationStateClosing"

  constructor(params: {}) {
    super();
  }
}

export class AuthorizationStateClosed extends AuthorizationState {
  "@type" = "authorizationStateClosed"

  constructor(params: {}) {
    super();
  }
}

export class PasswordState extends Class {
  "@type" = "passwordState"
  has_passport_data: boolean;
  has_password: boolean;
  has_recovery_email_address: boolean;
  password_hint: string;
  pending_reset_date: number;
  recovery_email_address_code_info?: EmailAddressAuthenticationCodeInfo;

  constructor(params: { has_passport_data: boolean, has_password: boolean, has_recovery_email_address: boolean, password_hint: string, pending_reset_date: number, recovery_email_address_code_info?: EmailAddressAuthenticationCodeInfo }) {
    super();
    this.has_passport_data = params.has_passport_data;
    this.has_password = params.has_password;
    this.has_recovery_email_address = params.has_recovery_email_address;
    this.password_hint = params.password_hint;
    this.pending_reset_date = params.pending_reset_date;
    this.recovery_email_address_code_info = params.recovery_email_address_code_info;
  }
}

export class RecoveryEmailAddress extends Class {
  "@type" = "recoveryEmailAddress"
  recovery_email_address: string;

  constructor(params: { recovery_email_address: string }) {
    super();
    this.recovery_email_address = params.recovery_email_address;
  }
}

export class TemporaryPasswordState extends Class {
  "@type" = "temporaryPasswordState"
  has_password: boolean;
  valid_for: number;

  constructor(params: { has_password: boolean, valid_for: number }) {
    super();
    this.has_password = params.has_password;
    this.valid_for = params.valid_for;
  }
}

export class LocalFile extends Class {
  "@type" = "localFile"
  can_be_deleted: boolean;
  can_be_downloaded: boolean;
  download_offset: number;
  downloaded_prefix_size: number;
  downloaded_size: number;
  is_downloading_active: boolean;
  is_downloading_completed: boolean;
  path: string;

  constructor(params: { can_be_deleted: boolean, can_be_downloaded: boolean, download_offset: number, downloaded_prefix_size: number, downloaded_size: number, is_downloading_active: boolean, is_downloading_completed: boolean, path: string }) {
    super();
    this.can_be_deleted = params.can_be_deleted;
    this.can_be_downloaded = params.can_be_downloaded;
    this.download_offset = params.download_offset;
    this.downloaded_prefix_size = params.downloaded_prefix_size;
    this.downloaded_size = params.downloaded_size;
    this.is_downloading_active = params.is_downloading_active;
    this.is_downloading_completed = params.is_downloading_completed;
    this.path = params.path;
  }
}

export class RemoteFile extends Class {
  "@type" = "remoteFile"
  id: string;
  is_uploading_active: boolean;
  is_uploading_completed: boolean;
  unique_id: string;
  uploaded_size: number;

  constructor(params: { id: string, is_uploading_active: boolean, is_uploading_completed: boolean, unique_id: string, uploaded_size: number }) {
    super();
    this.id = params.id;
    this.is_uploading_active = params.is_uploading_active;
    this.is_uploading_completed = params.is_uploading_completed;
    this.unique_id = params.unique_id;
    this.uploaded_size = params.uploaded_size;
  }
}

export class File extends Class {
  "@type" = "file"
  expected_size: number;
  id: number;
  local: LocalFile;
  remote: RemoteFile;
  size: number;

  constructor(params: { expected_size: number, id: number, local: LocalFile, remote: RemoteFile, size: number }) {
    super();
    this.expected_size = params.expected_size;
    this.id = params.id;
    this.local = params.local;
    this.remote = params.remote;
    this.size = params.size;
  }
}

/**
 * Points to a file
 */
export class InputFile extends Class {
}

export class InputFileId extends InputFile {
  "@type" = "inputFileId"
  id: number;

  constructor(params: { id: number }) {
    super();
    this.id = params.id;
  }
}

export class InputFileRemote extends InputFile {
  "@type" = "inputFileRemote"
  id: string;

  constructor(params: { id: string }) {
    super();
    this.id = params.id;
  }
}

export class InputFileLocal extends InputFile {
  "@type" = "inputFileLocal"
  path: string;

  constructor(params: { path: string }) {
    super();
    this.path = params.path;
  }
}

export class InputFileGenerated extends InputFile {
  "@type" = "inputFileGenerated"
  conversion: string;
  expected_size: number;
  original_path: string;

  constructor(params: { conversion: string, expected_size: number, original_path: string }) {
    super();
    this.conversion = params.conversion;
    this.expected_size = params.expected_size;
    this.original_path = params.original_path;
  }
}

export class PhotoSize extends Class {
  "@type" = "photoSize"
  height: number;
  photo: File;
  progressive_sizes: number[];
  type: string;
  width: number;

  constructor(params: { height: number, photo: File, progressive_sizes: number[], type: string, width: number }) {
    super();
    this.height = params.height;
    this.photo = params.photo;
    this.progressive_sizes = params.progressive_sizes;
    this.type = params.type;
    this.width = params.width;
  }
}

export class Minithumbnail extends Class {
  "@type" = "minithumbnail"
  data: string;
  height: number;
  width: number;

  constructor(params: { data: string, height: number, width: number }) {
    super();
    this.data = params.data;
    this.height = params.height;
    this.width = params.width;
  }
}

/**
 * Describes format of a thumbnail
 */
export class ThumbnailFormat extends Class {
}

export class ThumbnailFormatJpeg extends ThumbnailFormat {
  "@type" = "thumbnailFormatJpeg"

  constructor(params: {}) {
    super();
  }
}

export class ThumbnailFormatGif extends ThumbnailFormat {
  "@type" = "thumbnailFormatGif"

  constructor(params: {}) {
    super();
  }
}

export class ThumbnailFormatMpeg4 extends ThumbnailFormat {
  "@type" = "thumbnailFormatMpeg4"

  constructor(params: {}) {
    super();
  }
}

export class ThumbnailFormatPng extends ThumbnailFormat {
  "@type" = "thumbnailFormatPng"

  constructor(params: {}) {
    super();
  }
}

export class ThumbnailFormatTgs extends ThumbnailFormat {
  "@type" = "thumbnailFormatTgs"

  constructor(params: {}) {
    super();
  }
}

export class ThumbnailFormatWebm extends ThumbnailFormat {
  "@type" = "thumbnailFormatWebm"

  constructor(params: {}) {
    super();
  }
}

export class ThumbnailFormatWebp extends ThumbnailFormat {
  "@type" = "thumbnailFormatWebp"

  constructor(params: {}) {
    super();
  }
}

export class Thumbnail extends Class {
  "@type" = "thumbnail"
  file: File;
  format: ThumbnailFormat;
  height: number;
  width: number;

  constructor(params: { file: File, format: ThumbnailFormat, height: number, width: number }) {
    super();
    this.file = params.file;
    this.format = params.format;
    this.height = params.height;
    this.width = params.width;
  }
}

/**
 * Part of the face, relative to which a mask is placed
 */
export class MaskPoint extends Class {
}

export class MaskPointForehead extends MaskPoint {
  "@type" = "maskPointForehead"

  constructor(params: {}) {
    super();
  }
}

export class MaskPointEyes extends MaskPoint {
  "@type" = "maskPointEyes"

  constructor(params: {}) {
    super();
  }
}

export class MaskPointMouth extends MaskPoint {
  "@type" = "maskPointMouth"

  constructor(params: {}) {
    super();
  }
}

export class MaskPointChin extends MaskPoint {
  "@type" = "maskPointChin"

  constructor(params: {}) {
    super();
  }
}

export class MaskPosition extends Class {
  "@type" = "maskPosition"
  point: MaskPoint;
  scale: number;
  x_shift: number;
  y_shift: number;

  constructor(params: { point: MaskPoint, scale: number, x_shift: number, y_shift: number }) {
    super();
    this.point = params.point;
    this.scale = params.scale;
    this.x_shift = params.x_shift;
    this.y_shift = params.y_shift;
  }
}

/**
 * Describes format of a sticker
 */
export class StickerFormat extends Class {
}

export class StickerFormatWebp extends StickerFormat {
  "@type" = "stickerFormatWebp"

  constructor(params: {}) {
    super();
  }
}

export class StickerFormatTgs extends StickerFormat {
  "@type" = "stickerFormatTgs"

  constructor(params: {}) {
    super();
  }
}

export class StickerFormatWebm extends StickerFormat {
  "@type" = "stickerFormatWebm"

  constructor(params: {}) {
    super();
  }
}

/**
 * Describes type of a sticker
 */
export class StickerType extends Class {
}

export class StickerTypeRegular extends StickerType {
  "@type" = "stickerTypeRegular"

  constructor(params: {}) {
    super();
  }
}

export class StickerTypeMask extends StickerType {
  "@type" = "stickerTypeMask"

  constructor(params: {}) {
    super();
  }
}

export class StickerTypeCustomEmoji extends StickerType {
  "@type" = "stickerTypeCustomEmoji"

  constructor(params: {}) {
    super();
  }
}

export class ClosedVectorPath extends Class {
  "@type" = "closedVectorPath"
  commands: VectorPathCommand[];

  constructor(params: { commands: VectorPathCommand[] }) {
    super();
    this.commands = params.commands;
  }
}

export class PollOption extends Class {
  "@type" = "pollOption"
  is_being_chosen: boolean;
  is_chosen: boolean;
  text: string;
  vote_percentage: number;
  voter_count: number;

  constructor(params: { is_being_chosen: boolean, is_chosen: boolean, text: string, vote_percentage: number, voter_count: number }) {
    super();
    this.is_being_chosen = params.is_being_chosen;
    this.is_chosen = params.is_chosen;
    this.text = params.text;
    this.vote_percentage = params.vote_percentage;
    this.voter_count = params.voter_count;
  }
}

/**
 * Describes the type of a poll
 */
export class PollType extends Class {
}

export class PollTypeRegular extends PollType {
  "@type" = "pollTypeRegular"
  allow_multiple_answers: boolean;

  constructor(params: { allow_multiple_answers: boolean }) {
    super();
    this.allow_multiple_answers = params.allow_multiple_answers;
  }
}

export class PollTypeQuiz extends PollType {
  "@type" = "pollTypeQuiz"
  correct_option_id: number;
  explanation: FormattedText;

  constructor(params: { correct_option_id: number, explanation: FormattedText }) {
    super();
    this.correct_option_id = params.correct_option_id;
    this.explanation = params.explanation;
  }
}

export class Animation extends Class {
  "@type" = "animation"
  animation: File;
  duration: number;
  file_name: string;
  has_stickers: boolean;
  height: number;
  mime_type: string;
  minithumbnail?: Minithumbnail;
  thumbnail?: Thumbnail;
  width: number;

  constructor(params: { animation: File, duration: number, file_name: string, has_stickers: boolean, height: number, mime_type: string, minithumbnail?: Minithumbnail, thumbnail?: Thumbnail, width: number }) {
    super();
    this.animation = params.animation;
    this.duration = params.duration;
    this.file_name = params.file_name;
    this.has_stickers = params.has_stickers;
    this.height = params.height;
    this.mime_type = params.mime_type;
    this.minithumbnail = params.minithumbnail;
    this.thumbnail = params.thumbnail;
    this.width = params.width;
  }
}

export class Audio extends Class {
  "@type" = "audio"
  album_cover_minithumbnail?: Minithumbnail;
  album_cover_thumbnail?: Thumbnail;
  audio: File;
  duration: number;
  external_album_covers: Thumbnail[];
  file_name: string;
  mime_type: string;
  performer: string;
  title: string;

  constructor(params: { album_cover_minithumbnail?: Minithumbnail, album_cover_thumbnail?: Thumbnail, audio: File, duration: number, external_album_covers: Thumbnail[], file_name: string, mime_type: string, performer: string, title: string }) {
    super();
    this.album_cover_minithumbnail = params.album_cover_minithumbnail;
    this.album_cover_thumbnail = params.album_cover_thumbnail;
    this.audio = params.audio;
    this.duration = params.duration;
    this.external_album_covers = params.external_album_covers;
    this.file_name = params.file_name;
    this.mime_type = params.mime_type;
    this.performer = params.performer;
    this.title = params.title;
  }
}

export class Document extends Class {
  "@type" = "document"
  document: File;
  file_name: string;
  mime_type: string;
  minithumbnail?: Minithumbnail;
  thumbnail?: Thumbnail;

  constructor(params: { document: File, file_name: string, mime_type: string, minithumbnail?: Minithumbnail, thumbnail?: Thumbnail }) {
    super();
    this.document = params.document;
    this.file_name = params.file_name;
    this.mime_type = params.mime_type;
    this.minithumbnail = params.minithumbnail;
    this.thumbnail = params.thumbnail;
  }
}

export class Photo extends Class {
  "@type" = "photo"
  has_stickers: boolean;
  minithumbnail?: Minithumbnail;
  sizes: PhotoSize[];

  constructor(params: { has_stickers: boolean, minithumbnail?: Minithumbnail, sizes: PhotoSize[] }) {
    super();
    this.has_stickers = params.has_stickers;
    this.minithumbnail = params.minithumbnail;
    this.sizes = params.sizes;
  }
}

export class Sticker extends Class {
  "@type" = "sticker"
  custom_emoji_id: number;
  emoji: string;
  format: StickerFormat;
  height: number;
  is_premium: boolean;
  mask_position?: MaskPosition;
  outline: ClosedVectorPath[];
  premium_animation?: File;
  set_id: number;
  sticker: File;
  thumbnail?: Thumbnail;
  type: StickerType;
  width: number;

  constructor(params: { custom_emoji_id: number, emoji: string, format: StickerFormat, height: number, is_premium: boolean, mask_position?: MaskPosition, outline: ClosedVectorPath[], premium_animation?: File, set_id: number, sticker: File, thumbnail?: Thumbnail, type: StickerType, width: number }) {
    super();
    this.custom_emoji_id = params.custom_emoji_id;
    this.emoji = params.emoji;
    this.format = params.format;
    this.height = params.height;
    this.is_premium = params.is_premium;
    this.mask_position = params.mask_position;
    this.outline = params.outline;
    this.premium_animation = params.premium_animation;
    this.set_id = params.set_id;
    this.sticker = params.sticker;
    this.thumbnail = params.thumbnail;
    this.type = params.type;
    this.width = params.width;
  }
}

export class Video extends Class {
  "@type" = "video"
  duration: number;
  file_name: string;
  has_stickers: boolean;
  height: number;
  mime_type: string;
  minithumbnail?: Minithumbnail;
  supports_streaming: boolean;
  thumbnail?: Thumbnail;
  video: File;
  width: number;

  constructor(params: { duration: number, file_name: string, has_stickers: boolean, height: number, mime_type: string, minithumbnail?: Minithumbnail, supports_streaming: boolean, thumbnail?: Thumbnail, video: File, width: number }) {
    super();
    this.duration = params.duration;
    this.file_name = params.file_name;
    this.has_stickers = params.has_stickers;
    this.height = params.height;
    this.mime_type = params.mime_type;
    this.minithumbnail = params.minithumbnail;
    this.supports_streaming = params.supports_streaming;
    this.thumbnail = params.thumbnail;
    this.video = params.video;
    this.width = params.width;
  }
}

export class VideoNote extends Class {
  "@type" = "videoNote"
  duration: number;
  length: number;
  minithumbnail?: Minithumbnail;
  thumbnail?: Thumbnail;
  video: File;

  constructor(params: { duration: number, length: number, minithumbnail?: Minithumbnail, thumbnail?: Thumbnail, video: File }) {
    super();
    this.duration = params.duration;
    this.length = params.length;
    this.minithumbnail = params.minithumbnail;
    this.thumbnail = params.thumbnail;
    this.video = params.video;
  }
}

export class VoiceNote extends Class {
  "@type" = "voiceNote"
  duration: number;
  mime_type: string;
  speech_recognition_result?: SpeechRecognitionResult;
  voice: File;
  waveform: string;

  constructor(params: { duration: number, mime_type: string, speech_recognition_result?: SpeechRecognitionResult, voice: File, waveform: string }) {
    super();
    this.duration = params.duration;
    this.mime_type = params.mime_type;
    this.speech_recognition_result = params.speech_recognition_result;
    this.voice = params.voice;
    this.waveform = params.waveform;
  }
}

export class AnimatedEmoji extends Class {
  "@type" = "animatedEmoji"
  fitzpatrick_type: number;
  sound?: File;
  sticker?: Sticker;

  constructor(params: { fitzpatrick_type: number, sound?: File, sticker?: Sticker }) {
    super();
    this.fitzpatrick_type = params.fitzpatrick_type;
    this.sound = params.sound;
    this.sticker = params.sticker;
  }
}

export class Contact extends Class {
  "@type" = "contact"
  first_name: string;
  last_name: string;
  phone_number: string;
  user_id: number;
  vcard: string;

  constructor(params: { first_name: string, last_name: string, phone_number: string, user_id: number, vcard: string }) {
    super();
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.phone_number = params.phone_number;
    this.user_id = params.user_id;
    this.vcard = params.vcard;
  }
}

export class Location extends Class {
  "@type" = "location"
  horizontal_accuracy: number;
  latitude: number;
  longitude: number;

  constructor(params: { horizontal_accuracy: number, latitude: number, longitude: number }) {
    super();
    this.horizontal_accuracy = params.horizontal_accuracy;
    this.latitude = params.latitude;
    this.longitude = params.longitude;
  }
}

export class Venue extends Class {
  "@type" = "venue"
  address: string;
  id: string;
  location: Location;
  provider: string;
  title: string;
  type: string;

  constructor(params: { address: string, id: string, location: Location, provider: string, title: string, type: string }) {
    super();
    this.address = params.address;
    this.id = params.id;
    this.location = params.location;
    this.provider = params.provider;
    this.title = params.title;
    this.type = params.type;
  }
}

export class Game extends Class {
  "@type" = "game"
  animation?: Animation;
  description: string;
  id: number;
  photo: Photo;
  short_name: string;
  text: FormattedText;
  title: string;

  constructor(params: { animation?: Animation, description: string, id: number, photo: Photo, short_name: string, text: FormattedText, title: string }) {
    super();
    this.animation = params.animation;
    this.description = params.description;
    this.id = params.id;
    this.photo = params.photo;
    this.short_name = params.short_name;
    this.text = params.text;
    this.title = params.title;
  }
}

export class Poll extends Class {
  "@type" = "poll"
  close_date: number;
  id: number;
  is_anonymous: boolean;
  is_closed: boolean;
  open_period: number;
  options: PollOption[];
  question: string;
  recent_voter_user_ids: number[];
  total_voter_count: number;
  type: PollType;

  constructor(params: { close_date: number, id: number, is_anonymous: boolean, is_closed: boolean, open_period: number, options: PollOption[], question: string, recent_voter_user_ids: number[], total_voter_count: number, type: PollType }) {
    super();
    this.close_date = params.close_date;
    this.id = params.id;
    this.is_anonymous = params.is_anonymous;
    this.is_closed = params.is_closed;
    this.open_period = params.open_period;
    this.options = params.options;
    this.question = params.question;
    this.recent_voter_user_ids = params.recent_voter_user_ids;
    this.total_voter_count = params.total_voter_count;
    this.type = params.type;
  }
}

export class ProfilePhoto extends Class {
  "@type" = "profilePhoto"
  big: File;
  has_animation: boolean;
  id: number;
  minithumbnail?: Minithumbnail;
  small: File;

  constructor(params: { big: File, has_animation: boolean, id: number, minithumbnail?: Minithumbnail, small: File }) {
    super();
    this.big = params.big;
    this.has_animation = params.has_animation;
    this.id = params.id;
    this.minithumbnail = params.minithumbnail;
    this.small = params.small;
  }
}

export class ChatPhotoInfo extends Class {
  "@type" = "chatPhotoInfo"
  big: File;
  has_animation: boolean;
  minithumbnail?: Minithumbnail;
  small: File;

  constructor(params: { big: File, has_animation: boolean, minithumbnail?: Minithumbnail, small: File }) {
    super();
    this.big = params.big;
    this.has_animation = params.has_animation;
    this.minithumbnail = params.minithumbnail;
    this.small = params.small;
  }
}

/**
 * Represents the type of a user. The following types are possible: regular users, deleted users and bots
 */
export class UserType extends Class {
}

export class UserTypeRegular extends UserType {
  "@type" = "userTypeRegular"

  constructor(params: {}) {
    super();
  }
}

export class UserTypeDeleted extends UserType {
  "@type" = "userTypeDeleted"

  constructor(params: {}) {
    super();
  }
}

export class UserTypeBot extends UserType {
  "@type" = "userTypeBot"
  can_be_added_to_attachment_menu: boolean;
  can_join_groups: boolean;
  can_read_all_group_messages: boolean;
  inline_query_placeholder: string;
  is_inline: boolean;
  need_location: boolean;

  constructor(params: { can_be_added_to_attachment_menu: boolean, can_join_groups: boolean, can_read_all_group_messages: boolean, inline_query_placeholder: string, is_inline: boolean, need_location: boolean }) {
    super();
    this.can_be_added_to_attachment_menu = params.can_be_added_to_attachment_menu;
    this.can_join_groups = params.can_join_groups;
    this.can_read_all_group_messages = params.can_read_all_group_messages;
    this.inline_query_placeholder = params.inline_query_placeholder;
    this.is_inline = params.is_inline;
    this.need_location = params.need_location;
  }
}

export class UserTypeUnknown extends UserType {
  "@type" = "userTypeUnknown"

  constructor(params: {}) {
    super();
  }
}

export class BotCommand extends Class {
  "@type" = "botCommand"
  command: string;
  description: string;

  constructor(params: { command: string, description: string }) {
    super();
    this.command = params.command;
    this.description = params.description;
  }
}

export class BotCommands extends Class {
  "@type" = "botCommands"
  bot_user_id: number;
  commands: BotCommand[];

  constructor(params: { bot_user_id: number, commands: BotCommand[] }) {
    super();
    this.bot_user_id = params.bot_user_id;
    this.commands = params.commands;
  }
}

export class BotMenuButton extends Class {
  "@type" = "botMenuButton"
  text: string;
  url: string;

  constructor(params: { text: string, url: string }) {
    super();
    this.text = params.text;
    this.url = params.url;
  }
}

export class ChatLocation extends Class {
  "@type" = "chatLocation"
  address: string;
  location: Location;

  constructor(params: { address: string, location: Location }) {
    super();
    this.address = params.address;
    this.location = params.location;
  }
}

export class AnimatedChatPhoto extends Class {
  "@type" = "animatedChatPhoto"
  file: File;
  length: number;
  main_frame_timestamp: number;

  constructor(params: { file: File, length: number, main_frame_timestamp: number }) {
    super();
    this.file = params.file;
    this.length = params.length;
    this.main_frame_timestamp = params.main_frame_timestamp;
  }
}

export class ChatPhoto extends Class {
  "@type" = "chatPhoto"
  added_date: number;
  animation?: AnimatedChatPhoto;
  id: number;
  minithumbnail?: Minithumbnail;
  sizes: PhotoSize[];
  small_animation?: AnimatedChatPhoto;

  constructor(params: { added_date: number, animation?: AnimatedChatPhoto, id: number, minithumbnail?: Minithumbnail, sizes: PhotoSize[], small_animation?: AnimatedChatPhoto }) {
    super();
    this.added_date = params.added_date;
    this.animation = params.animation;
    this.id = params.id;
    this.minithumbnail = params.minithumbnail;
    this.sizes = params.sizes;
    this.small_animation = params.small_animation;
  }
}

export class ChatPhotos extends Class {
  "@type" = "chatPhotos"
  photos: ChatPhoto[];
  total_count: number;

  constructor(params: { photos: ChatPhoto[], total_count: number }) {
    super();
    this.photos = params.photos;
    this.total_count = params.total_count;
  }
}

/**
 * Describes a photo to be set as a user profile or chat photo
 */
export class InputChatPhoto extends Class {
}

export class InputChatPhotoPrevious extends InputChatPhoto {
  "@type" = "inputChatPhotoPrevious"
  chat_photo_id: number;

  constructor(params: { chat_photo_id: number }) {
    super();
    this.chat_photo_id = params.chat_photo_id;
  }
}

export class InputChatPhotoStatic extends InputChatPhoto {
  "@type" = "inputChatPhotoStatic"
  photo: InputFile;

  constructor(params: { photo: InputFile }) {
    super();
    this.photo = params.photo;
  }
}

export class InputChatPhotoAnimation extends InputChatPhoto {
  "@type" = "inputChatPhotoAnimation"
  animation: InputFile;
  main_frame_timestamp: number;

  constructor(params: { animation: InputFile, main_frame_timestamp: number }) {
    super();
    this.animation = params.animation;
    this.main_frame_timestamp = params.main_frame_timestamp;
  }
}

export class ChatPermissions extends Class {
  "@type" = "chatPermissions"
  can_add_web_page_previews: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_pin_messages: boolean;
  can_send_media_messages: boolean;
  can_send_messages: boolean;
  can_send_other_messages: boolean;
  can_send_polls: boolean;

  constructor(params: { can_add_web_page_previews: boolean, can_change_info: boolean, can_invite_users: boolean, can_pin_messages: boolean, can_send_media_messages: boolean, can_send_messages: boolean, can_send_other_messages: boolean, can_send_polls: boolean }) {
    super();
    this.can_add_web_page_previews = params.can_add_web_page_previews;
    this.can_change_info = params.can_change_info;
    this.can_invite_users = params.can_invite_users;
    this.can_pin_messages = params.can_pin_messages;
    this.can_send_media_messages = params.can_send_media_messages;
    this.can_send_messages = params.can_send_messages;
    this.can_send_other_messages = params.can_send_other_messages;
    this.can_send_polls = params.can_send_polls;
  }
}

export class ChatAdministratorRights extends Class {
  "@type" = "chatAdministratorRights"
  can_change_info: boolean;
  can_delete_messages: boolean;
  can_edit_messages: boolean;
  can_invite_users: boolean;
  can_manage_chat: boolean;
  can_manage_video_chats: boolean;
  can_pin_messages: boolean;
  can_post_messages: boolean;
  can_promote_members: boolean;
  can_restrict_members: boolean;
  is_anonymous: boolean;

  constructor(params: { can_change_info: boolean, can_delete_messages: boolean, can_edit_messages: boolean, can_invite_users: boolean, can_manage_chat: boolean, can_manage_video_chats: boolean, can_pin_messages: boolean, can_post_messages: boolean, can_promote_members: boolean, can_restrict_members: boolean, is_anonymous: boolean }) {
    super();
    this.can_change_info = params.can_change_info;
    this.can_delete_messages = params.can_delete_messages;
    this.can_edit_messages = params.can_edit_messages;
    this.can_invite_users = params.can_invite_users;
    this.can_manage_chat = params.can_manage_chat;
    this.can_manage_video_chats = params.can_manage_video_chats;
    this.can_pin_messages = params.can_pin_messages;
    this.can_post_messages = params.can_post_messages;
    this.can_promote_members = params.can_promote_members;
    this.can_restrict_members = params.can_restrict_members;
    this.is_anonymous = params.is_anonymous;
  }
}

export class PremiumGiftOption extends Class {
  "@type" = "premiumGiftOption"
  amount: number;
  currency: string;
  discount_percentage: number;
  month_count: number;
  payment_link?: InternalLinkType;
  store_product_id: string;

  constructor(params: { amount: number, currency: string, discount_percentage: number, month_count: number, payment_link?: InternalLinkType, store_product_id: string }) {
    super();
    this.amount = params.amount;
    this.currency = params.currency;
    this.discount_percentage = params.discount_percentage;
    this.month_count = params.month_count;
    this.payment_link = params.payment_link;
    this.store_product_id = params.store_product_id;
  }
}

export class User extends Class {
  "@type" = "user"
  added_to_attachment_menu: boolean;
  first_name: string;
  have_access: boolean;
  id: number;
  is_contact: boolean;
  is_fake: boolean;
  is_mutual_contact: boolean;
  is_premium: boolean;
  is_scam: boolean;
  is_support: boolean;
  is_verified: boolean;
  language_code: string;
  last_name: string;
  phone_number: string;
  profile_photo?: ProfilePhoto;
  restriction_reason: string;
  status: UserStatus;
  type: UserType;
  username: string;

  constructor(params: { added_to_attachment_menu: boolean, first_name: string, have_access: boolean, id: number, is_contact: boolean, is_fake: boolean, is_mutual_contact: boolean, is_premium: boolean, is_scam: boolean, is_support: boolean, is_verified: boolean, language_code: string, last_name: string, phone_number: string, profile_photo?: ProfilePhoto, restriction_reason: string, status: UserStatus, type: UserType, username: string }) {
    super();
    this.added_to_attachment_menu = params.added_to_attachment_menu;
    this.first_name = params.first_name;
    this.have_access = params.have_access;
    this.id = params.id;
    this.is_contact = params.is_contact;
    this.is_fake = params.is_fake;
    this.is_mutual_contact = params.is_mutual_contact;
    this.is_premium = params.is_premium;
    this.is_scam = params.is_scam;
    this.is_support = params.is_support;
    this.is_verified = params.is_verified;
    this.language_code = params.language_code;
    this.last_name = params.last_name;
    this.phone_number = params.phone_number;
    this.profile_photo = params.profile_photo;
    this.restriction_reason = params.restriction_reason;
    this.status = params.status;
    this.type = params.type;
    this.username = params.username;
  }
}

export class BotInfo extends Class {
  "@type" = "botInfo"
  animation?: Animation;
  commands: BotCommand[];
  default_channel_administrator_rights?: ChatAdministratorRights;
  default_group_administrator_rights?: ChatAdministratorRights;
  description: string;
  menu_button?: BotMenuButton;
  photo?: Photo;
  share_text: string;

  constructor(params: { animation?: Animation, commands: BotCommand[], default_channel_administrator_rights?: ChatAdministratorRights, default_group_administrator_rights?: ChatAdministratorRights, description: string, menu_button?: BotMenuButton, photo?: Photo, share_text: string }) {
    super();
    this.animation = params.animation;
    this.commands = params.commands;
    this.default_channel_administrator_rights = params.default_channel_administrator_rights;
    this.default_group_administrator_rights = params.default_group_administrator_rights;
    this.description = params.description;
    this.menu_button = params.menu_button;
    this.photo = params.photo;
    this.share_text = params.share_text;
  }
}

export class UserFullInfo extends Class {
  "@type" = "userFullInfo"
  bio?: FormattedText;
  bot_info?: BotInfo;
  can_be_called: boolean;
  group_in_common_count: number;
  has_private_calls: boolean;
  has_private_forwards: boolean;
  has_restricted_voice_and_video_note_messages: boolean;
  is_blocked: boolean;
  need_phone_number_privacy_exception: boolean;
  photo?: ChatPhoto;
  premium_gift_options: PremiumGiftOption[];
  supports_video_calls: boolean;

  constructor(params: { bio?: FormattedText, bot_info?: BotInfo, can_be_called: boolean, group_in_common_count: number, has_private_calls: boolean, has_private_forwards: boolean, has_restricted_voice_and_video_note_messages: boolean, is_blocked: boolean, need_phone_number_privacy_exception: boolean, photo?: ChatPhoto, premium_gift_options: PremiumGiftOption[], supports_video_calls: boolean }) {
    super();
    this.bio = params.bio;
    this.bot_info = params.bot_info;
    this.can_be_called = params.can_be_called;
    this.group_in_common_count = params.group_in_common_count;
    this.has_private_calls = params.has_private_calls;
    this.has_private_forwards = params.has_private_forwards;
    this.has_restricted_voice_and_video_note_messages = params.has_restricted_voice_and_video_note_messages;
    this.is_blocked = params.is_blocked;
    this.need_phone_number_privacy_exception = params.need_phone_number_privacy_exception;
    this.photo = params.photo;
    this.premium_gift_options = params.premium_gift_options;
    this.supports_video_calls = params.supports_video_calls;
  }
}

export class Users extends Class {
  "@type" = "users"
  total_count: number;
  user_ids: number[];

  constructor(params: { total_count: number, user_ids: number[] }) {
    super();
    this.total_count = params.total_count;
    this.user_ids = params.user_ids;
  }
}

export class ChatAdministrator extends Class {
  "@type" = "chatAdministrator"
  custom_title: string;
  is_owner: boolean;
  user_id: number;

  constructor(params: { custom_title: string, is_owner: boolean, user_id: number }) {
    super();
    this.custom_title = params.custom_title;
    this.is_owner = params.is_owner;
    this.user_id = params.user_id;
  }
}

export class ChatAdministrators extends Class {
  "@type" = "chatAdministrators"
  administrators: ChatAdministrator[];

  constructor(params: { administrators: ChatAdministrator[] }) {
    super();
    this.administrators = params.administrators;
  }
}

/**
 * Provides information about the status of a member in a chat
 */
export class ChatMemberStatus extends Class {
}

export class ChatMemberStatusCreator extends ChatMemberStatus {
  "@type" = "chatMemberStatusCreator"
  custom_title: string;
  is_anonymous: boolean;
  is_member: boolean;

  constructor(params: { custom_title: string, is_anonymous: boolean, is_member: boolean }) {
    super();
    this.custom_title = params.custom_title;
    this.is_anonymous = params.is_anonymous;
    this.is_member = params.is_member;
  }
}

export class ChatMemberStatusAdministrator extends ChatMemberStatus {
  "@type" = "chatMemberStatusAdministrator"
  can_be_edited: boolean;
  custom_title: string;
  rights: ChatAdministratorRights;

  constructor(params: { can_be_edited: boolean, custom_title: string, rights: ChatAdministratorRights }) {
    super();
    this.can_be_edited = params.can_be_edited;
    this.custom_title = params.custom_title;
    this.rights = params.rights;
  }
}

export class ChatMemberStatusMember extends ChatMemberStatus {
  "@type" = "chatMemberStatusMember"

  constructor(params: {}) {
    super();
  }
}

export class ChatMemberStatusRestricted extends ChatMemberStatus {
  "@type" = "chatMemberStatusRestricted"
  is_member: boolean;
  permissions: ChatPermissions;
  restricted_until_date: number;

  constructor(params: { is_member: boolean, permissions: ChatPermissions, restricted_until_date: number }) {
    super();
    this.is_member = params.is_member;
    this.permissions = params.permissions;
    this.restricted_until_date = params.restricted_until_date;
  }
}

export class ChatMemberStatusLeft extends ChatMemberStatus {
  "@type" = "chatMemberStatusLeft"

  constructor(params: {}) {
    super();
  }
}

export class ChatMemberStatusBanned extends ChatMemberStatus {
  "@type" = "chatMemberStatusBanned"
  banned_until_date: number;

  constructor(params: { banned_until_date: number }) {
    super();
    this.banned_until_date = params.banned_until_date;
  }
}

export class ChatMember extends Class {
  "@type" = "chatMember"
  inviter_user_id: number;
  joined_chat_date: number;
  member_id: MessageSender;
  status: ChatMemberStatus;

  constructor(params: { inviter_user_id: number, joined_chat_date: number, member_id: MessageSender, status: ChatMemberStatus }) {
    super();
    this.inviter_user_id = params.inviter_user_id;
    this.joined_chat_date = params.joined_chat_date;
    this.member_id = params.member_id;
    this.status = params.status;
  }
}

export class ChatMembers extends Class {
  "@type" = "chatMembers"
  members: ChatMember[];
  total_count: number;

  constructor(params: { members: ChatMember[], total_count: number }) {
    super();
    this.members = params.members;
    this.total_count = params.total_count;
  }
}

/**
 * Specifies the kind of chat members to return in searchChatMembers
 */
export class ChatMembersFilter extends Class {
}

export class ChatMembersFilterContacts extends ChatMembersFilter {
  "@type" = "chatMembersFilterContacts"

  constructor(params: {}) {
    super();
  }
}

export class ChatMembersFilterAdministrators extends ChatMembersFilter {
  "@type" = "chatMembersFilterAdministrators"

  constructor(params: {}) {
    super();
  }
}

export class ChatMembersFilterMembers extends ChatMembersFilter {
  "@type" = "chatMembersFilterMembers"

  constructor(params: {}) {
    super();
  }
}

export class ChatMembersFilterMention extends ChatMembersFilter {
  "@type" = "chatMembersFilterMention"
  message_thread_id: number;

  constructor(params: { message_thread_id: number }) {
    super();
    this.message_thread_id = params.message_thread_id;
  }
}

export class ChatMembersFilterRestricted extends ChatMembersFilter {
  "@type" = "chatMembersFilterRestricted"

  constructor(params: {}) {
    super();
  }
}

export class ChatMembersFilterBanned extends ChatMembersFilter {
  "@type" = "chatMembersFilterBanned"

  constructor(params: {}) {
    super();
  }
}

export class ChatMembersFilterBots extends ChatMembersFilter {
  "@type" = "chatMembersFilterBots"

  constructor(params: {}) {
    super();
  }
}

/**
 * Specifies the kind of chat members to return in getSupergroupMembers
 */
export class SupergroupMembersFilter extends Class {
}

export class SupergroupMembersFilterRecent extends SupergroupMembersFilter {
  "@type" = "supergroupMembersFilterRecent"

  constructor(params: {}) {
    super();
  }
}

export class SupergroupMembersFilterContacts extends SupergroupMembersFilter {
  "@type" = "supergroupMembersFilterContacts"
  query: string;

  constructor(params: { query: string }) {
    super();
    this.query = params.query;
  }
}

export class SupergroupMembersFilterAdministrators extends SupergroupMembersFilter {
  "@type" = "supergroupMembersFilterAdministrators"

  constructor(params: {}) {
    super();
  }
}

export class SupergroupMembersFilterSearch extends SupergroupMembersFilter {
  "@type" = "supergroupMembersFilterSearch"
  query: string;

  constructor(params: { query: string }) {
    super();
    this.query = params.query;
  }
}

export class SupergroupMembersFilterRestricted extends SupergroupMembersFilter {
  "@type" = "supergroupMembersFilterRestricted"
  query: string;

  constructor(params: { query: string }) {
    super();
    this.query = params.query;
  }
}

export class SupergroupMembersFilterBanned extends SupergroupMembersFilter {
  "@type" = "supergroupMembersFilterBanned"
  query: string;

  constructor(params: { query: string }) {
    super();
    this.query = params.query;
  }
}

export class SupergroupMembersFilterMention extends SupergroupMembersFilter {
  "@type" = "supergroupMembersFilterMention"
  message_thread_id: number;
  query: string;

  constructor(params: { message_thread_id: number, query: string }) {
    super();
    this.message_thread_id = params.message_thread_id;
    this.query = params.query;
  }
}

export class SupergroupMembersFilterBots extends SupergroupMembersFilter {
  "@type" = "supergroupMembersFilterBots"

  constructor(params: {}) {
    super();
  }
}

export class ChatInviteLink extends Class {
  "@type" = "chatInviteLink"
  creates_join_request: boolean;
  creator_user_id: number;
  date: number;
  edit_date: number;
  expiration_date: number;
  invite_link: string;
  is_primary: boolean;
  is_revoked: boolean;
  member_count: number;
  member_limit: number;
  name: string;
  pending_join_request_count: number;

  constructor(params: { creates_join_request: boolean, creator_user_id: number, date: number, edit_date: number, expiration_date: number, invite_link: string, is_primary: boolean, is_revoked: boolean, member_count: number, member_limit: number, name: string, pending_join_request_count: number }) {
    super();
    this.creates_join_request = params.creates_join_request;
    this.creator_user_id = params.creator_user_id;
    this.date = params.date;
    this.edit_date = params.edit_date;
    this.expiration_date = params.expiration_date;
    this.invite_link = params.invite_link;
    this.is_primary = params.is_primary;
    this.is_revoked = params.is_revoked;
    this.member_count = params.member_count;
    this.member_limit = params.member_limit;
    this.name = params.name;
    this.pending_join_request_count = params.pending_join_request_count;
  }
}

export class ChatInviteLinks extends Class {
  "@type" = "chatInviteLinks"
  invite_links: ChatInviteLink[];
  total_count: number;

  constructor(params: { invite_links: ChatInviteLink[], total_count: number }) {
    super();
    this.invite_links = params.invite_links;
    this.total_count = params.total_count;
  }
}

export class ChatInviteLinkCount extends Class {
  "@type" = "chatInviteLinkCount"
  invite_link_count: number;
  revoked_invite_link_count: number;
  user_id: number;

  constructor(params: { invite_link_count: number, revoked_invite_link_count: number, user_id: number }) {
    super();
    this.invite_link_count = params.invite_link_count;
    this.revoked_invite_link_count = params.revoked_invite_link_count;
    this.user_id = params.user_id;
  }
}

export class ChatInviteLinkCounts extends Class {
  "@type" = "chatInviteLinkCounts"
  invite_link_counts: ChatInviteLinkCount[];

  constructor(params: { invite_link_counts: ChatInviteLinkCount[] }) {
    super();
    this.invite_link_counts = params.invite_link_counts;
  }
}

export class ChatInviteLinkMember extends Class {
  "@type" = "chatInviteLinkMember"
  approver_user_id: number;
  joined_chat_date: number;
  user_id: number;

  constructor(params: { approver_user_id: number, joined_chat_date: number, user_id: number }) {
    super();
    this.approver_user_id = params.approver_user_id;
    this.joined_chat_date = params.joined_chat_date;
    this.user_id = params.user_id;
  }
}

export class ChatInviteLinkMembers extends Class {
  "@type" = "chatInviteLinkMembers"
  members: ChatInviteLinkMember[];
  total_count: number;

  constructor(params: { members: ChatInviteLinkMember[], total_count: number }) {
    super();
    this.members = params.members;
    this.total_count = params.total_count;
  }
}

export class ChatInviteLinkInfo extends Class {
  "@type" = "chatInviteLinkInfo"
  accessible_for: number;
  chat_id: number;
  creates_join_request: boolean;
  description: string;
  is_public: boolean;
  member_count: number;
  member_user_ids: number[];
  photo?: ChatPhotoInfo;
  title: string;
  type: ChatType;

  constructor(params: { accessible_for: number, chat_id: number, creates_join_request: boolean, description: string, is_public: boolean, member_count: number, member_user_ids: number[], photo?: ChatPhotoInfo, title: string, type: ChatType }) {
    super();
    this.accessible_for = params.accessible_for;
    this.chat_id = params.chat_id;
    this.creates_join_request = params.creates_join_request;
    this.description = params.description;
    this.is_public = params.is_public;
    this.member_count = params.member_count;
    this.member_user_ids = params.member_user_ids;
    this.photo = params.photo;
    this.title = params.title;
    this.type = params.type;
  }
}

export class ChatJoinRequest extends Class {
  "@type" = "chatJoinRequest"
  bio: string;
  date: number;
  user_id: number;

  constructor(params: { bio: string, date: number, user_id: number }) {
    super();
    this.bio = params.bio;
    this.date = params.date;
    this.user_id = params.user_id;
  }
}

export class ChatJoinRequests extends Class {
  "@type" = "chatJoinRequests"
  requests: ChatJoinRequest[];
  total_count: number;

  constructor(params: { requests: ChatJoinRequest[], total_count: number }) {
    super();
    this.requests = params.requests;
    this.total_count = params.total_count;
  }
}

export class ChatJoinRequestsInfo extends Class {
  "@type" = "chatJoinRequestsInfo"
  total_count: number;
  user_ids: number[];

  constructor(params: { total_count: number, user_ids: number[] }) {
    super();
    this.total_count = params.total_count;
    this.user_ids = params.user_ids;
  }
}

export class BasicGroup extends Class {
  "@type" = "basicGroup"
  id: number;
  is_active: boolean;
  member_count: number;
  status: ChatMemberStatus;
  upgraded_to_supergroup_id: number;

  constructor(params: { id: number, is_active: boolean, member_count: number, status: ChatMemberStatus, upgraded_to_supergroup_id: number }) {
    super();
    this.id = params.id;
    this.is_active = params.is_active;
    this.member_count = params.member_count;
    this.status = params.status;
    this.upgraded_to_supergroup_id = params.upgraded_to_supergroup_id;
  }
}

export class BasicGroupFullInfo extends Class {
  "@type" = "basicGroupFullInfo"
  bot_commands: BotCommands[];
  creator_user_id: number;
  description: string;
  invite_link?: ChatInviteLink;
  members: ChatMember[];
  photo?: ChatPhoto;

  constructor(params: { bot_commands: BotCommands[], creator_user_id: number, description: string, invite_link?: ChatInviteLink, members: ChatMember[], photo?: ChatPhoto }) {
    super();
    this.bot_commands = params.bot_commands;
    this.creator_user_id = params.creator_user_id;
    this.description = params.description;
    this.invite_link = params.invite_link;
    this.members = params.members;
    this.photo = params.photo;
  }
}

export class Supergroup extends Class {
  "@type" = "supergroup"
  date: number;
  has_linked_chat: boolean;
  has_location: boolean;
  id: number;
  is_broadcast_group: boolean;
  is_channel: boolean;
  is_fake: boolean;
  is_scam: boolean;
  is_slow_mode_enabled: boolean;
  is_verified: boolean;
  join_by_request: boolean;
  join_to_send_messages: boolean;
  member_count: number;
  restriction_reason: string;
  sign_messages: boolean;
  status: ChatMemberStatus;
  username: string;

  constructor(params: { date: number, has_linked_chat: boolean, has_location: boolean, id: number, is_broadcast_group: boolean, is_channel: boolean, is_fake: boolean, is_scam: boolean, is_slow_mode_enabled: boolean, is_verified: boolean, join_by_request: boolean, join_to_send_messages: boolean, member_count: number, restriction_reason: string, sign_messages: boolean, status: ChatMemberStatus, username: string }) {
    super();
    this.date = params.date;
    this.has_linked_chat = params.has_linked_chat;
    this.has_location = params.has_location;
    this.id = params.id;
    this.is_broadcast_group = params.is_broadcast_group;
    this.is_channel = params.is_channel;
    this.is_fake = params.is_fake;
    this.is_scam = params.is_scam;
    this.is_slow_mode_enabled = params.is_slow_mode_enabled;
    this.is_verified = params.is_verified;
    this.join_by_request = params.join_by_request;
    this.join_to_send_messages = params.join_to_send_messages;
    this.member_count = params.member_count;
    this.restriction_reason = params.restriction_reason;
    this.sign_messages = params.sign_messages;
    this.status = params.status;
    this.username = params.username;
  }
}

export class SupergroupFullInfo extends Class {
  "@type" = "supergroupFullInfo"
  administrator_count: number;
  banned_count: number;
  bot_commands: BotCommands[];
  can_get_members: boolean;
  can_get_statistics: boolean;
  can_set_location: boolean;
  can_set_sticker_set: boolean;
  can_set_username: boolean;
  description: string;
  invite_link?: ChatInviteLink;
  is_all_history_available: boolean;
  linked_chat_id: number;
  location?: ChatLocation;
  member_count: number;
  photo?: ChatPhoto;
  restricted_count: number;
  slow_mode_delay: number;
  slow_mode_delay_expires_in: number;
  sticker_set_id: number;
  upgraded_from_basic_group_id: number;
  upgraded_from_max_message_id: number;

  constructor(params: { administrator_count: number, banned_count: number, bot_commands: BotCommands[], can_get_members: boolean, can_get_statistics: boolean, can_set_location: boolean, can_set_sticker_set: boolean, can_set_username: boolean, description: string, invite_link?: ChatInviteLink, is_all_history_available: boolean, linked_chat_id: number, location?: ChatLocation, member_count: number, photo?: ChatPhoto, restricted_count: number, slow_mode_delay: number, slow_mode_delay_expires_in: number, sticker_set_id: number, upgraded_from_basic_group_id: number, upgraded_from_max_message_id: number }) {
    super();
    this.administrator_count = params.administrator_count;
    this.banned_count = params.banned_count;
    this.bot_commands = params.bot_commands;
    this.can_get_members = params.can_get_members;
    this.can_get_statistics = params.can_get_statistics;
    this.can_set_location = params.can_set_location;
    this.can_set_sticker_set = params.can_set_sticker_set;
    this.can_set_username = params.can_set_username;
    this.description = params.description;
    this.invite_link = params.invite_link;
    this.is_all_history_available = params.is_all_history_available;
    this.linked_chat_id = params.linked_chat_id;
    this.location = params.location;
    this.member_count = params.member_count;
    this.photo = params.photo;
    this.restricted_count = params.restricted_count;
    this.slow_mode_delay = params.slow_mode_delay;
    this.slow_mode_delay_expires_in = params.slow_mode_delay_expires_in;
    this.sticker_set_id = params.sticker_set_id;
    this.upgraded_from_basic_group_id = params.upgraded_from_basic_group_id;
    this.upgraded_from_max_message_id = params.upgraded_from_max_message_id;
  }
}

/**
 * Describes the current secret chat state
 */
export class SecretChatState extends Class {
}

export class SecretChatStatePending extends SecretChatState {
  "@type" = "secretChatStatePending"

  constructor(params: {}) {
    super();
  }
}

export class SecretChatStateReady extends SecretChatState {
  "@type" = "secretChatStateReady"

  constructor(params: {}) {
    super();
  }
}

export class SecretChatStateClosed extends SecretChatState {
  "@type" = "secretChatStateClosed"

  constructor(params: {}) {
    super();
  }
}

export class SecretChat extends Class {
  "@type" = "secretChat"
  id: number;
  is_outbound: boolean;
  key_hash: string;
  layer: number;
  state: SecretChatState;
  user_id: number;

  constructor(params: { id: number, is_outbound: boolean, key_hash: string, layer: number, state: SecretChatState, user_id: number }) {
    super();
    this.id = params.id;
    this.is_outbound = params.is_outbound;
    this.key_hash = params.key_hash;
    this.layer = params.layer;
    this.state = params.state;
    this.user_id = params.user_id;
  }
}

/**
 * Contains information about the sender of a message
 */
export class MessageSender extends Class {
}

export class MessageSenderUser extends MessageSender {
  "@type" = "messageSenderUser"
  user_id: number;

  constructor(params: { user_id: number }) {
    super();
    this.user_id = params.user_id;
  }
}

export class MessageSenderChat extends MessageSender {
  "@type" = "messageSenderChat"
  chat_id: number;

  constructor(params: { chat_id: number }) {
    super();
    this.chat_id = params.chat_id;
  }
}

export class MessageSenders extends Class {
  "@type" = "messageSenders"
  senders: MessageSender[];
  total_count: number;

  constructor(params: { senders: MessageSender[], total_count: number }) {
    super();
    this.senders = params.senders;
    this.total_count = params.total_count;
  }
}

/**
 * Contains information about the origin of a forwarded message
 */
export class MessageForwardOrigin extends Class {
}

export class MessageForwardOriginUser extends MessageForwardOrigin {
  "@type" = "messageForwardOriginUser"
  sender_user_id: number;

  constructor(params: { sender_user_id: number }) {
    super();
    this.sender_user_id = params.sender_user_id;
  }
}

export class MessageForwardOriginChat extends MessageForwardOrigin {
  "@type" = "messageForwardOriginChat"
  author_signature: string;
  sender_chat_id: number;

  constructor(params: { author_signature: string, sender_chat_id: number }) {
    super();
    this.author_signature = params.author_signature;
    this.sender_chat_id = params.sender_chat_id;
  }
}

export class MessageForwardOriginHiddenUser extends MessageForwardOrigin {
  "@type" = "messageForwardOriginHiddenUser"
  sender_name: string;

  constructor(params: { sender_name: string }) {
    super();
    this.sender_name = params.sender_name;
  }
}

export class MessageForwardOriginChannel extends MessageForwardOrigin {
  "@type" = "messageForwardOriginChannel"
  author_signature: string;
  chat_id: number;
  message_id: number;

  constructor(params: { author_signature: string, chat_id: number, message_id: number }) {
    super();
    this.author_signature = params.author_signature;
    this.chat_id = params.chat_id;
    this.message_id = params.message_id;
  }
}

export class MessageForwardOriginMessageImport extends MessageForwardOrigin {
  "@type" = "messageForwardOriginMessageImport"
  sender_name: string;

  constructor(params: { sender_name: string }) {
    super();
    this.sender_name = params.sender_name;
  }
}

export class MessageForwardInfo extends Class {
  "@type" = "messageForwardInfo"
  date: number;
  from_chat_id: number;
  from_message_id: number;
  origin: MessageForwardOrigin;
  public_service_announcement_type: string;

  constructor(params: { date: number, from_chat_id: number, from_message_id: number, origin: MessageForwardOrigin, public_service_announcement_type: string }) {
    super();
    this.date = params.date;
    this.from_chat_id = params.from_chat_id;
    this.from_message_id = params.from_message_id;
    this.origin = params.origin;
    this.public_service_announcement_type = params.public_service_announcement_type;
  }
}

export class MessageReplyInfo extends Class {
  "@type" = "messageReplyInfo"
  last_message_id: number;
  last_read_inbox_message_id: number;
  last_read_outbox_message_id: number;
  recent_replier_ids: MessageSender[];
  reply_count: number;

  constructor(params: { last_message_id: number, last_read_inbox_message_id: number, last_read_outbox_message_id: number, recent_replier_ids: MessageSender[], reply_count: number }) {
    super();
    this.last_message_id = params.last_message_id;
    this.last_read_inbox_message_id = params.last_read_inbox_message_id;
    this.last_read_outbox_message_id = params.last_read_outbox_message_id;
    this.recent_replier_ids = params.recent_replier_ids;
    this.reply_count = params.reply_count;
  }
}

export class MessageReaction extends Class {
  "@type" = "messageReaction"
  is_chosen: boolean;
  reaction: string;
  recent_sender_ids: MessageSender[];
  total_count: number;

  constructor(params: { is_chosen: boolean, reaction: string, recent_sender_ids: MessageSender[], total_count: number }) {
    super();
    this.is_chosen = params.is_chosen;
    this.reaction = params.reaction;
    this.recent_sender_ids = params.recent_sender_ids;
    this.total_count = params.total_count;
  }
}

export class MessageInteractionInfo extends Class {
  "@type" = "messageInteractionInfo"
  forward_count: number;
  reactions: MessageReaction[];
  reply_info?: MessageReplyInfo;
  view_count: number;

  constructor(params: { forward_count: number, reactions: MessageReaction[], reply_info?: MessageReplyInfo, view_count: number }) {
    super();
    this.forward_count = params.forward_count;
    this.reactions = params.reactions;
    this.reply_info = params.reply_info;
    this.view_count = params.view_count;
  }
}

export class UnreadReaction extends Class {
  "@type" = "unreadReaction"
  is_big: boolean;
  reaction: string;
  sender_id: MessageSender;

  constructor(params: { is_big: boolean, reaction: string, sender_id: MessageSender }) {
    super();
    this.is_big = params.is_big;
    this.reaction = params.reaction;
    this.sender_id = params.sender_id;
  }
}

/**
 * Contains information about the sending state of the message
 */
export class MessageSendingState extends Class {
}

export class MessageSendingStatePending extends MessageSendingState {
  "@type" = "messageSendingStatePending"

  constructor(params: {}) {
    super();
  }
}

export class MessageSendingStateFailed extends MessageSendingState {
  "@type" = "messageSendingStateFailed"
  can_retry: boolean;
  error_code: number;
  error_message: string;
  need_another_sender: boolean;
  retry_after: number;

  constructor(params: { can_retry: boolean, error_code: number, error_message: string, need_another_sender: boolean, retry_after: number }) {
    super();
    this.can_retry = params.can_retry;
    this.error_code = params.error_code;
    this.error_message = params.error_message;
    this.need_another_sender = params.need_another_sender;
    this.retry_after = params.retry_after;
  }
}

export class Message extends Class {
  "@type" = "message"
  author_signature: string;
  can_be_deleted_for_all_users: boolean;
  can_be_deleted_only_for_self: boolean;
  can_be_edited: boolean;
  can_be_forwarded: boolean;
  can_be_saved: boolean;
  can_get_added_reactions: boolean;
  can_get_media_timestamp_links: boolean;
  can_get_message_thread: boolean;
  can_get_statistics: boolean;
  can_get_viewers: boolean;
  chat_id: number;
  contains_unread_mention: boolean;
  content: MessageContent;
  date: number;
  edit_date: number;
  forward_info?: MessageForwardInfo;
  has_timestamped_media: boolean;
  id: number;
  interaction_info?: MessageInteractionInfo;
  is_channel_post: boolean;
  is_outgoing: boolean;
  is_pinned: boolean;
  media_album_id: number;
  message_thread_id: number;
  reply_in_chat_id: number;
  reply_markup?: ReplyMarkup;
  reply_to_message_id: number;
  restriction_reason: string;
  scheduling_state?: MessageSchedulingState;
  sender_id: MessageSender;
  sending_state?: MessageSendingState;
  ttl: number;
  ttl_expires_in: number;
  unread_reactions: UnreadReaction[];
  via_bot_user_id: number;

  constructor(params: { author_signature: string, can_be_deleted_for_all_users: boolean, can_be_deleted_only_for_self: boolean, can_be_edited: boolean, can_be_forwarded: boolean, can_be_saved: boolean, can_get_added_reactions: boolean, can_get_media_timestamp_links: boolean, can_get_message_thread: boolean, can_get_statistics: boolean, can_get_viewers: boolean, chat_id: number, contains_unread_mention: boolean, content: MessageContent, date: number, edit_date: number, forward_info?: MessageForwardInfo, has_timestamped_media: boolean, id: number, interaction_info?: MessageInteractionInfo, is_channel_post: boolean, is_outgoing: boolean, is_pinned: boolean, media_album_id: number, message_thread_id: number, reply_in_chat_id: number, reply_markup?: ReplyMarkup, reply_to_message_id: number, restriction_reason: string, scheduling_state?: MessageSchedulingState, sender_id: MessageSender, sending_state?: MessageSendingState, ttl: number, ttl_expires_in: number, unread_reactions: UnreadReaction[], via_bot_user_id: number }) {
    super();
    this.author_signature = params.author_signature;
    this.can_be_deleted_for_all_users = params.can_be_deleted_for_all_users;
    this.can_be_deleted_only_for_self = params.can_be_deleted_only_for_self;
    this.can_be_edited = params.can_be_edited;
    this.can_be_forwarded = params.can_be_forwarded;
    this.can_be_saved = params.can_be_saved;
    this.can_get_added_reactions = params.can_get_added_reactions;
    this.can_get_media_timestamp_links = params.can_get_media_timestamp_links;
    this.can_get_message_thread = params.can_get_message_thread;
    this.can_get_statistics = params.can_get_statistics;
    this.can_get_viewers = params.can_get_viewers;
    this.chat_id = params.chat_id;
    this.contains_unread_mention = params.contains_unread_mention;
    this.content = params.content;
    this.date = params.date;
    this.edit_date = params.edit_date;
    this.forward_info = params.forward_info;
    this.has_timestamped_media = params.has_timestamped_media;
    this.id = params.id;
    this.interaction_info = params.interaction_info;
    this.is_channel_post = params.is_channel_post;
    this.is_outgoing = params.is_outgoing;
    this.is_pinned = params.is_pinned;
    this.media_album_id = params.media_album_id;
    this.message_thread_id = params.message_thread_id;
    this.reply_in_chat_id = params.reply_in_chat_id;
    this.reply_markup = params.reply_markup;
    this.reply_to_message_id = params.reply_to_message_id;
    this.restriction_reason = params.restriction_reason;
    this.scheduling_state = params.scheduling_state;
    this.sender_id = params.sender_id;
    this.sending_state = params.sending_state;
    this.ttl = params.ttl;
    this.ttl_expires_in = params.ttl_expires_in;
    this.unread_reactions = params.unread_reactions;
    this.via_bot_user_id = params.via_bot_user_id;
  }
}

export class Messages extends Class {
  "@type" = "messages"
  messages: Message[];
  total_count: number;

  constructor(params: { messages: Message[], total_count: number }) {
    super();
    this.messages = params.messages;
    this.total_count = params.total_count;
  }
}

export class FoundMessages extends Class {
  "@type" = "foundMessages"
  messages: Message[];
  next_offset: string;
  total_count: number;

  constructor(params: { messages: Message[], next_offset: string, total_count: number }) {
    super();
    this.messages = params.messages;
    this.next_offset = params.next_offset;
    this.total_count = params.total_count;
  }
}

export class MessagePosition extends Class {
  "@type" = "messagePosition"
  date: number;
  message_id: number;
  position: number;

  constructor(params: { date: number, message_id: number, position: number }) {
    super();
    this.date = params.date;
    this.message_id = params.message_id;
    this.position = params.position;
  }
}

export class MessagePositions extends Class {
  "@type" = "messagePositions"
  positions: MessagePosition[];
  total_count: number;

  constructor(params: { positions: MessagePosition[], total_count: number }) {
    super();
    this.positions = params.positions;
    this.total_count = params.total_count;
  }
}

export class MessageCalendarDay extends Class {
  "@type" = "messageCalendarDay"
  message: Message;
  total_count: number;

  constructor(params: { message: Message, total_count: number }) {
    super();
    this.message = params.message;
    this.total_count = params.total_count;
  }
}

export class MessageCalendar extends Class {
  "@type" = "messageCalendar"
  days: MessageCalendarDay[];
  total_count: number;

  constructor(params: { days: MessageCalendarDay[], total_count: number }) {
    super();
    this.days = params.days;
    this.total_count = params.total_count;
  }
}

export class SponsoredMessage extends Class {
  "@type" = "sponsoredMessage"
  content: MessageContent;
  is_recommended: boolean;
  link?: InternalLinkType;
  message_id: number;
  sponsor_chat_id: number;
  sponsor_chat_info?: ChatInviteLinkInfo;

  constructor(params: { content: MessageContent, is_recommended: boolean, link?: InternalLinkType, message_id: number, sponsor_chat_id: number, sponsor_chat_info?: ChatInviteLinkInfo }) {
    super();
    this.content = params.content;
    this.is_recommended = params.is_recommended;
    this.link = params.link;
    this.message_id = params.message_id;
    this.sponsor_chat_id = params.sponsor_chat_id;
    this.sponsor_chat_info = params.sponsor_chat_info;
  }
}

export class FileDownload extends Class {
  "@type" = "fileDownload"
  add_date: number;
  complete_date: number;
  file_id: number;
  is_paused: boolean;
  message: Message;

  constructor(params: { add_date: number, complete_date: number, file_id: number, is_paused: boolean, message: Message }) {
    super();
    this.add_date = params.add_date;
    this.complete_date = params.complete_date;
    this.file_id = params.file_id;
    this.is_paused = params.is_paused;
    this.message = params.message;
  }
}

export class DownloadedFileCounts extends Class {
  "@type" = "downloadedFileCounts"
  active_count: number;
  completed_count: number;
  paused_count: number;

  constructor(params: { active_count: number, completed_count: number, paused_count: number }) {
    super();
    this.active_count = params.active_count;
    this.completed_count = params.completed_count;
    this.paused_count = params.paused_count;
  }
}

export class FoundFileDownloads extends Class {
  "@type" = "foundFileDownloads"
  files: FileDownload[];
  next_offset: string;
  total_counts: DownloadedFileCounts;

  constructor(params: { files: FileDownload[], next_offset: string, total_counts: DownloadedFileCounts }) {
    super();
    this.files = params.files;
    this.next_offset = params.next_offset;
    this.total_counts = params.total_counts;
  }
}

/**
 * Describes the types of chats to which notification settings are relevant
 */
export class NotificationSettingsScope extends Class {
}

export class NotificationSettingsScopePrivateChats extends NotificationSettingsScope {
  "@type" = "notificationSettingsScopePrivateChats"

  constructor(params: {}) {
    super();
  }
}

export class NotificationSettingsScopeGroupChats extends NotificationSettingsScope {
  "@type" = "notificationSettingsScopeGroupChats"

  constructor(params: {}) {
    super();
  }
}

export class NotificationSettingsScopeChannelChats extends NotificationSettingsScope {
  "@type" = "notificationSettingsScopeChannelChats"

  constructor(params: {}) {
    super();
  }
}

export class ChatNotificationSettings extends Class {
  "@type" = "chatNotificationSettings"
  disable_mention_notifications: boolean;
  disable_pinned_message_notifications: boolean;
  mute_for: number;
  show_preview: boolean;
  sound_id: number;
  use_default_disable_mention_notifications: boolean;
  use_default_disable_pinned_message_notifications: boolean;
  use_default_mute_for: boolean;
  use_default_show_preview: boolean;
  use_default_sound: boolean;

  constructor(params: { disable_mention_notifications: boolean, disable_pinned_message_notifications: boolean, mute_for: number, show_preview: boolean, sound_id: number, use_default_disable_mention_notifications: boolean, use_default_disable_pinned_message_notifications: boolean, use_default_mute_for: boolean, use_default_show_preview: boolean, use_default_sound: boolean }) {
    super();
    this.disable_mention_notifications = params.disable_mention_notifications;
    this.disable_pinned_message_notifications = params.disable_pinned_message_notifications;
    this.mute_for = params.mute_for;
    this.show_preview = params.show_preview;
    this.sound_id = params.sound_id;
    this.use_default_disable_mention_notifications = params.use_default_disable_mention_notifications;
    this.use_default_disable_pinned_message_notifications = params.use_default_disable_pinned_message_notifications;
    this.use_default_mute_for = params.use_default_mute_for;
    this.use_default_show_preview = params.use_default_show_preview;
    this.use_default_sound = params.use_default_sound;
  }
}

export class ScopeNotificationSettings extends Class {
  "@type" = "scopeNotificationSettings"
  disable_mention_notifications: boolean;
  disable_pinned_message_notifications: boolean;
  mute_for: number;
  show_preview: boolean;
  sound_id: number;

  constructor(params: { disable_mention_notifications: boolean, disable_pinned_message_notifications: boolean, mute_for: number, show_preview: boolean, sound_id: number }) {
    super();
    this.disable_mention_notifications = params.disable_mention_notifications;
    this.disable_pinned_message_notifications = params.disable_pinned_message_notifications;
    this.mute_for = params.mute_for;
    this.show_preview = params.show_preview;
    this.sound_id = params.sound_id;
  }
}

export class DraftMessage extends Class {
  "@type" = "draftMessage"
  date: number;
  input_message_text: InputMessageContent;
  reply_to_message_id: number;

  constructor(params: { date: number, input_message_text: InputMessageContent, reply_to_message_id: number }) {
    super();
    this.date = params.date;
    this.input_message_text = params.input_message_text;
    this.reply_to_message_id = params.reply_to_message_id;
  }
}

/**
 * Describes the type of a chat
 */
export class ChatType extends Class {
}

export class ChatTypePrivate extends ChatType {
  "@type" = "chatTypePrivate"
  user_id: number;

  constructor(params: { user_id: number }) {
    super();
    this.user_id = params.user_id;
  }
}

export class ChatTypeBasicGroup extends ChatType {
  "@type" = "chatTypeBasicGroup"
  basic_group_id: number;

  constructor(params: { basic_group_id: number }) {
    super();
    this.basic_group_id = params.basic_group_id;
  }
}

export class ChatTypeSupergroup extends ChatType {
  "@type" = "chatTypeSupergroup"
  is_channel: boolean;
  supergroup_id: number;

  constructor(params: { is_channel: boolean, supergroup_id: number }) {
    super();
    this.is_channel = params.is_channel;
    this.supergroup_id = params.supergroup_id;
  }
}

export class ChatTypeSecret extends ChatType {
  "@type" = "chatTypeSecret"
  secret_chat_id: number;
  user_id: number;

  constructor(params: { secret_chat_id: number, user_id: number }) {
    super();
    this.secret_chat_id = params.secret_chat_id;
    this.user_id = params.user_id;
  }
}

export class ChatFilter extends Class {
  "@type" = "chatFilter"
  exclude_archived: boolean;
  exclude_muted: boolean;
  exclude_read: boolean;
  excluded_chat_ids: number[];
  icon_name: string;
  include_bots: boolean;
  include_channels: boolean;
  include_contacts: boolean;
  include_groups: boolean;
  include_non_contacts: boolean;
  included_chat_ids: number[];
  pinned_chat_ids: number[];
  title: string;

  constructor(params: { exclude_archived: boolean, exclude_muted: boolean, exclude_read: boolean, excluded_chat_ids: number[], icon_name: string, include_bots: boolean, include_channels: boolean, include_contacts: boolean, include_groups: boolean, include_non_contacts: boolean, included_chat_ids: number[], pinned_chat_ids: number[], title: string }) {
    super();
    this.exclude_archived = params.exclude_archived;
    this.exclude_muted = params.exclude_muted;
    this.exclude_read = params.exclude_read;
    this.excluded_chat_ids = params.excluded_chat_ids;
    this.icon_name = params.icon_name;
    this.include_bots = params.include_bots;
    this.include_channels = params.include_channels;
    this.include_contacts = params.include_contacts;
    this.include_groups = params.include_groups;
    this.include_non_contacts = params.include_non_contacts;
    this.included_chat_ids = params.included_chat_ids;
    this.pinned_chat_ids = params.pinned_chat_ids;
    this.title = params.title;
  }
}

export class ChatFilterInfo extends Class {
  "@type" = "chatFilterInfo"
  icon_name: string;
  id: number;
  title: string;

  constructor(params: { icon_name: string, id: number, title: string }) {
    super();
    this.icon_name = params.icon_name;
    this.id = params.id;
    this.title = params.title;
  }
}

export class RecommendedChatFilter extends Class {
  "@type" = "recommendedChatFilter"
  description: string;
  filter: ChatFilter;

  constructor(params: { description: string, filter: ChatFilter }) {
    super();
    this.description = params.description;
    this.filter = params.filter;
  }
}

export class RecommendedChatFilters extends Class {
  "@type" = "recommendedChatFilters"
  chat_filters: RecommendedChatFilter[];

  constructor(params: { chat_filters: RecommendedChatFilter[] }) {
    super();
    this.chat_filters = params.chat_filters;
  }
}

/**
 * Describes a list of chats
 */
export class ChatList extends Class {
}

export class ChatListMain extends ChatList {
  "@type" = "chatListMain"

  constructor(params: {}) {
    super();
  }
}

export class ChatListArchive extends ChatList {
  "@type" = "chatListArchive"

  constructor(params: {}) {
    super();
  }
}

export class ChatListFilter extends ChatList {
  "@type" = "chatListFilter"
  chat_filter_id: number;

  constructor(params: { chat_filter_id: number }) {
    super();
    this.chat_filter_id = params.chat_filter_id;
  }
}

export class ChatLists extends Class {
  "@type" = "chatLists"
  chat_lists: ChatList[];

  constructor(params: { chat_lists: ChatList[] }) {
    super();
    this.chat_lists = params.chat_lists;
  }
}

/**
 * Describes a reason why an external chat is shown in a chat list
 */
export class ChatSource extends Class {
}

export class ChatSourceMtprotoProxy extends ChatSource {
  "@type" = "chatSourceMtprotoProxy"

  constructor(params: {}) {
    super();
  }
}

export class ChatSourcePublicServiceAnnouncement extends ChatSource {
  "@type" = "chatSourcePublicServiceAnnouncement"
  text: string;
  type: string;

  constructor(params: { text: string, type: string }) {
    super();
    this.text = params.text;
    this.type = params.type;
  }
}

export class ChatPosition extends Class {
  "@type" = "chatPosition"
  is_pinned: boolean;
  list: ChatList;
  order: number;
  source?: ChatSource;

  constructor(params: { is_pinned: boolean, list: ChatList, order: number, source?: ChatSource }) {
    super();
    this.is_pinned = params.is_pinned;
    this.list = params.list;
    this.order = params.order;
    this.source = params.source;
  }
}

export class VideoChat extends Class {
  "@type" = "videoChat"
  default_participant_id?: MessageSender;
  group_call_id: number;
  has_participants: boolean;

  constructor(params: { default_participant_id?: MessageSender, group_call_id: number, has_participants: boolean }) {
    super();
    this.default_participant_id = params.default_participant_id;
    this.group_call_id = params.group_call_id;
    this.has_participants = params.has_participants;
  }
}

export class Chat extends Class {
  "@type" = "chat"
  action_bar?: ChatActionBar;
  available_reactions: string[];
  can_be_deleted_for_all_users: boolean;
  can_be_deleted_only_for_self: boolean;
  can_be_reported: boolean;
  client_data: string;
  default_disable_notification: boolean;
  draft_message?: DraftMessage;
  has_protected_content: boolean;
  has_scheduled_messages: boolean;
  id: number;
  is_blocked: boolean;
  is_marked_as_unread: boolean;
  last_message?: Message;
  last_read_inbox_message_id: number;
  last_read_outbox_message_id: number;
  message_sender_id?: MessageSender;
  message_ttl: number;
  notification_settings: ChatNotificationSettings;
  pending_join_requests?: ChatJoinRequestsInfo;
  permissions: ChatPermissions;
  photo?: ChatPhotoInfo;
  positions: ChatPosition[];
  reply_markup_message_id: number;
  theme_name: string;
  title: string;
  type: ChatType;
  unread_count: number;
  unread_mention_count: number;
  unread_reaction_count: number;
  video_chat: VideoChat;

  constructor(params: { action_bar?: ChatActionBar, available_reactions: string[], can_be_deleted_for_all_users: boolean, can_be_deleted_only_for_self: boolean, can_be_reported: boolean, client_data: string, default_disable_notification: boolean, draft_message?: DraftMessage, has_protected_content: boolean, has_scheduled_messages: boolean, id: number, is_blocked: boolean, is_marked_as_unread: boolean, last_message?: Message, last_read_inbox_message_id: number, last_read_outbox_message_id: number, message_sender_id?: MessageSender, message_ttl: number, notification_settings: ChatNotificationSettings, pending_join_requests?: ChatJoinRequestsInfo, permissions: ChatPermissions, photo?: ChatPhotoInfo, positions: ChatPosition[], reply_markup_message_id: number, theme_name: string, title: string, type: ChatType, unread_count: number, unread_mention_count: number, unread_reaction_count: number, video_chat: VideoChat }) {
    super();
    this.action_bar = params.action_bar;
    this.available_reactions = params.available_reactions;
    this.can_be_deleted_for_all_users = params.can_be_deleted_for_all_users;
    this.can_be_deleted_only_for_self = params.can_be_deleted_only_for_self;
    this.can_be_reported = params.can_be_reported;
    this.client_data = params.client_data;
    this.default_disable_notification = params.default_disable_notification;
    this.draft_message = params.draft_message;
    this.has_protected_content = params.has_protected_content;
    this.has_scheduled_messages = params.has_scheduled_messages;
    this.id = params.id;
    this.is_blocked = params.is_blocked;
    this.is_marked_as_unread = params.is_marked_as_unread;
    this.last_message = params.last_message;
    this.last_read_inbox_message_id = params.last_read_inbox_message_id;
    this.last_read_outbox_message_id = params.last_read_outbox_message_id;
    this.message_sender_id = params.message_sender_id;
    this.message_ttl = params.message_ttl;
    this.notification_settings = params.notification_settings;
    this.pending_join_requests = params.pending_join_requests;
    this.permissions = params.permissions;
    this.photo = params.photo;
    this.positions = params.positions;
    this.reply_markup_message_id = params.reply_markup_message_id;
    this.theme_name = params.theme_name;
    this.title = params.title;
    this.type = params.type;
    this.unread_count = params.unread_count;
    this.unread_mention_count = params.unread_mention_count;
    this.unread_reaction_count = params.unread_reaction_count;
    this.video_chat = params.video_chat;
  }
}

export class Chats extends Class {
  "@type" = "chats"
  chat_ids: number[];
  total_count: number;

  constructor(params: { chat_ids: number[], total_count: number }) {
    super();
    this.chat_ids = params.chat_ids;
    this.total_count = params.total_count;
  }
}

export class ChatNearby extends Class {
  "@type" = "chatNearby"
  chat_id: number;
  distance: number;

  constructor(params: { chat_id: number, distance: number }) {
    super();
    this.chat_id = params.chat_id;
    this.distance = params.distance;
  }
}

export class ChatsNearby extends Class {
  "@type" = "chatsNearby"
  supergroups_nearby: ChatNearby[];
  users_nearby: ChatNearby[];

  constructor(params: { supergroups_nearby: ChatNearby[], users_nearby: ChatNearby[] }) {
    super();
    this.supergroups_nearby = params.supergroups_nearby;
    this.users_nearby = params.users_nearby;
  }
}

/**
 * Describes a type of public chats
 */
export class PublicChatType extends Class {
}

export class PublicChatTypeHasUsername extends PublicChatType {
  "@type" = "publicChatTypeHasUsername"

  constructor(params: {}) {
    super();
  }
}

export class PublicChatTypeIsLocationBased extends PublicChatType {
  "@type" = "publicChatTypeIsLocationBased"

  constructor(params: {}) {
    super();
  }
}

/**
 * Describes actions which must be possible to do through a chat action bar
 */
export class ChatActionBar extends Class {
}

export class ChatActionBarReportSpam extends ChatActionBar {
  "@type" = "chatActionBarReportSpam"
  can_unarchive: boolean;

  constructor(params: { can_unarchive: boolean }) {
    super();
    this.can_unarchive = params.can_unarchive;
  }
}

export class ChatActionBarReportUnrelatedLocation extends ChatActionBar {
  "@type" = "chatActionBarReportUnrelatedLocation"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionBarInviteMembers extends ChatActionBar {
  "@type" = "chatActionBarInviteMembers"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionBarReportAddBlock extends ChatActionBar {
  "@type" = "chatActionBarReportAddBlock"
  can_unarchive: boolean;
  distance: number;

  constructor(params: { can_unarchive: boolean, distance: number }) {
    super();
    this.can_unarchive = params.can_unarchive;
    this.distance = params.distance;
  }
}

export class ChatActionBarAddContact extends ChatActionBar {
  "@type" = "chatActionBarAddContact"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionBarSharePhoneNumber extends ChatActionBar {
  "@type" = "chatActionBarSharePhoneNumber"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionBarJoinRequest extends ChatActionBar {
  "@type" = "chatActionBarJoinRequest"
  is_channel: boolean;
  request_date: number;
  title: string;

  constructor(params: { is_channel: boolean, request_date: number, title: string }) {
    super();
    this.is_channel = params.is_channel;
    this.request_date = params.request_date;
    this.title = params.title;
  }
}

/**
 * Describes a keyboard button type
 */
export class KeyboardButtonType extends Class {
}

export class KeyboardButtonTypeText extends KeyboardButtonType {
  "@type" = "keyboardButtonTypeText"

  constructor(params: {}) {
    super();
  }
}

export class KeyboardButtonTypeRequestPhoneNumber extends KeyboardButtonType {
  "@type" = "keyboardButtonTypeRequestPhoneNumber"

  constructor(params: {}) {
    super();
  }
}

export class KeyboardButtonTypeRequestLocation extends KeyboardButtonType {
  "@type" = "keyboardButtonTypeRequestLocation"

  constructor(params: {}) {
    super();
  }
}

export class KeyboardButtonTypeRequestPoll extends KeyboardButtonType {
  "@type" = "keyboardButtonTypeRequestPoll"
  force_quiz: boolean;
  force_regular: boolean;

  constructor(params: { force_quiz: boolean, force_regular: boolean }) {
    super();
    this.force_quiz = params.force_quiz;
    this.force_regular = params.force_regular;
  }
}

export class KeyboardButtonTypeWebApp extends KeyboardButtonType {
  "@type" = "keyboardButtonTypeWebApp"
  url: string;

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class KeyboardButton extends Class {
  "@type" = "keyboardButton"
  text: string;
  type: KeyboardButtonType;

  constructor(params: { text: string, type: KeyboardButtonType }) {
    super();
    this.text = params.text;
    this.type = params.type;
  }
}

/**
 * Describes the type of an inline keyboard button
 */
export class InlineKeyboardButtonType extends Class {
}

export class InlineKeyboardButtonTypeUrl extends InlineKeyboardButtonType {
  "@type" = "inlineKeyboardButtonTypeUrl"
  url: string;

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class InlineKeyboardButtonTypeLoginUrl extends InlineKeyboardButtonType {
  "@type" = "inlineKeyboardButtonTypeLoginUrl"
  forward_text: string;
  id: number;
  url: string;

  constructor(params: { forward_text: string, id: number, url: string }) {
    super();
    this.forward_text = params.forward_text;
    this.id = params.id;
    this.url = params.url;
  }
}

export class InlineKeyboardButtonTypeWebApp extends InlineKeyboardButtonType {
  "@type" = "inlineKeyboardButtonTypeWebApp"
  url: string;

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class InlineKeyboardButtonTypeCallback extends InlineKeyboardButtonType {
  "@type" = "inlineKeyboardButtonTypeCallback"
  data: string;

  constructor(params: { data: string }) {
    super();
    this.data = params.data;
  }
}

export class InlineKeyboardButtonTypeCallbackWithPassword extends InlineKeyboardButtonType {
  "@type" = "inlineKeyboardButtonTypeCallbackWithPassword"
  data: string;

  constructor(params: { data: string }) {
    super();
    this.data = params.data;
  }
}

export class InlineKeyboardButtonTypeCallbackGame extends InlineKeyboardButtonType {
  "@type" = "inlineKeyboardButtonTypeCallbackGame"

  constructor(params: {}) {
    super();
  }
}

export class InlineKeyboardButtonTypeSwitchInline extends InlineKeyboardButtonType {
  "@type" = "inlineKeyboardButtonTypeSwitchInline"
  in_current_chat: boolean;
  query: string;

  constructor(params: { in_current_chat: boolean, query: string }) {
    super();
    this.in_current_chat = params.in_current_chat;
    this.query = params.query;
  }
}

export class InlineKeyboardButtonTypeBuy extends InlineKeyboardButtonType {
  "@type" = "inlineKeyboardButtonTypeBuy"

  constructor(params: {}) {
    super();
  }
}

export class InlineKeyboardButtonTypeUser extends InlineKeyboardButtonType {
  "@type" = "inlineKeyboardButtonTypeUser"
  user_id: number;

  constructor(params: { user_id: number }) {
    super();
    this.user_id = params.user_id;
  }
}

export class InlineKeyboardButton extends Class {
  "@type" = "inlineKeyboardButton"
  text: string;
  type: InlineKeyboardButtonType;

  constructor(params: { text: string, type: InlineKeyboardButtonType }) {
    super();
    this.text = params.text;
    this.type = params.type;
  }
}

/**
 * Contains a description of a custom keyboard and actions that can be done with it to quickly reply to bots
 */
export class ReplyMarkup extends Class {
}

export class ReplyMarkupRemoveKeyboard extends ReplyMarkup {
  "@type" = "replyMarkupRemoveKeyboard"
  is_personal: boolean;

  constructor(params: { is_personal: boolean }) {
    super();
    this.is_personal = params.is_personal;
  }
}

export class ReplyMarkupForceReply extends ReplyMarkup {
  "@type" = "replyMarkupForceReply"
  input_field_placeholder: string;
  is_personal: boolean;

  constructor(params: { input_field_placeholder: string, is_personal: boolean }) {
    super();
    this.input_field_placeholder = params.input_field_placeholder;
    this.is_personal = params.is_personal;
  }
}

export class ReplyMarkupShowKeyboard extends ReplyMarkup {
  "@type" = "replyMarkupShowKeyboard"
  input_field_placeholder: string;
  is_personal: boolean;
  one_time: boolean;
  resize_keyboard: boolean;
  rows: KeyboardButton[][];

  constructor(params: { input_field_placeholder: string, is_personal: boolean, one_time: boolean, resize_keyboard: boolean, rows: KeyboardButton[][] }) {
    super();
    this.input_field_placeholder = params.input_field_placeholder;
    this.is_personal = params.is_personal;
    this.one_time = params.one_time;
    this.resize_keyboard = params.resize_keyboard;
    this.rows = params.rows;
  }
}

export class ReplyMarkupInlineKeyboard extends ReplyMarkup {
  "@type" = "replyMarkupInlineKeyboard"
  rows: InlineKeyboardButton[][];

  constructor(params: { rows: InlineKeyboardButton[][] }) {
    super();
    this.rows = params.rows;
  }
}

/**
 * Contains information about an inline button of type inlineKeyboardButtonTypeLoginUrl
 */
export class LoginUrlInfo extends Class {
}

export class LoginUrlInfoOpen extends LoginUrlInfo {
  "@type" = "loginUrlInfoOpen"
  skip_confirm: boolean;
  url: string;

  constructor(params: { skip_confirm: boolean, url: string }) {
    super();
    this.skip_confirm = params.skip_confirm;
    this.url = params.url;
  }
}

export class LoginUrlInfoRequestConfirmation extends LoginUrlInfo {
  "@type" = "loginUrlInfoRequestConfirmation"
  bot_user_id: number;
  domain: string;
  request_write_access: boolean;
  url: string;

  constructor(params: { bot_user_id: number, domain: string, request_write_access: boolean, url: string }) {
    super();
    this.bot_user_id = params.bot_user_id;
    this.domain = params.domain;
    this.request_write_access = params.request_write_access;
    this.url = params.url;
  }
}

export class WebAppInfo extends Class {
  "@type" = "webAppInfo"
  launch_id: number;
  url: string;

  constructor(params: { launch_id: number, url: string }) {
    super();
    this.launch_id = params.launch_id;
    this.url = params.url;
  }
}

export class MessageThreadInfo extends Class {
  "@type" = "messageThreadInfo"
  chat_id: number;
  draft_message?: DraftMessage;
  message_thread_id: number;
  messages: Message[];
  reply_info: MessageReplyInfo;
  unread_message_count: number;

  constructor(params: { chat_id: number, draft_message?: DraftMessage, message_thread_id: number, messages: Message[], reply_info: MessageReplyInfo, unread_message_count: number }) {
    super();
    this.chat_id = params.chat_id;
    this.draft_message = params.draft_message;
    this.message_thread_id = params.message_thread_id;
    this.messages = params.messages;
    this.reply_info = params.reply_info;
    this.unread_message_count = params.unread_message_count;
  }
}

/**
 * Describes a text object inside an instant-view web page
 */
export class RichText extends Class {
}

export class RichTextPlain extends RichText {
  "@type" = "richTextPlain"
  text: string;

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class RichTextBold extends RichText {
  "@type" = "richTextBold"
  text: RichText;

  constructor(params: { text: RichText }) {
    super();
    this.text = params.text;
  }
}

export class RichTextItalic extends RichText {
  "@type" = "richTextItalic"
  text: RichText;

  constructor(params: { text: RichText }) {
    super();
    this.text = params.text;
  }
}

export class RichTextUnderline extends RichText {
  "@type" = "richTextUnderline"
  text: RichText;

  constructor(params: { text: RichText }) {
    super();
    this.text = params.text;
  }
}

export class RichTextStrikethrough extends RichText {
  "@type" = "richTextStrikethrough"
  text: RichText;

  constructor(params: { text: RichText }) {
    super();
    this.text = params.text;
  }
}

export class RichTextFixed extends RichText {
  "@type" = "richTextFixed"
  text: RichText;

  constructor(params: { text: RichText }) {
    super();
    this.text = params.text;
  }
}

export class RichTextUrl extends RichText {
  "@type" = "richTextUrl"
  is_cached: boolean;
  text: RichText;
  url: string;

  constructor(params: { is_cached: boolean, text: RichText, url: string }) {
    super();
    this.is_cached = params.is_cached;
    this.text = params.text;
    this.url = params.url;
  }
}

export class RichTextEmailAddress extends RichText {
  "@type" = "richTextEmailAddress"
  email_address: string;
  text: RichText;

  constructor(params: { email_address: string, text: RichText }) {
    super();
    this.email_address = params.email_address;
    this.text = params.text;
  }
}

export class RichTextSubscript extends RichText {
  "@type" = "richTextSubscript"
  text: RichText;

  constructor(params: { text: RichText }) {
    super();
    this.text = params.text;
  }
}

export class RichTextSuperscript extends RichText {
  "@type" = "richTextSuperscript"
  text: RichText;

  constructor(params: { text: RichText }) {
    super();
    this.text = params.text;
  }
}

export class RichTextMarked extends RichText {
  "@type" = "richTextMarked"
  text: RichText;

  constructor(params: { text: RichText }) {
    super();
    this.text = params.text;
  }
}

export class RichTextPhoneNumber extends RichText {
  "@type" = "richTextPhoneNumber"
  phone_number: string;
  text: RichText;

  constructor(params: { phone_number: string, text: RichText }) {
    super();
    this.phone_number = params.phone_number;
    this.text = params.text;
  }
}

export class RichTextIcon extends RichText {
  "@type" = "richTextIcon"
  document: Document;
  height: number;
  width: number;

  constructor(params: { document: Document, height: number, width: number }) {
    super();
    this.document = params.document;
    this.height = params.height;
    this.width = params.width;
  }
}

export class RichTextReference extends RichText {
  "@type" = "richTextReference"
  anchor_name: string;
  text: RichText;
  url: string;

  constructor(params: { anchor_name: string, text: RichText, url: string }) {
    super();
    this.anchor_name = params.anchor_name;
    this.text = params.text;
    this.url = params.url;
  }
}

export class RichTextAnchor extends RichText {
  "@type" = "richTextAnchor"
  name: string;

  constructor(params: { name: string }) {
    super();
    this.name = params.name;
  }
}

export class RichTextAnchorLink extends RichText {
  "@type" = "richTextAnchorLink"
  anchor_name: string;
  text: RichText;
  url: string;

  constructor(params: { anchor_name: string, text: RichText, url: string }) {
    super();
    this.anchor_name = params.anchor_name;
    this.text = params.text;
    this.url = params.url;
  }
}

export class RichTexts extends RichText {
  "@type" = "richTexts"
  texts: RichText[];

  constructor(params: { texts: RichText[] }) {
    super();
    this.texts = params.texts;
  }
}

export class PageBlockCaption extends Class {
  "@type" = "pageBlockCaption"
  credit: RichText;
  text: RichText;

  constructor(params: { credit: RichText, text: RichText }) {
    super();
    this.credit = params.credit;
    this.text = params.text;
  }
}

export class PageBlockListItem extends Class {
  "@type" = "pageBlockListItem"
  label: string;
  page_blocks: PageBlock[];

  constructor(params: { label: string, page_blocks: PageBlock[] }) {
    super();
    this.label = params.label;
    this.page_blocks = params.page_blocks;
  }
}

/**
 * Describes a horizontal alignment of a table cell content
 */
export class PageBlockHorizontalAlignment extends Class {
}

export class PageBlockHorizontalAlignmentLeft extends PageBlockHorizontalAlignment {
  "@type" = "pageBlockHorizontalAlignmentLeft"

  constructor(params: {}) {
    super();
  }
}

export class PageBlockHorizontalAlignmentCenter extends PageBlockHorizontalAlignment {
  "@type" = "pageBlockHorizontalAlignmentCenter"

  constructor(params: {}) {
    super();
  }
}

export class PageBlockHorizontalAlignmentRight extends PageBlockHorizontalAlignment {
  "@type" = "pageBlockHorizontalAlignmentRight"

  constructor(params: {}) {
    super();
  }
}

/**
 * Describes a Vertical alignment of a table cell content
 */
export class PageBlockVerticalAlignment extends Class {
}

export class PageBlockVerticalAlignmentTop extends PageBlockVerticalAlignment {
  "@type" = "pageBlockVerticalAlignmentTop"

  constructor(params: {}) {
    super();
  }
}

export class PageBlockVerticalAlignmentMiddle extends PageBlockVerticalAlignment {
  "@type" = "pageBlockVerticalAlignmentMiddle"

  constructor(params: {}) {
    super();
  }
}

export class PageBlockVerticalAlignmentBottom extends PageBlockVerticalAlignment {
  "@type" = "pageBlockVerticalAlignmentBottom"

  constructor(params: {}) {
    super();
  }
}

export class PageBlockTableCell extends Class {
  "@type" = "pageBlockTableCell"
  align: PageBlockHorizontalAlignment;
  colspan: number;
  is_header: boolean;
  rowspan: number;
  text: RichText;
  valign: PageBlockVerticalAlignment;

  constructor(params: { align: PageBlockHorizontalAlignment, colspan: number, is_header: boolean, rowspan: number, text: RichText, valign: PageBlockVerticalAlignment }) {
    super();
    this.align = params.align;
    this.colspan = params.colspan;
    this.is_header = params.is_header;
    this.rowspan = params.rowspan;
    this.text = params.text;
    this.valign = params.valign;
  }
}

export class PageBlockRelatedArticle extends Class {
  "@type" = "pageBlockRelatedArticle"
  author: string;
  description: string;
  photo?: Photo;
  publish_date: number;
  title: string;
  url: string;

  constructor(params: { author: string, description: string, photo?: Photo, publish_date: number, title: string, url: string }) {
    super();
    this.author = params.author;
    this.description = params.description;
    this.photo = params.photo;
    this.publish_date = params.publish_date;
    this.title = params.title;
    this.url = params.url;
  }
}

/**
 * Describes a block of an instant view web page
 */
export class PageBlock extends Class {
}

export class PageBlockTitle extends PageBlock {
  "@type" = "pageBlockTitle"
  title: RichText;

  constructor(params: { title: RichText }) {
    super();
    this.title = params.title;
  }
}

export class PageBlockSubtitle extends PageBlock {
  "@type" = "pageBlockSubtitle"
  subtitle: RichText;

  constructor(params: { subtitle: RichText }) {
    super();
    this.subtitle = params.subtitle;
  }
}

export class PageBlockAuthorDate extends PageBlock {
  "@type" = "pageBlockAuthorDate"
  author: RichText;
  publish_date: number;

  constructor(params: { author: RichText, publish_date: number }) {
    super();
    this.author = params.author;
    this.publish_date = params.publish_date;
  }
}

export class PageBlockHeader extends PageBlock {
  "@type" = "pageBlockHeader"
  header: RichText;

  constructor(params: { header: RichText }) {
    super();
    this.header = params.header;
  }
}

export class PageBlockSubheader extends PageBlock {
  "@type" = "pageBlockSubheader"
  subheader: RichText;

  constructor(params: { subheader: RichText }) {
    super();
    this.subheader = params.subheader;
  }
}

export class PageBlockKicker extends PageBlock {
  "@type" = "pageBlockKicker"
  kicker: RichText;

  constructor(params: { kicker: RichText }) {
    super();
    this.kicker = params.kicker;
  }
}

export class PageBlockParagraph extends PageBlock {
  "@type" = "pageBlockParagraph"
  text: RichText;

  constructor(params: { text: RichText }) {
    super();
    this.text = params.text;
  }
}

export class PageBlockPreformatted extends PageBlock {
  "@type" = "pageBlockPreformatted"
  language: string;
  text: RichText;

  constructor(params: { language: string, text: RichText }) {
    super();
    this.language = params.language;
    this.text = params.text;
  }
}

export class PageBlockFooter extends PageBlock {
  "@type" = "pageBlockFooter"
  footer: RichText;

  constructor(params: { footer: RichText }) {
    super();
    this.footer = params.footer;
  }
}

export class PageBlockDivider extends PageBlock {
  "@type" = "pageBlockDivider"

  constructor(params: {}) {
    super();
  }
}

export class PageBlockAnchor extends PageBlock {
  "@type" = "pageBlockAnchor"
  name: string;

  constructor(params: { name: string }) {
    super();
    this.name = params.name;
  }
}

export class PageBlockList extends PageBlock {
  "@type" = "pageBlockList"
  items: PageBlockListItem[];

  constructor(params: { items: PageBlockListItem[] }) {
    super();
    this.items = params.items;
  }
}

export class PageBlockBlockQuote extends PageBlock {
  "@type" = "pageBlockBlockQuote"
  credit: RichText;
  text: RichText;

  constructor(params: { credit: RichText, text: RichText }) {
    super();
    this.credit = params.credit;
    this.text = params.text;
  }
}

export class PageBlockPullQuote extends PageBlock {
  "@type" = "pageBlockPullQuote"
  credit: RichText;
  text: RichText;

  constructor(params: { credit: RichText, text: RichText }) {
    super();
    this.credit = params.credit;
    this.text = params.text;
  }
}

export class PageBlockAnimation extends PageBlock {
  "@type" = "pageBlockAnimation"
  animation: Animation;
  caption: PageBlockCaption;
  need_autoplay: boolean;

  constructor(params: { animation: Animation, caption: PageBlockCaption, need_autoplay: boolean }) {
    super();
    this.animation = params.animation;
    this.caption = params.caption;
    this.need_autoplay = params.need_autoplay;
  }
}

export class PageBlockAudio extends PageBlock {
  "@type" = "pageBlockAudio"
  audio: Audio;
  caption: PageBlockCaption;

  constructor(params: { audio: Audio, caption: PageBlockCaption }) {
    super();
    this.audio = params.audio;
    this.caption = params.caption;
  }
}

export class PageBlockPhoto extends PageBlock {
  "@type" = "pageBlockPhoto"
  caption: PageBlockCaption;
  photo: Photo;
  url: string;

  constructor(params: { caption: PageBlockCaption, photo: Photo, url: string }) {
    super();
    this.caption = params.caption;
    this.photo = params.photo;
    this.url = params.url;
  }
}

export class PageBlockVideo extends PageBlock {
  "@type" = "pageBlockVideo"
  caption: PageBlockCaption;
  is_looped: boolean;
  need_autoplay: boolean;
  video: Video;

  constructor(params: { caption: PageBlockCaption, is_looped: boolean, need_autoplay: boolean, video: Video }) {
    super();
    this.caption = params.caption;
    this.is_looped = params.is_looped;
    this.need_autoplay = params.need_autoplay;
    this.video = params.video;
  }
}

export class PageBlockVoiceNote extends PageBlock {
  "@type" = "pageBlockVoiceNote"
  caption: PageBlockCaption;
  voice_note: VoiceNote;

  constructor(params: { caption: PageBlockCaption, voice_note: VoiceNote }) {
    super();
    this.caption = params.caption;
    this.voice_note = params.voice_note;
  }
}

export class PageBlockCover extends PageBlock {
  "@type" = "pageBlockCover"
  cover: PageBlock;

  constructor(params: { cover: PageBlock }) {
    super();
    this.cover = params.cover;
  }
}

export class PageBlockEmbedded extends PageBlock {
  "@type" = "pageBlockEmbedded"
  allow_scrolling: boolean;
  caption: PageBlockCaption;
  height: number;
  html: string;
  is_full_width: boolean;
  poster_photo: Photo;
  url: string;
  width: number;

  constructor(params: { allow_scrolling: boolean, caption: PageBlockCaption, height: number, html: string, is_full_width: boolean, poster_photo: Photo, url: string, width: number }) {
    super();
    this.allow_scrolling = params.allow_scrolling;
    this.caption = params.caption;
    this.height = params.height;
    this.html = params.html;
    this.is_full_width = params.is_full_width;
    this.poster_photo = params.poster_photo;
    this.url = params.url;
    this.width = params.width;
  }
}

export class PageBlockEmbeddedPost extends PageBlock {
  "@type" = "pageBlockEmbeddedPost"
  author: string;
  author_photo: Photo;
  caption: PageBlockCaption;
  date: number;
  page_blocks: PageBlock[];
  url: string;

  constructor(params: { author: string, author_photo: Photo, caption: PageBlockCaption, date: number, page_blocks: PageBlock[], url: string }) {
    super();
    this.author = params.author;
    this.author_photo = params.author_photo;
    this.caption = params.caption;
    this.date = params.date;
    this.page_blocks = params.page_blocks;
    this.url = params.url;
  }
}

export class PageBlockCollage extends PageBlock {
  "@type" = "pageBlockCollage"
  caption: PageBlockCaption;
  page_blocks: PageBlock[];

  constructor(params: { caption: PageBlockCaption, page_blocks: PageBlock[] }) {
    super();
    this.caption = params.caption;
    this.page_blocks = params.page_blocks;
  }
}

export class PageBlockSlideshow extends PageBlock {
  "@type" = "pageBlockSlideshow"
  caption: PageBlockCaption;
  page_blocks: PageBlock[];

  constructor(params: { caption: PageBlockCaption, page_blocks: PageBlock[] }) {
    super();
    this.caption = params.caption;
    this.page_blocks = params.page_blocks;
  }
}

export class PageBlockChatLink extends PageBlock {
  "@type" = "pageBlockChatLink"
  photo: ChatPhotoInfo;
  title: string;
  username: string;

  constructor(params: { photo: ChatPhotoInfo, title: string, username: string }) {
    super();
    this.photo = params.photo;
    this.title = params.title;
    this.username = params.username;
  }
}

export class PageBlockTable extends PageBlock {
  "@type" = "pageBlockTable"
  caption: RichText;
  cells: PageBlockTableCell[][];
  is_bordered: boolean;
  is_striped: boolean;

  constructor(params: { caption: RichText, cells: PageBlockTableCell[][], is_bordered: boolean, is_striped: boolean }) {
    super();
    this.caption = params.caption;
    this.cells = params.cells;
    this.is_bordered = params.is_bordered;
    this.is_striped = params.is_striped;
  }
}

export class PageBlockDetails extends PageBlock {
  "@type" = "pageBlockDetails"
  header: RichText;
  is_open: boolean;
  page_blocks: PageBlock[];

  constructor(params: { header: RichText, is_open: boolean, page_blocks: PageBlock[] }) {
    super();
    this.header = params.header;
    this.is_open = params.is_open;
    this.page_blocks = params.page_blocks;
  }
}

export class PageBlockRelatedArticles extends PageBlock {
  "@type" = "pageBlockRelatedArticles"
  articles: PageBlockRelatedArticle[];
  header: RichText;

  constructor(params: { articles: PageBlockRelatedArticle[], header: RichText }) {
    super();
    this.articles = params.articles;
    this.header = params.header;
  }
}

export class PageBlockMap extends PageBlock {
  "@type" = "pageBlockMap"
  caption: PageBlockCaption;
  height: number;
  location: Location;
  width: number;
  zoom: number;

  constructor(params: { caption: PageBlockCaption, height: number, location: Location, width: number, zoom: number }) {
    super();
    this.caption = params.caption;
    this.height = params.height;
    this.location = params.location;
    this.width = params.width;
    this.zoom = params.zoom;
  }
}

export class WebPageInstantView extends Class {
  "@type" = "webPageInstantView"
  feedback_link: InternalLinkType;
  is_full: boolean;
  is_rtl: boolean;
  page_blocks: PageBlock[];
  version: number;
  view_count: number;

  constructor(params: { feedback_link: InternalLinkType, is_full: boolean, is_rtl: boolean, page_blocks: PageBlock[], version: number, view_count: number }) {
    super();
    this.feedback_link = params.feedback_link;
    this.is_full = params.is_full;
    this.is_rtl = params.is_rtl;
    this.page_blocks = params.page_blocks;
    this.version = params.version;
    this.view_count = params.view_count;
  }
}

export class WebPage extends Class {
  "@type" = "webPage"
  animation?: Animation;
  audio?: Audio;
  author: string;
  description: FormattedText;
  display_url: string;
  document?: Document;
  duration: number;
  embed_height: number;
  embed_type: string;
  embed_url: string;
  embed_width: number;
  instant_view_version: number;
  photo?: Photo;
  site_name: string;
  sticker?: Sticker;
  title: string;
  type: string;
  url: string;
  video?: Video;
  video_note?: VideoNote;
  voice_note?: VoiceNote;

  constructor(params: { animation?: Animation, audio?: Audio, author: string, description: FormattedText, display_url: string, document?: Document, duration: number, embed_height: number, embed_type: string, embed_url: string, embed_width: number, instant_view_version: number, photo?: Photo, site_name: string, sticker?: Sticker, title: string, type: string, url: string, video?: Video, video_note?: VideoNote, voice_note?: VoiceNote }) {
    super();
    this.animation = params.animation;
    this.audio = params.audio;
    this.author = params.author;
    this.description = params.description;
    this.display_url = params.display_url;
    this.document = params.document;
    this.duration = params.duration;
    this.embed_height = params.embed_height;
    this.embed_type = params.embed_type;
    this.embed_url = params.embed_url;
    this.embed_width = params.embed_width;
    this.instant_view_version = params.instant_view_version;
    this.photo = params.photo;
    this.site_name = params.site_name;
    this.sticker = params.sticker;
    this.title = params.title;
    this.type = params.type;
    this.url = params.url;
    this.video = params.video;
    this.video_note = params.video_note;
    this.voice_note = params.voice_note;
  }
}

export class CountryInfo extends Class {
  "@type" = "countryInfo"
  calling_codes: string[];
  country_code: string;
  english_name: string;
  is_hidden: boolean;
  name: string;

  constructor(params: { calling_codes: string[], country_code: string, english_name: string, is_hidden: boolean, name: string }) {
    super();
    this.calling_codes = params.calling_codes;
    this.country_code = params.country_code;
    this.english_name = params.english_name;
    this.is_hidden = params.is_hidden;
    this.name = params.name;
  }
}

export class Countries extends Class {
  "@type" = "countries"
  countries: CountryInfo[];

  constructor(params: { countries: CountryInfo[] }) {
    super();
    this.countries = params.countries;
  }
}

export class PhoneNumberInfo extends Class {
  "@type" = "phoneNumberInfo"
  country?: CountryInfo;
  country_calling_code: string;
  formatted_phone_number: string;

  constructor(params: { country?: CountryInfo, country_calling_code: string, formatted_phone_number: string }) {
    super();
    this.country = params.country;
    this.country_calling_code = params.country_calling_code;
    this.formatted_phone_number = params.formatted_phone_number;
  }
}

export class BankCardActionOpenUrl extends Class {
  "@type" = "bankCardActionOpenUrl"
  text: string;
  url: string;

  constructor(params: { text: string, url: string }) {
    super();
    this.text = params.text;
    this.url = params.url;
  }
}

export class BankCardInfo extends Class {
  "@type" = "bankCardInfo"
  actions: BankCardActionOpenUrl[];
  title: string;

  constructor(params: { actions: BankCardActionOpenUrl[], title: string }) {
    super();
    this.actions = params.actions;
    this.title = params.title;
  }
}

export class Address extends Class {
  "@type" = "address"
  city: string;
  country_code: string;
  postal_code: string;
  state: string;
  street_line1: string;
  street_line2: string;

  constructor(params: { city: string, country_code: string, postal_code: string, state: string, street_line1: string, street_line2: string }) {
    super();
    this.city = params.city;
    this.country_code = params.country_code;
    this.postal_code = params.postal_code;
    this.state = params.state;
    this.street_line1 = params.street_line1;
    this.street_line2 = params.street_line2;
  }
}

export class ThemeParameters extends Class {
  "@type" = "themeParameters"
  background_color: number;
  button_color: number;
  button_text_color: number;
  hint_color: number;
  link_color: number;
  secondary_background_color: number;
  text_color: number;

  constructor(params: { background_color: number, button_color: number, button_text_color: number, hint_color: number, link_color: number, secondary_background_color: number, text_color: number }) {
    super();
    this.background_color = params.background_color;
    this.button_color = params.button_color;
    this.button_text_color = params.button_text_color;
    this.hint_color = params.hint_color;
    this.link_color = params.link_color;
    this.secondary_background_color = params.secondary_background_color;
    this.text_color = params.text_color;
  }
}

export class LabeledPricePart extends Class {
  "@type" = "labeledPricePart"
  amount: number;
  label: string;

  constructor(params: { amount: number, label: string }) {
    super();
    this.amount = params.amount;
    this.label = params.label;
  }
}

export class Invoice extends Class {
  "@type" = "invoice"
  currency: string;
  is_flexible: boolean;
  is_test: boolean;
  max_tip_amount: number;
  need_email_address: boolean;
  need_name: boolean;
  need_phone_number: boolean;
  need_shipping_address: boolean;
  price_parts: LabeledPricePart[];
  recurring_payment_terms_of_service_url: string;
  send_email_address_to_provider: boolean;
  send_phone_number_to_provider: boolean;
  suggested_tip_amounts: number[];

  constructor(params: { currency: string, is_flexible: boolean, is_test: boolean, max_tip_amount: number, need_email_address: boolean, need_name: boolean, need_phone_number: boolean, need_shipping_address: boolean, price_parts: LabeledPricePart[], recurring_payment_terms_of_service_url: string, send_email_address_to_provider: boolean, send_phone_number_to_provider: boolean, suggested_tip_amounts: number[] }) {
    super();
    this.currency = params.currency;
    this.is_flexible = params.is_flexible;
    this.is_test = params.is_test;
    this.max_tip_amount = params.max_tip_amount;
    this.need_email_address = params.need_email_address;
    this.need_name = params.need_name;
    this.need_phone_number = params.need_phone_number;
    this.need_shipping_address = params.need_shipping_address;
    this.price_parts = params.price_parts;
    this.recurring_payment_terms_of_service_url = params.recurring_payment_terms_of_service_url;
    this.send_email_address_to_provider = params.send_email_address_to_provider;
    this.send_phone_number_to_provider = params.send_phone_number_to_provider;
    this.suggested_tip_amounts = params.suggested_tip_amounts;
  }
}

export class OrderInfo extends Class {
  "@type" = "orderInfo"
  email_address: string;
  name: string;
  phone_number: string;
  shipping_address: Address;

  constructor(params: { email_address: string, name: string, phone_number: string, shipping_address: Address }) {
    super();
    this.email_address = params.email_address;
    this.name = params.name;
    this.phone_number = params.phone_number;
    this.shipping_address = params.shipping_address;
  }
}

export class ShippingOption extends Class {
  "@type" = "shippingOption"
  id: string;
  price_parts: LabeledPricePart[];
  title: string;

  constructor(params: { id: string, price_parts: LabeledPricePart[], title: string }) {
    super();
    this.id = params.id;
    this.price_parts = params.price_parts;
    this.title = params.title;
  }
}

export class SavedCredentials extends Class {
  "@type" = "savedCredentials"
  id: string;
  title: string;

  constructor(params: { id: string, title: string }) {
    super();
    this.id = params.id;
    this.title = params.title;
  }
}

/**
 * Contains information about the payment method chosen by the user
 */
export class InputCredentials extends Class {
}

export class InputCredentialsSaved extends InputCredentials {
  "@type" = "inputCredentialsSaved"
  saved_credentials_id: string;

  constructor(params: { saved_credentials_id: string }) {
    super();
    this.saved_credentials_id = params.saved_credentials_id;
  }
}

export class InputCredentialsNew extends InputCredentials {
  "@type" = "inputCredentialsNew"
  allow_save: boolean;
  data: string;

  constructor(params: { allow_save: boolean, data: string }) {
    super();
    this.allow_save = params.allow_save;
    this.data = params.data;
  }
}

export class InputCredentialsApplePay extends InputCredentials {
  "@type" = "inputCredentialsApplePay"
  data: string;

  constructor(params: { data: string }) {
    super();
    this.data = params.data;
  }
}

export class InputCredentialsGooglePay extends InputCredentials {
  "@type" = "inputCredentialsGooglePay"
  data: string;

  constructor(params: { data: string }) {
    super();
    this.data = params.data;
  }
}

/**
 * Contains information about a payment provider
 */
export class PaymentProvider extends Class {
}

export class PaymentProviderSmartGlocal extends PaymentProvider {
  "@type" = "paymentProviderSmartGlocal"
  public_token: string;

  constructor(params: { public_token: string }) {
    super();
    this.public_token = params.public_token;
  }
}

export class PaymentProviderStripe extends PaymentProvider {
  "@type" = "paymentProviderStripe"
  need_cardholder_name: boolean;
  need_country: boolean;
  need_postal_code: boolean;
  publishable_key: string;

  constructor(params: { need_cardholder_name: boolean, need_country: boolean, need_postal_code: boolean, publishable_key: string }) {
    super();
    this.need_cardholder_name = params.need_cardholder_name;
    this.need_country = params.need_country;
    this.need_postal_code = params.need_postal_code;
    this.publishable_key = params.publishable_key;
  }
}

export class PaymentProviderOther extends PaymentProvider {
  "@type" = "paymentProviderOther"
  url: string;

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class PaymentOption extends Class {
  "@type" = "paymentOption"
  title: string;
  url: string;

  constructor(params: { title: string, url: string }) {
    super();
    this.title = params.title;
    this.url = params.url;
  }
}

export class PaymentForm extends Class {
  "@type" = "paymentForm"
  additional_payment_options: PaymentOption[];
  can_save_credentials: boolean;
  id: number;
  invoice: Invoice;
  need_password: boolean;
  payment_provider: PaymentProvider;
  payment_provider_user_id: number;
  product_description: FormattedText;
  product_photo?: Photo;
  product_title: string;
  saved_credentials: SavedCredentials[];
  saved_order_info?: OrderInfo;
  seller_bot_user_id: number;

  constructor(params: { additional_payment_options: PaymentOption[], can_save_credentials: boolean, id: number, invoice: Invoice, need_password: boolean, payment_provider: PaymentProvider, payment_provider_user_id: number, product_description: FormattedText, product_photo?: Photo, product_title: string, saved_credentials: SavedCredentials[], saved_order_info?: OrderInfo, seller_bot_user_id: number }) {
    super();
    this.additional_payment_options = params.additional_payment_options;
    this.can_save_credentials = params.can_save_credentials;
    this.id = params.id;
    this.invoice = params.invoice;
    this.need_password = params.need_password;
    this.payment_provider = params.payment_provider;
    this.payment_provider_user_id = params.payment_provider_user_id;
    this.product_description = params.product_description;
    this.product_photo = params.product_photo;
    this.product_title = params.product_title;
    this.saved_credentials = params.saved_credentials;
    this.saved_order_info = params.saved_order_info;
    this.seller_bot_user_id = params.seller_bot_user_id;
  }
}

export class ValidatedOrderInfo extends Class {
  "@type" = "validatedOrderInfo"
  order_info_id: string;
  shipping_options: ShippingOption[];

  constructor(params: { order_info_id: string, shipping_options: ShippingOption[] }) {
    super();
    this.order_info_id = params.order_info_id;
    this.shipping_options = params.shipping_options;
  }
}

export class PaymentResult extends Class {
  "@type" = "paymentResult"
  success: boolean;
  verification_url: string;

  constructor(params: { success: boolean, verification_url: string }) {
    super();
    this.success = params.success;
    this.verification_url = params.verification_url;
  }
}

export class PaymentReceipt extends Class {
  "@type" = "paymentReceipt"
  credentials_title: string;
  date: number;
  description: FormattedText;
  invoice: Invoice;
  order_info?: OrderInfo;
  payment_provider_user_id: number;
  photo?: Photo;
  seller_bot_user_id: number;
  shipping_option?: ShippingOption;
  tip_amount: number;
  title: string;

  constructor(params: { credentials_title: string, date: number, description: FormattedText, invoice: Invoice, order_info?: OrderInfo, payment_provider_user_id: number, photo?: Photo, seller_bot_user_id: number, shipping_option?: ShippingOption, tip_amount: number, title: string }) {
    super();
    this.credentials_title = params.credentials_title;
    this.date = params.date;
    this.description = params.description;
    this.invoice = params.invoice;
    this.order_info = params.order_info;
    this.payment_provider_user_id = params.payment_provider_user_id;
    this.photo = params.photo;
    this.seller_bot_user_id = params.seller_bot_user_id;
    this.shipping_option = params.shipping_option;
    this.tip_amount = params.tip_amount;
    this.title = params.title;
  }
}

/**
 * Describe an invoice to process
 */
export class InputInvoice extends Class {
}

export class InputInvoiceMessage extends InputInvoice {
  "@type" = "inputInvoiceMessage"
  chat_id: number;
  message_id: number;

  constructor(params: { chat_id: number, message_id: number }) {
    super();
    this.chat_id = params.chat_id;
    this.message_id = params.message_id;
  }
}

export class InputInvoiceName extends InputInvoice {
  "@type" = "inputInvoiceName"
  name: string;

  constructor(params: { name: string }) {
    super();
    this.name = params.name;
  }
}

export class DatedFile extends Class {
  "@type" = "datedFile"
  date: number;
  file: File;

  constructor(params: { date: number, file: File }) {
    super();
    this.date = params.date;
    this.file = params.file;
  }
}

/**
 * Contains the type of a Telegram Passport element
 */
export class PassportElementType extends Class {
}

export class PassportElementTypePersonalDetails extends PassportElementType {
  "@type" = "passportElementTypePersonalDetails"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypePassport extends PassportElementType {
  "@type" = "passportElementTypePassport"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypeDriverLicense extends PassportElementType {
  "@type" = "passportElementTypeDriverLicense"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypeIdentityCard extends PassportElementType {
  "@type" = "passportElementTypeIdentityCard"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypeInternalPassport extends PassportElementType {
  "@type" = "passportElementTypeInternalPassport"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypeAddress extends PassportElementType {
  "@type" = "passportElementTypeAddress"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypeUtilityBill extends PassportElementType {
  "@type" = "passportElementTypeUtilityBill"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypeBankStatement extends PassportElementType {
  "@type" = "passportElementTypeBankStatement"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypeRentalAgreement extends PassportElementType {
  "@type" = "passportElementTypeRentalAgreement"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypePassportRegistration extends PassportElementType {
  "@type" = "passportElementTypePassportRegistration"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypeTemporaryRegistration extends PassportElementType {
  "@type" = "passportElementTypeTemporaryRegistration"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypePhoneNumber extends PassportElementType {
  "@type" = "passportElementTypePhoneNumber"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementTypeEmailAddress extends PassportElementType {
  "@type" = "passportElementTypeEmailAddress"

  constructor(params: {}) {
    super();
  }
}

export class Date extends Class {
  "@type" = "date"
  day: number;
  month: number;
  year: number;

  constructor(params: { day: number, month: number, year: number }) {
    super();
    this.day = params.day;
    this.month = params.month;
    this.year = params.year;
  }
}

export class PersonalDetails extends Class {
  "@type" = "personalDetails"
  birthdate: Date;
  country_code: string;
  first_name: string;
  gender: string;
  last_name: string;
  middle_name: string;
  native_first_name: string;
  native_last_name: string;
  native_middle_name: string;
  residence_country_code: string;

  constructor(params: { birthdate: Date, country_code: string, first_name: string, gender: string, last_name: string, middle_name: string, native_first_name: string, native_last_name: string, native_middle_name: string, residence_country_code: string }) {
    super();
    this.birthdate = params.birthdate;
    this.country_code = params.country_code;
    this.first_name = params.first_name;
    this.gender = params.gender;
    this.last_name = params.last_name;
    this.middle_name = params.middle_name;
    this.native_first_name = params.native_first_name;
    this.native_last_name = params.native_last_name;
    this.native_middle_name = params.native_middle_name;
    this.residence_country_code = params.residence_country_code;
  }
}

export class IdentityDocument extends Class {
  "@type" = "identityDocument"
  expiry_date: Date;
  front_side: DatedFile;
  number: string;
  reverse_side?: DatedFile;
  selfie?: DatedFile;
  translation: DatedFile[];

  constructor(params: { expiry_date: Date, front_side: DatedFile, number: string, reverse_side?: DatedFile, selfie?: DatedFile, translation: DatedFile[] }) {
    super();
    this.expiry_date = params.expiry_date;
    this.front_side = params.front_side;
    this.number = params.number;
    this.reverse_side = params.reverse_side;
    this.selfie = params.selfie;
    this.translation = params.translation;
  }
}

export class InputIdentityDocument extends Class {
  "@type" = "inputIdentityDocument"
  expiry_date: Date;
  front_side: InputFile;
  number: string;
  reverse_side?: InputFile;
  selfie?: InputFile;
  translation: InputFile[];

  constructor(params: { expiry_date: Date, front_side: InputFile, number: string, reverse_side?: InputFile, selfie?: InputFile, translation: InputFile[] }) {
    super();
    this.expiry_date = params.expiry_date;
    this.front_side = params.front_side;
    this.number = params.number;
    this.reverse_side = params.reverse_side;
    this.selfie = params.selfie;
    this.translation = params.translation;
  }
}

export class PersonalDocument extends Class {
  "@type" = "personalDocument"
  files: DatedFile[];
  translation: DatedFile[];

  constructor(params: { files: DatedFile[], translation: DatedFile[] }) {
    super();
    this.files = params.files;
    this.translation = params.translation;
  }
}

export class InputPersonalDocument extends Class {
  "@type" = "inputPersonalDocument"
  files: InputFile[];
  translation: InputFile[];

  constructor(params: { files: InputFile[], translation: InputFile[] }) {
    super();
    this.files = params.files;
    this.translation = params.translation;
  }
}

/**
 * Contains information about a Telegram Passport element
 */
export class PassportElement extends Class {
}

export class PassportElementPersonalDetails extends PassportElement {
  "@type" = "passportElementPersonalDetails"
  personal_details: PersonalDetails;

  constructor(params: { personal_details: PersonalDetails }) {
    super();
    this.personal_details = params.personal_details;
  }
}

export class PassportElementPassport extends PassportElement {
  "@type" = "passportElementPassport"
  passport: IdentityDocument;

  constructor(params: { passport: IdentityDocument }) {
    super();
    this.passport = params.passport;
  }
}

export class PassportElementDriverLicense extends PassportElement {
  "@type" = "passportElementDriverLicense"
  driver_license: IdentityDocument;

  constructor(params: { driver_license: IdentityDocument }) {
    super();
    this.driver_license = params.driver_license;
  }
}

export class PassportElementIdentityCard extends PassportElement {
  "@type" = "passportElementIdentityCard"
  identity_card: IdentityDocument;

  constructor(params: { identity_card: IdentityDocument }) {
    super();
    this.identity_card = params.identity_card;
  }
}

export class PassportElementInternalPassport extends PassportElement {
  "@type" = "passportElementInternalPassport"
  internal_passport: IdentityDocument;

  constructor(params: { internal_passport: IdentityDocument }) {
    super();
    this.internal_passport = params.internal_passport;
  }
}

export class PassportElementAddress extends PassportElement {
  "@type" = "passportElementAddress"
  address: Address;

  constructor(params: { address: Address }) {
    super();
    this.address = params.address;
  }
}

export class PassportElementUtilityBill extends PassportElement {
  "@type" = "passportElementUtilityBill"
  utility_bill: PersonalDocument;

  constructor(params: { utility_bill: PersonalDocument }) {
    super();
    this.utility_bill = params.utility_bill;
  }
}

export class PassportElementBankStatement extends PassportElement {
  "@type" = "passportElementBankStatement"
  bank_statement: PersonalDocument;

  constructor(params: { bank_statement: PersonalDocument }) {
    super();
    this.bank_statement = params.bank_statement;
  }
}

export class PassportElementRentalAgreement extends PassportElement {
  "@type" = "passportElementRentalAgreement"
  rental_agreement: PersonalDocument;

  constructor(params: { rental_agreement: PersonalDocument }) {
    super();
    this.rental_agreement = params.rental_agreement;
  }
}

export class PassportElementPassportRegistration extends PassportElement {
  "@type" = "passportElementPassportRegistration"
  passport_registration: PersonalDocument;

  constructor(params: { passport_registration: PersonalDocument }) {
    super();
    this.passport_registration = params.passport_registration;
  }
}

export class PassportElementTemporaryRegistration extends PassportElement {
  "@type" = "passportElementTemporaryRegistration"
  temporary_registration: PersonalDocument;

  constructor(params: { temporary_registration: PersonalDocument }) {
    super();
    this.temporary_registration = params.temporary_registration;
  }
}

export class PassportElementPhoneNumber extends PassportElement {
  "@type" = "passportElementPhoneNumber"
  phone_number: string;

  constructor(params: { phone_number: string }) {
    super();
    this.phone_number = params.phone_number;
  }
}

export class PassportElementEmailAddress extends PassportElement {
  "@type" = "passportElementEmailAddress"
  email_address: string;

  constructor(params: { email_address: string }) {
    super();
    this.email_address = params.email_address;
  }
}

/**
 * Contains information about a Telegram Passport element to be saved
 */
export class InputPassportElement extends Class {
}

export class InputPassportElementPersonalDetails extends InputPassportElement {
  "@type" = "inputPassportElementPersonalDetails"
  personal_details: PersonalDetails;

  constructor(params: { personal_details: PersonalDetails }) {
    super();
    this.personal_details = params.personal_details;
  }
}

export class InputPassportElementPassport extends InputPassportElement {
  "@type" = "inputPassportElementPassport"
  passport: InputIdentityDocument;

  constructor(params: { passport: InputIdentityDocument }) {
    super();
    this.passport = params.passport;
  }
}

export class InputPassportElementDriverLicense extends InputPassportElement {
  "@type" = "inputPassportElementDriverLicense"
  driver_license: InputIdentityDocument;

  constructor(params: { driver_license: InputIdentityDocument }) {
    super();
    this.driver_license = params.driver_license;
  }
}

export class InputPassportElementIdentityCard extends InputPassportElement {
  "@type" = "inputPassportElementIdentityCard"
  identity_card: InputIdentityDocument;

  constructor(params: { identity_card: InputIdentityDocument }) {
    super();
    this.identity_card = params.identity_card;
  }
}

export class InputPassportElementInternalPassport extends InputPassportElement {
  "@type" = "inputPassportElementInternalPassport"
  internal_passport: InputIdentityDocument;

  constructor(params: { internal_passport: InputIdentityDocument }) {
    super();
    this.internal_passport = params.internal_passport;
  }
}

export class InputPassportElementAddress extends InputPassportElement {
  "@type" = "inputPassportElementAddress"
  address: Address;

  constructor(params: { address: Address }) {
    super();
    this.address = params.address;
  }
}

export class InputPassportElementUtilityBill extends InputPassportElement {
  "@type" = "inputPassportElementUtilityBill"
  utility_bill: InputPersonalDocument;

  constructor(params: { utility_bill: InputPersonalDocument }) {
    super();
    this.utility_bill = params.utility_bill;
  }
}

export class InputPassportElementBankStatement extends InputPassportElement {
  "@type" = "inputPassportElementBankStatement"
  bank_statement: InputPersonalDocument;

  constructor(params: { bank_statement: InputPersonalDocument }) {
    super();
    this.bank_statement = params.bank_statement;
  }
}

export class InputPassportElementRentalAgreement extends InputPassportElement {
  "@type" = "inputPassportElementRentalAgreement"
  rental_agreement: InputPersonalDocument;

  constructor(params: { rental_agreement: InputPersonalDocument }) {
    super();
    this.rental_agreement = params.rental_agreement;
  }
}

export class InputPassportElementPassportRegistration extends InputPassportElement {
  "@type" = "inputPassportElementPassportRegistration"
  passport_registration: InputPersonalDocument;

  constructor(params: { passport_registration: InputPersonalDocument }) {
    super();
    this.passport_registration = params.passport_registration;
  }
}

export class InputPassportElementTemporaryRegistration extends InputPassportElement {
  "@type" = "inputPassportElementTemporaryRegistration"
  temporary_registration: InputPersonalDocument;

  constructor(params: { temporary_registration: InputPersonalDocument }) {
    super();
    this.temporary_registration = params.temporary_registration;
  }
}

export class InputPassportElementPhoneNumber extends InputPassportElement {
  "@type" = "inputPassportElementPhoneNumber"
  phone_number: string;

  constructor(params: { phone_number: string }) {
    super();
    this.phone_number = params.phone_number;
  }
}

export class InputPassportElementEmailAddress extends InputPassportElement {
  "@type" = "inputPassportElementEmailAddress"
  email_address: string;

  constructor(params: { email_address: string }) {
    super();
    this.email_address = params.email_address;
  }
}

export class PassportElements extends Class {
  "@type" = "passportElements"
  elements: PassportElement[];

  constructor(params: { elements: PassportElement[] }) {
    super();
    this.elements = params.elements;
  }
}

/**
 * Contains the description of an error in a Telegram Passport element
 */
export class PassportElementErrorSource extends Class {
}

export class PassportElementErrorSourceUnspecified extends PassportElementErrorSource {
  "@type" = "passportElementErrorSourceUnspecified"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementErrorSourceDataField extends PassportElementErrorSource {
  "@type" = "passportElementErrorSourceDataField"
  field_name: string;

  constructor(params: { field_name: string }) {
    super();
    this.field_name = params.field_name;
  }
}

export class PassportElementErrorSourceFrontSide extends PassportElementErrorSource {
  "@type" = "passportElementErrorSourceFrontSide"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementErrorSourceReverseSide extends PassportElementErrorSource {
  "@type" = "passportElementErrorSourceReverseSide"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementErrorSourceSelfie extends PassportElementErrorSource {
  "@type" = "passportElementErrorSourceSelfie"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementErrorSourceTranslationFile extends PassportElementErrorSource {
  "@type" = "passportElementErrorSourceTranslationFile"
  file_index: number;

  constructor(params: { file_index: number }) {
    super();
    this.file_index = params.file_index;
  }
}

export class PassportElementErrorSourceTranslationFiles extends PassportElementErrorSource {
  "@type" = "passportElementErrorSourceTranslationFiles"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementErrorSourceFile extends PassportElementErrorSource {
  "@type" = "passportElementErrorSourceFile"
  file_index: number;

  constructor(params: { file_index: number }) {
    super();
    this.file_index = params.file_index;
  }
}

export class PassportElementErrorSourceFiles extends PassportElementErrorSource {
  "@type" = "passportElementErrorSourceFiles"

  constructor(params: {}) {
    super();
  }
}

export class PassportElementError extends Class {
  "@type" = "passportElementError"
  message: string;
  source: PassportElementErrorSource;
  type: PassportElementType;

  constructor(params: { message: string, source: PassportElementErrorSource, type: PassportElementType }) {
    super();
    this.message = params.message;
    this.source = params.source;
    this.type = params.type;
  }
}

export class PassportSuitableElement extends Class {
  "@type" = "passportSuitableElement"
  is_native_name_required: boolean;
  is_selfie_required: boolean;
  is_translation_required: boolean;
  type: PassportElementType;

  constructor(params: { is_native_name_required: boolean, is_selfie_required: boolean, is_translation_required: boolean, type: PassportElementType }) {
    super();
    this.is_native_name_required = params.is_native_name_required;
    this.is_selfie_required = params.is_selfie_required;
    this.is_translation_required = params.is_translation_required;
    this.type = params.type;
  }
}

export class PassportRequiredElement extends Class {
  "@type" = "passportRequiredElement"
  suitable_elements: PassportSuitableElement[];

  constructor(params: { suitable_elements: PassportSuitableElement[] }) {
    super();
    this.suitable_elements = params.suitable_elements;
  }
}

export class PassportAuthorizationForm extends Class {
  "@type" = "passportAuthorizationForm"
  id: number;
  privacy_policy_url: string;
  required_elements: PassportRequiredElement[];

  constructor(params: { id: number, privacy_policy_url: string, required_elements: PassportRequiredElement[] }) {
    super();
    this.id = params.id;
    this.privacy_policy_url = params.privacy_policy_url;
    this.required_elements = params.required_elements;
  }
}

export class PassportElementsWithErrors extends Class {
  "@type" = "passportElementsWithErrors"
  elements: PassportElement[];
  errors: PassportElementError[];

  constructor(params: { elements: PassportElement[], errors: PassportElementError[] }) {
    super();
    this.elements = params.elements;
    this.errors = params.errors;
  }
}

export class EncryptedCredentials extends Class {
  "@type" = "encryptedCredentials"
  data: string;
  hash: string;
  secret: string;

  constructor(params: { data: string, hash: string, secret: string }) {
    super();
    this.data = params.data;
    this.hash = params.hash;
    this.secret = params.secret;
  }
}

export class EncryptedPassportElement extends Class {
  "@type" = "encryptedPassportElement"
  data: string;
  files: DatedFile[];
  front_side: DatedFile;
  hash: string;
  reverse_side: DatedFile;
  selfie: DatedFile;
  translation: DatedFile[];
  type: PassportElementType;
  value: string;

  constructor(params: { data: string, files: DatedFile[], front_side: DatedFile, hash: string, reverse_side: DatedFile, selfie: DatedFile, translation: DatedFile[], type: PassportElementType, value: string }) {
    super();
    this.data = params.data;
    this.files = params.files;
    this.front_side = params.front_side;
    this.hash = params.hash;
    this.reverse_side = params.reverse_side;
    this.selfie = params.selfie;
    this.translation = params.translation;
    this.type = params.type;
    this.value = params.value;
  }
}

/**
 * Contains the description of an error in a Telegram Passport element; for bots only
 */
export class InputPassportElementErrorSource extends Class {
}

export class InputPassportElementErrorSourceUnspecified extends InputPassportElementErrorSource {
  "@type" = "inputPassportElementErrorSourceUnspecified"
  element_hash: string;

  constructor(params: { element_hash: string }) {
    super();
    this.element_hash = params.element_hash;
  }
}

export class InputPassportElementErrorSourceDataField extends InputPassportElementErrorSource {
  "@type" = "inputPassportElementErrorSourceDataField"
  data_hash: string;
  field_name: string;

  constructor(params: { data_hash: string, field_name: string }) {
    super();
    this.data_hash = params.data_hash;
    this.field_name = params.field_name;
  }
}

export class InputPassportElementErrorSourceFrontSide extends InputPassportElementErrorSource {
  "@type" = "inputPassportElementErrorSourceFrontSide"
  file_hash: string;

  constructor(params: { file_hash: string }) {
    super();
    this.file_hash = params.file_hash;
  }
}

export class InputPassportElementErrorSourceReverseSide extends InputPassportElementErrorSource {
  "@type" = "inputPassportElementErrorSourceReverseSide"
  file_hash: string;

  constructor(params: { file_hash: string }) {
    super();
    this.file_hash = params.file_hash;
  }
}

export class InputPassportElementErrorSourceSelfie extends InputPassportElementErrorSource {
  "@type" = "inputPassportElementErrorSourceSelfie"
  file_hash: string;

  constructor(params: { file_hash: string }) {
    super();
    this.file_hash = params.file_hash;
  }
}

export class InputPassportElementErrorSourceTranslationFile extends InputPassportElementErrorSource {
  "@type" = "inputPassportElementErrorSourceTranslationFile"
  file_hash: string;

  constructor(params: { file_hash: string }) {
    super();
    this.file_hash = params.file_hash;
  }
}

export class InputPassportElementErrorSourceTranslationFiles extends InputPassportElementErrorSource {
  "@type" = "inputPassportElementErrorSourceTranslationFiles"
  file_hashes: string[];

  constructor(params: { file_hashes: string[] }) {
    super();
    this.file_hashes = params.file_hashes;
  }
}

export class InputPassportElementErrorSourceFile extends InputPassportElementErrorSource {
  "@type" = "inputPassportElementErrorSourceFile"
  file_hash: string;

  constructor(params: { file_hash: string }) {
    super();
    this.file_hash = params.file_hash;
  }
}

export class InputPassportElementErrorSourceFiles extends InputPassportElementErrorSource {
  "@type" = "inputPassportElementErrorSourceFiles"
  file_hashes: string[];

  constructor(params: { file_hashes: string[] }) {
    super();
    this.file_hashes = params.file_hashes;
  }
}

export class InputPassportElementError extends Class {
  "@type" = "inputPassportElementError"
  message: string;
  source: InputPassportElementErrorSource;
  type: PassportElementType;

  constructor(params: { message: string, source: InputPassportElementErrorSource, type: PassportElementType }) {
    super();
    this.message = params.message;
    this.source = params.source;
    this.type = params.type;
  }
}

/**
 * Contains the content of a message
 */
export class MessageContent extends Class {
}

export class MessageText extends MessageContent {
  "@type" = "messageText"
  text: FormattedText;
  web_page: WebPage;

  constructor(params: { text: FormattedText, web_page: WebPage }) {
    super();
    this.text = params.text;
    this.web_page = params.web_page;
  }
}

export class MessageAnimation extends MessageContent {
  "@type" = "messageAnimation"
  animation: Animation;
  caption: FormattedText;
  is_secret: boolean;

  constructor(params: { animation: Animation, caption: FormattedText, is_secret: boolean }) {
    super();
    this.animation = params.animation;
    this.caption = params.caption;
    this.is_secret = params.is_secret;
  }
}

export class MessageAudio extends MessageContent {
  "@type" = "messageAudio"
  audio: Audio;
  caption: FormattedText;

  constructor(params: { audio: Audio, caption: FormattedText }) {
    super();
    this.audio = params.audio;
    this.caption = params.caption;
  }
}

export class MessageDocument extends MessageContent {
  "@type" = "messageDocument"
  caption: FormattedText;
  document: Document;

  constructor(params: { caption: FormattedText, document: Document }) {
    super();
    this.caption = params.caption;
    this.document = params.document;
  }
}

export class MessagePhoto extends MessageContent {
  "@type" = "messagePhoto"
  caption: FormattedText;
  is_secret: boolean;
  photo: Photo;

  constructor(params: { caption: FormattedText, is_secret: boolean, photo: Photo }) {
    super();
    this.caption = params.caption;
    this.is_secret = params.is_secret;
    this.photo = params.photo;
  }
}

export class MessageExpiredPhoto extends MessageContent {
  "@type" = "messageExpiredPhoto"

  constructor(params: {}) {
    super();
  }
}

export class MessageSticker extends MessageContent {
  "@type" = "messageSticker"
  is_premium: boolean;
  sticker: Sticker;

  constructor(params: { is_premium: boolean, sticker: Sticker }) {
    super();
    this.is_premium = params.is_premium;
    this.sticker = params.sticker;
  }
}

export class MessageVideo extends MessageContent {
  "@type" = "messageVideo"
  caption: FormattedText;
  is_secret: boolean;
  video: Video;

  constructor(params: { caption: FormattedText, is_secret: boolean, video: Video }) {
    super();
    this.caption = params.caption;
    this.is_secret = params.is_secret;
    this.video = params.video;
  }
}

export class MessageExpiredVideo extends MessageContent {
  "@type" = "messageExpiredVideo"

  constructor(params: {}) {
    super();
  }
}

export class MessageVideoNote extends MessageContent {
  "@type" = "messageVideoNote"
  is_secret: boolean;
  is_viewed: boolean;
  video_note: VideoNote;

  constructor(params: { is_secret: boolean, is_viewed: boolean, video_note: VideoNote }) {
    super();
    this.is_secret = params.is_secret;
    this.is_viewed = params.is_viewed;
    this.video_note = params.video_note;
  }
}

export class MessageVoiceNote extends MessageContent {
  "@type" = "messageVoiceNote"
  caption: FormattedText;
  is_listened: boolean;
  voice_note: VoiceNote;

  constructor(params: { caption: FormattedText, is_listened: boolean, voice_note: VoiceNote }) {
    super();
    this.caption = params.caption;
    this.is_listened = params.is_listened;
    this.voice_note = params.voice_note;
  }
}

export class MessageLocation extends MessageContent {
  "@type" = "messageLocation"
  expires_in: number;
  heading: number;
  live_period: number;
  location: Location;
  proximity_alert_radius: number;

  constructor(params: { expires_in: number, heading: number, live_period: number, location: Location, proximity_alert_radius: number }) {
    super();
    this.expires_in = params.expires_in;
    this.heading = params.heading;
    this.live_period = params.live_period;
    this.location = params.location;
    this.proximity_alert_radius = params.proximity_alert_radius;
  }
}

export class MessageVenue extends MessageContent {
  "@type" = "messageVenue"
  venue: Venue;

  constructor(params: { venue: Venue }) {
    super();
    this.venue = params.venue;
  }
}

export class MessageContact extends MessageContent {
  "@type" = "messageContact"
  contact: Contact;

  constructor(params: { contact: Contact }) {
    super();
    this.contact = params.contact;
  }
}

export class MessageAnimatedEmoji extends MessageContent {
  "@type" = "messageAnimatedEmoji"
  animated_emoji: AnimatedEmoji;
  emoji: string;

  constructor(params: { animated_emoji: AnimatedEmoji, emoji: string }) {
    super();
    this.animated_emoji = params.animated_emoji;
    this.emoji = params.emoji;
  }
}

export class MessageDice extends MessageContent {
  "@type" = "messageDice"
  emoji: string;
  final_state?: DiceStickers;
  initial_state?: DiceStickers;
  success_animation_frame_number: number;
  value: number;

  constructor(params: { emoji: string, final_state?: DiceStickers, initial_state?: DiceStickers, success_animation_frame_number: number, value: number }) {
    super();
    this.emoji = params.emoji;
    this.final_state = params.final_state;
    this.initial_state = params.initial_state;
    this.success_animation_frame_number = params.success_animation_frame_number;
    this.value = params.value;
  }
}

export class MessageGame extends MessageContent {
  "@type" = "messageGame"
  game: Game;

  constructor(params: { game: Game }) {
    super();
    this.game = params.game;
  }
}

export class MessagePoll extends MessageContent {
  "@type" = "messagePoll"
  poll: Poll;

  constructor(params: { poll: Poll }) {
    super();
    this.poll = params.poll;
  }
}

export class MessageInvoice extends MessageContent {
  "@type" = "messageInvoice"
  currency: string;
  description: FormattedText;
  is_test: boolean;
  need_shipping_address: boolean;
  photo: Photo;
  receipt_message_id: number;
  start_parameter: string;
  title: string;
  total_amount: number;

  constructor(params: { currency: string, description: FormattedText, is_test: boolean, need_shipping_address: boolean, photo: Photo, receipt_message_id: number, start_parameter: string, title: string, total_amount: number }) {
    super();
    this.currency = params.currency;
    this.description = params.description;
    this.is_test = params.is_test;
    this.need_shipping_address = params.need_shipping_address;
    this.photo = params.photo;
    this.receipt_message_id = params.receipt_message_id;
    this.start_parameter = params.start_parameter;
    this.title = params.title;
    this.total_amount = params.total_amount;
  }
}

export class MessageCall extends MessageContent {
  "@type" = "messageCall"
  discard_reason: CallDiscardReason;
  duration: number;
  is_video: boolean;

  constructor(params: { discard_reason: CallDiscardReason, duration: number, is_video: boolean }) {
    super();
    this.discard_reason = params.discard_reason;
    this.duration = params.duration;
    this.is_video = params.is_video;
  }
}

export class MessageVideoChatScheduled extends MessageContent {
  "@type" = "messageVideoChatScheduled"
  group_call_id: number;
  start_date: number;

  constructor(params: { group_call_id: number, start_date: number }) {
    super();
    this.group_call_id = params.group_call_id;
    this.start_date = params.start_date;
  }
}

export class MessageVideoChatStarted extends MessageContent {
  "@type" = "messageVideoChatStarted"
  group_call_id: number;

  constructor(params: { group_call_id: number }) {
    super();
    this.group_call_id = params.group_call_id;
  }
}

export class MessageVideoChatEnded extends MessageContent {
  "@type" = "messageVideoChatEnded"
  duration: number;

  constructor(params: { duration: number }) {
    super();
    this.duration = params.duration;
  }
}

export class MessageInviteVideoChatParticipants extends MessageContent {
  "@type" = "messageInviteVideoChatParticipants"
  group_call_id: number;
  user_ids: number[];

  constructor(params: { group_call_id: number, user_ids: number[] }) {
    super();
    this.group_call_id = params.group_call_id;
    this.user_ids = params.user_ids;
  }
}

export class MessageBasicGroupChatCreate extends MessageContent {
  "@type" = "messageBasicGroupChatCreate"
  member_user_ids: number[];
  title: string;

  constructor(params: { member_user_ids: number[], title: string }) {
    super();
    this.member_user_ids = params.member_user_ids;
    this.title = params.title;
  }
}

export class MessageSupergroupChatCreate extends MessageContent {
  "@type" = "messageSupergroupChatCreate"
  title: string;

  constructor(params: { title: string }) {
    super();
    this.title = params.title;
  }
}

export class MessageChatChangeTitle extends MessageContent {
  "@type" = "messageChatChangeTitle"
  title: string;

  constructor(params: { title: string }) {
    super();
    this.title = params.title;
  }
}

export class MessageChatChangePhoto extends MessageContent {
  "@type" = "messageChatChangePhoto"
  photo: ChatPhoto;

  constructor(params: { photo: ChatPhoto }) {
    super();
    this.photo = params.photo;
  }
}

export class MessageChatDeletePhoto extends MessageContent {
  "@type" = "messageChatDeletePhoto"

  constructor(params: {}) {
    super();
  }
}

export class MessageChatAddMembers extends MessageContent {
  "@type" = "messageChatAddMembers"
  member_user_ids: number[];

  constructor(params: { member_user_ids: number[] }) {
    super();
    this.member_user_ids = params.member_user_ids;
  }
}

export class MessageChatJoinByLink extends MessageContent {
  "@type" = "messageChatJoinByLink"

  constructor(params: {}) {
    super();
  }
}

export class MessageChatJoinByRequest extends MessageContent {
  "@type" = "messageChatJoinByRequest"

  constructor(params: {}) {
    super();
  }
}

export class MessageChatDeleteMember extends MessageContent {
  "@type" = "messageChatDeleteMember"
  user_id: number;

  constructor(params: { user_id: number }) {
    super();
    this.user_id = params.user_id;
  }
}

export class MessageChatUpgradeTo extends MessageContent {
  "@type" = "messageChatUpgradeTo"
  supergroup_id: number;

  constructor(params: { supergroup_id: number }) {
    super();
    this.supergroup_id = params.supergroup_id;
  }
}

export class MessageChatUpgradeFrom extends MessageContent {
  "@type" = "messageChatUpgradeFrom"
  basic_group_id: number;
  title: string;

  constructor(params: { basic_group_id: number, title: string }) {
    super();
    this.basic_group_id = params.basic_group_id;
    this.title = params.title;
  }
}

export class MessagePinMessage extends MessageContent {
  "@type" = "messagePinMessage"
  message_id: number;

  constructor(params: { message_id: number }) {
    super();
    this.message_id = params.message_id;
  }
}

export class MessageScreenshotTaken extends MessageContent {
  "@type" = "messageScreenshotTaken"

  constructor(params: {}) {
    super();
  }
}

export class MessageChatSetTheme extends MessageContent {
  "@type" = "messageChatSetTheme"
  theme_name: string;

  constructor(params: { theme_name: string }) {
    super();
    this.theme_name = params.theme_name;
  }
}

export class MessageChatSetTtl extends MessageContent {
  "@type" = "messageChatSetTtl"
  ttl: number;

  constructor(params: { ttl: number }) {
    super();
    this.ttl = params.ttl;
  }
}

export class MessageCustomServiceAction extends MessageContent {
  "@type" = "messageCustomServiceAction"
  text: string;

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class MessageGameScore extends MessageContent {
  "@type" = "messageGameScore"
  game_id: number;
  game_message_id: number;
  score: number;

  constructor(params: { game_id: number, game_message_id: number, score: number }) {
    super();
    this.game_id = params.game_id;
    this.game_message_id = params.game_message_id;
    this.score = params.score;
  }
}

export class MessagePaymentSuccessful extends MessageContent {
  "@type" = "messagePaymentSuccessful"
  currency: string;
  invoice_chat_id: number;
  invoice_message_id: number;
  invoice_name: string;
  is_first_recurring: boolean;
  is_recurring: boolean;
  total_amount: number;

  constructor(params: { currency: string, invoice_chat_id: number, invoice_message_id: number, invoice_name: string, is_first_recurring: boolean, is_recurring: boolean, total_amount: number }) {
    super();
    this.currency = params.currency;
    this.invoice_chat_id = params.invoice_chat_id;
    this.invoice_message_id = params.invoice_message_id;
    this.invoice_name = params.invoice_name;
    this.is_first_recurring = params.is_first_recurring;
    this.is_recurring = params.is_recurring;
    this.total_amount = params.total_amount;
  }
}

export class MessagePaymentSuccessfulBot extends MessageContent {
  "@type" = "messagePaymentSuccessfulBot"
  currency: string;
  invoice_payload: string;
  is_first_recurring: boolean;
  is_recurring: boolean;
  order_info?: OrderInfo;
  provider_payment_charge_id: string;
  shipping_option_id: string;
  telegram_payment_charge_id: string;
  total_amount: number;

  constructor(params: { currency: string, invoice_payload: string, is_first_recurring: boolean, is_recurring: boolean, order_info?: OrderInfo, provider_payment_charge_id: string, shipping_option_id: string, telegram_payment_charge_id: string, total_amount: number }) {
    super();
    this.currency = params.currency;
    this.invoice_payload = params.invoice_payload;
    this.is_first_recurring = params.is_first_recurring;
    this.is_recurring = params.is_recurring;
    this.order_info = params.order_info;
    this.provider_payment_charge_id = params.provider_payment_charge_id;
    this.shipping_option_id = params.shipping_option_id;
    this.telegram_payment_charge_id = params.telegram_payment_charge_id;
    this.total_amount = params.total_amount;
  }
}

export class MessageGiftedPremium extends MessageContent {
  "@type" = "messageGiftedPremium"
  amount: number;
  currency: string;
  month_count: number;
  sticker?: Sticker;

  constructor(params: { amount: number, currency: string, month_count: number, sticker?: Sticker }) {
    super();
    this.amount = params.amount;
    this.currency = params.currency;
    this.month_count = params.month_count;
    this.sticker = params.sticker;
  }
}

export class MessageContactRegistered extends MessageContent {
  "@type" = "messageContactRegistered"

  constructor(params: {}) {
    super();
  }
}

export class MessageWebsiteConnected extends MessageContent {
  "@type" = "messageWebsiteConnected"
  domain_name: string;

  constructor(params: { domain_name: string }) {
    super();
    this.domain_name = params.domain_name;
  }
}

export class MessageWebAppDataSent extends MessageContent {
  "@type" = "messageWebAppDataSent"
  button_text: string;

  constructor(params: { button_text: string }) {
    super();
    this.button_text = params.button_text;
  }
}

export class MessageWebAppDataReceived extends MessageContent {
  "@type" = "messageWebAppDataReceived"
  button_text: string;
  data: string;

  constructor(params: { button_text: string, data: string }) {
    super();
    this.button_text = params.button_text;
    this.data = params.data;
  }
}

export class MessagePassportDataSent extends MessageContent {
  "@type" = "messagePassportDataSent"
  types: PassportElementType[];

  constructor(params: { types: PassportElementType[] }) {
    super();
    this.types = params.types;
  }
}

export class MessagePassportDataReceived extends MessageContent {
  "@type" = "messagePassportDataReceived"
  credentials: EncryptedCredentials;
  elements: EncryptedPassportElement[];

  constructor(params: { credentials: EncryptedCredentials, elements: EncryptedPassportElement[] }) {
    super();
    this.credentials = params.credentials;
    this.elements = params.elements;
  }
}

export class MessageProximityAlertTriggered extends MessageContent {
  "@type" = "messageProximityAlertTriggered"
  distance: number;
  traveler_id: MessageSender;
  watcher_id: MessageSender;

  constructor(params: { distance: number, traveler_id: MessageSender, watcher_id: MessageSender }) {
    super();
    this.distance = params.distance;
    this.traveler_id = params.traveler_id;
    this.watcher_id = params.watcher_id;
  }
}

export class MessageUnsupported extends MessageContent {
  "@type" = "messageUnsupported"

  constructor(params: {}) {
    super();
  }
}

/**
 * Represents a part of the text which must be formatted differently
 */
export class TextEntityType extends Class {
}

export class TextEntityTypeMention extends TextEntityType {
  "@type" = "textEntityTypeMention"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeHashtag extends TextEntityType {
  "@type" = "textEntityTypeHashtag"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeCashtag extends TextEntityType {
  "@type" = "textEntityTypeCashtag"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeBotCommand extends TextEntityType {
  "@type" = "textEntityTypeBotCommand"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeUrl extends TextEntityType {
  "@type" = "textEntityTypeUrl"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeEmailAddress extends TextEntityType {
  "@type" = "textEntityTypeEmailAddress"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypePhoneNumber extends TextEntityType {
  "@type" = "textEntityTypePhoneNumber"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeBankCardNumber extends TextEntityType {
  "@type" = "textEntityTypeBankCardNumber"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeBold extends TextEntityType {
  "@type" = "textEntityTypeBold"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeItalic extends TextEntityType {
  "@type" = "textEntityTypeItalic"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeUnderline extends TextEntityType {
  "@type" = "textEntityTypeUnderline"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeStrikethrough extends TextEntityType {
  "@type" = "textEntityTypeStrikethrough"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeSpoiler extends TextEntityType {
  "@type" = "textEntityTypeSpoiler"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypeCode extends TextEntityType {
  "@type" = "textEntityTypeCode"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypePre extends TextEntityType {
  "@type" = "textEntityTypePre"

  constructor(params: {}) {
    super();
  }
}

export class TextEntityTypePreCode extends TextEntityType {
  "@type" = "textEntityTypePreCode"
  language: string;

  constructor(params: { language: string }) {
    super();
    this.language = params.language;
  }
}

export class TextEntityTypeTextUrl extends TextEntityType {
  "@type" = "textEntityTypeTextUrl"
  url: string;

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class TextEntityTypeMentionName extends TextEntityType {
  "@type" = "textEntityTypeMentionName"
  user_id: number;

  constructor(params: { user_id: number }) {
    super();
    this.user_id = params.user_id;
  }
}

export class TextEntityTypeCustomEmoji extends TextEntityType {
  "@type" = "textEntityTypeCustomEmoji"
  custom_emoji_id: number;

  constructor(params: { custom_emoji_id: number }) {
    super();
    this.custom_emoji_id = params.custom_emoji_id;
  }
}

export class TextEntityTypeMediaTimestamp extends TextEntityType {
  "@type" = "textEntityTypeMediaTimestamp"
  media_timestamp: number;

  constructor(params: { media_timestamp: number }) {
    super();
    this.media_timestamp = params.media_timestamp;
  }
}

export class InputThumbnail extends Class {
  "@type" = "inputThumbnail"
  height: number;
  thumbnail: InputFile;
  width: number;

  constructor(params: { height: number, thumbnail: InputFile, width: number }) {
    super();
    this.height = params.height;
    this.thumbnail = params.thumbnail;
    this.width = params.width;
  }
}

/**
 * Contains information about the time when a scheduled message will be sent
 */
export class MessageSchedulingState extends Class {
}

export class MessageSchedulingStateSendAtDate extends MessageSchedulingState {
  "@type" = "messageSchedulingStateSendAtDate"
  send_date: number;

  constructor(params: { send_date: number }) {
    super();
    this.send_date = params.send_date;
  }
}

export class MessageSchedulingStateSendWhenOnline extends MessageSchedulingState {
  "@type" = "messageSchedulingStateSendWhenOnline"

  constructor(params: {}) {
    super();
  }
}

export class MessageSendOptions extends Class {
  "@type" = "messageSendOptions"
  disable_notification: boolean;
  from_background: boolean;
  protect_content: boolean;
  scheduling_state?: MessageSchedulingState;

  constructor(params: { disable_notification: boolean, from_background: boolean, protect_content: boolean, scheduling_state?: MessageSchedulingState }) {
    super();
    this.disable_notification = params.disable_notification;
    this.from_background = params.from_background;
    this.protect_content = params.protect_content;
    this.scheduling_state = params.scheduling_state;
  }
}

export class MessageCopyOptions extends Class {
  "@type" = "messageCopyOptions"
  new_caption?: FormattedText;
  replace_caption: boolean;
  send_copy: boolean;

  constructor(params: { new_caption?: FormattedText, replace_caption: boolean, send_copy: boolean }) {
    super();
    this.new_caption = params.new_caption;
    this.replace_caption = params.replace_caption;
    this.send_copy = params.send_copy;
  }
}

/**
 * The content of a message to send
 */
export class InputMessageContent extends Class {
}

export class InputMessageText extends InputMessageContent {
  "@type" = "inputMessageText"
  clear_draft: boolean;
  disable_web_page_preview: boolean;
  text: FormattedText;

  constructor(params: { clear_draft: boolean, disable_web_page_preview: boolean, text: FormattedText }) {
    super();
    this.clear_draft = params.clear_draft;
    this.disable_web_page_preview = params.disable_web_page_preview;
    this.text = params.text;
  }
}

export class InputMessageAnimation extends InputMessageContent {
  "@type" = "inputMessageAnimation"
  added_sticker_file_ids: number[];
  animation: InputFile;
  caption?: FormattedText;
  duration: number;
  height: number;
  thumbnail: InputThumbnail;
  width: number;

  constructor(params: { added_sticker_file_ids: number[], animation: InputFile, caption?: FormattedText, duration: number, height: number, thumbnail: InputThumbnail, width: number }) {
    super();
    this.added_sticker_file_ids = params.added_sticker_file_ids;
    this.animation = params.animation;
    this.caption = params.caption;
    this.duration = params.duration;
    this.height = params.height;
    this.thumbnail = params.thumbnail;
    this.width = params.width;
  }
}

export class InputMessageAudio extends InputMessageContent {
  "@type" = "inputMessageAudio"
  album_cover_thumbnail: InputThumbnail;
  audio: InputFile;
  caption?: FormattedText;
  duration: number;
  performer: string;
  title: string;

  constructor(params: { album_cover_thumbnail: InputThumbnail, audio: InputFile, caption?: FormattedText, duration: number, performer: string, title: string }) {
    super();
    this.album_cover_thumbnail = params.album_cover_thumbnail;
    this.audio = params.audio;
    this.caption = params.caption;
    this.duration = params.duration;
    this.performer = params.performer;
    this.title = params.title;
  }
}

export class InputMessageDocument extends InputMessageContent {
  "@type" = "inputMessageDocument"
  caption: FormattedText;
  disable_content_type_detection: boolean;
  document: InputFile;
  thumbnail: InputThumbnail;

  constructor(params: { caption: FormattedText, disable_content_type_detection: boolean, document: InputFile, thumbnail: InputThumbnail }) {
    super();
    this.caption = params.caption;
    this.disable_content_type_detection = params.disable_content_type_detection;
    this.document = params.document;
    this.thumbnail = params.thumbnail;
  }
}

export class InputMessagePhoto extends InputMessageContent {
  "@type" = "inputMessagePhoto"
  added_sticker_file_ids: number[];
  caption: FormattedText;
  height: number;
  photo: InputFile;
  thumbnail: InputThumbnail;
  ttl: number;
  width: number;

  constructor(params: { added_sticker_file_ids: number[], caption: FormattedText, height: number, photo: InputFile, thumbnail: InputThumbnail, ttl: number, width: number }) {
    super();
    this.added_sticker_file_ids = params.added_sticker_file_ids;
    this.caption = params.caption;
    this.height = params.height;
    this.photo = params.photo;
    this.thumbnail = params.thumbnail;
    this.ttl = params.ttl;
    this.width = params.width;
  }
}

export class InputMessageSticker extends InputMessageContent {
  "@type" = "inputMessageSticker"
  emoji: string;
  height: number;
  sticker: InputFile;
  thumbnail: InputThumbnail;
  width: number;

  constructor(params: { emoji: string, height: number, sticker: InputFile, thumbnail: InputThumbnail, width: number }) {
    super();
    this.emoji = params.emoji;
    this.height = params.height;
    this.sticker = params.sticker;
    this.thumbnail = params.thumbnail;
    this.width = params.width;
  }
}

export class InputMessageVideo extends InputMessageContent {
  "@type" = "inputMessageVideo"
  added_sticker_file_ids: number[];
  caption?: FormattedText;
  duration: number;
  height: number;
  supports_streaming: boolean;
  thumbnail: InputThumbnail;
  ttl: number;
  video: InputFile;
  width: number;

  constructor(params: { added_sticker_file_ids: number[], caption?: FormattedText, duration: number, height: number, supports_streaming: boolean, thumbnail: InputThumbnail, ttl: number, video: InputFile, width: number }) {
    super();
    this.added_sticker_file_ids = params.added_sticker_file_ids;
    this.caption = params.caption;
    this.duration = params.duration;
    this.height = params.height;
    this.supports_streaming = params.supports_streaming;
    this.thumbnail = params.thumbnail;
    this.ttl = params.ttl;
    this.video = params.video;
    this.width = params.width;
  }
}

export class InputMessageVideoNote extends InputMessageContent {
  "@type" = "inputMessageVideoNote"
  duration: number;
  length: number;
  thumbnail: InputThumbnail;
  video_note: InputFile;

  constructor(params: { duration: number, length: number, thumbnail: InputThumbnail, video_note: InputFile }) {
    super();
    this.duration = params.duration;
    this.length = params.length;
    this.thumbnail = params.thumbnail;
    this.video_note = params.video_note;
  }
}

export class InputMessageVoiceNote extends InputMessageContent {
  "@type" = "inputMessageVoiceNote"
  caption: FormattedText;
  duration: number;
  voice_note: InputFile;
  waveform: string;

  constructor(params: { caption: FormattedText, duration: number, voice_note: InputFile, waveform: string }) {
    super();
    this.caption = params.caption;
    this.duration = params.duration;
    this.voice_note = params.voice_note;
    this.waveform = params.waveform;
  }
}

export class InputMessageLocation extends InputMessageContent {
  "@type" = "inputMessageLocation"
  heading: number;
  live_period: number;
  location: Location;
  proximity_alert_radius: number;

  constructor(params: { heading: number, live_period: number, location: Location, proximity_alert_radius: number }) {
    super();
    this.heading = params.heading;
    this.live_period = params.live_period;
    this.location = params.location;
    this.proximity_alert_radius = params.proximity_alert_radius;
  }
}

export class InputMessageVenue extends InputMessageContent {
  "@type" = "inputMessageVenue"
  venue: Venue;

  constructor(params: { venue: Venue }) {
    super();
    this.venue = params.venue;
  }
}

export class InputMessageContact extends InputMessageContent {
  "@type" = "inputMessageContact"
  contact: Contact;

  constructor(params: { contact: Contact }) {
    super();
    this.contact = params.contact;
  }
}

export class InputMessageDice extends InputMessageContent {
  "@type" = "inputMessageDice"
  clear_draft: boolean;
  emoji: string;

  constructor(params: { clear_draft: boolean, emoji: string }) {
    super();
    this.clear_draft = params.clear_draft;
    this.emoji = params.emoji;
  }
}

export class InputMessageGame extends InputMessageContent {
  "@type" = "inputMessageGame"
  bot_user_id: number;
  game_short_name: string;

  constructor(params: { bot_user_id: number, game_short_name: string }) {
    super();
    this.bot_user_id = params.bot_user_id;
    this.game_short_name = params.game_short_name;
  }
}

export class InputMessageInvoice extends InputMessageContent {
  "@type" = "inputMessageInvoice"
  description: string;
  invoice: Invoice;
  payload: string;
  photo_height: number;
  photo_size: number;
  photo_url: string;
  photo_width: number;
  provider_data: string;
  provider_token: string;
  start_parameter: string;
  title: string;

  constructor(params: { description: string, invoice: Invoice, payload: string, photo_height: number, photo_size: number, photo_url: string, photo_width: number, provider_data: string, provider_token: string, start_parameter: string, title: string }) {
    super();
    this.description = params.description;
    this.invoice = params.invoice;
    this.payload = params.payload;
    this.photo_height = params.photo_height;
    this.photo_size = params.photo_size;
    this.photo_url = params.photo_url;
    this.photo_width = params.photo_width;
    this.provider_data = params.provider_data;
    this.provider_token = params.provider_token;
    this.start_parameter = params.start_parameter;
    this.title = params.title;
  }
}

export class InputMessagePoll extends InputMessageContent {
  "@type" = "inputMessagePoll"
  close_date: number;
  is_anonymous: boolean;
  is_closed: boolean;
  open_period: number;
  options: string[];
  question: string;
  type: PollType;

  constructor(params: { close_date: number, is_anonymous: boolean, is_closed: boolean, open_period: number, options: string[], question: string, type: PollType }) {
    super();
    this.close_date = params.close_date;
    this.is_anonymous = params.is_anonymous;
    this.is_closed = params.is_closed;
    this.open_period = params.open_period;
    this.options = params.options;
    this.question = params.question;
    this.type = params.type;
  }
}

export class InputMessageForwarded extends InputMessageContent {
  "@type" = "inputMessageForwarded"
  copy_options?: MessageCopyOptions;
  from_chat_id: number;
  in_game_share: boolean;
  message_id: number;

  constructor(params: { copy_options?: MessageCopyOptions, from_chat_id: number, in_game_share: boolean, message_id: number }) {
    super();
    this.copy_options = params.copy_options;
    this.from_chat_id = params.from_chat_id;
    this.in_game_share = params.in_game_share;
    this.message_id = params.message_id;
  }
}

/**
 * Represents a filter for message search results
 */
export class SearchMessagesFilter extends Class {
}

export class SearchMessagesFilterEmpty extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterEmpty"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterAnimation extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterAnimation"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterAudio extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterAudio"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterDocument extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterDocument"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterPhoto extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterPhoto"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterVideo extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterVideo"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterVoiceNote extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterVoiceNote"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterPhotoAndVideo extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterPhotoAndVideo"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterUrl extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterUrl"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterChatPhoto extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterChatPhoto"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterVideoNote extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterVideoNote"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterVoiceAndVideoNote extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterVoiceAndVideoNote"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterMention extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterMention"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterUnreadMention extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterUnreadMention"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterUnreadReaction extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterUnreadReaction"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterFailedToSend extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterFailedToSend"

  constructor(params: {}) {
    super();
  }
}

export class SearchMessagesFilterPinned extends SearchMessagesFilter {
  "@type" = "searchMessagesFilterPinned"

  constructor(params: {}) {
    super();
  }
}

/**
 * Describes the different types of activity in a chat
 */
export class ChatAction extends Class {
}

export class ChatActionTyping extends ChatAction {
  "@type" = "chatActionTyping"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionRecordingVideo extends ChatAction {
  "@type" = "chatActionRecordingVideo"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionUploadingVideo extends ChatAction {
  "@type" = "chatActionUploadingVideo"
  progress: number;

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class ChatActionRecordingVoiceNote extends ChatAction {
  "@type" = "chatActionRecordingVoiceNote"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionUploadingVoiceNote extends ChatAction {
  "@type" = "chatActionUploadingVoiceNote"
  progress: number;

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class ChatActionUploadingPhoto extends ChatAction {
  "@type" = "chatActionUploadingPhoto"
  progress: number;

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class ChatActionUploadingDocument extends ChatAction {
  "@type" = "chatActionUploadingDocument"
  progress: number;

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class ChatActionChoosingSticker extends ChatAction {
  "@type" = "chatActionChoosingSticker"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionChoosingLocation extends ChatAction {
  "@type" = "chatActionChoosingLocation"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionChoosingContact extends ChatAction {
  "@type" = "chatActionChoosingContact"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionStartPlayingGame extends ChatAction {
  "@type" = "chatActionStartPlayingGame"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionRecordingVideoNote extends ChatAction {
  "@type" = "chatActionRecordingVideoNote"

  constructor(params: {}) {
    super();
  }
}

export class ChatActionUploadingVideoNote extends ChatAction {
  "@type" = "chatActionUploadingVideoNote"
  progress: number;

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class ChatActionWatchingAnimations extends ChatAction {
  "@type" = "chatActionWatchingAnimations"
  emoji: string;

  constructor(params: { emoji: string }) {
    super();
    this.emoji = params.emoji;
  }
}

export class ChatActionCancel extends ChatAction {
  "@type" = "chatActionCancel"

  constructor(params: {}) {
    super();
  }
}

/**
 * Describes the last time the user was online
 */
export class UserStatus extends Class {
}

export class UserStatusEmpty extends UserStatus {
  "@type" = "userStatusEmpty"

  constructor(params: {}) {
    super();
  }
}

export class UserStatusOnline extends UserStatus {
  "@type" = "userStatusOnline"
  expires: number;

  constructor(params: { expires: number }) {
    super();
    this.expires = params.expires;
  }
}

export class UserStatusOffline extends UserStatus {
  "@type" = "userStatusOffline"
  was_online: number;

  constructor(params: { was_online: number }) {
    super();
    this.was_online = params.was_online;
  }
}

export class UserStatusRecently extends UserStatus {
  "@type" = "userStatusRecently"

  constructor(params: {}) {
    super();
  }
}

export class UserStatusLastWeek extends UserStatus {
  "@type" = "userStatusLastWeek"

  constructor(params: {}) {
    super();
  }
}

export class UserStatusLastMonth extends UserStatus {
  "@type" = "userStatusLastMonth"

  constructor(params: {}) {
    super();
  }
}

export class Stickers extends Class {
  "@type" = "stickers"
  stickers: Sticker[];

  constructor(params: { stickers: Sticker[] }) {
    super();
    this.stickers = params.stickers;
  }
}

export class Emojis extends Class {
  "@type" = "emojis"
  emojis: string[];

  constructor(params: { emojis: string[] }) {
    super();
    this.emojis = params.emojis;
  }
}

export class StickerSet extends Class {
  "@type" = "stickerSet"
  emojis: Emojis[];
  id: number;
  is_archived: boolean;
  is_installed: boolean;
  is_official: boolean;
  is_viewed: boolean;
  name: string;
  sticker_format: StickerFormat;
  sticker_type: StickerType;
  stickers: Sticker[];
  thumbnail?: Thumbnail;
  thumbnail_outline: ClosedVectorPath[];
  title: string;

  constructor(params: { emojis: Emojis[], id: number, is_archived: boolean, is_installed: boolean, is_official: boolean, is_viewed: boolean, name: string, sticker_format: StickerFormat, sticker_type: StickerType, stickers: Sticker[], thumbnail?: Thumbnail, thumbnail_outline: ClosedVectorPath[], title: string }) {
    super();
    this.emojis = params.emojis;
    this.id = params.id;
    this.is_archived = params.is_archived;
    this.is_installed = params.is_installed;
    this.is_official = params.is_official;
    this.is_viewed = params.is_viewed;
    this.name = params.name;
    this.sticker_format = params.sticker_format;
    this.sticker_type = params.sticker_type;
    this.stickers = params.stickers;
    this.thumbnail = params.thumbnail;
    this.thumbnail_outline = params.thumbnail_outline;
    this.title = params.title;
  }
}

export class StickerSetInfo extends Class {
  "@type" = "stickerSetInfo"
  covers: Sticker[];
  id: number;
  is_archived: boolean;
  is_installed: boolean;
  is_official: boolean;
  is_viewed: boolean;
  name: string;
  size: number;
  sticker_format: StickerFormat;
  sticker_type: StickerType;
  thumbnail?: Thumbnail;
  thumbnail_outline: ClosedVectorPath[];
  title: string;

  constructor(params: { covers: Sticker[], id: number, is_archived: boolean, is_installed: boolean, is_official: boolean, is_viewed: boolean, name: string, size: number, sticker_format: StickerFormat, sticker_type: StickerType, thumbnail?: Thumbnail, thumbnail_outline: ClosedVectorPath[], title: string }) {
    super();
    this.covers = params.covers;
    this.id = params.id;
    this.is_archived = params.is_archived;
    this.is_installed = params.is_installed;
    this.is_official = params.is_official;
    this.is_viewed = params.is_viewed;
    this.name = params.name;
    this.size = params.size;
    this.sticker_format = params.sticker_format;
    this.sticker_type = params.sticker_type;
    this.thumbnail = params.thumbnail;
    this.thumbnail_outline = params.thumbnail_outline;
    this.title = params.title;
  }
}

export class StickerSets extends Class {
  "@type" = "stickerSets"
  sets: StickerSetInfo[];
  total_count: number;

  constructor(params: { sets: StickerSetInfo[], total_count: number }) {
    super();
    this.sets = params.sets;
    this.total_count = params.total_count;
  }
}

export class TrendingStickerSets extends Class {
  "@type" = "trendingStickerSets"
  is_premium: boolean;
  sets: StickerSetInfo[];
  total_count: number;

  constructor(params: { is_premium: boolean, sets: StickerSetInfo[], total_count: number }) {
    super();
    this.is_premium = params.is_premium;
    this.sets = params.sets;
    this.total_count = params.total_count;
  }
}

/**
 * Describes the reason why a call was discarded
 */
export class CallDiscardReason extends Class {
}

export class CallDiscardReasonEmpty extends CallDiscardReason {
  "@type" = "callDiscardReasonEmpty"

  constructor(params: {}) {
    super();
  }
}

export class CallDiscardReasonMissed extends CallDiscardReason {
  "@type" = "callDiscardReasonMissed"

  constructor(params: {}) {
    super();
  }
}

export class CallDiscardReasonDeclined extends CallDiscardReason {
  "@type" = "callDiscardReasonDeclined"

  constructor(params: {}) {
    super();
  }
}

export class CallDiscardReasonDisconnected extends CallDiscardReason {
  "@type" = "callDiscardReasonDisconnected"

  constructor(params: {}) {
    super();
  }
}

export class CallDiscardReasonHungUp extends CallDiscardReason {
  "@type" = "callDiscardReasonHungUp"

  constructor(params: {}) {
    super();
  }
}

export class CallProtocol extends Class {
  "@type" = "callProtocol"
  library_versions: string[];
  max_layer: number;
  min_layer: number;
  udp_p2p: boolean;
  udp_reflector: boolean;

  constructor(params: { library_versions: string[], max_layer: number, min_layer: number, udp_p2p: boolean, udp_reflector: boolean }) {
    super();
    this.library_versions = params.library_versions;
    this.max_layer = params.max_layer;
    this.min_layer = params.min_layer;
    this.udp_p2p = params.udp_p2p;
    this.udp_reflector = params.udp_reflector;
  }
}

/**
 * Describes the type of a call server
 */
export class CallServerType extends Class {
}

export class CallServerTypeTelegramReflector extends CallServerType {
  "@type" = "callServerTypeTelegramReflector"
  is_tcp: boolean;
  peer_tag: string;

  constructor(params: { is_tcp: boolean, peer_tag: string }) {
    super();
    this.is_tcp = params.is_tcp;
    this.peer_tag = params.peer_tag;
  }
}

export class CallServerTypeWebrtc extends CallServerType {
  "@type" = "callServerTypeWebrtc"
  password: string;
  supports_stun: boolean;
  supports_turn: boolean;
  username: string;

  constructor(params: { password: string, supports_stun: boolean, supports_turn: boolean, username: string }) {
    super();
    this.password = params.password;
    this.supports_stun = params.supports_stun;
    this.supports_turn = params.supports_turn;
    this.username = params.username;
  }
}

export class CallServer extends Class {
  "@type" = "callServer"
  id: number;
  ip_address: string;
  ipv6_address: string;
  port: number;
  type: CallServerType;

  constructor(params: { id: number, ip_address: string, ipv6_address: string, port: number, type: CallServerType }) {
    super();
    this.id = params.id;
    this.ip_address = params.ip_address;
    this.ipv6_address = params.ipv6_address;
    this.port = params.port;
    this.type = params.type;
  }
}

export class CallId extends Class {
  "@type" = "callId"
  id: number;

  constructor(params: { id: number }) {
    super();
    this.id = params.id;
  }
}

export class GroupCallId extends Class {
  "@type" = "groupCallId"
  id: number;

  constructor(params: { id: number }) {
    super();
    this.id = params.id;
  }
}

/**
 * Describes the current call state
 */
export class CallState extends Class {
}

export class CallStatePending extends CallState {
  "@type" = "callStatePending"
  is_created: boolean;
  is_received: boolean;

  constructor(params: { is_created: boolean, is_received: boolean }) {
    super();
    this.is_created = params.is_created;
    this.is_received = params.is_received;
  }
}

export class CallStateExchangingKeys extends CallState {
  "@type" = "callStateExchangingKeys"

  constructor(params: {}) {
    super();
  }
}

export class CallStateReady extends CallState {
  "@type" = "callStateReady"
  allow_p2p: boolean;
  config: string;
  emojis: string[];
  encryption_key: string;
  protocol: CallProtocol;
  servers: CallServer[];

  constructor(params: { allow_p2p: boolean, config: string, emojis: string[], encryption_key: string, protocol: CallProtocol, servers: CallServer[] }) {
    super();
    this.allow_p2p = params.allow_p2p;
    this.config = params.config;
    this.emojis = params.emojis;
    this.encryption_key = params.encryption_key;
    this.protocol = params.protocol;
    this.servers = params.servers;
  }
}

export class CallStateHangingUp extends CallState {
  "@type" = "callStateHangingUp"

  constructor(params: {}) {
    super();
  }
}

export class CallStateDiscarded extends CallState {
  "@type" = "callStateDiscarded"
  need_debug_information: boolean;
  need_log: boolean;
  need_rating: boolean;
  reason: CallDiscardReason;

  constructor(params: { need_debug_information: boolean, need_log: boolean, need_rating: boolean, reason: CallDiscardReason }) {
    super();
    this.need_debug_information = params.need_debug_information;
    this.need_log = params.need_log;
    this.need_rating = params.need_rating;
    this.reason = params.reason;
  }
}

export class CallStateError extends CallState {
  "@type" = "callStateError"
  error: Error;

  constructor(params: { error: Error }) {
    super();
    this.error = params.error;
  }
}

/**
 * Describes the quality of a group call video
 */
export class GroupCallVideoQuality extends Class {
}

export class GroupCallVideoQualityThumbnail extends GroupCallVideoQuality {
  "@type" = "groupCallVideoQualityThumbnail"

  constructor(params: {}) {
    super();
  }
}

export class GroupCallVideoQualityMedium extends GroupCallVideoQuality {
  "@type" = "groupCallVideoQualityMedium"

  constructor(params: {}) {
    super();
  }
}

export class GroupCallVideoQualityFull extends GroupCallVideoQuality {
  "@type" = "groupCallVideoQualityFull"

  constructor(params: {}) {
    super();
  }
}

export class GroupCallStream extends Class {
  "@type" = "groupCallStream"
  channel_id: number;
  scale: number;
  time_offset: number;

  constructor(params: { channel_id: number, scale: number, time_offset: number }) {
    super();
    this.channel_id = params.channel_id;
    this.scale = params.scale;
    this.time_offset = params.time_offset;
  }
}

export class GroupCallStreams extends Class {
  "@type" = "groupCallStreams"
  streams: GroupCallStream[];

  constructor(params: { streams: GroupCallStream[] }) {
    super();
    this.streams = params.streams;
  }
}

export class RtmpUrl extends Class {
  "@type" = "rtmpUrl"
  stream_key: string;
  url: string;

  constructor(params: { stream_key: string, url: string }) {
    super();
    this.stream_key = params.stream_key;
    this.url = params.url;
  }
}

export class GroupCallRecentSpeaker extends Class {
  "@type" = "groupCallRecentSpeaker"
  is_speaking: boolean;
  participant_id: MessageSender;

  constructor(params: { is_speaking: boolean, participant_id: MessageSender }) {
    super();
    this.is_speaking = params.is_speaking;
    this.participant_id = params.participant_id;
  }
}

export class GroupCall extends Class {
  "@type" = "groupCall"
  can_be_managed: boolean;
  can_enable_video: boolean;
  can_toggle_mute_new_participants: boolean;
  duration: number;
  enabled_start_notification: boolean;
  has_hidden_listeners: boolean;
  id: number;
  is_active: boolean;
  is_joined: boolean;
  is_my_video_enabled: boolean;
  is_my_video_paused: boolean;
  is_rtmp_stream: boolean;
  is_video_recorded: boolean;
  loaded_all_participants: boolean;
  mute_new_participants: boolean;
  need_rejoin: boolean;
  participant_count: number;
  recent_speakers: GroupCallRecentSpeaker[];
  record_duration: number;
  scheduled_start_date: number;
  title: string;

  constructor(params: { can_be_managed: boolean, can_enable_video: boolean, can_toggle_mute_new_participants: boolean, duration: number, enabled_start_notification: boolean, has_hidden_listeners: boolean, id: number, is_active: boolean, is_joined: boolean, is_my_video_enabled: boolean, is_my_video_paused: boolean, is_rtmp_stream: boolean, is_video_recorded: boolean, loaded_all_participants: boolean, mute_new_participants: boolean, need_rejoin: boolean, participant_count: number, recent_speakers: GroupCallRecentSpeaker[], record_duration: number, scheduled_start_date: number, title: string }) {
    super();
    this.can_be_managed = params.can_be_managed;
    this.can_enable_video = params.can_enable_video;
    this.can_toggle_mute_new_participants = params.can_toggle_mute_new_participants;
    this.duration = params.duration;
    this.enabled_start_notification = params.enabled_start_notification;
    this.has_hidden_listeners = params.has_hidden_listeners;
    this.id = params.id;
    this.is_active = params.is_active;
    this.is_joined = params.is_joined;
    this.is_my_video_enabled = params.is_my_video_enabled;
    this.is_my_video_paused = params.is_my_video_paused;
    this.is_rtmp_stream = params.is_rtmp_stream;
    this.is_video_recorded = params.is_video_recorded;
    this.loaded_all_participants = params.loaded_all_participants;
    this.mute_new_participants = params.mute_new_participants;
    this.need_rejoin = params.need_rejoin;
    this.participant_count = params.participant_count;
    this.recent_speakers = params.recent_speakers;
    this.record_duration = params.record_duration;
    this.scheduled_start_date = params.scheduled_start_date;
    this.title = params.title;
  }
}

export class GroupCallVideoSourceGroup extends Class {
  "@type" = "groupCallVideoSourceGroup"
  semantics: string;
  source_ids: number[];

  constructor(params: { semantics: string, source_ids: number[] }) {
    super();
    this.semantics = params.semantics;
    this.source_ids = params.source_ids;
  }
}

export class GroupCallParticipantVideoInfo extends Class {
  "@type" = "groupCallParticipantVideoInfo"
  endpoint_id: string;
  is_paused: boolean;
  source_groups: GroupCallVideoSourceGroup[];

  constructor(params: { endpoint_id: string, is_paused: boolean, source_groups: GroupCallVideoSourceGroup[] }) {
    super();
    this.endpoint_id = params.endpoint_id;
    this.is_paused = params.is_paused;
    this.source_groups = params.source_groups;
  }
}

export class GroupCallParticipant extends Class {
  "@type" = "groupCallParticipant"
  audio_source_id: number;
  bio: string;
  can_be_muted_for_all_users: boolean;
  can_be_muted_for_current_user: boolean;
  can_be_unmuted_for_all_users: boolean;
  can_be_unmuted_for_current_user: boolean;
  can_unmute_self: boolean;
  is_current_user: boolean;
  is_hand_raised: boolean;
  is_muted_for_all_users: boolean;
  is_muted_for_current_user: boolean;
  is_speaking: boolean;
  order: string;
  participant_id: MessageSender;
  screen_sharing_audio_source_id: number;
  screen_sharing_video_info?: GroupCallParticipantVideoInfo;
  video_info?: GroupCallParticipantVideoInfo;
  volume_level: number;

  constructor(params: { audio_source_id: number, bio: string, can_be_muted_for_all_users: boolean, can_be_muted_for_current_user: boolean, can_be_unmuted_for_all_users: boolean, can_be_unmuted_for_current_user: boolean, can_unmute_self: boolean, is_current_user: boolean, is_hand_raised: boolean, is_muted_for_all_users: boolean, is_muted_for_current_user: boolean, is_speaking: boolean, order: string, participant_id: MessageSender, screen_sharing_audio_source_id: number, screen_sharing_video_info?: GroupCallParticipantVideoInfo, video_info?: GroupCallParticipantVideoInfo, volume_level: number }) {
    super();
    this.audio_source_id = params.audio_source_id;
    this.bio = params.bio;
    this.can_be_muted_for_all_users = params.can_be_muted_for_all_users;
    this.can_be_muted_for_current_user = params.can_be_muted_for_current_user;
    this.can_be_unmuted_for_all_users = params.can_be_unmuted_for_all_users;
    this.can_be_unmuted_for_current_user = params.can_be_unmuted_for_current_user;
    this.can_unmute_self = params.can_unmute_self;
    this.is_current_user = params.is_current_user;
    this.is_hand_raised = params.is_hand_raised;
    this.is_muted_for_all_users = params.is_muted_for_all_users;
    this.is_muted_for_current_user = params.is_muted_for_current_user;
    this.is_speaking = params.is_speaking;
    this.order = params.order;
    this.participant_id = params.participant_id;
    this.screen_sharing_audio_source_id = params.screen_sharing_audio_source_id;
    this.screen_sharing_video_info = params.screen_sharing_video_info;
    this.video_info = params.video_info;
    this.volume_level = params.volume_level;
  }
}

/**
 * Describes the exact type of a problem with a call
 */
export class CallProblem extends Class {
}

export class CallProblemEcho extends CallProblem {
  "@type" = "callProblemEcho"

  constructor(params: {}) {
    super();
  }
}

export class CallProblemNoise extends CallProblem {
  "@type" = "callProblemNoise"

  constructor(params: {}) {
    super();
  }
}

export class CallProblemInterruptions extends CallProblem {
  "@type" = "callProblemInterruptions"

  constructor(params: {}) {
    super();
  }
}

export class CallProblemDistortedSpeech extends CallProblem {
  "@type" = "callProblemDistortedSpeech"

  constructor(params: {}) {
    super();
  }
}

export class CallProblemSilentLocal extends CallProblem {
  "@type" = "callProblemSilentLocal"

  constructor(params: {}) {
    super();
  }
}

export class CallProblemSilentRemote extends CallProblem {
  "@type" = "callProblemSilentRemote"

  constructor(params: {}) {
    super();
  }
}

export class CallProblemDropped extends CallProblem {
  "@type" = "callProblemDropped"

  constructor(params: {}) {
    super();
  }
}

export class CallProblemDistortedVideo extends CallProblem {
  "@type" = "callProblemDistortedVideo"

  constructor(params: {}) {
    super();
  }
}

export class CallProblemPixelatedVideo extends CallProblem {
  "@type" = "callProblemPixelatedVideo"

  constructor(params: {}) {
    super();
  }
}

export class Call extends Class {
  "@type" = "call"
  id: number;
  is_outgoing: boolean;
  is_video: boolean;
  state: CallState;
  user_id: number;

  constructor(params: { id: number, is_outgoing: boolean, is_video: boolean, state: CallState, user_id: number }) {
    super();
    this.id = params.id;
    this.is_outgoing = params.is_outgoing;
    this.is_video = params.is_video;
    this.state = params.state;
    this.user_id = params.user_id;
  }
}

export class PhoneNumberAuthenticationSettings extends Class {
  "@type" = "phoneNumberAuthenticationSettings"
  allow_flash_call: boolean;
  allow_missed_call: boolean;
  allow_sms_retriever_api: boolean;
  authentication_tokens: string[];
  is_current_phone_number: boolean;

  constructor(params: { allow_flash_call: boolean, allow_missed_call: boolean, allow_sms_retriever_api: boolean, authentication_tokens: string[], is_current_phone_number: boolean }) {
    super();
    this.allow_flash_call = params.allow_flash_call;
    this.allow_missed_call = params.allow_missed_call;
    this.allow_sms_retriever_api = params.allow_sms_retriever_api;
    this.authentication_tokens = params.authentication_tokens;
    this.is_current_phone_number = params.is_current_phone_number;
  }
}

export class AddedReaction extends Class {
  "@type" = "addedReaction"
  reaction: string;
  sender_id: MessageSender;

  constructor(params: { reaction: string, sender_id: MessageSender }) {
    super();
    this.reaction = params.reaction;
    this.sender_id = params.sender_id;
  }
}

export class AddedReactions extends Class {
  "@type" = "addedReactions"
  next_offset: string;
  reactions: AddedReaction[];
  total_count: number;

  constructor(params: { next_offset: string, reactions: AddedReaction[], total_count: number }) {
    super();
    this.next_offset = params.next_offset;
    this.reactions = params.reactions;
    this.total_count = params.total_count;
  }
}

export class AvailableReaction extends Class {
  "@type" = "availableReaction"
  needs_premium: boolean;
  reaction: string;

  constructor(params: { needs_premium: boolean, reaction: string }) {
    super();
    this.needs_premium = params.needs_premium;
    this.reaction = params.reaction;
  }
}

export class AvailableReactions extends Class {
  "@type" = "availableReactions"
  reactions: AvailableReaction[];

  constructor(params: { reactions: AvailableReaction[] }) {
    super();
    this.reactions = params.reactions;
  }
}

export class Reaction extends Class {
  "@type" = "reaction"
  activate_animation: Sticker;
  appear_animation: Sticker;
  around_animation?: Sticker;
  center_animation?: Sticker;
  effect_animation: Sticker;
  is_active: boolean;
  is_premium: boolean;
  reaction: string;
  select_animation: Sticker;
  static_icon: Sticker;
  title: string;

  constructor(params: { activate_animation: Sticker, appear_animation: Sticker, around_animation?: Sticker, center_animation?: Sticker, effect_animation: Sticker, is_active: boolean, is_premium: boolean, reaction: string, select_animation: Sticker, static_icon: Sticker, title: string }) {
    super();
    this.activate_animation = params.activate_animation;
    this.appear_animation = params.appear_animation;
    this.around_animation = params.around_animation;
    this.center_animation = params.center_animation;
    this.effect_animation = params.effect_animation;
    this.is_active = params.is_active;
    this.is_premium = params.is_premium;
    this.reaction = params.reaction;
    this.select_animation = params.select_animation;
    this.static_icon = params.static_icon;
    this.title = params.title;
  }
}

export class Animations extends Class {
  "@type" = "animations"
  animations: Animation[];

  constructor(params: { animations: Animation[] }) {
    super();
    this.animations = params.animations;
  }
}

/**
 * Contains animated stickers which must be used for dice animation rendering
 */
export class DiceStickers extends Class {
}

export class DiceStickersRegular extends DiceStickers {
  "@type" = "diceStickersRegular"
  sticker: Sticker;

  constructor(params: { sticker: Sticker }) {
    super();
    this.sticker = params.sticker;
  }
}

export class DiceStickersSlotMachine extends DiceStickers {
  "@type" = "diceStickersSlotMachine"
  background: Sticker;
  center_reel: Sticker;
  left_reel: Sticker;
  lever: Sticker;
  right_reel: Sticker;

  constructor(params: { background: Sticker, center_reel: Sticker, left_reel: Sticker, lever: Sticker, right_reel: Sticker }) {
    super();
    this.background = params.background;
    this.center_reel = params.center_reel;
    this.left_reel = params.left_reel;
    this.lever = params.lever;
    this.right_reel = params.right_reel;
  }
}

export class ImportedContacts extends Class {
  "@type" = "importedContacts"
  importer_count: number[];
  user_ids: number[];

  constructor(params: { importer_count: number[], user_ids: number[] }) {
    super();
    this.importer_count = params.importer_count;
    this.user_ids = params.user_ids;
  }
}

/**
 * Describes result of speech recognition in a voice note
 */
export class SpeechRecognitionResult extends Class {
}

export class SpeechRecognitionResultPending extends SpeechRecognitionResult {
  "@type" = "speechRecognitionResultPending"
  partial_text: string;

  constructor(params: { partial_text: string }) {
    super();
    this.partial_text = params.partial_text;
  }
}

export class SpeechRecognitionResultText extends SpeechRecognitionResult {
  "@type" = "speechRecognitionResultText"
  text: string;

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class SpeechRecognitionResultError extends SpeechRecognitionResult {
  "@type" = "speechRecognitionResultError"
  error: Error;

  constructor(params: { error: Error }) {
    super();
    this.error = params.error;
  }
}

export class AttachmentMenuBotColor extends Class {
  "@type" = "attachmentMenuBotColor"
  dark_color: number;
  light_color: number;

  constructor(params: { dark_color: number, light_color: number }) {
    super();
    this.dark_color = params.dark_color;
    this.light_color = params.light_color;
  }
}

export class AttachmentMenuBot extends Class {
  "@type" = "attachmentMenuBot"
  android_icon?: File;
  bot_user_id: number;
  default_icon?: File;
  icon_color?: AttachmentMenuBotColor;
  ios_animated_icon?: File;
  ios_static_icon?: File;
  macos_icon?: File;
  name: string;
  name_color?: AttachmentMenuBotColor;
  supports_bot_chats: boolean;
  supports_channel_chats: boolean;
  supports_group_chats: boolean;
  supports_self_chat: boolean;
  supports_settings: boolean;
  supports_user_chats: boolean;
  web_app_placeholder?: File;

  constructor(params: { android_icon?: File, bot_user_id: number, default_icon?: File, icon_color?: AttachmentMenuBotColor, ios_animated_icon?: File, ios_static_icon?: File, macos_icon?: File, name: string, name_color?: AttachmentMenuBotColor, supports_bot_chats: boolean, supports_channel_chats: boolean, supports_group_chats: boolean, supports_self_chat: boolean, supports_settings: boolean, supports_user_chats: boolean, web_app_placeholder?: File }) {
    super();
    this.android_icon = params.android_icon;
    this.bot_user_id = params.bot_user_id;
    this.default_icon = params.default_icon;
    this.icon_color = params.icon_color;
    this.ios_animated_icon = params.ios_animated_icon;
    this.ios_static_icon = params.ios_static_icon;
    this.macos_icon = params.macos_icon;
    this.name = params.name;
    this.name_color = params.name_color;
    this.supports_bot_chats = params.supports_bot_chats;
    this.supports_channel_chats = params.supports_channel_chats;
    this.supports_group_chats = params.supports_group_chats;
    this.supports_self_chat = params.supports_self_chat;
    this.supports_settings = params.supports_settings;
    this.supports_user_chats = params.supports_user_chats;
    this.web_app_placeholder = params.web_app_placeholder;
  }
}

export class SentWebAppMessage extends Class {
  "@type" = "sentWebAppMessage"
  inline_message_id: string;

  constructor(params: { inline_message_id: string }) {
    super();
    this.inline_message_id = params.inline_message_id;
  }
}

export class HttpUrl extends Class {
  "@type" = "httpUrl"
  url: string;

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

/**
 * Represents a single result of an inline query; for bots only
 */
export class InputInlineQueryResult extends Class {
}

export class InputInlineQueryResultAnimation extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultAnimation"
  id: string;
  input_message_content: InputMessageContent;
  reply_markup?: ReplyMarkup;
  thumbnail_mime_type: string;
  thumbnail_url: string;
  title: string;
  video_duration: number;
  video_height: number;
  video_mime_type: string;
  video_url: string;
  video_width: number;

  constructor(params: { id: string, input_message_content: InputMessageContent, reply_markup?: ReplyMarkup, thumbnail_mime_type: string, thumbnail_url: string, title: string, video_duration: number, video_height: number, video_mime_type: string, video_url: string, video_width: number }) {
    super();
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.reply_markup = params.reply_markup;
    this.thumbnail_mime_type = params.thumbnail_mime_type;
    this.thumbnail_url = params.thumbnail_url;
    this.title = params.title;
    this.video_duration = params.video_duration;
    this.video_height = params.video_height;
    this.video_mime_type = params.video_mime_type;
    this.video_url = params.video_url;
    this.video_width = params.video_width;
  }
}

export class InputInlineQueryResultArticle extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultArticle"
  description: string;
  hide_url: boolean;
  id: string;
  input_message_content: InputMessageContent;
  reply_markup?: ReplyMarkup;
  thumbnail_height: number;
  thumbnail_url: string;
  thumbnail_width: number;
  title: string;
  url: string;

  constructor(params: { description: string, hide_url: boolean, id: string, input_message_content: InputMessageContent, reply_markup?: ReplyMarkup, thumbnail_height: number, thumbnail_url: string, thumbnail_width: number, title: string, url: string }) {
    super();
    this.description = params.description;
    this.hide_url = params.hide_url;
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.reply_markup = params.reply_markup;
    this.thumbnail_height = params.thumbnail_height;
    this.thumbnail_url = params.thumbnail_url;
    this.thumbnail_width = params.thumbnail_width;
    this.title = params.title;
    this.url = params.url;
  }
}

export class InputInlineQueryResultAudio extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultAudio"
  audio_duration: number;
  audio_url: string;
  id: string;
  input_message_content: InputMessageContent;
  performer: string;
  reply_markup?: ReplyMarkup;
  title: string;

  constructor(params: { audio_duration: number, audio_url: string, id: string, input_message_content: InputMessageContent, performer: string, reply_markup?: ReplyMarkup, title: string }) {
    super();
    this.audio_duration = params.audio_duration;
    this.audio_url = params.audio_url;
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.performer = params.performer;
    this.reply_markup = params.reply_markup;
    this.title = params.title;
  }
}

export class InputInlineQueryResultContact extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultContact"
  contact: Contact;
  id: string;
  input_message_content: InputMessageContent;
  reply_markup?: ReplyMarkup;
  thumbnail_height: number;
  thumbnail_url: string;
  thumbnail_width: number;

  constructor(params: { contact: Contact, id: string, input_message_content: InputMessageContent, reply_markup?: ReplyMarkup, thumbnail_height: number, thumbnail_url: string, thumbnail_width: number }) {
    super();
    this.contact = params.contact;
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.reply_markup = params.reply_markup;
    this.thumbnail_height = params.thumbnail_height;
    this.thumbnail_url = params.thumbnail_url;
    this.thumbnail_width = params.thumbnail_width;
  }
}

export class InputInlineQueryResultDocument extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultDocument"
  description: string;
  document_url: string;
  id: string;
  input_message_content: InputMessageContent;
  mime_type: string;
  reply_markup?: ReplyMarkup;
  thumbnail_height: number;
  thumbnail_url: string;
  thumbnail_width: number;
  title: string;

  constructor(params: { description: string, document_url: string, id: string, input_message_content: InputMessageContent, mime_type: string, reply_markup?: ReplyMarkup, thumbnail_height: number, thumbnail_url: string, thumbnail_width: number, title: string }) {
    super();
    this.description = params.description;
    this.document_url = params.document_url;
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.mime_type = params.mime_type;
    this.reply_markup = params.reply_markup;
    this.thumbnail_height = params.thumbnail_height;
    this.thumbnail_url = params.thumbnail_url;
    this.thumbnail_width = params.thumbnail_width;
    this.title = params.title;
  }
}

export class InputInlineQueryResultGame extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultGame"
  game_short_name: string;
  id: string;
  reply_markup: ReplyMarkup;

  constructor(params: { game_short_name: string, id: string, reply_markup: ReplyMarkup }) {
    super();
    this.game_short_name = params.game_short_name;
    this.id = params.id;
    this.reply_markup = params.reply_markup;
  }
}

export class InputInlineQueryResultLocation extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultLocation"
  id: string;
  input_message_content: InputMessageContent;
  live_period: number;
  location: Location;
  reply_markup?: ReplyMarkup;
  thumbnail_height: number;
  thumbnail_url: string;
  thumbnail_width: number;
  title: string;

  constructor(params: { id: string, input_message_content: InputMessageContent, live_period: number, location: Location, reply_markup?: ReplyMarkup, thumbnail_height: number, thumbnail_url: string, thumbnail_width: number, title: string }) {
    super();
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.live_period = params.live_period;
    this.location = params.location;
    this.reply_markup = params.reply_markup;
    this.thumbnail_height = params.thumbnail_height;
    this.thumbnail_url = params.thumbnail_url;
    this.thumbnail_width = params.thumbnail_width;
    this.title = params.title;
  }
}

export class InputInlineQueryResultPhoto extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultPhoto"
  description: string;
  id: string;
  input_message_content: InputMessageContent;
  photo_height: number;
  photo_url: string;
  photo_width: number;
  reply_markup?: ReplyMarkup;
  thumbnail_url: string;
  title: string;

  constructor(params: { description: string, id: string, input_message_content: InputMessageContent, photo_height: number, photo_url: string, photo_width: number, reply_markup?: ReplyMarkup, thumbnail_url: string, title: string }) {
    super();
    this.description = params.description;
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.photo_height = params.photo_height;
    this.photo_url = params.photo_url;
    this.photo_width = params.photo_width;
    this.reply_markup = params.reply_markup;
    this.thumbnail_url = params.thumbnail_url;
    this.title = params.title;
  }
}

export class InputInlineQueryResultSticker extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultSticker"
  id: string;
  input_message_content: InputMessageContent;
  reply_markup?: ReplyMarkup;
  sticker_height: number;
  sticker_url: string;
  sticker_width: number;
  thumbnail_url: string;

  constructor(params: { id: string, input_message_content: InputMessageContent, reply_markup?: ReplyMarkup, sticker_height: number, sticker_url: string, sticker_width: number, thumbnail_url: string }) {
    super();
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.reply_markup = params.reply_markup;
    this.sticker_height = params.sticker_height;
    this.sticker_url = params.sticker_url;
    this.sticker_width = params.sticker_width;
    this.thumbnail_url = params.thumbnail_url;
  }
}

export class InputInlineQueryResultVenue extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultVenue"
  id: string;
  input_message_content: InputMessageContent;
  reply_markup?: ReplyMarkup;
  thumbnail_height: number;
  thumbnail_url: string;
  thumbnail_width: number;
  venue: Venue;

  constructor(params: { id: string, input_message_content: InputMessageContent, reply_markup?: ReplyMarkup, thumbnail_height: number, thumbnail_url: string, thumbnail_width: number, venue: Venue }) {
    super();
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.reply_markup = params.reply_markup;
    this.thumbnail_height = params.thumbnail_height;
    this.thumbnail_url = params.thumbnail_url;
    this.thumbnail_width = params.thumbnail_width;
    this.venue = params.venue;
  }
}

export class InputInlineQueryResultVideo extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultVideo"
  description: string;
  id: string;
  input_message_content: InputMessageContent;
  mime_type: string;
  reply_markup?: ReplyMarkup;
  thumbnail_url: string;
  title: string;
  video_duration: number;
  video_height: number;
  video_url: string;
  video_width: number;

  constructor(params: { description: string, id: string, input_message_content: InputMessageContent, mime_type: string, reply_markup?: ReplyMarkup, thumbnail_url: string, title: string, video_duration: number, video_height: number, video_url: string, video_width: number }) {
    super();
    this.description = params.description;
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.mime_type = params.mime_type;
    this.reply_markup = params.reply_markup;
    this.thumbnail_url = params.thumbnail_url;
    this.title = params.title;
    this.video_duration = params.video_duration;
    this.video_height = params.video_height;
    this.video_url = params.video_url;
    this.video_width = params.video_width;
  }
}

export class InputInlineQueryResultVoiceNote extends InputInlineQueryResult {
  "@type" = "inputInlineQueryResultVoiceNote"
  id: string;
  input_message_content: InputMessageContent;
  reply_markup?: ReplyMarkup;
  title: string;
  voice_note_duration: number;
  voice_note_url: string;

  constructor(params: { id: string, input_message_content: InputMessageContent, reply_markup?: ReplyMarkup, title: string, voice_note_duration: number, voice_note_url: string }) {
    super();
    this.id = params.id;
    this.input_message_content = params.input_message_content;
    this.reply_markup = params.reply_markup;
    this.title = params.title;
    this.voice_note_duration = params.voice_note_duration;
    this.voice_note_url = params.voice_note_url;
  }
}

/**
 * Represents a single result of an inline query
 */
export class InlineQueryResult extends Class {
}

export class InlineQueryResultArticle extends InlineQueryResult {
  "@type" = "inlineQueryResultArticle"
  description: string;
  hide_url: boolean;
  id: string;
  thumbnail?: Thumbnail;
  title: string;
  url: string;

  constructor(params: { description: string, hide_url: boolean, id: string, thumbnail?: Thumbnail, title: string, url: string }) {
    super();
    this.description = params.description;
    this.hide_url = params.hide_url;
    this.id = params.id;
    this.thumbnail = params.thumbnail;
    this.title = params.title;
    this.url = params.url;
  }
}

export class InlineQueryResultContact extends InlineQueryResult {
  "@type" = "inlineQueryResultContact"
  contact: Contact;
  id: string;
  thumbnail: Thumbnail;

  constructor(params: { contact: Contact, id: string, thumbnail: Thumbnail }) {
    super();
    this.contact = params.contact;
    this.id = params.id;
    this.thumbnail = params.thumbnail;
  }
}

export class InlineQueryResultLocation extends InlineQueryResult {
  "@type" = "inlineQueryResultLocation"
  id: string;
  location: Location;
  thumbnail: Thumbnail;
  title: string;

  constructor(params: { id: string, location: Location, thumbnail: Thumbnail, title: string }) {
    super();
    this.id = params.id;
    this.location = params.location;
    this.thumbnail = params.thumbnail;
    this.title = params.title;
  }
}

export class InlineQueryResultVenue extends InlineQueryResult {
  "@type" = "inlineQueryResultVenue"
  id: string;
  thumbnail: Thumbnail;
  venue: Venue;

  constructor(params: { id: string, thumbnail: Thumbnail, venue: Venue }) {
    super();
    this.id = params.id;
    this.thumbnail = params.thumbnail;
    this.venue = params.venue;
  }
}

export class InlineQueryResultGame extends InlineQueryResult {
  "@type" = "inlineQueryResultGame"
  game: Game;
  id: string;

  constructor(params: { game: Game, id: string }) {
    super();
    this.game = params.game;
    this.id = params.id;
  }
}

export class InlineQueryResultAnimation extends InlineQueryResult {
  "@type" = "inlineQueryResultAnimation"
  animation: Animation;
  id: string;
  title: string;

  constructor(params: { animation: Animation, id: string, title: string }) {
    super();
    this.animation = params.animation;
    this.id = params.id;
    this.title = params.title;
  }
}

export class InlineQueryResultAudio extends InlineQueryResult {
  "@type" = "inlineQueryResultAudio"
  audio: Audio;
  id: string;

  constructor(params: { audio: Audio, id: string }) {
    super();
    this.audio = params.audio;
    this.id = params.id;
  }
}

export class InlineQueryResultDocument extends InlineQueryResult {
  "@type" = "inlineQueryResultDocument"
  description: string;
  document: Document;
  id: string;
  title: string;

  constructor(params: { description: string, document: Document, id: string, title: string }) {
    super();
    this.description = params.description;
    this.document = params.document;
    this.id = params.id;
    this.title = params.title;
  }
}

export class InlineQueryResultPhoto extends InlineQueryResult {
  "@type" = "inlineQueryResultPhoto"
  description: string;
  id: string;
  photo: Photo;
  title: string;

  constructor(params: { description: string, id: string, photo: Photo, title: string }) {
    super();
    this.description = params.description;
    this.id = params.id;
    this.photo = params.photo;
    this.title = params.title;
  }
}

export class InlineQueryResultSticker extends InlineQueryResult {
  "@type" = "inlineQueryResultSticker"
  id: string;
  sticker: Sticker;

  constructor(params: { id: string, sticker: Sticker }) {
    super();
    this.id = params.id;
    this.sticker = params.sticker;
  }
}

export class InlineQueryResultVideo extends InlineQueryResult {
  "@type" = "inlineQueryResultVideo"
  description: string;
  id: string;
  title: string;
  video: Video;

  constructor(params: { description: string, id: string, title: string, video: Video }) {
    super();
    this.description = params.description;
    this.id = params.id;
    this.title = params.title;
    this.video = params.video;
  }
}

export class InlineQueryResultVoiceNote extends InlineQueryResult {
  "@type" = "inlineQueryResultVoiceNote"
  id: string;
  title: string;
  voice_note: VoiceNote;

  constructor(params: { id: string, title: string, voice_note: VoiceNote }) {
    super();
    this.id = params.id;
    this.title = params.title;
    this.voice_note = params.voice_note;
  }
}

export class InlineQueryResults extends Class {
  "@type" = "inlineQueryResults"
  inline_query_id: number;
  next_offset: string;
  results: InlineQueryResult[];
  switch_pm_parameter: string;
  switch_pm_text: string;

  constructor(params: { inline_query_id: number, next_offset: string, results: InlineQueryResult[], switch_pm_parameter: string, switch_pm_text: string }) {
    super();
    this.inline_query_id = params.inline_query_id;
    this.next_offset = params.next_offset;
    this.results = params.results;
    this.switch_pm_parameter = params.switch_pm_parameter;
    this.switch_pm_text = params.switch_pm_text;
  }
}

/**
 * Represents a payload of a callback query
 */
export class CallbackQueryPayload extends Class {
}

export class CallbackQueryPayloadData extends CallbackQueryPayload {
  "@type" = "callbackQueryPayloadData"
  data: string;

  constructor(params: { data: string }) {
    super();
    this.data = params.data;
  }
}

export class CallbackQueryPayloadDataWithPassword extends CallbackQueryPayload {
  "@type" = "callbackQueryPayloadDataWithPassword"
  data: string;
  password: string;

  constructor(params: { data: string, password: string }) {
    super();
    this.data = params.data;
    this.password = params.password;
  }
}

export class CallbackQueryPayloadGame extends CallbackQueryPayload {
  "@type" = "callbackQueryPayloadGame"
  game_short_name: string;

  constructor(params: { game_short_name: string }) {
    super();
    this.game_short_name = params.game_short_name;
  }
}

export class CallbackQueryAnswer extends Class {
  "@type" = "callbackQueryAnswer"
  show_alert: boolean;
  text: string;
  url: string;

  constructor(params: { show_alert: boolean, text: string, url: string }) {
    super();
    this.show_alert = params.show_alert;
    this.text = params.text;
    this.url = params.url;
  }
}

export class CustomRequestResult extends Class {
  "@type" = "customRequestResult"
  result: string;

  constructor(params: { result: string }) {
    super();
    this.result = params.result;
  }
}

export class GameHighScore extends Class {
  "@type" = "gameHighScore"
  position: number;
  score: number;
  user_id: number;

  constructor(params: { position: number, score: number, user_id: number }) {
    super();
    this.position = params.position;
    this.score = params.score;
    this.user_id = params.user_id;
  }
}

export class GameHighScores extends Class {
  "@type" = "gameHighScores"
  scores: GameHighScore[];

  constructor(params: { scores: GameHighScore[] }) {
    super();
    this.scores = params.scores;
  }
}

/**
 * Represents a chat event
 */
export class ChatEventAction extends Class {
}

export class ChatEventMessageEdited extends ChatEventAction {
  "@type" = "chatEventMessageEdited"
  new_message: Message;
  old_message: Message;

  constructor(params: { new_message: Message, old_message: Message }) {
    super();
    this.new_message = params.new_message;
    this.old_message = params.old_message;
  }
}

export class ChatEventMessageDeleted extends ChatEventAction {
  "@type" = "chatEventMessageDeleted"
  message: Message;

  constructor(params: { message: Message }) {
    super();
    this.message = params.message;
  }
}

export class ChatEventMessagePinned extends ChatEventAction {
  "@type" = "chatEventMessagePinned"
  message: Message;

  constructor(params: { message: Message }) {
    super();
    this.message = params.message;
  }
}

export class ChatEventMessageUnpinned extends ChatEventAction {
  "@type" = "chatEventMessageUnpinned"
  message: Message;

  constructor(params: { message: Message }) {
    super();
    this.message = params.message;
  }
}

export class ChatEventPollStopped extends ChatEventAction {
  "@type" = "chatEventPollStopped"
  message: Message;

  constructor(params: { message: Message }) {
    super();
    this.message = params.message;
  }
}

export class ChatEventMemberJoined extends ChatEventAction {
  "@type" = "chatEventMemberJoined"

  constructor(params: {}) {
    super();
  }
}

export class ChatEventMemberJoinedByInviteLink extends ChatEventAction {
  "@type" = "chatEventMemberJoinedByInviteLink"
  invite_link: ChatInviteLink;

  constructor(params: { invite_link: ChatInviteLink }) {
    super();
    this.invite_link = params.invite_link;
  }
}

export class ChatEventMemberJoinedByRequest extends ChatEventAction {
  "@type" = "chatEventMemberJoinedByRequest"
  approver_user_id: number;
  invite_link: ChatInviteLink;

  constructor(params: { approver_user_id: number, invite_link: ChatInviteLink }) {
    super();
    this.approver_user_id = params.approver_user_id;
    this.invite_link = params.invite_link;
  }
}

export class ChatEventMemberInvited extends ChatEventAction {
  "@type" = "chatEventMemberInvited"
  status: ChatMemberStatus;
  user_id: number;

  constructor(params: { status: ChatMemberStatus, user_id: number }) {
    super();
    this.status = params.status;
    this.user_id = params.user_id;
  }
}

export class ChatEventMemberLeft extends ChatEventAction {
  "@type" = "chatEventMemberLeft"

  constructor(params: {}) {
    super();
  }
}

export class ChatEventMemberPromoted extends ChatEventAction {
  "@type" = "chatEventMemberPromoted"
  new_status: ChatMemberStatus;
  old_status: ChatMemberStatus;
  user_id: number;

  constructor(params: { new_status: ChatMemberStatus, old_status: ChatMemberStatus, user_id: number }) {
    super();
    this.new_status = params.new_status;
    this.old_status = params.old_status;
    this.user_id = params.user_id;
  }
}

export class ChatEventMemberRestricted extends ChatEventAction {
  "@type" = "chatEventMemberRestricted"
  member_id: MessageSender;
  new_status: ChatMemberStatus;
  old_status: ChatMemberStatus;

  constructor(params: { member_id: MessageSender, new_status: ChatMemberStatus, old_status: ChatMemberStatus }) {
    super();
    this.member_id = params.member_id;
    this.new_status = params.new_status;
    this.old_status = params.old_status;
  }
}

export class ChatEventAvailableReactionsChanged extends ChatEventAction {
  "@type" = "chatEventAvailableReactionsChanged"
  new_available_reactions: string[];
  old_available_reactions: string[];

  constructor(params: { new_available_reactions: string[], old_available_reactions: string[] }) {
    super();
    this.new_available_reactions = params.new_available_reactions;
    this.old_available_reactions = params.old_available_reactions;
  }
}

export class ChatEventDescriptionChanged extends ChatEventAction {
  "@type" = "chatEventDescriptionChanged"
  new_description: string;
  old_description: string;

  constructor(params: { new_description: string, old_description: string }) {
    super();
    this.new_description = params.new_description;
    this.old_description = params.old_description;
  }
}

export class ChatEventLinkedChatChanged extends ChatEventAction {
  "@type" = "chatEventLinkedChatChanged"
  new_linked_chat_id: number;
  old_linked_chat_id: number;

  constructor(params: { new_linked_chat_id: number, old_linked_chat_id: number }) {
    super();
    this.new_linked_chat_id = params.new_linked_chat_id;
    this.old_linked_chat_id = params.old_linked_chat_id;
  }
}

export class ChatEventLocationChanged extends ChatEventAction {
  "@type" = "chatEventLocationChanged"
  new_location: ChatLocation;
  old_location: ChatLocation;

  constructor(params: { new_location: ChatLocation, old_location: ChatLocation }) {
    super();
    this.new_location = params.new_location;
    this.old_location = params.old_location;
  }
}

export class ChatEventMessageTtlChanged extends ChatEventAction {
  "@type" = "chatEventMessageTtlChanged"
  new_message_ttl: number;
  old_message_ttl: number;

  constructor(params: { new_message_ttl: number, old_message_ttl: number }) {
    super();
    this.new_message_ttl = params.new_message_ttl;
    this.old_message_ttl = params.old_message_ttl;
  }
}

export class ChatEventPermissionsChanged extends ChatEventAction {
  "@type" = "chatEventPermissionsChanged"
  new_permissions: ChatPermissions;
  old_permissions: ChatPermissions;

  constructor(params: { new_permissions: ChatPermissions, old_permissions: ChatPermissions }) {
    super();
    this.new_permissions = params.new_permissions;
    this.old_permissions = params.old_permissions;
  }
}

export class ChatEventPhotoChanged extends ChatEventAction {
  "@type" = "chatEventPhotoChanged"
  new_photo: ChatPhoto;
  old_photo: ChatPhoto;

  constructor(params: { new_photo: ChatPhoto, old_photo: ChatPhoto }) {
    super();
    this.new_photo = params.new_photo;
    this.old_photo = params.old_photo;
  }
}

export class ChatEventSlowModeDelayChanged extends ChatEventAction {
  "@type" = "chatEventSlowModeDelayChanged"
  new_slow_mode_delay: number;
  old_slow_mode_delay: number;

  constructor(params: { new_slow_mode_delay: number, old_slow_mode_delay: number }) {
    super();
    this.new_slow_mode_delay = params.new_slow_mode_delay;
    this.old_slow_mode_delay = params.old_slow_mode_delay;
  }
}

export class ChatEventStickerSetChanged extends ChatEventAction {
  "@type" = "chatEventStickerSetChanged"
  new_sticker_set_id: number;
  old_sticker_set_id: number;

  constructor(params: { new_sticker_set_id: number, old_sticker_set_id: number }) {
    super();
    this.new_sticker_set_id = params.new_sticker_set_id;
    this.old_sticker_set_id = params.old_sticker_set_id;
  }
}

export class ChatEventTitleChanged extends ChatEventAction {
  "@type" = "chatEventTitleChanged"
  new_title: string;
  old_title: string;

  constructor(params: { new_title: string, old_title: string }) {
    super();
    this.new_title = params.new_title;
    this.old_title = params.old_title;
  }
}

export class ChatEventUsernameChanged extends ChatEventAction {
  "@type" = "chatEventUsernameChanged"
  new_username: string;
  old_username: string;

  constructor(params: { new_username: string, old_username: string }) {
    super();
    this.new_username = params.new_username;
    this.old_username = params.old_username;
  }
}

export class ChatEventHasProtectedContentToggled extends ChatEventAction {
  "@type" = "chatEventHasProtectedContentToggled"
  has_protected_content: boolean;

  constructor(params: { has_protected_content: boolean }) {
    super();
    this.has_protected_content = params.has_protected_content;
  }
}

export class ChatEventInvitesToggled extends ChatEventAction {
  "@type" = "chatEventInvitesToggled"
  can_invite_users: boolean;

  constructor(params: { can_invite_users: boolean }) {
    super();
    this.can_invite_users = params.can_invite_users;
  }
}

export class ChatEventIsAllHistoryAvailableToggled extends ChatEventAction {
  "@type" = "chatEventIsAllHistoryAvailableToggled"
  is_all_history_available: boolean;

  constructor(params: { is_all_history_available: boolean }) {
    super();
    this.is_all_history_available = params.is_all_history_available;
  }
}

export class ChatEventSignMessagesToggled extends ChatEventAction {
  "@type" = "chatEventSignMessagesToggled"
  sign_messages: boolean;

  constructor(params: { sign_messages: boolean }) {
    super();
    this.sign_messages = params.sign_messages;
  }
}

export class ChatEventInviteLinkEdited extends ChatEventAction {
  "@type" = "chatEventInviteLinkEdited"
  new_invite_link: ChatInviteLink;
  old_invite_link: ChatInviteLink;

  constructor(params: { new_invite_link: ChatInviteLink, old_invite_link: ChatInviteLink }) {
    super();
    this.new_invite_link = params.new_invite_link;
    this.old_invite_link = params.old_invite_link;
  }
}

export class ChatEventInviteLinkRevoked extends ChatEventAction {
  "@type" = "chatEventInviteLinkRevoked"
  invite_link: ChatInviteLink;

  constructor(params: { invite_link: ChatInviteLink }) {
    super();
    this.invite_link = params.invite_link;
  }
}

export class ChatEventInviteLinkDeleted extends ChatEventAction {
  "@type" = "chatEventInviteLinkDeleted"
  invite_link: ChatInviteLink;

  constructor(params: { invite_link: ChatInviteLink }) {
    super();
    this.invite_link = params.invite_link;
  }
}

export class ChatEventVideoChatCreated extends ChatEventAction {
  "@type" = "chatEventVideoChatCreated"
  group_call_id: number;

  constructor(params: { group_call_id: number }) {
    super();
    this.group_call_id = params.group_call_id;
  }
}

export class ChatEventVideoChatEnded extends ChatEventAction {
  "@type" = "chatEventVideoChatEnded"
  group_call_id: number;

  constructor(params: { group_call_id: number }) {
    super();
    this.group_call_id = params.group_call_id;
  }
}

export class ChatEventVideoChatMuteNewParticipantsToggled extends ChatEventAction {
  "@type" = "chatEventVideoChatMuteNewParticipantsToggled"
  mute_new_participants: boolean;

  constructor(params: { mute_new_participants: boolean }) {
    super();
    this.mute_new_participants = params.mute_new_participants;
  }
}

export class ChatEventVideoChatParticipantIsMutedToggled extends ChatEventAction {
  "@type" = "chatEventVideoChatParticipantIsMutedToggled"
  is_muted: boolean;
  participant_id: MessageSender;

  constructor(params: { is_muted: boolean, participant_id: MessageSender }) {
    super();
    this.is_muted = params.is_muted;
    this.participant_id = params.participant_id;
  }
}

export class ChatEventVideoChatParticipantVolumeLevelChanged extends ChatEventAction {
  "@type" = "chatEventVideoChatParticipantVolumeLevelChanged"
  participant_id: MessageSender;
  volume_level: number;

  constructor(params: { participant_id: MessageSender, volume_level: number }) {
    super();
    this.participant_id = params.participant_id;
    this.volume_level = params.volume_level;
  }
}

export class ChatEvent extends Class {
  "@type" = "chatEvent"
  action: ChatEventAction;
  date: number;
  id: number;
  member_id: MessageSender;

  constructor(params: { action: ChatEventAction, date: number, id: number, member_id: MessageSender }) {
    super();
    this.action = params.action;
    this.date = params.date;
    this.id = params.id;
    this.member_id = params.member_id;
  }
}

export class ChatEvents extends Class {
  "@type" = "chatEvents"
  events: ChatEvent[];

  constructor(params: { events: ChatEvent[] }) {
    super();
    this.events = params.events;
  }
}

export class ChatEventLogFilters extends Class {
  "@type" = "chatEventLogFilters"
  info_changes: boolean;
  invite_link_changes: boolean;
  member_invites: boolean;
  member_joins: boolean;
  member_leaves: boolean;
  member_promotions: boolean;
  member_restrictions: boolean;
  message_deletions: boolean;
  message_edits: boolean;
  message_pins: boolean;
  setting_changes: boolean;
  video_chat_changes: boolean;

  constructor(params: { info_changes: boolean, invite_link_changes: boolean, member_invites: boolean, member_joins: boolean, member_leaves: boolean, member_promotions: boolean, member_restrictions: boolean, message_deletions: boolean, message_edits: boolean, message_pins: boolean, setting_changes: boolean, video_chat_changes: boolean }) {
    super();
    this.info_changes = params.info_changes;
    this.invite_link_changes = params.invite_link_changes;
    this.member_invites = params.member_invites;
    this.member_joins = params.member_joins;
    this.member_leaves = params.member_leaves;
    this.member_promotions = params.member_promotions;
    this.member_restrictions = params.member_restrictions;
    this.message_deletions = params.message_deletions;
    this.message_edits = params.message_edits;
    this.message_pins = params.message_pins;
    this.setting_changes = params.setting_changes;
    this.video_chat_changes = params.video_chat_changes;
  }
}

/**
 * Represents the value of a string in a language pack
 */
export class LanguagePackStringValue extends Class {
}

export class LanguagePackStringValueOrdinary extends LanguagePackStringValue {
  "@type" = "languagePackStringValueOrdinary"
  value: string;

  constructor(params: { value: string }) {
    super();
    this.value = params.value;
  }
}

export class LanguagePackStringValuePluralized extends LanguagePackStringValue {
  "@type" = "languagePackStringValuePluralized"
  few_value: string;
  many_value: string;
  one_value: string;
  other_value: string;
  two_value: string;
  zero_value: string;

  constructor(params: { few_value: string, many_value: string, one_value: string, other_value: string, two_value: string, zero_value: string }) {
    super();
    this.few_value = params.few_value;
    this.many_value = params.many_value;
    this.one_value = params.one_value;
    this.other_value = params.other_value;
    this.two_value = params.two_value;
    this.zero_value = params.zero_value;
  }
}

export class LanguagePackStringValueDeleted extends LanguagePackStringValue {
  "@type" = "languagePackStringValueDeleted"

  constructor(params: {}) {
    super();
  }
}

export class LanguagePackString extends Class {
  "@type" = "languagePackString"
  key: string;
  value: LanguagePackStringValue;

  constructor(params: { key: string, value: LanguagePackStringValue }) {
    super();
    this.key = params.key;
    this.value = params.value;
  }
}

export class LanguagePackStrings extends Class {
  "@type" = "languagePackStrings"
  strings: LanguagePackString[];

  constructor(params: { strings: LanguagePackString[] }) {
    super();
    this.strings = params.strings;
  }
}

export class LanguagePackInfo extends Class {
  "@type" = "languagePackInfo"
  base_language_pack_id: string;
  id: string;
  is_beta: boolean;
  is_installed: boolean;
  is_official: boolean;
  is_rtl: boolean;
  local_string_count: number;
  name: string;
  native_name: string;
  plural_code: string;
  total_string_count: number;
  translated_string_count: number;
  translation_url: string;

  constructor(params: { base_language_pack_id: string, id: string, is_beta: boolean, is_installed: boolean, is_official: boolean, is_rtl: boolean, local_string_count: number, name: string, native_name: string, plural_code: string, total_string_count: number, translated_string_count: number, translation_url: string }) {
    super();
    this.base_language_pack_id = params.base_language_pack_id;
    this.id = params.id;
    this.is_beta = params.is_beta;
    this.is_installed = params.is_installed;
    this.is_official = params.is_official;
    this.is_rtl = params.is_rtl;
    this.local_string_count = params.local_string_count;
    this.name = params.name;
    this.native_name = params.native_name;
    this.plural_code = params.plural_code;
    this.total_string_count = params.total_string_count;
    this.translated_string_count = params.translated_string_count;
    this.translation_url = params.translation_url;
  }
}

export class LocalizationTargetInfo extends Class {
  "@type" = "localizationTargetInfo"
  language_packs: LanguagePackInfo[];

  constructor(params: { language_packs: LanguagePackInfo[] }) {
    super();
    this.language_packs = params.language_packs;
  }
}

/**
 * Describes type of a limit, increased for Premium users
 */
export class PremiumLimitType extends Class {
}

export class PremiumLimitTypeSupergroupCount extends PremiumLimitType {
  "@type" = "premiumLimitTypeSupergroupCount"

  constructor(params: {}) {
    super();
  }
}

export class PremiumLimitTypePinnedChatCount extends PremiumLimitType {
  "@type" = "premiumLimitTypePinnedChatCount"

  constructor(params: {}) {
    super();
  }
}

export class PremiumLimitTypeCreatedPublicChatCount extends PremiumLimitType {
  "@type" = "premiumLimitTypeCreatedPublicChatCount"

  constructor(params: {}) {
    super();
  }
}

export class PremiumLimitTypeSavedAnimationCount extends PremiumLimitType {
  "@type" = "premiumLimitTypeSavedAnimationCount"

  constructor(params: {}) {
    super();
  }
}

export class PremiumLimitTypeFavoriteStickerCount extends PremiumLimitType {
  "@type" = "premiumLimitTypeFavoriteStickerCount"

  constructor(params: {}) {
    super();
  }
}

export class PremiumLimitTypeChatFilterCount extends PremiumLimitType {
  "@type" = "premiumLimitTypeChatFilterCount"

  constructor(params: {}) {
    super();
  }
}

export class PremiumLimitTypeChatFilterChosenChatCount extends PremiumLimitType {
  "@type" = "premiumLimitTypeChatFilterChosenChatCount"

  constructor(params: {}) {
    super();
  }
}

export class PremiumLimitTypePinnedArchivedChatCount extends PremiumLimitType {
  "@type" = "premiumLimitTypePinnedArchivedChatCount"

  constructor(params: {}) {
    super();
  }
}

export class PremiumLimitTypeCaptionLength extends PremiumLimitType {
  "@type" = "premiumLimitTypeCaptionLength"

  constructor(params: {}) {
    super();
  }
}

export class PremiumLimitTypeBioLength extends PremiumLimitType {
  "@type" = "premiumLimitTypeBioLength"

  constructor(params: {}) {
    super();
  }
}

/**
 * Describes a feature available to Premium users
 */
export class PremiumFeature extends Class {
}

export class PremiumFeatureIncreasedLimits extends PremiumFeature {
  "@type" = "premiumFeatureIncreasedLimits"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureIncreasedUploadFileSize extends PremiumFeature {
  "@type" = "premiumFeatureIncreasedUploadFileSize"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureImprovedDownloadSpeed extends PremiumFeature {
  "@type" = "premiumFeatureImprovedDownloadSpeed"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureVoiceRecognition extends PremiumFeature {
  "@type" = "premiumFeatureVoiceRecognition"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureDisabledAds extends PremiumFeature {
  "@type" = "premiumFeatureDisabledAds"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureUniqueReactions extends PremiumFeature {
  "@type" = "premiumFeatureUniqueReactions"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureUniqueStickers extends PremiumFeature {
  "@type" = "premiumFeatureUniqueStickers"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureCustomEmoji extends PremiumFeature {
  "@type" = "premiumFeatureCustomEmoji"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureAdvancedChatManagement extends PremiumFeature {
  "@type" = "premiumFeatureAdvancedChatManagement"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureProfileBadge extends PremiumFeature {
  "@type" = "premiumFeatureProfileBadge"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureAnimatedProfilePhoto extends PremiumFeature {
  "@type" = "premiumFeatureAnimatedProfilePhoto"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeatureAppIcons extends PremiumFeature {
  "@type" = "premiumFeatureAppIcons"

  constructor(params: {}) {
    super();
  }
}

export class PremiumLimit extends Class {
  "@type" = "premiumLimit"
  default_value: number;
  premium_value: number;
  type: PremiumLimitType;

  constructor(params: { default_value: number, premium_value: number, type: PremiumLimitType }) {
    super();
    this.default_value = params.default_value;
    this.premium_value = params.premium_value;
    this.type = params.type;
  }
}

export class PremiumFeatures extends Class {
  "@type" = "premiumFeatures"
  features: PremiumFeature[];
  limits: PremiumLimit[];
  payment_link?: InternalLinkType;

  constructor(params: { features: PremiumFeature[], limits: PremiumLimit[], payment_link?: InternalLinkType }) {
    super();
    this.features = params.features;
    this.limits = params.limits;
    this.payment_link = params.payment_link;
  }
}

/**
 * Describes a source from which the Premium features screen is opened
 */
export class PremiumSource extends Class {
}

export class PremiumSourceLimitExceeded extends PremiumSource {
  "@type" = "premiumSourceLimitExceeded"
  limit_type: PremiumLimitType;

  constructor(params: { limit_type: PremiumLimitType }) {
    super();
    this.limit_type = params.limit_type;
  }
}

export class PremiumSourceFeature extends PremiumSource {
  "@type" = "premiumSourceFeature"
  feature: PremiumFeature;

  constructor(params: { feature: PremiumFeature }) {
    super();
    this.feature = params.feature;
  }
}

export class PremiumSourceLink extends PremiumSource {
  "@type" = "premiumSourceLink"
  referrer: string;

  constructor(params: { referrer: string }) {
    super();
    this.referrer = params.referrer;
  }
}

export class PremiumSourceSettings extends PremiumSource {
  "@type" = "premiumSourceSettings"

  constructor(params: {}) {
    super();
  }
}

export class PremiumFeaturePromotionAnimation extends Class {
  "@type" = "premiumFeaturePromotionAnimation"
  animation: Animation;
  feature: PremiumFeature;

  constructor(params: { animation: Animation, feature: PremiumFeature }) {
    super();
    this.animation = params.animation;
    this.feature = params.feature;
  }
}

export class PremiumState extends Class {
  "@type" = "premiumState"
  animations: PremiumFeaturePromotionAnimation[];
  currency: string;
  monthly_amount: number;
  state: FormattedText;

  constructor(params: { animations: PremiumFeaturePromotionAnimation[], currency: string, monthly_amount: number, state: FormattedText }) {
    super();
    this.animations = params.animations;
    this.currency = params.currency;
    this.monthly_amount = params.monthly_amount;
    this.state = params.state;
  }
}

/**
 * Describes a purpose of an in-store payment
 */
export class StorePaymentPurpose extends Class {
}

export class StorePaymentPurposePremiumSubscription extends StorePaymentPurpose {
  "@type" = "storePaymentPurposePremiumSubscription"
  is_restore: boolean;

  constructor(params: { is_restore: boolean }) {
    super();
    this.is_restore = params.is_restore;
  }
}

export class StorePaymentPurposeGiftedPremium extends StorePaymentPurpose {
  "@type" = "storePaymentPurposeGiftedPremium"
  amount: number;
  currency: string;
  user_id: number;

  constructor(params: { amount: number, currency: string, user_id: number }) {
    super();
    this.amount = params.amount;
    this.currency = params.currency;
    this.user_id = params.user_id;
  }
}

/**
 * Represents a data needed to subscribe for push notifications through registerDevice method. To use specific push notification service, the correct application platform must be specified and a valid server authentication data must be uploaded at https://my.telegram.org
 */
export class DeviceToken extends Class {
}

export class DeviceTokenFirebaseCloudMessaging extends DeviceToken {
  "@type" = "deviceTokenFirebaseCloudMessaging"
  encrypt: boolean;
  token: string;

  constructor(params: { encrypt: boolean, token: string }) {
    super();
    this.encrypt = params.encrypt;
    this.token = params.token;
  }
}

export class DeviceTokenApplePush extends DeviceToken {
  "@type" = "deviceTokenApplePush"
  device_token: string;
  is_app_sandbox: boolean;

  constructor(params: { device_token: string, is_app_sandbox: boolean }) {
    super();
    this.device_token = params.device_token;
    this.is_app_sandbox = params.is_app_sandbox;
  }
}

export class DeviceTokenApplePushVoIP extends DeviceToken {
  "@type" = "deviceTokenApplePushVoIP"
  device_token: string;
  encrypt: boolean;
  is_app_sandbox: boolean;

  constructor(params: { device_token: string, encrypt: boolean, is_app_sandbox: boolean }) {
    super();
    this.device_token = params.device_token;
    this.encrypt = params.encrypt;
    this.is_app_sandbox = params.is_app_sandbox;
  }
}

export class DeviceTokenWindowsPush extends DeviceToken {
  "@type" = "deviceTokenWindowsPush"
  access_token: string;

  constructor(params: { access_token: string }) {
    super();
    this.access_token = params.access_token;
  }
}

export class DeviceTokenMicrosoftPush extends DeviceToken {
  "@type" = "deviceTokenMicrosoftPush"
  channel_uri: string;

  constructor(params: { channel_uri: string }) {
    super();
    this.channel_uri = params.channel_uri;
  }
}

export class DeviceTokenMicrosoftPushVoIP extends DeviceToken {
  "@type" = "deviceTokenMicrosoftPushVoIP"
  channel_uri: string;

  constructor(params: { channel_uri: string }) {
    super();
    this.channel_uri = params.channel_uri;
  }
}

export class DeviceTokenWebPush extends DeviceToken {
  "@type" = "deviceTokenWebPush"
  auth_base64url: string;
  endpoint: string;
  p256dh_base64url: string;

  constructor(params: { auth_base64url: string, endpoint: string, p256dh_base64url: string }) {
    super();
    this.auth_base64url = params.auth_base64url;
    this.endpoint = params.endpoint;
    this.p256dh_base64url = params.p256dh_base64url;
  }
}

export class DeviceTokenSimplePush extends DeviceToken {
  "@type" = "deviceTokenSimplePush"
  endpoint: string;

  constructor(params: { endpoint: string }) {
    super();
    this.endpoint = params.endpoint;
  }
}

export class DeviceTokenUbuntuPush extends DeviceToken {
  "@type" = "deviceTokenUbuntuPush"
  token: string;

  constructor(params: { token: string }) {
    super();
    this.token = params.token;
  }
}

export class DeviceTokenBlackBerryPush extends DeviceToken {
  "@type" = "deviceTokenBlackBerryPush"
  token: string;

  constructor(params: { token: string }) {
    super();
    this.token = params.token;
  }
}

export class DeviceTokenTizenPush extends DeviceToken {
  "@type" = "deviceTokenTizenPush"
  reg_id: string;

  constructor(params: { reg_id: string }) {
    super();
    this.reg_id = params.reg_id;
  }
}

export class PushReceiverId extends Class {
  "@type" = "pushReceiverId"
  id: number;

  constructor(params: { id: number }) {
    super();
    this.id = params.id;
  }
}

/**
 * Describes a fill of a background
 */
export class BackgroundFill extends Class {
}

export class BackgroundFillSolid extends BackgroundFill {
  "@type" = "backgroundFillSolid"
  color: number;

  constructor(params: { color: number }) {
    super();
    this.color = params.color;
  }
}

export class BackgroundFillGradient extends BackgroundFill {
  "@type" = "backgroundFillGradient"
  bottom_color: number;
  rotation_angle: number;
  top_color: number;

  constructor(params: { bottom_color: number, rotation_angle: number, top_color: number }) {
    super();
    this.bottom_color = params.bottom_color;
    this.rotation_angle = params.rotation_angle;
    this.top_color = params.top_color;
  }
}

export class BackgroundFillFreeformGradient extends BackgroundFill {
  "@type" = "backgroundFillFreeformGradient"
  colors: number[];

  constructor(params: { colors: number[] }) {
    super();
    this.colors = params.colors;
  }
}

/**
 * Describes the type of a background
 */
export class BackgroundType extends Class {
}

export class BackgroundTypeWallpaper extends BackgroundType {
  "@type" = "backgroundTypeWallpaper"
  is_blurred: boolean;
  is_moving: boolean;

  constructor(params: { is_blurred: boolean, is_moving: boolean }) {
    super();
    this.is_blurred = params.is_blurred;
    this.is_moving = params.is_moving;
  }
}

export class BackgroundTypePattern extends BackgroundType {
  "@type" = "backgroundTypePattern"
  fill: BackgroundFill;
  intensity: number;
  is_inverted: boolean;
  is_moving: boolean;

  constructor(params: { fill: BackgroundFill, intensity: number, is_inverted: boolean, is_moving: boolean }) {
    super();
    this.fill = params.fill;
    this.intensity = params.intensity;
    this.is_inverted = params.is_inverted;
    this.is_moving = params.is_moving;
  }
}

export class BackgroundTypeFill extends BackgroundType {
  "@type" = "backgroundTypeFill"
  fill: BackgroundFill;

  constructor(params: { fill: BackgroundFill }) {
    super();
    this.fill = params.fill;
  }
}

export class Background extends Class {
  "@type" = "background"
  document?: Document;
  id: number;
  is_dark: boolean;
  is_default: boolean;
  name: string;
  type: BackgroundType;

  constructor(params: { document?: Document, id: number, is_dark: boolean, is_default: boolean, name: string, type: BackgroundType }) {
    super();
    this.document = params.document;
    this.id = params.id;
    this.is_dark = params.is_dark;
    this.is_default = params.is_default;
    this.name = params.name;
    this.type = params.type;
  }
}

export class Backgrounds extends Class {
  "@type" = "backgrounds"
  backgrounds: Background[];

  constructor(params: { backgrounds: Background[] }) {
    super();
    this.backgrounds = params.backgrounds;
  }
}

/**
 * Contains information about background to set
 */
export class InputBackground extends Class {
}

export class InputBackgroundLocal extends InputBackground {
  "@type" = "inputBackgroundLocal"
  background: InputFile;

  constructor(params: { background: InputFile }) {
    super();
    this.background = params.background;
  }
}

export class InputBackgroundRemote extends InputBackground {
  "@type" = "inputBackgroundRemote"
  background_id: number;

  constructor(params: { background_id: number }) {
    super();
    this.background_id = params.background_id;
  }
}

export class ThemeSettings extends Class {
  "@type" = "themeSettings"
  accent_color: number;
  animate_outgoing_message_fill: boolean;
  background?: Background;
  outgoing_message_accent_color: number;
  outgoing_message_fill: BackgroundFill;

  constructor(params: { accent_color: number, animate_outgoing_message_fill: boolean, background?: Background, outgoing_message_accent_color: number, outgoing_message_fill: BackgroundFill }) {
    super();
    this.accent_color = params.accent_color;
    this.animate_outgoing_message_fill = params.animate_outgoing_message_fill;
    this.background = params.background;
    this.outgoing_message_accent_color = params.outgoing_message_accent_color;
    this.outgoing_message_fill = params.outgoing_message_fill;
  }
}

export class ChatTheme extends Class {
  "@type" = "chatTheme"
  dark_settings: ThemeSettings;
  light_settings: ThemeSettings;
  name: string;

  constructor(params: { dark_settings: ThemeSettings, light_settings: ThemeSettings, name: string }) {
    super();
    this.dark_settings = params.dark_settings;
    this.light_settings = params.light_settings;
    this.name = params.name;
  }
}

export class Hashtags extends Class {
  "@type" = "hashtags"
  hashtags: string[];

  constructor(params: { hashtags: string[] }) {
    super();
    this.hashtags = params.hashtags;
  }
}

/**
 * Represents result of checking whether the current session can be used to transfer a chat ownership to another user
 */
export class CanTransferOwnershipResult extends Class {
}

export class CanTransferOwnershipResultOk extends CanTransferOwnershipResult {
  "@type" = "canTransferOwnershipResultOk"

  constructor(params: {}) {
    super();
  }
}

export class CanTransferOwnershipResultPasswordNeeded extends CanTransferOwnershipResult {
  "@type" = "canTransferOwnershipResultPasswordNeeded"

  constructor(params: {}) {
    super();
  }
}

export class CanTransferOwnershipResultPasswordTooFresh extends CanTransferOwnershipResult {
  "@type" = "canTransferOwnershipResultPasswordTooFresh"
  retry_after: number;

  constructor(params: { retry_after: number }) {
    super();
    this.retry_after = params.retry_after;
  }
}

export class CanTransferOwnershipResultSessionTooFresh extends CanTransferOwnershipResult {
  "@type" = "canTransferOwnershipResultSessionTooFresh"
  retry_after: number;

  constructor(params: { retry_after: number }) {
    super();
    this.retry_after = params.retry_after;
  }
}

/**
 * Represents result of checking whether a username can be set for a chat
 */
export class CheckChatUsernameResult extends Class {
}

export class CheckChatUsernameResultOk extends CheckChatUsernameResult {
  "@type" = "checkChatUsernameResultOk"

  constructor(params: {}) {
    super();
  }
}

export class CheckChatUsernameResultUsernameInvalid extends CheckChatUsernameResult {
  "@type" = "checkChatUsernameResultUsernameInvalid"

  constructor(params: {}) {
    super();
  }
}

export class CheckChatUsernameResultUsernameOccupied extends CheckChatUsernameResult {
  "@type" = "checkChatUsernameResultUsernameOccupied"

  constructor(params: {}) {
    super();
  }
}

export class CheckChatUsernameResultPublicChatsTooMuch extends CheckChatUsernameResult {
  "@type" = "checkChatUsernameResultPublicChatsTooMuch"

  constructor(params: {}) {
    super();
  }
}

export class CheckChatUsernameResultPublicGroupsUnavailable extends CheckChatUsernameResult {
  "@type" = "checkChatUsernameResultPublicGroupsUnavailable"

  constructor(params: {}) {
    super();
  }
}

/**
 * Represents result of checking whether a name can be used for a new sticker set
 */
export class CheckStickerSetNameResult extends Class {
}

export class CheckStickerSetNameResultOk extends CheckStickerSetNameResult {
  "@type" = "checkStickerSetNameResultOk"

  constructor(params: {}) {
    super();
  }
}

export class CheckStickerSetNameResultNameInvalid extends CheckStickerSetNameResult {
  "@type" = "checkStickerSetNameResultNameInvalid"

  constructor(params: {}) {
    super();
  }
}

export class CheckStickerSetNameResultNameOccupied extends CheckStickerSetNameResult {
  "@type" = "checkStickerSetNameResultNameOccupied"

  constructor(params: {}) {
    super();
  }
}

/**
 * Represents result of 2-step verification password reset
 */
export class ResetPasswordResult extends Class {
}

export class ResetPasswordResultOk extends ResetPasswordResult {
  "@type" = "resetPasswordResultOk"

  constructor(params: {}) {
    super();
  }
}

export class ResetPasswordResultPending extends ResetPasswordResult {
  "@type" = "resetPasswordResultPending"
  pending_reset_date: number;

  constructor(params: { pending_reset_date: number }) {
    super();
    this.pending_reset_date = params.pending_reset_date;
  }
}

export class ResetPasswordResultDeclined extends ResetPasswordResult {
  "@type" = "resetPasswordResultDeclined"
  retry_date: number;

  constructor(params: { retry_date: number }) {
    super();
    this.retry_date = params.retry_date;
  }
}

/**
 * Contains information about a file with messages exported from another app
 */
export class MessageFileType extends Class {
}

export class MessageFileTypePrivate extends MessageFileType {
  "@type" = "messageFileTypePrivate"
  name: string;

  constructor(params: { name: string }) {
    super();
    this.name = params.name;
  }
}

export class MessageFileTypeGroup extends MessageFileType {
  "@type" = "messageFileTypeGroup"
  title: string;

  constructor(params: { title: string }) {
    super();
    this.title = params.title;
  }
}

export class MessageFileTypeUnknown extends MessageFileType {
  "@type" = "messageFileTypeUnknown"

  constructor(params: {}) {
    super();
  }
}

/**
 * Contains content of a push message notification
 */
export class PushMessageContent extends Class {
}

export class PushMessageContentHidden extends PushMessageContent {
  "@type" = "pushMessageContentHidden"
  is_pinned: boolean;

  constructor(params: { is_pinned: boolean }) {
    super();
    this.is_pinned = params.is_pinned;
  }
}

export class PushMessageContentAnimation extends PushMessageContent {
  "@type" = "pushMessageContentAnimation"
  animation: Animation;
  caption: string;
  is_pinned: boolean;

  constructor(params: { animation: Animation, caption: string, is_pinned: boolean }) {
    super();
    this.animation = params.animation;
    this.caption = params.caption;
    this.is_pinned = params.is_pinned;
  }
}

export class PushMessageContentAudio extends PushMessageContent {
  "@type" = "pushMessageContentAudio"
  audio: Audio;
  is_pinned: boolean;

  constructor(params: { audio: Audio, is_pinned: boolean }) {
    super();
    this.audio = params.audio;
    this.is_pinned = params.is_pinned;
  }
}

export class PushMessageContentContact extends PushMessageContent {
  "@type" = "pushMessageContentContact"
  is_pinned: boolean;
  name: string;

  constructor(params: { is_pinned: boolean, name: string }) {
    super();
    this.is_pinned = params.is_pinned;
    this.name = params.name;
  }
}

export class PushMessageContentContactRegistered extends PushMessageContent {
  "@type" = "pushMessageContentContactRegistered"

  constructor(params: {}) {
    super();
  }
}

export class PushMessageContentDocument extends PushMessageContent {
  "@type" = "pushMessageContentDocument"
  document: Document;
  is_pinned: boolean;

  constructor(params: { document: Document, is_pinned: boolean }) {
    super();
    this.document = params.document;
    this.is_pinned = params.is_pinned;
  }
}

export class PushMessageContentGame extends PushMessageContent {
  "@type" = "pushMessageContentGame"
  is_pinned: boolean;
  title: string;

  constructor(params: { is_pinned: boolean, title: string }) {
    super();
    this.is_pinned = params.is_pinned;
    this.title = params.title;
  }
}

export class PushMessageContentGameScore extends PushMessageContent {
  "@type" = "pushMessageContentGameScore"
  is_pinned: boolean;
  score: number;
  title: string;

  constructor(params: { is_pinned: boolean, score: number, title: string }) {
    super();
    this.is_pinned = params.is_pinned;
    this.score = params.score;
    this.title = params.title;
  }
}

export class PushMessageContentInvoice extends PushMessageContent {
  "@type" = "pushMessageContentInvoice"
  is_pinned: boolean;
  price: string;

  constructor(params: { is_pinned: boolean, price: string }) {
    super();
    this.is_pinned = params.is_pinned;
    this.price = params.price;
  }
}

export class PushMessageContentLocation extends PushMessageContent {
  "@type" = "pushMessageContentLocation"
  is_live: boolean;
  is_pinned: boolean;

  constructor(params: { is_live: boolean, is_pinned: boolean }) {
    super();
    this.is_live = params.is_live;
    this.is_pinned = params.is_pinned;
  }
}

export class PushMessageContentPhoto extends PushMessageContent {
  "@type" = "pushMessageContentPhoto"
  caption: string;
  is_pinned: boolean;
  is_secret: boolean;
  photo: Photo;

  constructor(params: { caption: string, is_pinned: boolean, is_secret: boolean, photo: Photo }) {
    super();
    this.caption = params.caption;
    this.is_pinned = params.is_pinned;
    this.is_secret = params.is_secret;
    this.photo = params.photo;
  }
}

export class PushMessageContentPoll extends PushMessageContent {
  "@type" = "pushMessageContentPoll"
  is_pinned: boolean;
  is_regular: boolean;
  question: string;

  constructor(params: { is_pinned: boolean, is_regular: boolean, question: string }) {
    super();
    this.is_pinned = params.is_pinned;
    this.is_regular = params.is_regular;
    this.question = params.question;
  }
}

export class PushMessageContentScreenshotTaken extends PushMessageContent {
  "@type" = "pushMessageContentScreenshotTaken"

  constructor(params: {}) {
    super();
  }
}

export class PushMessageContentSticker extends PushMessageContent {
  "@type" = "pushMessageContentSticker"
  emoji: string;
  is_pinned: boolean;
  sticker: Sticker;

  constructor(params: { emoji: string, is_pinned: boolean, sticker: Sticker }) {
    super();
    this.emoji = params.emoji;
    this.is_pinned = params.is_pinned;
    this.sticker = params.sticker;
  }
}

export class PushMessageContentText extends PushMessageContent {
  "@type" = "pushMessageContentText"
  is_pinned: boolean;
  text: string;

  constructor(params: { is_pinned: boolean, text: string }) {
    super();
    this.is_pinned = params.is_pinned;
    this.text = params.text;
  }
}

export class PushMessageContentVideo extends PushMessageContent {
  "@type" = "pushMessageContentVideo"
  caption: string;
  is_pinned: boolean;
  is_secret: boolean;
  video: Video;

  constructor(params: { caption: string, is_pinned: boolean, is_secret: boolean, video: Video }) {
    super();
    this.caption = params.caption;
    this.is_pinned = params.is_pinned;
    this.is_secret = params.is_secret;
    this.video = params.video;
  }
}

export class PushMessageContentVideoNote extends PushMessageContent {
  "@type" = "pushMessageContentVideoNote"
  is_pinned: boolean;
  video_note: VideoNote;

  constructor(params: { is_pinned: boolean, video_note: VideoNote }) {
    super();
    this.is_pinned = params.is_pinned;
    this.video_note = params.video_note;
  }
}

export class PushMessageContentVoiceNote extends PushMessageContent {
  "@type" = "pushMessageContentVoiceNote"
  is_pinned: boolean;
  voice_note: VoiceNote;

  constructor(params: { is_pinned: boolean, voice_note: VoiceNote }) {
    super();
    this.is_pinned = params.is_pinned;
    this.voice_note = params.voice_note;
  }
}

export class PushMessageContentBasicGroupChatCreate extends PushMessageContent {
  "@type" = "pushMessageContentBasicGroupChatCreate"

  constructor(params: {}) {
    super();
  }
}

export class PushMessageContentChatAddMembers extends PushMessageContent {
  "@type" = "pushMessageContentChatAddMembers"
  is_current_user: boolean;
  is_returned: boolean;
  member_name: string;

  constructor(params: { is_current_user: boolean, is_returned: boolean, member_name: string }) {
    super();
    this.is_current_user = params.is_current_user;
    this.is_returned = params.is_returned;
    this.member_name = params.member_name;
  }
}

export class PushMessageContentChatChangePhoto extends PushMessageContent {
  "@type" = "pushMessageContentChatChangePhoto"

  constructor(params: {}) {
    super();
  }
}

export class PushMessageContentChatChangeTitle extends PushMessageContent {
  "@type" = "pushMessageContentChatChangeTitle"
  title: string;

  constructor(params: { title: string }) {
    super();
    this.title = params.title;
  }
}

export class PushMessageContentChatSetTheme extends PushMessageContent {
  "@type" = "pushMessageContentChatSetTheme"
  theme_name: string;

  constructor(params: { theme_name: string }) {
    super();
    this.theme_name = params.theme_name;
  }
}

export class PushMessageContentChatDeleteMember extends PushMessageContent {
  "@type" = "pushMessageContentChatDeleteMember"
  is_current_user: boolean;
  is_left: boolean;
  member_name: string;

  constructor(params: { is_current_user: boolean, is_left: boolean, member_name: string }) {
    super();
    this.is_current_user = params.is_current_user;
    this.is_left = params.is_left;
    this.member_name = params.member_name;
  }
}

export class PushMessageContentChatJoinByLink extends PushMessageContent {
  "@type" = "pushMessageContentChatJoinByLink"

  constructor(params: {}) {
    super();
  }
}

export class PushMessageContentChatJoinByRequest extends PushMessageContent {
  "@type" = "pushMessageContentChatJoinByRequest"

  constructor(params: {}) {
    super();
  }
}

export class PushMessageContentRecurringPayment extends PushMessageContent {
  "@type" = "pushMessageContentRecurringPayment"
  amount: string;

  constructor(params: { amount: string }) {
    super();
    this.amount = params.amount;
  }
}

export class PushMessageContentMessageForwards extends PushMessageContent {
  "@type" = "pushMessageContentMessageForwards"
  total_count: number;

  constructor(params: { total_count: number }) {
    super();
    this.total_count = params.total_count;
  }
}

export class PushMessageContentMediaAlbum extends PushMessageContent {
  "@type" = "pushMessageContentMediaAlbum"
  has_audios: boolean;
  has_documents: boolean;
  has_photos: boolean;
  has_videos: boolean;
  total_count: number;

  constructor(params: { has_audios: boolean, has_documents: boolean, has_photos: boolean, has_videos: boolean, total_count: number }) {
    super();
    this.has_audios = params.has_audios;
    this.has_documents = params.has_documents;
    this.has_photos = params.has_photos;
    this.has_videos = params.has_videos;
    this.total_count = params.total_count;
  }
}

/**
 * Contains detailed information about a notification
 */
export class NotificationType extends Class {
}

export class NotificationTypeNewMessage extends NotificationType {
  "@type" = "notificationTypeNewMessage"
  message: Message;
  show_preview: boolean;

  constructor(params: { message: Message, show_preview: boolean }) {
    super();
    this.message = params.message;
    this.show_preview = params.show_preview;
  }
}

export class NotificationTypeNewSecretChat extends NotificationType {
  "@type" = "notificationTypeNewSecretChat"

  constructor(params: {}) {
    super();
  }
}

export class NotificationTypeNewCall extends NotificationType {
  "@type" = "notificationTypeNewCall"
  call_id: number;

  constructor(params: { call_id: number }) {
    super();
    this.call_id = params.call_id;
  }
}

export class NotificationTypeNewPushMessage extends NotificationType {
  "@type" = "notificationTypeNewPushMessage"
  content: PushMessageContent;
  is_outgoing: boolean;
  message_id: number;
  sender_id: MessageSender;
  sender_name: string;

  constructor(params: { content: PushMessageContent, is_outgoing: boolean, message_id: number, sender_id: MessageSender, sender_name: string }) {
    super();
    this.content = params.content;
    this.is_outgoing = params.is_outgoing;
    this.message_id = params.message_id;
    this.sender_id = params.sender_id;
    this.sender_name = params.sender_name;
  }
}

/**
 * Describes the type of notifications in a notification group
 */
export class NotificationGroupType extends Class {
}

export class NotificationGroupTypeMessages extends NotificationGroupType {
  "@type" = "notificationGroupTypeMessages"

  constructor(params: {}) {
    super();
  }
}

export class NotificationGroupTypeMentions extends NotificationGroupType {
  "@type" = "notificationGroupTypeMentions"

  constructor(params: {}) {
    super();
  }
}

export class NotificationGroupTypeSecretChat extends NotificationGroupType {
  "@type" = "notificationGroupTypeSecretChat"

  constructor(params: {}) {
    super();
  }
}

export class NotificationGroupTypeCalls extends NotificationGroupType {
  "@type" = "notificationGroupTypeCalls"

  constructor(params: {}) {
    super();
  }
}

export class NotificationSound extends Class {
  "@type" = "notificationSound"
  data: string;
  date: number;
  duration: number;
  id: number;
  sound: File;
  title: string;

  constructor(params: { data: string, date: number, duration: number, id: number, sound: File, title: string }) {
    super();
    this.data = params.data;
    this.date = params.date;
    this.duration = params.duration;
    this.id = params.id;
    this.sound = params.sound;
    this.title = params.title;
  }
}

export class NotificationSounds extends Class {
  "@type" = "notificationSounds"
  notification_sounds: NotificationSound[];

  constructor(params: { notification_sounds: NotificationSound[] }) {
    super();
    this.notification_sounds = params.notification_sounds;
  }
}

export class Notification extends Class {
  "@type" = "notification"
  date: number;
  id: number;
  is_silent: boolean;
  type: NotificationType;

  constructor(params: { date: number, id: number, is_silent: boolean, type: NotificationType }) {
    super();
    this.date = params.date;
    this.id = params.id;
    this.is_silent = params.is_silent;
    this.type = params.type;
  }
}

export class NotificationGroup extends Class {
  "@type" = "notificationGroup"
  chat_id: number;
  id: number;
  notifications: Notification[];
  total_count: number;
  type: NotificationGroupType;

  constructor(params: { chat_id: number, id: number, notifications: Notification[], total_count: number, type: NotificationGroupType }) {
    super();
    this.chat_id = params.chat_id;
    this.id = params.id;
    this.notifications = params.notifications;
    this.total_count = params.total_count;
    this.type = params.type;
  }
}

/**
 * Represents the value of an option
 */
export class OptionValue extends Class {
}

export class OptionValueBoolean extends OptionValue {
  "@type" = "optionValueBoolean"
  value: boolean;

  constructor(params: { value: boolean }) {
    super();
    this.value = params.value;
  }
}

export class OptionValueEmpty extends OptionValue {
  "@type" = "optionValueEmpty"

  constructor(params: {}) {
    super();
  }
}

export class OptionValueInteger extends OptionValue {
  "@type" = "optionValueInteger"
  value: number;

  constructor(params: { value: number }) {
    super();
    this.value = params.value;
  }
}

export class OptionValueString extends OptionValue {
  "@type" = "optionValueString"
  value: string;

  constructor(params: { value: string }) {
    super();
    this.value = params.value;
  }
}

export class JsonObjectMember extends Class {
  "@type" = "jsonObjectMember"
  key: string;
  value: JsonValue;

  constructor(params: { key: string, value: JsonValue }) {
    super();
    this.key = params.key;
    this.value = params.value;
  }
}

/**
 * Represents a JSON value
 */
export class JsonValue extends Class {
}

export class JsonValueNull extends JsonValue {
  "@type" = "jsonValueNull"

  constructor(params: {}) {
    super();
  }
}

export class JsonValueBoolean extends JsonValue {
  "@type" = "jsonValueBoolean"
  value: boolean;

  constructor(params: { value: boolean }) {
    super();
    this.value = params.value;
  }
}

export class JsonValueNumber extends JsonValue {
  "@type" = "jsonValueNumber"
  value: number;

  constructor(params: { value: number }) {
    super();
    this.value = params.value;
  }
}

export class JsonValueString extends JsonValue {
  "@type" = "jsonValueString"
  value: string;

  constructor(params: { value: string }) {
    super();
    this.value = params.value;
  }
}

export class JsonValueArray extends JsonValue {
  "@type" = "jsonValueArray"
  values: JsonValue[];

  constructor(params: { values: JsonValue[] }) {
    super();
    this.values = params.values;
  }
}

export class JsonValueObject extends JsonValue {
  "@type" = "jsonValueObject"
  members: JsonObjectMember[];

  constructor(params: { members: JsonObjectMember[] }) {
    super();
    this.members = params.members;
  }
}

/**
 * Represents a single rule for managing privacy settings
 */
export class UserPrivacySettingRule extends Class {
}

export class UserPrivacySettingRuleAllowAll extends UserPrivacySettingRule {
  "@type" = "userPrivacySettingRuleAllowAll"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingRuleAllowContacts extends UserPrivacySettingRule {
  "@type" = "userPrivacySettingRuleAllowContacts"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingRuleAllowUsers extends UserPrivacySettingRule {
  "@type" = "userPrivacySettingRuleAllowUsers"
  user_ids: number[];

  constructor(params: { user_ids: number[] }) {
    super();
    this.user_ids = params.user_ids;
  }
}

export class UserPrivacySettingRuleAllowChatMembers extends UserPrivacySettingRule {
  "@type" = "userPrivacySettingRuleAllowChatMembers"
  chat_ids: number[];

  constructor(params: { chat_ids: number[] }) {
    super();
    this.chat_ids = params.chat_ids;
  }
}

export class UserPrivacySettingRuleRestrictAll extends UserPrivacySettingRule {
  "@type" = "userPrivacySettingRuleRestrictAll"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingRuleRestrictContacts extends UserPrivacySettingRule {
  "@type" = "userPrivacySettingRuleRestrictContacts"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingRuleRestrictUsers extends UserPrivacySettingRule {
  "@type" = "userPrivacySettingRuleRestrictUsers"
  user_ids: number[];

  constructor(params: { user_ids: number[] }) {
    super();
    this.user_ids = params.user_ids;
  }
}

export class UserPrivacySettingRuleRestrictChatMembers extends UserPrivacySettingRule {
  "@type" = "userPrivacySettingRuleRestrictChatMembers"
  chat_ids: number[];

  constructor(params: { chat_ids: number[] }) {
    super();
    this.chat_ids = params.chat_ids;
  }
}

export class UserPrivacySettingRules extends Class {
  "@type" = "userPrivacySettingRules"
  rules: UserPrivacySettingRule[];

  constructor(params: { rules: UserPrivacySettingRule[] }) {
    super();
    this.rules = params.rules;
  }
}

/**
 * Describes available user privacy settings
 */
export class UserPrivacySetting extends Class {
}

export class UserPrivacySettingShowStatus extends UserPrivacySetting {
  "@type" = "userPrivacySettingShowStatus"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingShowProfilePhoto extends UserPrivacySetting {
  "@type" = "userPrivacySettingShowProfilePhoto"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingShowLinkInForwardedMessages extends UserPrivacySetting {
  "@type" = "userPrivacySettingShowLinkInForwardedMessages"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingShowPhoneNumber extends UserPrivacySetting {
  "@type" = "userPrivacySettingShowPhoneNumber"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingAllowChatInvites extends UserPrivacySetting {
  "@type" = "userPrivacySettingAllowChatInvites"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingAllowCalls extends UserPrivacySetting {
  "@type" = "userPrivacySettingAllowCalls"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingAllowPeerToPeerCalls extends UserPrivacySetting {
  "@type" = "userPrivacySettingAllowPeerToPeerCalls"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingAllowFindingByPhoneNumber extends UserPrivacySetting {
  "@type" = "userPrivacySettingAllowFindingByPhoneNumber"

  constructor(params: {}) {
    super();
  }
}

export class UserPrivacySettingAllowPrivateVoiceAndVideoNoteMessages extends UserPrivacySetting {
  "@type" = "userPrivacySettingAllowPrivateVoiceAndVideoNoteMessages"

  constructor(params: {}) {
    super();
  }
}

export class AccountTtl extends Class {
  "@type" = "accountTtl"
  days: number;

  constructor(params: { days: number }) {
    super();
    this.days = params.days;
  }
}

/**
 * Represents the type of a session
 */
export class SessionType extends Class {
}

export class SessionTypeAndroid extends SessionType {
  "@type" = "sessionTypeAndroid"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeApple extends SessionType {
  "@type" = "sessionTypeApple"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeBrave extends SessionType {
  "@type" = "sessionTypeBrave"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeChrome extends SessionType {
  "@type" = "sessionTypeChrome"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeEdge extends SessionType {
  "@type" = "sessionTypeEdge"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeFirefox extends SessionType {
  "@type" = "sessionTypeFirefox"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeIpad extends SessionType {
  "@type" = "sessionTypeIpad"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeIphone extends SessionType {
  "@type" = "sessionTypeIphone"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeLinux extends SessionType {
  "@type" = "sessionTypeLinux"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeMac extends SessionType {
  "@type" = "sessionTypeMac"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeOpera extends SessionType {
  "@type" = "sessionTypeOpera"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeSafari extends SessionType {
  "@type" = "sessionTypeSafari"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeUbuntu extends SessionType {
  "@type" = "sessionTypeUbuntu"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeUnknown extends SessionType {
  "@type" = "sessionTypeUnknown"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeVivaldi extends SessionType {
  "@type" = "sessionTypeVivaldi"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeWindows extends SessionType {
  "@type" = "sessionTypeWindows"

  constructor(params: {}) {
    super();
  }
}

export class SessionTypeXbox extends SessionType {
  "@type" = "sessionTypeXbox"

  constructor(params: {}) {
    super();
  }
}

export class Session extends Class {
  "@type" = "session"
  api_id: number;
  application_name: string;
  application_version: string;
  can_accept_calls: boolean;
  can_accept_secret_chats: boolean;
  country: string;
  device_model: string;
  id: number;
  ip: string;
  is_current: boolean;
  is_official_application: boolean;
  is_password_pending: boolean;
  last_active_date: number;
  log_in_date: number;
  platform: string;
  region: string;
  system_version: string;
  type: SessionType;

  constructor(params: { api_id: number, application_name: string, application_version: string, can_accept_calls: boolean, can_accept_secret_chats: boolean, country: string, device_model: string, id: number, ip: string, is_current: boolean, is_official_application: boolean, is_password_pending: boolean, last_active_date: number, log_in_date: number, platform: string, region: string, system_version: string, type: SessionType }) {
    super();
    this.api_id = params.api_id;
    this.application_name = params.application_name;
    this.application_version = params.application_version;
    this.can_accept_calls = params.can_accept_calls;
    this.can_accept_secret_chats = params.can_accept_secret_chats;
    this.country = params.country;
    this.device_model = params.device_model;
    this.id = params.id;
    this.ip = params.ip;
    this.is_current = params.is_current;
    this.is_official_application = params.is_official_application;
    this.is_password_pending = params.is_password_pending;
    this.last_active_date = params.last_active_date;
    this.log_in_date = params.log_in_date;
    this.platform = params.platform;
    this.region = params.region;
    this.system_version = params.system_version;
    this.type = params.type;
  }
}

export class Sessions extends Class {
  "@type" = "sessions"
  inactive_session_ttl_days: number;
  sessions: Session[];

  constructor(params: { inactive_session_ttl_days: number, sessions: Session[] }) {
    super();
    this.inactive_session_ttl_days = params.inactive_session_ttl_days;
    this.sessions = params.sessions;
  }
}

export class ConnectedWebsite extends Class {
  "@type" = "connectedWebsite"
  bot_user_id: number;
  browser: string;
  domain_name: string;
  id: number;
  ip: string;
  last_active_date: number;
  location: string;
  log_in_date: number;
  platform: string;

  constructor(params: { bot_user_id: number, browser: string, domain_name: string, id: number, ip: string, last_active_date: number, location: string, log_in_date: number, platform: string }) {
    super();
    this.bot_user_id = params.bot_user_id;
    this.browser = params.browser;
    this.domain_name = params.domain_name;
    this.id = params.id;
    this.ip = params.ip;
    this.last_active_date = params.last_active_date;
    this.location = params.location;
    this.log_in_date = params.log_in_date;
    this.platform = params.platform;
  }
}

export class ConnectedWebsites extends Class {
  "@type" = "connectedWebsites"
  websites: ConnectedWebsite[];

  constructor(params: { websites: ConnectedWebsite[] }) {
    super();
    this.websites = params.websites;
  }
}

/**
 * Describes the reason why a chat is reported
 */
export class ChatReportReason extends Class {
}

export class ChatReportReasonSpam extends ChatReportReason {
  "@type" = "chatReportReasonSpam"

  constructor(params: {}) {
    super();
  }
}

export class ChatReportReasonViolence extends ChatReportReason {
  "@type" = "chatReportReasonViolence"

  constructor(params: {}) {
    super();
  }
}

export class ChatReportReasonPornography extends ChatReportReason {
  "@type" = "chatReportReasonPornography"

  constructor(params: {}) {
    super();
  }
}

export class ChatReportReasonChildAbuse extends ChatReportReason {
  "@type" = "chatReportReasonChildAbuse"

  constructor(params: {}) {
    super();
  }
}

export class ChatReportReasonCopyright extends ChatReportReason {
  "@type" = "chatReportReasonCopyright"

  constructor(params: {}) {
    super();
  }
}

export class ChatReportReasonUnrelatedLocation extends ChatReportReason {
  "@type" = "chatReportReasonUnrelatedLocation"

  constructor(params: {}) {
    super();
  }
}

export class ChatReportReasonFake extends ChatReportReason {
  "@type" = "chatReportReasonFake"

  constructor(params: {}) {
    super();
  }
}

export class ChatReportReasonIllegalDrugs extends ChatReportReason {
  "@type" = "chatReportReasonIllegalDrugs"

  constructor(params: {}) {
    super();
  }
}

export class ChatReportReasonPersonalDetails extends ChatReportReason {
  "@type" = "chatReportReasonPersonalDetails"

  constructor(params: {}) {
    super();
  }
}

export class ChatReportReasonCustom extends ChatReportReason {
  "@type" = "chatReportReasonCustom"

  constructor(params: {}) {
    super();
  }
}

/**
 * Describes the target chat to be opened
 */
export class TargetChat extends Class {
}

export class TargetChatCurrent extends TargetChat {
  "@type" = "targetChatCurrent"

  constructor(params: {}) {
    super();
  }
}

export class TargetChatChosen extends TargetChat {
  "@type" = "targetChatChosen"
  allow_bot_chats: boolean;
  allow_channel_chats: boolean;
  allow_group_chats: boolean;
  allow_user_chats: boolean;

  constructor(params: { allow_bot_chats: boolean, allow_channel_chats: boolean, allow_group_chats: boolean, allow_user_chats: boolean }) {
    super();
    this.allow_bot_chats = params.allow_bot_chats;
    this.allow_channel_chats = params.allow_channel_chats;
    this.allow_group_chats = params.allow_group_chats;
    this.allow_user_chats = params.allow_user_chats;
  }
}

export class TargetChatInternalLink extends TargetChat {
  "@type" = "targetChatInternalLink"
  link: InternalLinkType;

  constructor(params: { link: InternalLinkType }) {
    super();
    this.link = params.link;
  }
}

/**
 * Describes an internal https://t.me or tg: link, which must be processed by the application in a special way
 */
export class InternalLinkType extends Class {
}

export class InternalLinkTypeActiveSessions extends InternalLinkType {
  "@type" = "internalLinkTypeActiveSessions"

  constructor(params: {}) {
    super();
  }
}

export class InternalLinkTypeAttachmentMenuBot extends InternalLinkType {
  "@type" = "internalLinkTypeAttachmentMenuBot"
  bot_username: string;
  target_chat: TargetChat;
  url: string;

  constructor(params: { bot_username: string, target_chat: TargetChat, url: string }) {
    super();
    this.bot_username = params.bot_username;
    this.target_chat = params.target_chat;
    this.url = params.url;
  }
}

export class InternalLinkTypeAuthenticationCode extends InternalLinkType {
  "@type" = "internalLinkTypeAuthenticationCode"
  code: string;

  constructor(params: { code: string }) {
    super();
    this.code = params.code;
  }
}

export class InternalLinkTypeBackground extends InternalLinkType {
  "@type" = "internalLinkTypeBackground"
  background_name: string;

  constructor(params: { background_name: string }) {
    super();
    this.background_name = params.background_name;
  }
}

export class InternalLinkTypeBotStart extends InternalLinkType {
  "@type" = "internalLinkTypeBotStart"
  autostart: boolean;
  bot_username: string;
  start_parameter: string;

  constructor(params: { autostart: boolean, bot_username: string, start_parameter: string }) {
    super();
    this.autostart = params.autostart;
    this.bot_username = params.bot_username;
    this.start_parameter = params.start_parameter;
  }
}

export class InternalLinkTypeBotStartInGroup extends InternalLinkType {
  "@type" = "internalLinkTypeBotStartInGroup"
  administrator_rights?: ChatAdministratorRights;
  bot_username: string;
  start_parameter: string;

  constructor(params: { administrator_rights?: ChatAdministratorRights, bot_username: string, start_parameter: string }) {
    super();
    this.administrator_rights = params.administrator_rights;
    this.bot_username = params.bot_username;
    this.start_parameter = params.start_parameter;
  }
}

export class InternalLinkTypeBotAddToChannel extends InternalLinkType {
  "@type" = "internalLinkTypeBotAddToChannel"
  administrator_rights: ChatAdministratorRights;
  bot_username: string;

  constructor(params: { administrator_rights: ChatAdministratorRights, bot_username: string }) {
    super();
    this.administrator_rights = params.administrator_rights;
    this.bot_username = params.bot_username;
  }
}

export class InternalLinkTypeChangePhoneNumber extends InternalLinkType {
  "@type" = "internalLinkTypeChangePhoneNumber"

  constructor(params: {}) {
    super();
  }
}

export class InternalLinkTypeChatInvite extends InternalLinkType {
  "@type" = "internalLinkTypeChatInvite"
  invite_link: string;

  constructor(params: { invite_link: string }) {
    super();
    this.invite_link = params.invite_link;
  }
}

export class InternalLinkTypeFilterSettings extends InternalLinkType {
  "@type" = "internalLinkTypeFilterSettings"

  constructor(params: {}) {
    super();
  }
}

export class InternalLinkTypeGame extends InternalLinkType {
  "@type" = "internalLinkTypeGame"
  bot_username: string;
  game_short_name: string;

  constructor(params: { bot_username: string, game_short_name: string }) {
    super();
    this.bot_username = params.bot_username;
    this.game_short_name = params.game_short_name;
  }
}

export class InternalLinkTypeInvoice extends InternalLinkType {
  "@type" = "internalLinkTypeInvoice"
  invoice_name: string;

  constructor(params: { invoice_name: string }) {
    super();
    this.invoice_name = params.invoice_name;
  }
}

export class InternalLinkTypeLanguagePack extends InternalLinkType {
  "@type" = "internalLinkTypeLanguagePack"
  language_pack_id: string;

  constructor(params: { language_pack_id: string }) {
    super();
    this.language_pack_id = params.language_pack_id;
  }
}

export class InternalLinkTypeLanguageSettings extends InternalLinkType {
  "@type" = "internalLinkTypeLanguageSettings"

  constructor(params: {}) {
    super();
  }
}

export class InternalLinkTypeMessage extends InternalLinkType {
  "@type" = "internalLinkTypeMessage"
  url: string;

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class InternalLinkTypeMessageDraft extends InternalLinkType {
  "@type" = "internalLinkTypeMessageDraft"
  contains_link: boolean;
  text: FormattedText;

  constructor(params: { contains_link: boolean, text: FormattedText }) {
    super();
    this.contains_link = params.contains_link;
    this.text = params.text;
  }
}

export class InternalLinkTypePassportDataRequest extends InternalLinkType {
  "@type" = "internalLinkTypePassportDataRequest"
  bot_user_id: number;
  callback_url: string;
  nonce: string;
  public_key: string;
  scope: string;

  constructor(params: { bot_user_id: number, callback_url: string, nonce: string, public_key: string, scope: string }) {
    super();
    this.bot_user_id = params.bot_user_id;
    this.callback_url = params.callback_url;
    this.nonce = params.nonce;
    this.public_key = params.public_key;
    this.scope = params.scope;
  }
}

export class InternalLinkTypePhoneNumberConfirmation extends InternalLinkType {
  "@type" = "internalLinkTypePhoneNumberConfirmation"
  hash: string;
  phone_number: string;

  constructor(params: { hash: string, phone_number: string }) {
    super();
    this.hash = params.hash;
    this.phone_number = params.phone_number;
  }
}

export class InternalLinkTypePremiumFeatures extends InternalLinkType {
  "@type" = "internalLinkTypePremiumFeatures"
  referrer: string;

  constructor(params: { referrer: string }) {
    super();
    this.referrer = params.referrer;
  }
}

export class InternalLinkTypePrivacyAndSecuritySettings extends InternalLinkType {
  "@type" = "internalLinkTypePrivacyAndSecuritySettings"

  constructor(params: {}) {
    super();
  }
}

export class InternalLinkTypeProxy extends InternalLinkType {
  "@type" = "internalLinkTypeProxy"
  port: number;
  server: string;
  type: ProxyType;

  constructor(params: { port: number, server: string, type: ProxyType }) {
    super();
    this.port = params.port;
    this.server = params.server;
    this.type = params.type;
  }
}

export class InternalLinkTypePublicChat extends InternalLinkType {
  "@type" = "internalLinkTypePublicChat"
  chat_username: string;

  constructor(params: { chat_username: string }) {
    super();
    this.chat_username = params.chat_username;
  }
}

export class InternalLinkTypeQrCodeAuthentication extends InternalLinkType {
  "@type" = "internalLinkTypeQrCodeAuthentication"

  constructor(params: {}) {
    super();
  }
}

export class InternalLinkTypeRestorePurchases extends InternalLinkType {
  "@type" = "internalLinkTypeRestorePurchases"

  constructor(params: {}) {
    super();
  }
}

export class InternalLinkTypeSettings extends InternalLinkType {
  "@type" = "internalLinkTypeSettings"

  constructor(params: {}) {
    super();
  }
}

export class InternalLinkTypeStickerSet extends InternalLinkType {
  "@type" = "internalLinkTypeStickerSet"
  sticker_set_name: string;

  constructor(params: { sticker_set_name: string }) {
    super();
    this.sticker_set_name = params.sticker_set_name;
  }
}

export class InternalLinkTypeTheme extends InternalLinkType {
  "@type" = "internalLinkTypeTheme"
  theme_name: string;

  constructor(params: { theme_name: string }) {
    super();
    this.theme_name = params.theme_name;
  }
}

export class InternalLinkTypeThemeSettings extends InternalLinkType {
  "@type" = "internalLinkTypeThemeSettings"

  constructor(params: {}) {
    super();
  }
}

export class InternalLinkTypeUnknownDeepLink extends InternalLinkType {
  "@type" = "internalLinkTypeUnknownDeepLink"
  link: string;

  constructor(params: { link: string }) {
    super();
    this.link = params.link;
  }
}

export class InternalLinkTypeUnsupportedProxy extends InternalLinkType {
  "@type" = "internalLinkTypeUnsupportedProxy"

  constructor(params: {}) {
    super();
  }
}

export class InternalLinkTypeUserPhoneNumber extends InternalLinkType {
  "@type" = "internalLinkTypeUserPhoneNumber"
  phone_number: string;

  constructor(params: { phone_number: string }) {
    super();
    this.phone_number = params.phone_number;
  }
}

export class InternalLinkTypeVideoChat extends InternalLinkType {
  "@type" = "internalLinkTypeVideoChat"
  chat_username: string;
  invite_hash: string;
  is_live_stream: boolean;

  constructor(params: { chat_username: string, invite_hash: string, is_live_stream: boolean }) {
    super();
    this.chat_username = params.chat_username;
    this.invite_hash = params.invite_hash;
    this.is_live_stream = params.is_live_stream;
  }
}

export class MessageLink extends Class {
  "@type" = "messageLink"
  is_public: boolean;
  link: string;

  constructor(params: { is_public: boolean, link: string }) {
    super();
    this.is_public = params.is_public;
    this.link = params.link;
  }
}

export class MessageLinkInfo extends Class {
  "@type" = "messageLinkInfo"
  chat_id: number;
  for_album: boolean;
  for_comment: boolean;
  is_public: boolean;
  media_timestamp: number;
  message?: Message;

  constructor(params: { chat_id: number, for_album: boolean, for_comment: boolean, is_public: boolean, media_timestamp: number, message?: Message }) {
    super();
    this.chat_id = params.chat_id;
    this.for_album = params.for_album;
    this.for_comment = params.for_comment;
    this.is_public = params.is_public;
    this.media_timestamp = params.media_timestamp;
    this.message = params.message;
  }
}

export class FilePart extends Class {
  "@type" = "filePart"
  data: string;

  constructor(params: { data: string }) {
    super();
    this.data = params.data;
  }
}

/**
 * Represents the type of a file
 */
export class FileType extends Class {
}

export class FileTypeNone extends FileType {
  "@type" = "fileTypeNone"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeAnimation extends FileType {
  "@type" = "fileTypeAnimation"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeAudio extends FileType {
  "@type" = "fileTypeAudio"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeDocument extends FileType {
  "@type" = "fileTypeDocument"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeNotificationSound extends FileType {
  "@type" = "fileTypeNotificationSound"

  constructor(params: {}) {
    super();
  }
}

export class FileTypePhoto extends FileType {
  "@type" = "fileTypePhoto"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeProfilePhoto extends FileType {
  "@type" = "fileTypeProfilePhoto"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeSecret extends FileType {
  "@type" = "fileTypeSecret"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeSecretThumbnail extends FileType {
  "@type" = "fileTypeSecretThumbnail"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeSecure extends FileType {
  "@type" = "fileTypeSecure"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeSticker extends FileType {
  "@type" = "fileTypeSticker"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeThumbnail extends FileType {
  "@type" = "fileTypeThumbnail"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeUnknown extends FileType {
  "@type" = "fileTypeUnknown"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeVideo extends FileType {
  "@type" = "fileTypeVideo"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeVideoNote extends FileType {
  "@type" = "fileTypeVideoNote"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeVoiceNote extends FileType {
  "@type" = "fileTypeVoiceNote"

  constructor(params: {}) {
    super();
  }
}

export class FileTypeWallpaper extends FileType {
  "@type" = "fileTypeWallpaper"

  constructor(params: {}) {
    super();
  }
}

export class StorageStatisticsByFileType extends Class {
  "@type" = "storageStatisticsByFileType"
  count: number;
  file_type: FileType;
  size: number;

  constructor(params: { count: number, file_type: FileType, size: number }) {
    super();
    this.count = params.count;
    this.file_type = params.file_type;
    this.size = params.size;
  }
}

export class StorageStatisticsByChat extends Class {
  "@type" = "storageStatisticsByChat"
  by_file_type: StorageStatisticsByFileType[];
  chat_id: number;
  count: number;
  size: number;

  constructor(params: { by_file_type: StorageStatisticsByFileType[], chat_id: number, count: number, size: number }) {
    super();
    this.by_file_type = params.by_file_type;
    this.chat_id = params.chat_id;
    this.count = params.count;
    this.size = params.size;
  }
}

export class StorageStatistics extends Class {
  "@type" = "storageStatistics"
  by_chat: StorageStatisticsByChat[];
  count: number;
  size: number;

  constructor(params: { by_chat: StorageStatisticsByChat[], count: number, size: number }) {
    super();
    this.by_chat = params.by_chat;
    this.count = params.count;
    this.size = params.size;
  }
}

export class StorageStatisticsFast extends Class {
  "@type" = "storageStatisticsFast"
  database_size: number;
  file_count: number;
  files_size: number;
  language_pack_database_size: number;
  log_size: number;

  constructor(params: { database_size: number, file_count: number, files_size: number, language_pack_database_size: number, log_size: number }) {
    super();
    this.database_size = params.database_size;
    this.file_count = params.file_count;
    this.files_size = params.files_size;
    this.language_pack_database_size = params.language_pack_database_size;
    this.log_size = params.log_size;
  }
}

export class DatabaseStatistics extends Class {
  "@type" = "databaseStatistics"
  statistics: string;

  constructor(params: { statistics: string }) {
    super();
    this.statistics = params.statistics;
  }
}

/**
 * Represents the type of a network
 */
export class NetworkType extends Class {
}

export class NetworkTypeNone extends NetworkType {
  "@type" = "networkTypeNone"

  constructor(params: {}) {
    super();
  }
}

export class NetworkTypeMobile extends NetworkType {
  "@type" = "networkTypeMobile"

  constructor(params: {}) {
    super();
  }
}

export class NetworkTypeMobileRoaming extends NetworkType {
  "@type" = "networkTypeMobileRoaming"

  constructor(params: {}) {
    super();
  }
}

export class NetworkTypeWiFi extends NetworkType {
  "@type" = "networkTypeWiFi"

  constructor(params: {}) {
    super();
  }
}

export class NetworkTypeOther extends NetworkType {
  "@type" = "networkTypeOther"

  constructor(params: {}) {
    super();
  }
}

/**
 * Contains statistics about network usage
 */
export class NetworkStatisticsEntry extends Class {
}

export class NetworkStatisticsEntryFile extends NetworkStatisticsEntry {
  "@type" = "networkStatisticsEntryFile"
  file_type?: FileType;
  network_type: NetworkType;
  received_bytes: number;
  sent_bytes: number;

  constructor(params: { file_type?: FileType, network_type: NetworkType, received_bytes: number, sent_bytes: number }) {
    super();
    this.file_type = params.file_type;
    this.network_type = params.network_type;
    this.received_bytes = params.received_bytes;
    this.sent_bytes = params.sent_bytes;
  }
}

export class NetworkStatisticsEntryCall extends NetworkStatisticsEntry {
  "@type" = "networkStatisticsEntryCall"
  duration: number;
  network_type: NetworkType;
  received_bytes: number;
  sent_bytes: number;

  constructor(params: { duration: number, network_type: NetworkType, received_bytes: number, sent_bytes: number }) {
    super();
    this.duration = params.duration;
    this.network_type = params.network_type;
    this.received_bytes = params.received_bytes;
    this.sent_bytes = params.sent_bytes;
  }
}

export class NetworkStatistics extends Class {
  "@type" = "networkStatistics"
  entries: NetworkStatisticsEntry[];
  since_date: number;

  constructor(params: { entries: NetworkStatisticsEntry[], since_date: number }) {
    super();
    this.entries = params.entries;
    this.since_date = params.since_date;
  }
}

export class AutoDownloadSettings extends Class {
  "@type" = "autoDownloadSettings"
  is_auto_download_enabled: boolean;
  max_other_file_size: number;
  max_photo_file_size: number;
  max_video_file_size: number;
  preload_large_videos: boolean;
  preload_next_audio: boolean;
  use_less_data_for_calls: boolean;
  video_upload_bitrate: number;

  constructor(params: { is_auto_download_enabled: boolean, max_other_file_size: number, max_photo_file_size: number, max_video_file_size: number, preload_large_videos: boolean, preload_next_audio: boolean, use_less_data_for_calls: boolean, video_upload_bitrate: number }) {
    super();
    this.is_auto_download_enabled = params.is_auto_download_enabled;
    this.max_other_file_size = params.max_other_file_size;
    this.max_photo_file_size = params.max_photo_file_size;
    this.max_video_file_size = params.max_video_file_size;
    this.preload_large_videos = params.preload_large_videos;
    this.preload_next_audio = params.preload_next_audio;
    this.use_less_data_for_calls = params.use_less_data_for_calls;
    this.video_upload_bitrate = params.video_upload_bitrate;
  }
}

export class AutoDownloadSettingsPresets extends Class {
  "@type" = "autoDownloadSettingsPresets"
  high: AutoDownloadSettings;
  low: AutoDownloadSettings;
  medium: AutoDownloadSettings;

  constructor(params: { high: AutoDownloadSettings, low: AutoDownloadSettings, medium: AutoDownloadSettings }) {
    super();
    this.high = params.high;
    this.low = params.low;
    this.medium = params.medium;
  }
}

/**
 * Describes the current state of the connection to Telegram servers
 */
export class ConnectionState extends Class {
}

export class ConnectionStateWaitingForNetwork extends ConnectionState {
  "@type" = "connectionStateWaitingForNetwork"

  constructor(params: {}) {
    super();
  }
}

export class ConnectionStateConnectingToProxy extends ConnectionState {
  "@type" = "connectionStateConnectingToProxy"

  constructor(params: {}) {
    super();
  }
}

export class ConnectionStateConnecting extends ConnectionState {
  "@type" = "connectionStateConnecting"

  constructor(params: {}) {
    super();
  }
}

export class ConnectionStateUpdating extends ConnectionState {
  "@type" = "connectionStateUpdating"

  constructor(params: {}) {
    super();
  }
}

export class ConnectionStateReady extends ConnectionState {
  "@type" = "connectionStateReady"

  constructor(params: {}) {
    super();
  }
}

/**
 * Represents the categories of chats for which a list of frequently used chats can be retrieved
 */
export class TopChatCategory extends Class {
}

export class TopChatCategoryUsers extends TopChatCategory {
  "@type" = "topChatCategoryUsers"

  constructor(params: {}) {
    super();
  }
}

export class TopChatCategoryBots extends TopChatCategory {
  "@type" = "topChatCategoryBots"

  constructor(params: {}) {
    super();
  }
}

export class TopChatCategoryGroups extends TopChatCategory {
  "@type" = "topChatCategoryGroups"

  constructor(params: {}) {
    super();
  }
}

export class TopChatCategoryChannels extends TopChatCategory {
  "@type" = "topChatCategoryChannels"

  constructor(params: {}) {
    super();
  }
}

export class TopChatCategoryInlineBots extends TopChatCategory {
  "@type" = "topChatCategoryInlineBots"

  constructor(params: {}) {
    super();
  }
}

export class TopChatCategoryCalls extends TopChatCategory {
  "@type" = "topChatCategoryCalls"

  constructor(params: {}) {
    super();
  }
}

export class TopChatCategoryForwardChats extends TopChatCategory {
  "@type" = "topChatCategoryForwardChats"

  constructor(params: {}) {
    super();
  }
}

/**
 * Describes the type of a URL linking to an internal Telegram entity
 */
export class TMeUrlType extends Class {
}

export class TMeUrlTypeUser extends TMeUrlType {
  "@type" = "tMeUrlTypeUser"
  user_id: number;

  constructor(params: { user_id: number }) {
    super();
    this.user_id = params.user_id;
  }
}

export class TMeUrlTypeSupergroup extends TMeUrlType {
  "@type" = "tMeUrlTypeSupergroup"
  supergroup_id: number;

  constructor(params: { supergroup_id: number }) {
    super();
    this.supergroup_id = params.supergroup_id;
  }
}

export class TMeUrlTypeChatInvite extends TMeUrlType {
  "@type" = "tMeUrlTypeChatInvite"
  info: ChatInviteLinkInfo;

  constructor(params: { info: ChatInviteLinkInfo }) {
    super();
    this.info = params.info;
  }
}

export class TMeUrlTypeStickerSet extends TMeUrlType {
  "@type" = "tMeUrlTypeStickerSet"
  sticker_set_id: number;

  constructor(params: { sticker_set_id: number }) {
    super();
    this.sticker_set_id = params.sticker_set_id;
  }
}

export class TMeUrl extends Class {
  "@type" = "tMeUrl"
  type: TMeUrlType;
  url: string;

  constructor(params: { type: TMeUrlType, url: string }) {
    super();
    this.type = params.type;
    this.url = params.url;
  }
}

export class TMeUrls extends Class {
  "@type" = "tMeUrls"
  urls: TMeUrl[];

  constructor(params: { urls: TMeUrl[] }) {
    super();
    this.urls = params.urls;
  }
}

/**
 * Describes an action suggested to the current user
 */
export class SuggestedAction extends Class {
}

export class SuggestedActionEnableArchiveAndMuteNewChats extends SuggestedAction {
  "@type" = "suggestedActionEnableArchiveAndMuteNewChats"

  constructor(params: {}) {
    super();
  }
}

export class SuggestedActionCheckPassword extends SuggestedAction {
  "@type" = "suggestedActionCheckPassword"

  constructor(params: {}) {
    super();
  }
}

export class SuggestedActionCheckPhoneNumber extends SuggestedAction {
  "@type" = "suggestedActionCheckPhoneNumber"

  constructor(params: {}) {
    super();
  }
}

export class SuggestedActionViewChecksHint extends SuggestedAction {
  "@type" = "suggestedActionViewChecksHint"

  constructor(params: {}) {
    super();
  }
}

export class SuggestedActionConvertToBroadcastGroup extends SuggestedAction {
  "@type" = "suggestedActionConvertToBroadcastGroup"
  supergroup_id: number;

  constructor(params: { supergroup_id: number }) {
    super();
    this.supergroup_id = params.supergroup_id;
  }
}

export class SuggestedActionSetPassword extends SuggestedAction {
  "@type" = "suggestedActionSetPassword"
  authorization_delay: number;

  constructor(params: { authorization_delay: number }) {
    super();
    this.authorization_delay = params.authorization_delay;
  }
}

export class Count extends Class {
  "@type" = "count"
  count: number;

  constructor(params: { count: number }) {
    super();
    this.count = params.count;
  }
}

export class Text extends Class {
  "@type" = "text"
  text: string;

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class Seconds extends Class {
  "@type" = "seconds"
  seconds: number;

  constructor(params: { seconds: number }) {
    super();
    this.seconds = params.seconds;
  }
}

export class FileDownloadedPrefixSize extends Class {
  "@type" = "fileDownloadedPrefixSize"
  size: number;

  constructor(params: { size: number }) {
    super();
    this.size = params.size;
  }
}

export class DeepLinkInfo extends Class {
  "@type" = "deepLinkInfo"
  need_update_application: boolean;
  text: FormattedText;

  constructor(params: { need_update_application: boolean, text: FormattedText }) {
    super();
    this.need_update_application = params.need_update_application;
    this.text = params.text;
  }
}

/**
 * Describes the way the text needs to be parsed for TextEntities
 */
export class TextParseMode extends Class {
}

export class TextParseModeMarkdown extends TextParseMode {
  "@type" = "textParseModeMarkdown"
  version: number;

  constructor(params: { version: number }) {
    super();
    this.version = params.version;
  }
}

export class TextParseModeHTML extends TextParseMode {
  "@type" = "textParseModeHTML"

  constructor(params: {}) {
    super();
  }
}

/**
 * Describes the type of a proxy server
 */
export class ProxyType extends Class {
}

export class ProxyTypeSocks5 extends ProxyType {
  "@type" = "proxyTypeSocks5"
  password: string;
  username: string;

  constructor(params: { password: string, username: string }) {
    super();
    this.password = params.password;
    this.username = params.username;
  }
}

export class ProxyTypeHttp extends ProxyType {
  "@type" = "proxyTypeHttp"
  http_only: boolean;
  password: string;
  username: string;

  constructor(params: { http_only: boolean, password: string, username: string }) {
    super();
    this.http_only = params.http_only;
    this.password = params.password;
    this.username = params.username;
  }
}

export class ProxyTypeMtproto extends ProxyType {
  "@type" = "proxyTypeMtproto"
  secret: string;

  constructor(params: { secret: string }) {
    super();
    this.secret = params.secret;
  }
}

export class Proxy extends Class {
  "@type" = "proxy"
  id: number;
  is_enabled: boolean;
  last_used_date: number;
  port: number;
  server: string;
  type: ProxyType;

  constructor(params: { id: number, is_enabled: boolean, last_used_date: number, port: number, server: string, type: ProxyType }) {
    super();
    this.id = params.id;
    this.is_enabled = params.is_enabled;
    this.last_used_date = params.last_used_date;
    this.port = params.port;
    this.server = params.server;
    this.type = params.type;
  }
}

export class Proxies extends Class {
  "@type" = "proxies"
  proxies: Proxy[];

  constructor(params: { proxies: Proxy[] }) {
    super();
    this.proxies = params.proxies;
  }
}

export class InputSticker extends Class {
  "@type" = "inputSticker"
  emojis: string;
  format: StickerFormat;
  mask_position?: MaskPosition;
  sticker: InputFile;

  constructor(params: { emojis: string, format: StickerFormat, mask_position?: MaskPosition, sticker: InputFile }) {
    super();
    this.emojis = params.emojis;
    this.format = params.format;
    this.mask_position = params.mask_position;
    this.sticker = params.sticker;
  }
}

export class DateRange extends Class {
  "@type" = "dateRange"
  end_date: number;
  start_date: number;

  constructor(params: { end_date: number, start_date: number }) {
    super();
    this.end_date = params.end_date;
    this.start_date = params.start_date;
  }
}

export class StatisticalValue extends Class {
  "@type" = "statisticalValue"
  growth_rate_percentage: number;
  previous_value: number;
  value: number;

  constructor(params: { growth_rate_percentage: number, previous_value: number, value: number }) {
    super();
    this.growth_rate_percentage = params.growth_rate_percentage;
    this.previous_value = params.previous_value;
    this.value = params.value;
  }
}

/**
 * Describes a statistical graph
 */
export class StatisticalGraph extends Class {
}

export class StatisticalGraphData extends StatisticalGraph {
  "@type" = "statisticalGraphData"
  json_data: string;
  zoom_token: string;

  constructor(params: { json_data: string, zoom_token: string }) {
    super();
    this.json_data = params.json_data;
    this.zoom_token = params.zoom_token;
  }
}

export class StatisticalGraphAsync extends StatisticalGraph {
  "@type" = "statisticalGraphAsync"
  token: string;

  constructor(params: { token: string }) {
    super();
    this.token = params.token;
  }
}

export class StatisticalGraphError extends StatisticalGraph {
  "@type" = "statisticalGraphError"
  error_message: string;

  constructor(params: { error_message: string }) {
    super();
    this.error_message = params.error_message;
  }
}

export class ChatStatisticsMessageInteractionInfo extends Class {
  "@type" = "chatStatisticsMessageInteractionInfo"
  forward_count: number;
  message_id: number;
  view_count: number;

  constructor(params: { forward_count: number, message_id: number, view_count: number }) {
    super();
    this.forward_count = params.forward_count;
    this.message_id = params.message_id;
    this.view_count = params.view_count;
  }
}

export class ChatStatisticsMessageSenderInfo extends Class {
  "@type" = "chatStatisticsMessageSenderInfo"
  average_character_count: number;
  sent_message_count: number;
  user_id: number;

  constructor(params: { average_character_count: number, sent_message_count: number, user_id: number }) {
    super();
    this.average_character_count = params.average_character_count;
    this.sent_message_count = params.sent_message_count;
    this.user_id = params.user_id;
  }
}

export class ChatStatisticsAdministratorActionsInfo extends Class {
  "@type" = "chatStatisticsAdministratorActionsInfo"
  banned_user_count: number;
  deleted_message_count: number;
  restricted_user_count: number;
  user_id: number;

  constructor(params: { banned_user_count: number, deleted_message_count: number, restricted_user_count: number, user_id: number }) {
    super();
    this.banned_user_count = params.banned_user_count;
    this.deleted_message_count = params.deleted_message_count;
    this.restricted_user_count = params.restricted_user_count;
    this.user_id = params.user_id;
  }
}

export class ChatStatisticsInviterInfo extends Class {
  "@type" = "chatStatisticsInviterInfo"
  added_member_count: number;
  user_id: number;

  constructor(params: { added_member_count: number, user_id: number }) {
    super();
    this.added_member_count = params.added_member_count;
    this.user_id = params.user_id;
  }
}

/**
 * Contains a detailed statistics about a chat
 */
export class ChatStatistics extends Class {
}

export class ChatStatisticsSupergroup extends ChatStatistics {
  "@type" = "chatStatisticsSupergroup"
  action_graph: StatisticalGraph;
  day_graph: StatisticalGraph;
  join_by_source_graph: StatisticalGraph;
  join_graph: StatisticalGraph;
  language_graph: StatisticalGraph;
  member_count: StatisticalValue;
  member_count_graph: StatisticalGraph;
  message_content_graph: StatisticalGraph;
  message_count: StatisticalValue;
  period: DateRange;
  sender_count: StatisticalValue;
  top_administrators: ChatStatisticsAdministratorActionsInfo[];
  top_inviters: ChatStatisticsInviterInfo[];
  top_senders: ChatStatisticsMessageSenderInfo[];
  viewer_count: StatisticalValue;
  week_graph: StatisticalGraph;

  constructor(params: { action_graph: StatisticalGraph, day_graph: StatisticalGraph, join_by_source_graph: StatisticalGraph, join_graph: StatisticalGraph, language_graph: StatisticalGraph, member_count: StatisticalValue, member_count_graph: StatisticalGraph, message_content_graph: StatisticalGraph, message_count: StatisticalValue, period: DateRange, sender_count: StatisticalValue, top_administrators: ChatStatisticsAdministratorActionsInfo[], top_inviters: ChatStatisticsInviterInfo[], top_senders: ChatStatisticsMessageSenderInfo[], viewer_count: StatisticalValue, week_graph: StatisticalGraph }) {
    super();
    this.action_graph = params.action_graph;
    this.day_graph = params.day_graph;
    this.join_by_source_graph = params.join_by_source_graph;
    this.join_graph = params.join_graph;
    this.language_graph = params.language_graph;
    this.member_count = params.member_count;
    this.member_count_graph = params.member_count_graph;
    this.message_content_graph = params.message_content_graph;
    this.message_count = params.message_count;
    this.period = params.period;
    this.sender_count = params.sender_count;
    this.top_administrators = params.top_administrators;
    this.top_inviters = params.top_inviters;
    this.top_senders = params.top_senders;
    this.viewer_count = params.viewer_count;
    this.week_graph = params.week_graph;
  }
}

export class ChatStatisticsChannel extends ChatStatistics {
  "@type" = "chatStatisticsChannel"
  enabled_notifications_percentage: number;
  instant_view_interaction_graph: StatisticalGraph;
  join_by_source_graph: StatisticalGraph;
  join_graph: StatisticalGraph;
  language_graph: StatisticalGraph;
  mean_share_count: StatisticalValue;
  mean_view_count: StatisticalValue;
  member_count: StatisticalValue;
  member_count_graph: StatisticalGraph;
  message_interaction_graph: StatisticalGraph;
  mute_graph: StatisticalGraph;
  period: DateRange;
  recent_message_interactions: ChatStatisticsMessageInteractionInfo[];
  view_count_by_hour_graph: StatisticalGraph;
  view_count_by_source_graph: StatisticalGraph;

  constructor(params: { enabled_notifications_percentage: number, instant_view_interaction_graph: StatisticalGraph, join_by_source_graph: StatisticalGraph, join_graph: StatisticalGraph, language_graph: StatisticalGraph, mean_share_count: StatisticalValue, mean_view_count: StatisticalValue, member_count: StatisticalValue, member_count_graph: StatisticalGraph, message_interaction_graph: StatisticalGraph, mute_graph: StatisticalGraph, period: DateRange, recent_message_interactions: ChatStatisticsMessageInteractionInfo[], view_count_by_hour_graph: StatisticalGraph, view_count_by_source_graph: StatisticalGraph }) {
    super();
    this.enabled_notifications_percentage = params.enabled_notifications_percentage;
    this.instant_view_interaction_graph = params.instant_view_interaction_graph;
    this.join_by_source_graph = params.join_by_source_graph;
    this.join_graph = params.join_graph;
    this.language_graph = params.language_graph;
    this.mean_share_count = params.mean_share_count;
    this.mean_view_count = params.mean_view_count;
    this.member_count = params.member_count;
    this.member_count_graph = params.member_count_graph;
    this.message_interaction_graph = params.message_interaction_graph;
    this.mute_graph = params.mute_graph;
    this.period = params.period;
    this.recent_message_interactions = params.recent_message_interactions;
    this.view_count_by_hour_graph = params.view_count_by_hour_graph;
    this.view_count_by_source_graph = params.view_count_by_source_graph;
  }
}

export class MessageStatistics extends Class {
  "@type" = "messageStatistics"
  message_interaction_graph: StatisticalGraph;

  constructor(params: { message_interaction_graph: StatisticalGraph }) {
    super();
    this.message_interaction_graph = params.message_interaction_graph;
  }
}

export class Point extends Class {
  "@type" = "point"
  x: number;
  y: number;

  constructor(params: { x: number, y: number }) {
    super();
    this.x = params.x;
    this.y = params.y;
  }
}

/**
 * Represents a vector path command
 */
export class VectorPathCommand extends Class {
}

export class VectorPathCommandLine extends VectorPathCommand {
  "@type" = "vectorPathCommandLine"
  end_point: Point;

  constructor(params: { end_point: Point }) {
    super();
    this.end_point = params.end_point;
  }
}

export class VectorPathCommandCubicBezierCurve extends VectorPathCommand {
  "@type" = "vectorPathCommandCubicBezierCurve"
  end_control_point: Point;
  end_point: Point;
  start_control_point: Point;

  constructor(params: { end_control_point: Point, end_point: Point, start_control_point: Point }) {
    super();
    this.end_control_point = params.end_control_point;
    this.end_point = params.end_point;
    this.start_control_point = params.start_control_point;
  }
}

/**
 * Represents the scope to which bot commands are relevant
 */
export class BotCommandScope extends Class {
}

export class BotCommandScopeDefault extends BotCommandScope {
  "@type" = "botCommandScopeDefault"

  constructor(params: {}) {
    super();
  }
}

export class BotCommandScopeAllPrivateChats extends BotCommandScope {
  "@type" = "botCommandScopeAllPrivateChats"

  constructor(params: {}) {
    super();
  }
}

export class BotCommandScopeAllGroupChats extends BotCommandScope {
  "@type" = "botCommandScopeAllGroupChats"

  constructor(params: {}) {
    super();
  }
}

export class BotCommandScopeAllChatAdministrators extends BotCommandScope {
  "@type" = "botCommandScopeAllChatAdministrators"

  constructor(params: {}) {
    super();
  }
}

export class BotCommandScopeChat extends BotCommandScope {
  "@type" = "botCommandScopeChat"
  chat_id: number;

  constructor(params: { chat_id: number }) {
    super();
    this.chat_id = params.chat_id;
  }
}

export class BotCommandScopeChatAdministrators extends BotCommandScope {
  "@type" = "botCommandScopeChatAdministrators"
  chat_id: number;

  constructor(params: { chat_id: number }) {
    super();
    this.chat_id = params.chat_id;
  }
}

export class BotCommandScopeChatMember extends BotCommandScope {
  "@type" = "botCommandScopeChatMember"
  chat_id: number;
  user_id: number;

  constructor(params: { chat_id: number, user_id: number }) {
    super();
    this.chat_id = params.chat_id;
    this.user_id = params.user_id;
  }
}

/**
 * Contains notifications about data changes
 */
export class Update extends Class {
}

export class UpdateAuthorizationState extends Update {
  "@type" = "updateAuthorizationState"
  authorization_state: AuthorizationState;

  constructor(params: { authorization_state: AuthorizationState }) {
    super();
    this.authorization_state = params.authorization_state;
  }
}

export class UpdateNewMessage extends Update {
  "@type" = "updateNewMessage"
  message: Message;

  constructor(params: { message: Message }) {
    super();
    this.message = params.message;
  }
}

export class UpdateMessageSendAcknowledged extends Update {
  "@type" = "updateMessageSendAcknowledged"
  chat_id: number;
  message_id: number;

  constructor(params: { chat_id: number, message_id: number }) {
    super();
    this.chat_id = params.chat_id;
    this.message_id = params.message_id;
  }
}

export class UpdateMessageSendSucceeded extends Update {
  "@type" = "updateMessageSendSucceeded"
  message: Message;
  old_message_id: number;

  constructor(params: { message: Message, old_message_id: number }) {
    super();
    this.message = params.message;
    this.old_message_id = params.old_message_id;
  }
}

export class UpdateMessageSendFailed extends Update {
  "@type" = "updateMessageSendFailed"
  error_code: number;
  error_message: string;
  message: Message;
  old_message_id: number;

  constructor(params: { error_code: number, error_message: string, message: Message, old_message_id: number }) {
    super();
    this.error_code = params.error_code;
    this.error_message = params.error_message;
    this.message = params.message;
    this.old_message_id = params.old_message_id;
  }
}

export class UpdateMessageContent extends Update {
  "@type" = "updateMessageContent"
  chat_id: number;
  message_id: number;
  new_content: MessageContent;

  constructor(params: { chat_id: number, message_id: number, new_content: MessageContent }) {
    super();
    this.chat_id = params.chat_id;
    this.message_id = params.message_id;
    this.new_content = params.new_content;
  }
}

export class UpdateMessageEdited extends Update {
  "@type" = "updateMessageEdited"
  chat_id: number;
  edit_date: number;
  message_id: number;
  reply_markup: ReplyMarkup;

  constructor(params: { chat_id: number, edit_date: number, message_id: number, reply_markup: ReplyMarkup }) {
    super();
    this.chat_id = params.chat_id;
    this.edit_date = params.edit_date;
    this.message_id = params.message_id;
    this.reply_markup = params.reply_markup;
  }
}

export class UpdateMessageIsPinned extends Update {
  "@type" = "updateMessageIsPinned"
  chat_id: number;
  is_pinned: boolean;
  message_id: number;

  constructor(params: { chat_id: number, is_pinned: boolean, message_id: number }) {
    super();
    this.chat_id = params.chat_id;
    this.is_pinned = params.is_pinned;
    this.message_id = params.message_id;
  }
}

export class UpdateMessageInteractionInfo extends Update {
  "@type" = "updateMessageInteractionInfo"
  chat_id: number;
  interaction_info: MessageInteractionInfo;
  message_id: number;

  constructor(params: { chat_id: number, interaction_info: MessageInteractionInfo, message_id: number }) {
    super();
    this.chat_id = params.chat_id;
    this.interaction_info = params.interaction_info;
    this.message_id = params.message_id;
  }
}

export class UpdateMessageContentOpened extends Update {
  "@type" = "updateMessageContentOpened"
  chat_id: number;
  message_id: number;

  constructor(params: { chat_id: number, message_id: number }) {
    super();
    this.chat_id = params.chat_id;
    this.message_id = params.message_id;
  }
}

export class UpdateMessageMentionRead extends Update {
  "@type" = "updateMessageMentionRead"
  chat_id: number;
  message_id: number;
  unread_mention_count: number;

  constructor(params: { chat_id: number, message_id: number, unread_mention_count: number }) {
    super();
    this.chat_id = params.chat_id;
    this.message_id = params.message_id;
    this.unread_mention_count = params.unread_mention_count;
  }
}

export class UpdateMessageUnreadReactions extends Update {
  "@type" = "updateMessageUnreadReactions"
  chat_id: number;
  message_id: number;
  unread_reaction_count: number;
  unread_reactions: UnreadReaction[];

  constructor(params: { chat_id: number, message_id: number, unread_reaction_count: number, unread_reactions: UnreadReaction[] }) {
    super();
    this.chat_id = params.chat_id;
    this.message_id = params.message_id;
    this.unread_reaction_count = params.unread_reaction_count;
    this.unread_reactions = params.unread_reactions;
  }
}

export class UpdateMessageLiveLocationViewed extends Update {
  "@type" = "updateMessageLiveLocationViewed"
  chat_id: number;
  message_id: number;

  constructor(params: { chat_id: number, message_id: number }) {
    super();
    this.chat_id = params.chat_id;
    this.message_id = params.message_id;
  }
}

export class UpdateNewChat extends Update {
  "@type" = "updateNewChat"
  chat: Chat;

  constructor(params: { chat: Chat }) {
    super();
    this.chat = params.chat;
  }
}

export class UpdateChatTitle extends Update {
  "@type" = "updateChatTitle"
  chat_id: number;
  title: string;

  constructor(params: { chat_id: number, title: string }) {
    super();
    this.chat_id = params.chat_id;
    this.title = params.title;
  }
}

export class UpdateChatPhoto extends Update {
  "@type" = "updateChatPhoto"
  chat_id: number;
  photo: ChatPhotoInfo;

  constructor(params: { chat_id: number, photo: ChatPhotoInfo }) {
    super();
    this.chat_id = params.chat_id;
    this.photo = params.photo;
  }
}

export class UpdateChatPermissions extends Update {
  "@type" = "updateChatPermissions"
  chat_id: number;
  permissions: ChatPermissions;

  constructor(params: { chat_id: number, permissions: ChatPermissions }) {
    super();
    this.chat_id = params.chat_id;
    this.permissions = params.permissions;
  }
}

export class UpdateChatLastMessage extends Update {
  "@type" = "updateChatLastMessage"
  chat_id: number;
  last_message: Message;
  positions: ChatPosition[];

  constructor(params: { chat_id: number, last_message: Message, positions: ChatPosition[] }) {
    super();
    this.chat_id = params.chat_id;
    this.last_message = params.last_message;
    this.positions = params.positions;
  }
}

export class UpdateChatPosition extends Update {
  "@type" = "updateChatPosition"
  chat_id: number;
  position: ChatPosition;

  constructor(params: { chat_id: number, position: ChatPosition }) {
    super();
    this.chat_id = params.chat_id;
    this.position = params.position;
  }
}

export class UpdateChatReadInbox extends Update {
  "@type" = "updateChatReadInbox"
  chat_id: number;
  last_read_inbox_message_id: number;
  unread_count: number;

  constructor(params: { chat_id: number, last_read_inbox_message_id: number, unread_count: number }) {
    super();
    this.chat_id = params.chat_id;
    this.last_read_inbox_message_id = params.last_read_inbox_message_id;
    this.unread_count = params.unread_count;
  }
}

export class UpdateChatReadOutbox extends Update {
  "@type" = "updateChatReadOutbox"
  chat_id: number;
  last_read_outbox_message_id: number;

  constructor(params: { chat_id: number, last_read_outbox_message_id: number }) {
    super();
    this.chat_id = params.chat_id;
    this.last_read_outbox_message_id = params.last_read_outbox_message_id;
  }
}

export class UpdateChatActionBar extends Update {
  "@type" = "updateChatActionBar"
  action_bar: ChatActionBar;
  chat_id: number;

  constructor(params: { action_bar: ChatActionBar, chat_id: number }) {
    super();
    this.action_bar = params.action_bar;
    this.chat_id = params.chat_id;
  }
}

export class UpdateChatAvailableReactions extends Update {
  "@type" = "updateChatAvailableReactions"
  available_reactions: string[];
  chat_id: number;

  constructor(params: { available_reactions: string[], chat_id: number }) {
    super();
    this.available_reactions = params.available_reactions;
    this.chat_id = params.chat_id;
  }
}

export class UpdateChatDraftMessage extends Update {
  "@type" = "updateChatDraftMessage"
  chat_id: number;
  draft_message: DraftMessage;
  positions: ChatPosition[];

  constructor(params: { chat_id: number, draft_message: DraftMessage, positions: ChatPosition[] }) {
    super();
    this.chat_id = params.chat_id;
    this.draft_message = params.draft_message;
    this.positions = params.positions;
  }
}

export class UpdateChatMessageSender extends Update {
  "@type" = "updateChatMessageSender"
  chat_id: number;
  message_sender_id: MessageSender;

  constructor(params: { chat_id: number, message_sender_id: MessageSender }) {
    super();
    this.chat_id = params.chat_id;
    this.message_sender_id = params.message_sender_id;
  }
}

export class UpdateChatMessageTtl extends Update {
  "@type" = "updateChatMessageTtl"
  chat_id: number;
  message_ttl: number;

  constructor(params: { chat_id: number, message_ttl: number }) {
    super();
    this.chat_id = params.chat_id;
    this.message_ttl = params.message_ttl;
  }
}

export class UpdateChatNotificationSettings extends Update {
  "@type" = "updateChatNotificationSettings"
  chat_id: number;
  notification_settings: ChatNotificationSettings;

  constructor(params: { chat_id: number, notification_settings: ChatNotificationSettings }) {
    super();
    this.chat_id = params.chat_id;
    this.notification_settings = params.notification_settings;
  }
}

export class UpdateChatPendingJoinRequests extends Update {
  "@type" = "updateChatPendingJoinRequests"
  chat_id: number;
  pending_join_requests: ChatJoinRequestsInfo;

  constructor(params: { chat_id: number, pending_join_requests: ChatJoinRequestsInfo }) {
    super();
    this.chat_id = params.chat_id;
    this.pending_join_requests = params.pending_join_requests;
  }
}

export class UpdateChatReplyMarkup extends Update {
  "@type" = "updateChatReplyMarkup"
  chat_id: number;
  reply_markup_message_id: number;

  constructor(params: { chat_id: number, reply_markup_message_id: number }) {
    super();
    this.chat_id = params.chat_id;
    this.reply_markup_message_id = params.reply_markup_message_id;
  }
}

export class UpdateChatTheme extends Update {
  "@type" = "updateChatTheme"
  chat_id: number;
  theme_name: string;

  constructor(params: { chat_id: number, theme_name: string }) {
    super();
    this.chat_id = params.chat_id;
    this.theme_name = params.theme_name;
  }
}

export class UpdateChatUnreadMentionCount extends Update {
  "@type" = "updateChatUnreadMentionCount"
  chat_id: number;
  unread_mention_count: number;

  constructor(params: { chat_id: number, unread_mention_count: number }) {
    super();
    this.chat_id = params.chat_id;
    this.unread_mention_count = params.unread_mention_count;
  }
}

export class UpdateChatUnreadReactionCount extends Update {
  "@type" = "updateChatUnreadReactionCount"
  chat_id: number;
  unread_reaction_count: number;

  constructor(params: { chat_id: number, unread_reaction_count: number }) {
    super();
    this.chat_id = params.chat_id;
    this.unread_reaction_count = params.unread_reaction_count;
  }
}

export class UpdateChatVideoChat extends Update {
  "@type" = "updateChatVideoChat"
  chat_id: number;
  video_chat: VideoChat;

  constructor(params: { chat_id: number, video_chat: VideoChat }) {
    super();
    this.chat_id = params.chat_id;
    this.video_chat = params.video_chat;
  }
}

export class UpdateChatDefaultDisableNotification extends Update {
  "@type" = "updateChatDefaultDisableNotification"
  chat_id: number;
  default_disable_notification: boolean;

  constructor(params: { chat_id: number, default_disable_notification: boolean }) {
    super();
    this.chat_id = params.chat_id;
    this.default_disable_notification = params.default_disable_notification;
  }
}

export class UpdateChatHasProtectedContent extends Update {
  "@type" = "updateChatHasProtectedContent"
  chat_id: number;
  has_protected_content: boolean;

  constructor(params: { chat_id: number, has_protected_content: boolean }) {
    super();
    this.chat_id = params.chat_id;
    this.has_protected_content = params.has_protected_content;
  }
}

export class UpdateChatHasScheduledMessages extends Update {
  "@type" = "updateChatHasScheduledMessages"
  chat_id: number;
  has_scheduled_messages: boolean;

  constructor(params: { chat_id: number, has_scheduled_messages: boolean }) {
    super();
    this.chat_id = params.chat_id;
    this.has_scheduled_messages = params.has_scheduled_messages;
  }
}

export class UpdateChatIsBlocked extends Update {
  "@type" = "updateChatIsBlocked"
  chat_id: number;
  is_blocked: boolean;

  constructor(params: { chat_id: number, is_blocked: boolean }) {
    super();
    this.chat_id = params.chat_id;
    this.is_blocked = params.is_blocked;
  }
}

export class UpdateChatIsMarkedAsUnread extends Update {
  "@type" = "updateChatIsMarkedAsUnread"
  chat_id: number;
  is_marked_as_unread: boolean;

  constructor(params: { chat_id: number, is_marked_as_unread: boolean }) {
    super();
    this.chat_id = params.chat_id;
    this.is_marked_as_unread = params.is_marked_as_unread;
  }
}

export class UpdateChatFilters extends Update {
  "@type" = "updateChatFilters"
  chat_filters: ChatFilterInfo[];
  main_chat_list_position: number;

  constructor(params: { chat_filters: ChatFilterInfo[], main_chat_list_position: number }) {
    super();
    this.chat_filters = params.chat_filters;
    this.main_chat_list_position = params.main_chat_list_position;
  }
}

export class UpdateChatOnlineMemberCount extends Update {
  "@type" = "updateChatOnlineMemberCount"
  chat_id: number;
  online_member_count: number;

  constructor(params: { chat_id: number, online_member_count: number }) {
    super();
    this.chat_id = params.chat_id;
    this.online_member_count = params.online_member_count;
  }
}

export class UpdateScopeNotificationSettings extends Update {
  "@type" = "updateScopeNotificationSettings"
  notification_settings: ScopeNotificationSettings;
  scope: NotificationSettingsScope;

  constructor(params: { notification_settings: ScopeNotificationSettings, scope: NotificationSettingsScope }) {
    super();
    this.notification_settings = params.notification_settings;
    this.scope = params.scope;
  }
}

export class UpdateNotification extends Update {
  "@type" = "updateNotification"
  notification: Notification;
  notification_group_id: number;

  constructor(params: { notification: Notification, notification_group_id: number }) {
    super();
    this.notification = params.notification;
    this.notification_group_id = params.notification_group_id;
  }
}

export class UpdateNotificationGroup extends Update {
  "@type" = "updateNotificationGroup"
  added_notifications: Notification[];
  chat_id: number;
  notification_group_id: number;
  notification_settings_chat_id: number;
  notification_sound_id: number;
  removed_notification_ids: number[];
  total_count: number;
  type: NotificationGroupType;

  constructor(params: { added_notifications: Notification[], chat_id: number, notification_group_id: number, notification_settings_chat_id: number, notification_sound_id: number, removed_notification_ids: number[], total_count: number, type: NotificationGroupType }) {
    super();
    this.added_notifications = params.added_notifications;
    this.chat_id = params.chat_id;
    this.notification_group_id = params.notification_group_id;
    this.notification_settings_chat_id = params.notification_settings_chat_id;
    this.notification_sound_id = params.notification_sound_id;
    this.removed_notification_ids = params.removed_notification_ids;
    this.total_count = params.total_count;
    this.type = params.type;
  }
}

export class UpdateActiveNotifications extends Update {
  "@type" = "updateActiveNotifications"
  groups: NotificationGroup[];

  constructor(params: { groups: NotificationGroup[] }) {
    super();
    this.groups = params.groups;
  }
}

export class UpdateHavePendingNotifications extends Update {
  "@type" = "updateHavePendingNotifications"
  have_delayed_notifications: boolean;
  have_unreceived_notifications: boolean;

  constructor(params: { have_delayed_notifications: boolean, have_unreceived_notifications: boolean }) {
    super();
    this.have_delayed_notifications = params.have_delayed_notifications;
    this.have_unreceived_notifications = params.have_unreceived_notifications;
  }
}

export class UpdateDeleteMessages extends Update {
  "@type" = "updateDeleteMessages"
  chat_id: number;
  from_cache: boolean;
  is_permanent: boolean;
  message_ids: number[];

  constructor(params: { chat_id: number, from_cache: boolean, is_permanent: boolean, message_ids: number[] }) {
    super();
    this.chat_id = params.chat_id;
    this.from_cache = params.from_cache;
    this.is_permanent = params.is_permanent;
    this.message_ids = params.message_ids;
  }
}

export class UpdateChatAction extends Update {
  "@type" = "updateChatAction"
  action: ChatAction;
  chat_id: number;
  message_thread_id: number;
  sender_id: MessageSender;

  constructor(params: { action: ChatAction, chat_id: number, message_thread_id: number, sender_id: MessageSender }) {
    super();
    this.action = params.action;
    this.chat_id = params.chat_id;
    this.message_thread_id = params.message_thread_id;
    this.sender_id = params.sender_id;
  }
}

export class UpdateUserStatus extends Update {
  "@type" = "updateUserStatus"
  status: UserStatus;
  user_id: number;

  constructor(params: { status: UserStatus, user_id: number }) {
    super();
    this.status = params.status;
    this.user_id = params.user_id;
  }
}

export class UpdateUser extends Update {
  "@type" = "updateUser"
  user: User;

  constructor(params: { user: User }) {
    super();
    this.user = params.user;
  }
}

export class UpdateBasicGroup extends Update {
  "@type" = "updateBasicGroup"
  basic_group: BasicGroup;

  constructor(params: { basic_group: BasicGroup }) {
    super();
    this.basic_group = params.basic_group;
  }
}

export class UpdateSupergroup extends Update {
  "@type" = "updateSupergroup"
  supergroup: Supergroup;

  constructor(params: { supergroup: Supergroup }) {
    super();
    this.supergroup = params.supergroup;
  }
}

export class UpdateSecretChat extends Update {
  "@type" = "updateSecretChat"
  secret_chat: SecretChat;

  constructor(params: { secret_chat: SecretChat }) {
    super();
    this.secret_chat = params.secret_chat;
  }
}

export class UpdateUserFullInfo extends Update {
  "@type" = "updateUserFullInfo"
  user_full_info: UserFullInfo;
  user_id: number;

  constructor(params: { user_full_info: UserFullInfo, user_id: number }) {
    super();
    this.user_full_info = params.user_full_info;
    this.user_id = params.user_id;
  }
}

export class UpdateBasicGroupFullInfo extends Update {
  "@type" = "updateBasicGroupFullInfo"
  basic_group_full_info: BasicGroupFullInfo;
  basic_group_id: number;

  constructor(params: { basic_group_full_info: BasicGroupFullInfo, basic_group_id: number }) {
    super();
    this.basic_group_full_info = params.basic_group_full_info;
    this.basic_group_id = params.basic_group_id;
  }
}

export class UpdateSupergroupFullInfo extends Update {
  "@type" = "updateSupergroupFullInfo"
  supergroup_full_info: SupergroupFullInfo;
  supergroup_id: number;

  constructor(params: { supergroup_full_info: SupergroupFullInfo, supergroup_id: number }) {
    super();
    this.supergroup_full_info = params.supergroup_full_info;
    this.supergroup_id = params.supergroup_id;
  }
}

export class UpdateServiceNotification extends Update {
  "@type" = "updateServiceNotification"
  content: MessageContent;
  type: string;

  constructor(params: { content: MessageContent, type: string }) {
    super();
    this.content = params.content;
    this.type = params.type;
  }
}

export class UpdateFile extends Update {
  "@type" = "updateFile"
  file: File;

  constructor(params: { file: File }) {
    super();
    this.file = params.file;
  }
}

export class UpdateFileGenerationStart extends Update {
  "@type" = "updateFileGenerationStart"
  conversion: string;
  destination_path: string;
  generation_id: number;
  original_path: string;

  constructor(params: { conversion: string, destination_path: string, generation_id: number, original_path: string }) {
    super();
    this.conversion = params.conversion;
    this.destination_path = params.destination_path;
    this.generation_id = params.generation_id;
    this.original_path = params.original_path;
  }
}

export class UpdateFileGenerationStop extends Update {
  "@type" = "updateFileGenerationStop"
  generation_id: number;

  constructor(params: { generation_id: number }) {
    super();
    this.generation_id = params.generation_id;
  }
}

export class UpdateFileDownloads extends Update {
  "@type" = "updateFileDownloads"
  downloaded_size: number;
  total_count: number;
  total_size: number;

  constructor(params: { downloaded_size: number, total_count: number, total_size: number }) {
    super();
    this.downloaded_size = params.downloaded_size;
    this.total_count = params.total_count;
    this.total_size = params.total_size;
  }
}

export class UpdateFileAddedToDownloads extends Update {
  "@type" = "updateFileAddedToDownloads"
  counts: DownloadedFileCounts;
  file_download: FileDownload;

  constructor(params: { counts: DownloadedFileCounts, file_download: FileDownload }) {
    super();
    this.counts = params.counts;
    this.file_download = params.file_download;
  }
}

export class UpdateFileDownload extends Update {
  "@type" = "updateFileDownload"
  complete_date: number;
  counts: DownloadedFileCounts;
  file_id: number;
  is_paused: boolean;

  constructor(params: { complete_date: number, counts: DownloadedFileCounts, file_id: number, is_paused: boolean }) {
    super();
    this.complete_date = params.complete_date;
    this.counts = params.counts;
    this.file_id = params.file_id;
    this.is_paused = params.is_paused;
  }
}

export class UpdateFileRemovedFromDownloads extends Update {
  "@type" = "updateFileRemovedFromDownloads"
  counts: DownloadedFileCounts;
  file_id: number;

  constructor(params: { counts: DownloadedFileCounts, file_id: number }) {
    super();
    this.counts = params.counts;
    this.file_id = params.file_id;
  }
}

export class UpdateCall extends Update {
  "@type" = "updateCall"
  call: Call;

  constructor(params: { call: Call }) {
    super();
    this.call = params.call;
  }
}

export class UpdateGroupCall extends Update {
  "@type" = "updateGroupCall"
  group_call: GroupCall;

  constructor(params: { group_call: GroupCall }) {
    super();
    this.group_call = params.group_call;
  }
}

export class UpdateGroupCallParticipant extends Update {
  "@type" = "updateGroupCallParticipant"
  group_call_id: number;
  participant: GroupCallParticipant;

  constructor(params: { group_call_id: number, participant: GroupCallParticipant }) {
    super();
    this.group_call_id = params.group_call_id;
    this.participant = params.participant;
  }
}

export class UpdateNewCallSignalingData extends Update {
  "@type" = "updateNewCallSignalingData"
  call_id: number;
  data: string;

  constructor(params: { call_id: number, data: string }) {
    super();
    this.call_id = params.call_id;
    this.data = params.data;
  }
}

export class UpdateUserPrivacySettingRules extends Update {
  "@type" = "updateUserPrivacySettingRules"
  rules: UserPrivacySettingRules;
  setting: UserPrivacySetting;

  constructor(params: { rules: UserPrivacySettingRules, setting: UserPrivacySetting }) {
    super();
    this.rules = params.rules;
    this.setting = params.setting;
  }
}

export class UpdateUnreadMessageCount extends Update {
  "@type" = "updateUnreadMessageCount"
  chat_list: ChatList;
  unread_count: number;
  unread_unmuted_count: number;

  constructor(params: { chat_list: ChatList, unread_count: number, unread_unmuted_count: number }) {
    super();
    this.chat_list = params.chat_list;
    this.unread_count = params.unread_count;
    this.unread_unmuted_count = params.unread_unmuted_count;
  }
}

export class UpdateUnreadChatCount extends Update {
  "@type" = "updateUnreadChatCount"
  chat_list: ChatList;
  marked_as_unread_count: number;
  marked_as_unread_unmuted_count: number;
  total_count: number;
  unread_count: number;
  unread_unmuted_count: number;

  constructor(params: { chat_list: ChatList, marked_as_unread_count: number, marked_as_unread_unmuted_count: number, total_count: number, unread_count: number, unread_unmuted_count: number }) {
    super();
    this.chat_list = params.chat_list;
    this.marked_as_unread_count = params.marked_as_unread_count;
    this.marked_as_unread_unmuted_count = params.marked_as_unread_unmuted_count;
    this.total_count = params.total_count;
    this.unread_count = params.unread_count;
    this.unread_unmuted_count = params.unread_unmuted_count;
  }
}

export class UpdateOption extends Update {
  "@type" = "updateOption"
  name: string;
  value: OptionValue;

  constructor(params: { name: string, value: OptionValue }) {
    super();
    this.name = params.name;
    this.value = params.value;
  }
}

export class UpdateStickerSet extends Update {
  "@type" = "updateStickerSet"
  sticker_set: StickerSet;

  constructor(params: { sticker_set: StickerSet }) {
    super();
    this.sticker_set = params.sticker_set;
  }
}

export class UpdateInstalledStickerSets extends Update {
  "@type" = "updateInstalledStickerSets"
  sticker_set_ids: number[];
  sticker_type: StickerType;

  constructor(params: { sticker_set_ids: number[], sticker_type: StickerType }) {
    super();
    this.sticker_set_ids = params.sticker_set_ids;
    this.sticker_type = params.sticker_type;
  }
}

export class UpdateTrendingStickerSets extends Update {
  "@type" = "updateTrendingStickerSets"
  sticker_sets: TrendingStickerSets;
  sticker_type: StickerType;

  constructor(params: { sticker_sets: TrendingStickerSets, sticker_type: StickerType }) {
    super();
    this.sticker_sets = params.sticker_sets;
    this.sticker_type = params.sticker_type;
  }
}

export class UpdateRecentStickers extends Update {
  "@type" = "updateRecentStickers"
  is_attached: boolean;
  sticker_ids: number[];

  constructor(params: { is_attached: boolean, sticker_ids: number[] }) {
    super();
    this.is_attached = params.is_attached;
    this.sticker_ids = params.sticker_ids;
  }
}

export class UpdateFavoriteStickers extends Update {
  "@type" = "updateFavoriteStickers"
  sticker_ids: number[];

  constructor(params: { sticker_ids: number[] }) {
    super();
    this.sticker_ids = params.sticker_ids;
  }
}

export class UpdateSavedAnimations extends Update {
  "@type" = "updateSavedAnimations"
  animation_ids: number[];

  constructor(params: { animation_ids: number[] }) {
    super();
    this.animation_ids = params.animation_ids;
  }
}

export class UpdateSavedNotificationSounds extends Update {
  "@type" = "updateSavedNotificationSounds"
  notification_sound_ids: number[];

  constructor(params: { notification_sound_ids: number[] }) {
    super();
    this.notification_sound_ids = params.notification_sound_ids;
  }
}

export class UpdateSelectedBackground extends Update {
  "@type" = "updateSelectedBackground"
  background: Background;
  for_dark_theme: boolean;

  constructor(params: { background: Background, for_dark_theme: boolean }) {
    super();
    this.background = params.background;
    this.for_dark_theme = params.for_dark_theme;
  }
}

export class UpdateChatThemes extends Update {
  "@type" = "updateChatThemes"
  chat_themes: ChatTheme[];

  constructor(params: { chat_themes: ChatTheme[] }) {
    super();
    this.chat_themes = params.chat_themes;
  }
}

export class UpdateLanguagePackStrings extends Update {
  "@type" = "updateLanguagePackStrings"
  language_pack_id: string;
  localization_target: string;
  strings: LanguagePackString[];

  constructor(params: { language_pack_id: string, localization_target: string, strings: LanguagePackString[] }) {
    super();
    this.language_pack_id = params.language_pack_id;
    this.localization_target = params.localization_target;
    this.strings = params.strings;
  }
}

export class UpdateConnectionState extends Update {
  "@type" = "updateConnectionState"
  state: ConnectionState;

  constructor(params: { state: ConnectionState }) {
    super();
    this.state = params.state;
  }
}

export class UpdateTermsOfService extends Update {
  "@type" = "updateTermsOfService"
  terms_of_service: TermsOfService;
  terms_of_service_id: string;

  constructor(params: { terms_of_service: TermsOfService, terms_of_service_id: string }) {
    super();
    this.terms_of_service = params.terms_of_service;
    this.terms_of_service_id = params.terms_of_service_id;
  }
}

export class UpdateUsersNearby extends Update {
  "@type" = "updateUsersNearby"
  users_nearby: ChatNearby[];

  constructor(params: { users_nearby: ChatNearby[] }) {
    super();
    this.users_nearby = params.users_nearby;
  }
}

export class UpdateAttachmentMenuBots extends Update {
  "@type" = "updateAttachmentMenuBots"
  bots: AttachmentMenuBot[];

  constructor(params: { bots: AttachmentMenuBot[] }) {
    super();
    this.bots = params.bots;
  }
}

export class UpdateWebAppMessageSent extends Update {
  "@type" = "updateWebAppMessageSent"
  web_app_launch_id: number;

  constructor(params: { web_app_launch_id: number }) {
    super();
    this.web_app_launch_id = params.web_app_launch_id;
  }
}

export class UpdateReactions extends Update {
  "@type" = "updateReactions"
  reactions: Reaction[];

  constructor(params: { reactions: Reaction[] }) {
    super();
    this.reactions = params.reactions;
  }
}

export class UpdateDiceEmojis extends Update {
  "@type" = "updateDiceEmojis"
  emojis: string[];

  constructor(params: { emojis: string[] }) {
    super();
    this.emojis = params.emojis;
  }
}

export class UpdateAnimatedEmojiMessageClicked extends Update {
  "@type" = "updateAnimatedEmojiMessageClicked"
  chat_id: number;
  message_id: number;
  sticker: Sticker;

  constructor(params: { chat_id: number, message_id: number, sticker: Sticker }) {
    super();
    this.chat_id = params.chat_id;
    this.message_id = params.message_id;
    this.sticker = params.sticker;
  }
}

export class UpdateAnimationSearchParameters extends Update {
  "@type" = "updateAnimationSearchParameters"
  emojis: string[];
  provider: string;

  constructor(params: { emojis: string[], provider: string }) {
    super();
    this.emojis = params.emojis;
    this.provider = params.provider;
  }
}

export class UpdateSuggestedActions extends Update {
  "@type" = "updateSuggestedActions"
  added_actions: SuggestedAction[];
  removed_actions: SuggestedAction[];

  constructor(params: { added_actions: SuggestedAction[], removed_actions: SuggestedAction[] }) {
    super();
    this.added_actions = params.added_actions;
    this.removed_actions = params.removed_actions;
  }
}

export class UpdateNewInlineQuery extends Update {
  "@type" = "updateNewInlineQuery"
  chat_type?: ChatType;
  id: number;
  offset: string;
  query: string;
  sender_user_id: number;
  user_location: Location;

  constructor(params: { chat_type?: ChatType, id: number, offset: string, query: string, sender_user_id: number, user_location: Location }) {
    super();
    this.chat_type = params.chat_type;
    this.id = params.id;
    this.offset = params.offset;
    this.query = params.query;
    this.sender_user_id = params.sender_user_id;
    this.user_location = params.user_location;
  }
}

export class UpdateNewChosenInlineResult extends Update {
  "@type" = "updateNewChosenInlineResult"
  inline_message_id: string;
  query: string;
  result_id: string;
  sender_user_id: number;
  user_location: Location;

  constructor(params: { inline_message_id: string, query: string, result_id: string, sender_user_id: number, user_location: Location }) {
    super();
    this.inline_message_id = params.inline_message_id;
    this.query = params.query;
    this.result_id = params.result_id;
    this.sender_user_id = params.sender_user_id;
    this.user_location = params.user_location;
  }
}

export class UpdateNewCallbackQuery extends Update {
  "@type" = "updateNewCallbackQuery"
  chat_id: number;
  chat_instance: number;
  id: number;
  message_id: number;
  payload: CallbackQueryPayload;
  sender_user_id: number;

  constructor(params: { chat_id: number, chat_instance: number, id: number, message_id: number, payload: CallbackQueryPayload, sender_user_id: number }) {
    super();
    this.chat_id = params.chat_id;
    this.chat_instance = params.chat_instance;
    this.id = params.id;
    this.message_id = params.message_id;
    this.payload = params.payload;
    this.sender_user_id = params.sender_user_id;
  }
}

export class UpdateNewInlineCallbackQuery extends Update {
  "@type" = "updateNewInlineCallbackQuery"
  chat_instance: number;
  id: number;
  inline_message_id: string;
  payload: CallbackQueryPayload;
  sender_user_id: number;

  constructor(params: { chat_instance: number, id: number, inline_message_id: string, payload: CallbackQueryPayload, sender_user_id: number }) {
    super();
    this.chat_instance = params.chat_instance;
    this.id = params.id;
    this.inline_message_id = params.inline_message_id;
    this.payload = params.payload;
    this.sender_user_id = params.sender_user_id;
  }
}

export class UpdateNewShippingQuery extends Update {
  "@type" = "updateNewShippingQuery"
  id: number;
  invoice_payload: string;
  sender_user_id: number;
  shipping_address: Address;

  constructor(params: { id: number, invoice_payload: string, sender_user_id: number, shipping_address: Address }) {
    super();
    this.id = params.id;
    this.invoice_payload = params.invoice_payload;
    this.sender_user_id = params.sender_user_id;
    this.shipping_address = params.shipping_address;
  }
}

export class UpdateNewPreCheckoutQuery extends Update {
  "@type" = "updateNewPreCheckoutQuery"
  currency: string;
  id: number;
  invoice_payload: string;
  order_info?: OrderInfo;
  sender_user_id: number;
  shipping_option_id: string;
  total_amount: number;

  constructor(params: { currency: string, id: number, invoice_payload: string, order_info?: OrderInfo, sender_user_id: number, shipping_option_id: string, total_amount: number }) {
    super();
    this.currency = params.currency;
    this.id = params.id;
    this.invoice_payload = params.invoice_payload;
    this.order_info = params.order_info;
    this.sender_user_id = params.sender_user_id;
    this.shipping_option_id = params.shipping_option_id;
    this.total_amount = params.total_amount;
  }
}

export class UpdateNewCustomEvent extends Update {
  "@type" = "updateNewCustomEvent"
  event: string;

  constructor(params: { event: string }) {
    super();
    this.event = params.event;
  }
}

export class UpdateNewCustomQuery extends Update {
  "@type" = "updateNewCustomQuery"
  data: string;
  id: number;
  timeout: number;

  constructor(params: { data: string, id: number, timeout: number }) {
    super();
    this.data = params.data;
    this.id = params.id;
    this.timeout = params.timeout;
  }
}

export class UpdatePoll extends Update {
  "@type" = "updatePoll"
  poll: Poll;

  constructor(params: { poll: Poll }) {
    super();
    this.poll = params.poll;
  }
}

export class UpdatePollAnswer extends Update {
  "@type" = "updatePollAnswer"
  option_ids: number[];
  poll_id: number;
  user_id: number;

  constructor(params: { option_ids: number[], poll_id: number, user_id: number }) {
    super();
    this.option_ids = params.option_ids;
    this.poll_id = params.poll_id;
    this.user_id = params.user_id;
  }
}

export class UpdateChatMember extends Update {
  "@type" = "updateChatMember"
  actor_user_id: number;
  chat_id: number;
  date: number;
  invite_link?: ChatInviteLink;
  new_chat_member: ChatMember;
  old_chat_member: ChatMember;

  constructor(params: { actor_user_id: number, chat_id: number, date: number, invite_link?: ChatInviteLink, new_chat_member: ChatMember, old_chat_member: ChatMember }) {
    super();
    this.actor_user_id = params.actor_user_id;
    this.chat_id = params.chat_id;
    this.date = params.date;
    this.invite_link = params.invite_link;
    this.new_chat_member = params.new_chat_member;
    this.old_chat_member = params.old_chat_member;
  }
}

export class UpdateNewChatJoinRequest extends Update {
  "@type" = "updateNewChatJoinRequest"
  chat_id: number;
  invite_link: ChatInviteLink;
  request: ChatJoinRequest;

  constructor(params: { chat_id: number, invite_link: ChatInviteLink, request: ChatJoinRequest }) {
    super();
    this.chat_id = params.chat_id;
    this.invite_link = params.invite_link;
    this.request = params.request;
  }
}

export class Updates extends Class {
  "@type" = "updates"
  updates: Update[];

  constructor(params: { updates: Update[] }) {
    super();
    this.updates = params.updates;
  }
}

/**
 * Describes a stream to which TDLib internal log is written
 */
export class LogStream extends Class {
}

export class LogStreamDefault extends LogStream {
  "@type" = "logStreamDefault"

  constructor(params: {}) {
    super();
  }
}

export class LogStreamFile extends LogStream {
  "@type" = "logStreamFile"
  max_file_size: number;
  path: string;
  redirect_stderr: boolean;

  constructor(params: { max_file_size: number, path: string, redirect_stderr: boolean }) {
    super();
    this.max_file_size = params.max_file_size;
    this.path = params.path;
    this.redirect_stderr = params.redirect_stderr;
  }
}

export class LogStreamEmpty extends LogStream {
  "@type" = "logStreamEmpty"

  constructor(params: {}) {
    super();
  }
}

export class LogVerbosityLevel extends Class {
  "@type" = "logVerbosityLevel"
  verbosity_level: number;

  constructor(params: { verbosity_level: number }) {
    super();
    this.verbosity_level = params.verbosity_level;
  }
}

export class LogTags extends Class {
  "@type" = "logTags"
  tags: string[];

  constructor(params: { tags: string[] }) {
    super();
    this.tags = params.tags;
  }
}

export class UserSupportInfo extends Class {
  "@type" = "userSupportInfo"
  author: string;
  date: number;
  message: FormattedText;

  constructor(params: { author: string, date: number, message: FormattedText }) {
    super();
    this.author = params.author;
    this.date = params.date;
    this.message = params.message;
  }
}

export class TestInt extends Class {
  "@type" = "testInt"
  value: number;

  constructor(params: { value: number }) {
    super();
    this.value = params.value;
  }
}

export class TestString extends Class {
  "@type" = "testString"
  value: string;

  constructor(params: { value: string }) {
    super();
    this.value = params.value;
  }
}

export class TestBytes extends Class {
  "@type" = "testBytes"
  value: string;

  constructor(params: { value: string }) {
    super();
    this.value = params.value;
  }
}

export class TestVectorInt extends Class {
  "@type" = "testVectorInt"
  value: number[];

  constructor(params: { value: number[] }) {
    super();
    this.value = params.value;
  }
}

export class TestVectorIntObject extends Class {
  "@type" = "testVectorIntObject"
  value: TestInt[];

  constructor(params: { value: TestInt[] }) {
    super();
    this.value = params.value;
  }
}

export class TestVectorString extends Class {
  "@type" = "testVectorString"
  value: string[];

  constructor(params: { value: string[] }) {
    super();
    this.value = params.value;
  }
}

export class TestVectorStringObject extends Class {
  "@type" = "testVectorStringObject"
  value: TestString[];

  constructor(params: { value: TestString[] }) {
    super();
    this.value = params.value;
  }
}

// This was generated. Do not edit.
