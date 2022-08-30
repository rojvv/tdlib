// This was generated. Do not edit.
// deno-lint-ignore-file
// deno-fmt-ignore-file

import { BaseClient } from "./base_client.ts";
import * as classes from "./classes.ts";

export class Client extends BaseClient {
  getAuthorizationState(): Promise<classes.AuthorizationState> {
    return this.send({ "@type": "getAuthorizationState" });
  }

  setTdlibParameters(params: { parameters: classes.TdlibParameters }): Promise<classes.Ok> {
    return this.send({ "@type": "setTdlibParameters" , ...params });
  }

  checkDatabaseEncryptionKey(params: { encryption_key: string }): Promise<classes.Ok> {
    return this.send({ "@type": "checkDatabaseEncryptionKey" , ...params });
  }

  setAuthenticationPhoneNumber(params: { phone_number: string, settings?: classes.PhoneNumberAuthenticationSettings }): Promise<classes.Ok> {
    return this.send({ "@type": "setAuthenticationPhoneNumber" , ...params });
  }

  resendAuthenticationCode(): Promise<classes.Ok> {
    return this.send({ "@type": "resendAuthenticationCode" });
  }

  checkAuthenticationCode(params: { code: string }): Promise<classes.Ok> {
    return this.send({ "@type": "checkAuthenticationCode" , ...params });
  }

  requestQrCodeAuthentication(params: { other_user_ids: number[] }): Promise<classes.Ok> {
    return this.send({ "@type": "requestQrCodeAuthentication" , ...params });
  }

  registerUser(params: { first_name: string, last_name: string }): Promise<classes.Ok> {
    return this.send({ "@type": "registerUser" , ...params });
  }

  checkAuthenticationPassword(params: { password: string }): Promise<classes.Ok> {
    return this.send({ "@type": "checkAuthenticationPassword" , ...params });
  }

  requestAuthenticationPasswordRecovery(): Promise<classes.Ok> {
    return this.send({ "@type": "requestAuthenticationPasswordRecovery" });
  }

  checkAuthenticationPasswordRecoveryCode(params: { recovery_code: string }): Promise<classes.Ok> {
    return this.send({ "@type": "checkAuthenticationPasswordRecoveryCode" , ...params });
  }

  recoverAuthenticationPassword(params: { new_hint: string, new_password: string, recovery_code: string }): Promise<classes.Ok> {
    return this.send({ "@type": "recoverAuthenticationPassword" , ...params });
  }

  checkAuthenticationBotToken(params: { token: string }): Promise<classes.Ok> {
    return this.send({ "@type": "checkAuthenticationBotToken" , ...params });
  }

  logOut(): Promise<classes.Ok> {
    return this.send({ "@type": "logOut" });
  }

  close(): Promise<classes.Ok> {
    return this.send({ "@type": "close" });
  }

  destroy(): Promise<classes.Ok> {
    return this.send({ "@type": "destroy" });
  }

  confirmQrCodeAuthentication(params: { link: string }): Promise<classes.Session> {
    return this.send({ "@type": "confirmQrCodeAuthentication" , ...params });
  }

  getCurrentState(): Promise<classes.Updates> {
    return this.send({ "@type": "getCurrentState" });
  }

  setDatabaseEncryptionKey(params: { new_encryption_key: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setDatabaseEncryptionKey" , ...params });
  }

  getPasswordState(): Promise<classes.PasswordState> {
    return this.send({ "@type": "getPasswordState" });
  }

  setPassword(params: { new_hint: string, new_password: string, new_recovery_email_address: string, old_password: string, set_recovery_email_address: boolean }): Promise<classes.PasswordState> {
    return this.send({ "@type": "setPassword" , ...params });
  }

  getRecoveryEmailAddress(params: { password: string }): Promise<classes.RecoveryEmailAddress> {
    return this.send({ "@type": "getRecoveryEmailAddress" , ...params });
  }

  setRecoveryEmailAddress(params: { new_recovery_email_address: string, password: string }): Promise<classes.PasswordState> {
    return this.send({ "@type": "setRecoveryEmailAddress" , ...params });
  }

  checkRecoveryEmailAddressCode(params: { code: string }): Promise<classes.PasswordState> {
    return this.send({ "@type": "checkRecoveryEmailAddressCode" , ...params });
  }

  resendRecoveryEmailAddressCode(): Promise<classes.PasswordState> {
    return this.send({ "@type": "resendRecoveryEmailAddressCode" });
  }

  requestPasswordRecovery(): Promise<classes.EmailAddressAuthenticationCodeInfo> {
    return this.send({ "@type": "requestPasswordRecovery" });
  }

  checkPasswordRecoveryCode(params: { recovery_code: string }): Promise<classes.Ok> {
    return this.send({ "@type": "checkPasswordRecoveryCode" , ...params });
  }

  recoverPassword(params: { new_hint: string, new_password: string, recovery_code: string }): Promise<classes.PasswordState> {
    return this.send({ "@type": "recoverPassword" , ...params });
  }

  resetPassword(): Promise<classes.ResetPasswordResult> {
    return this.send({ "@type": "resetPassword" });
  }

  cancelPasswordReset(): Promise<classes.Ok> {
    return this.send({ "@type": "cancelPasswordReset" });
  }

  createTemporaryPassword(params: { password: string, valid_for: number }): Promise<classes.TemporaryPasswordState> {
    return this.send({ "@type": "createTemporaryPassword" , ...params });
  }

  getTemporaryPasswordState(): Promise<classes.TemporaryPasswordState> {
    return this.send({ "@type": "getTemporaryPasswordState" });
  }

  getMe(): Promise<classes.User> {
    return this.send({ "@type": "getMe" });
  }

  getUser(params: { user_id: number }): Promise<classes.User> {
    return this.send({ "@type": "getUser" , ...params });
  }

  getUserFullInfo(params: { user_id: number }): Promise<classes.UserFullInfo> {
    return this.send({ "@type": "getUserFullInfo" , ...params });
  }

  getBasicGroup(params: { basic_group_id: number }): Promise<classes.BasicGroup> {
    return this.send({ "@type": "getBasicGroup" , ...params });
  }

  getBasicGroupFullInfo(params: { basic_group_id: number }): Promise<classes.BasicGroupFullInfo> {
    return this.send({ "@type": "getBasicGroupFullInfo" , ...params });
  }

  getSupergroup(params: { supergroup_id: number }): Promise<classes.Supergroup> {
    return this.send({ "@type": "getSupergroup" , ...params });
  }

  getSupergroupFullInfo(params: { supergroup_id: number }): Promise<classes.SupergroupFullInfo> {
    return this.send({ "@type": "getSupergroupFullInfo" , ...params });
  }

  getSecretChat(params: { secret_chat_id: number }): Promise<classes.SecretChat> {
    return this.send({ "@type": "getSecretChat" , ...params });
  }

  getChat(params: { chat_id: number }): Promise<classes.Chat> {
    return this.send({ "@type": "getChat" , ...params });
  }

  getMessage(params: { chat_id: number, message_id: number }): Promise<classes.Message> {
    return this.send({ "@type": "getMessage" , ...params });
  }

  getMessageLocally(params: { chat_id: number, message_id: number }): Promise<classes.Message> {
    return this.send({ "@type": "getMessageLocally" , ...params });
  }

  getRepliedMessage(params: { chat_id: number, message_id: number }): Promise<classes.Message> {
    return this.send({ "@type": "getRepliedMessage" , ...params });
  }

  getChatPinnedMessage(params: { chat_id: number }): Promise<classes.Message> {
    return this.send({ "@type": "getChatPinnedMessage" , ...params });
  }

  getCallbackQueryMessage(params: { callback_query_id: number, chat_id: number, message_id: number }): Promise<classes.Message> {
    return this.send({ "@type": "getCallbackQueryMessage" , ...params });
  }

  getMessages(params: { chat_id: number, message_ids: number[] }): Promise<classes.Messages> {
    return this.send({ "@type": "getMessages" , ...params });
  }

  getMessageThread(params: { chat_id: number, message_id: number }): Promise<classes.MessageThreadInfo> {
    return this.send({ "@type": "getMessageThread" , ...params });
  }

  getMessageViewers(params: { chat_id: number, message_id: number }): Promise<classes.Users> {
    return this.send({ "@type": "getMessageViewers" , ...params });
  }

  getFile(params: { file_id: number }): Promise<classes.File> {
    return this.send({ "@type": "getFile" , ...params });
  }

  getRemoteFile(params: { file_type?: classes.FileType, remote_file_id: string }): Promise<classes.File> {
    return this.send({ "@type": "getRemoteFile" , ...params });
  }

  loadChats(params: { chat_list?: classes.ChatList, limit: number }): Promise<classes.Ok> {
    return this.send({ "@type": "loadChats" , ...params });
  }

  getChats(params: { chat_list?: classes.ChatList, limit: number }): Promise<classes.Chats> {
    return this.send({ "@type": "getChats" , ...params });
  }

  searchPublicChat(params: { username: string }): Promise<classes.Chat> {
    return this.send({ "@type": "searchPublicChat" , ...params });
  }

  searchPublicChats(params: { query: string }): Promise<classes.Chats> {
    return this.send({ "@type": "searchPublicChats" , ...params });
  }

  searchChats(params: { limit: number, query: string }): Promise<classes.Chats> {
    return this.send({ "@type": "searchChats" , ...params });
  }

  searchChatsOnServer(params: { limit: number, query: string }): Promise<classes.Chats> {
    return this.send({ "@type": "searchChatsOnServer" , ...params });
  }

  searchChatsNearby(params: { location: classes.Location }): Promise<classes.ChatsNearby> {
    return this.send({ "@type": "searchChatsNearby" , ...params });
  }

  getTopChats(params: { category: classes.TopChatCategory, limit: number }): Promise<classes.Chats> {
    return this.send({ "@type": "getTopChats" , ...params });
  }

  removeTopChat(params: { category: classes.TopChatCategory, chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "removeTopChat" , ...params });
  }

  addRecentlyFoundChat(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "addRecentlyFoundChat" , ...params });
  }

  removeRecentlyFoundChat(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "removeRecentlyFoundChat" , ...params });
  }

  clearRecentlyFoundChats(): Promise<classes.Ok> {
    return this.send({ "@type": "clearRecentlyFoundChats" });
  }

  getRecentlyOpenedChats(params: { limit: number }): Promise<classes.Chats> {
    return this.send({ "@type": "getRecentlyOpenedChats" , ...params });
  }

  checkChatUsername(params: { chat_id: number, username: string }): Promise<classes.CheckChatUsernameResult> {
    return this.send({ "@type": "checkChatUsername" , ...params });
  }

  getCreatedPublicChats(params: { type: classes.PublicChatType }): Promise<classes.Chats> {
    return this.send({ "@type": "getCreatedPublicChats" , ...params });
  }

  checkCreatedPublicChatsLimit(params: { type: classes.PublicChatType }): Promise<classes.Ok> {
    return this.send({ "@type": "checkCreatedPublicChatsLimit" , ...params });
  }

  getSuitableDiscussionChats(): Promise<classes.Chats> {
    return this.send({ "@type": "getSuitableDiscussionChats" });
  }

  getInactiveSupergroupChats(): Promise<classes.Chats> {
    return this.send({ "@type": "getInactiveSupergroupChats" });
  }

  getGroupsInCommon(params: { limit: number, offset_chat_id: number, user_id: number }): Promise<classes.Chats> {
    return this.send({ "@type": "getGroupsInCommon" , ...params });
  }

  getChatHistory(params: { chat_id: number, from_message_id: number, limit: number, offset: number, only_local: boolean }): Promise<classes.Messages> {
    return this.send({ "@type": "getChatHistory" , ...params });
  }

  getMessageThreadHistory(params: { chat_id: number, from_message_id: number, limit: number, message_id: number, offset: number }): Promise<classes.Messages> {
    return this.send({ "@type": "getMessageThreadHistory" , ...params });
  }

  deleteChatHistory(params: { chat_id: number, remove_from_chat_list: boolean, revoke: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteChatHistory" , ...params });
  }

  deleteChat(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteChat" , ...params });
  }

  searchChatMessages(params: { chat_id: number, filter?: classes.SearchMessagesFilter, from_message_id: number, limit: number, message_thread_id: number, offset: number, query: string, sender_id?: classes.MessageSender }): Promise<classes.Messages> {
    return this.send({ "@type": "searchChatMessages" , ...params });
  }

  searchMessages(params: { chat_list?: classes.ChatList, filter?: classes.SearchMessagesFilter, limit: number, max_date: number, min_date: number, offset_chat_id: number, offset_date: number, offset_message_id: number, query: string }): Promise<classes.Messages> {
    return this.send({ "@type": "searchMessages" , ...params });
  }

  searchSecretMessages(params: { chat_id: number, filter?: classes.SearchMessagesFilter, limit: number, offset: string, query: string }): Promise<classes.FoundMessages> {
    return this.send({ "@type": "searchSecretMessages" , ...params });
  }

  searchCallMessages(params: { from_message_id: number, limit: number, only_missed: boolean }): Promise<classes.Messages> {
    return this.send({ "@type": "searchCallMessages" , ...params });
  }

  searchOutgoingDocumentMessages(params: { limit: number, query: string }): Promise<classes.FoundMessages> {
    return this.send({ "@type": "searchOutgoingDocumentMessages" , ...params });
  }

  deleteAllCallMessages(params: { revoke: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteAllCallMessages" , ...params });
  }

  searchChatRecentLocationMessages(params: { chat_id: number, limit: number }): Promise<classes.Messages> {
    return this.send({ "@type": "searchChatRecentLocationMessages" , ...params });
  }

  getActiveLiveLocationMessages(): Promise<classes.Messages> {
    return this.send({ "@type": "getActiveLiveLocationMessages" });
  }

  getChatMessageByDate(params: { chat_id: number, date: number }): Promise<classes.Message> {
    return this.send({ "@type": "getChatMessageByDate" , ...params });
  }

  getChatSparseMessagePositions(params: { chat_id: number, filter: classes.SearchMessagesFilter, from_message_id: number, limit: number }): Promise<classes.MessagePositions> {
    return this.send({ "@type": "getChatSparseMessagePositions" , ...params });
  }

  getChatMessageCalendar(params: { chat_id: number, filter: classes.SearchMessagesFilter, from_message_id: number }): Promise<classes.MessageCalendar> {
    return this.send({ "@type": "getChatMessageCalendar" , ...params });
  }

  getChatMessageCount(params: { chat_id: number, filter: classes.SearchMessagesFilter, return_local: boolean }): Promise<classes.Count> {
    return this.send({ "@type": "getChatMessageCount" , ...params });
  }

  getChatScheduledMessages(params: { chat_id: number }): Promise<classes.Messages> {
    return this.send({ "@type": "getChatScheduledMessages" , ...params });
  }

  getMessagePublicForwards(params: { chat_id: number, limit: number, message_id: number, offset: string }): Promise<classes.FoundMessages> {
    return this.send({ "@type": "getMessagePublicForwards" , ...params });
  }

  getChatSponsoredMessage(params: { chat_id: number }): Promise<classes.SponsoredMessage> {
    return this.send({ "@type": "getChatSponsoredMessage" , ...params });
  }

  removeNotification(params: { notification_group_id: number, notification_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "removeNotification" , ...params });
  }

  removeNotificationGroup(params: { max_notification_id: number, notification_group_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "removeNotificationGroup" , ...params });
  }

  getMessageLink(params: { chat_id: number, for_album: boolean, for_comment: boolean, media_timestamp: number, message_id: number }): Promise<classes.MessageLink> {
    return this.send({ "@type": "getMessageLink" , ...params });
  }

  getMessageEmbeddingCode(params: { chat_id: number, for_album: boolean, message_id: number }): Promise<classes.Text> {
    return this.send({ "@type": "getMessageEmbeddingCode" , ...params });
  }

  getMessageLinkInfo(params: { url: string }): Promise<classes.MessageLinkInfo> {
    return this.send({ "@type": "getMessageLinkInfo" , ...params });
  }

  translateText(params: { from_language_code: string, text: string, to_language_code: string }): Promise<classes.Text> {
    return this.send({ "@type": "translateText" , ...params });
  }

  recognizeSpeech(params: { chat_id: number, message_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "recognizeSpeech" , ...params });
  }

  rateSpeechRecognition(params: { chat_id: number, is_good: boolean, message_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "rateSpeechRecognition" , ...params });
  }

  getChatAvailableMessageSenders(params: { chat_id: number }): Promise<classes.MessageSenders> {
    return this.send({ "@type": "getChatAvailableMessageSenders" , ...params });
  }

  setChatMessageSender(params: { chat_id: number, message_sender_id: classes.MessageSender }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatMessageSender" , ...params });
  }

  sendMessage(params: { chat_id: number, input_message_content: classes.InputMessageContent, message_thread_id: number, options?: classes.MessageSendOptions, reply_markup?: classes.ReplyMarkup, reply_to_message_id: number }): Promise<classes.Message> {
    return this.send({ "@type": "sendMessage" , ...params });
  }

  sendMessageAlbum(params: { chat_id: number, input_message_contents: classes.InputMessageContent[], message_thread_id: number, only_preview: boolean, options?: classes.MessageSendOptions, reply_to_message_id: number }): Promise<classes.Messages> {
    return this.send({ "@type": "sendMessageAlbum" , ...params });
  }

  sendBotStartMessage(params: { bot_user_id: number, chat_id: number, parameter: string }): Promise<classes.Message> {
    return this.send({ "@type": "sendBotStartMessage" , ...params });
  }

  sendInlineQueryResultMessage(params: { chat_id: number, hide_via_bot: boolean, message_thread_id: number, options?: classes.MessageSendOptions, query_id: number, reply_to_message_id: number, result_id: string }): Promise<classes.Message> {
    return this.send({ "@type": "sendInlineQueryResultMessage" , ...params });
  }

  forwardMessages(params: { chat_id: number, from_chat_id: number, message_ids: number[], only_preview: boolean, options?: classes.MessageSendOptions, remove_caption: boolean, send_copy: boolean }): Promise<classes.Messages> {
    return this.send({ "@type": "forwardMessages" , ...params });
  }

  resendMessages(params: { chat_id: number, message_ids: number[] }): Promise<classes.Messages> {
    return this.send({ "@type": "resendMessages" , ...params });
  }

  sendChatScreenshotTakenNotification(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "sendChatScreenshotTakenNotification" , ...params });
  }

  addLocalMessage(params: { chat_id: number, disable_notification: boolean, input_message_content: classes.InputMessageContent, reply_to_message_id: number, sender_id: classes.MessageSender }): Promise<classes.Message> {
    return this.send({ "@type": "addLocalMessage" , ...params });
  }

  deleteMessages(params: { chat_id: number, message_ids: number[], revoke: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteMessages" , ...params });
  }

  deleteChatMessagesBySender(params: { chat_id: number, sender_id: classes.MessageSender }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteChatMessagesBySender" , ...params });
  }

  deleteChatMessagesByDate(params: { chat_id: number, max_date: number, min_date: number, revoke: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteChatMessagesByDate" , ...params });
  }

  editMessageText(params: { chat_id: number, input_message_content: classes.InputMessageContent, message_id: number, reply_markup?: classes.ReplyMarkup }): Promise<classes.Message> {
    return this.send({ "@type": "editMessageText" , ...params });
  }

  editMessageLiveLocation(params: { chat_id: number, heading: number, location?: classes.Location, message_id: number, proximity_alert_radius: number, reply_markup?: classes.ReplyMarkup }): Promise<classes.Message> {
    return this.send({ "@type": "editMessageLiveLocation" , ...params });
  }

  editMessageMedia(params: { chat_id: number, input_message_content: classes.InputMessageContent, message_id: number, reply_markup?: classes.ReplyMarkup }): Promise<classes.Message> {
    return this.send({ "@type": "editMessageMedia" , ...params });
  }

  editMessageCaption(params: { caption?: classes.FormattedText, chat_id: number, message_id: number, reply_markup?: classes.ReplyMarkup }): Promise<classes.Message> {
    return this.send({ "@type": "editMessageCaption" , ...params });
  }

  editMessageReplyMarkup(params: { chat_id: number, message_id: number, reply_markup?: classes.ReplyMarkup }): Promise<classes.Message> {
    return this.send({ "@type": "editMessageReplyMarkup" , ...params });
  }

  editInlineMessageText(params: { inline_message_id: string, input_message_content: classes.InputMessageContent, reply_markup?: classes.ReplyMarkup }): Promise<classes.Ok> {
    return this.send({ "@type": "editInlineMessageText" , ...params });
  }

  editInlineMessageLiveLocation(params: { heading: number, inline_message_id: string, location?: classes.Location, proximity_alert_radius: number, reply_markup?: classes.ReplyMarkup }): Promise<classes.Ok> {
    return this.send({ "@type": "editInlineMessageLiveLocation" , ...params });
  }

  editInlineMessageMedia(params: { inline_message_id: string, input_message_content: classes.InputMessageContent, reply_markup?: classes.ReplyMarkup }): Promise<classes.Ok> {
    return this.send({ "@type": "editInlineMessageMedia" , ...params });
  }

  editInlineMessageCaption(params: { caption?: classes.FormattedText, inline_message_id: string, reply_markup?: classes.ReplyMarkup }): Promise<classes.Ok> {
    return this.send({ "@type": "editInlineMessageCaption" , ...params });
  }

  editInlineMessageReplyMarkup(params: { inline_message_id: string, reply_markup?: classes.ReplyMarkup }): Promise<classes.Ok> {
    return this.send({ "@type": "editInlineMessageReplyMarkup" , ...params });
  }

  editMessageSchedulingState(params: { chat_id: number, message_id: number, scheduling_state?: classes.MessageSchedulingState }): Promise<classes.Ok> {
    return this.send({ "@type": "editMessageSchedulingState" , ...params });
  }

  getMessageAvailableReactions(params: { chat_id: number, message_id: number }): Promise<classes.AvailableReactions> {
    return this.send({ "@type": "getMessageAvailableReactions" , ...params });
  }

  setMessageReaction(params: { chat_id: number, is_big: boolean, message_id: number, reaction: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setMessageReaction" , ...params });
  }

  getMessageAddedReactions(params: { chat_id: number, limit: number, message_id: number, offset: string, reaction: string }): Promise<classes.AddedReactions> {
    return this.send({ "@type": "getMessageAddedReactions" , ...params });
  }

  getTextEntities(params: { text: string }): Promise<classes.TextEntities> {
    return this.send({ "@type": "getTextEntities" , ...params });
  }

  parseTextEntities(params: { parse_mode: classes.TextParseMode, text: string }): Promise<classes.FormattedText> {
    return this.send({ "@type": "parseTextEntities" , ...params });
  }

  parseMarkdown(params: { text: classes.FormattedText }): Promise<classes.FormattedText> {
    return this.send({ "@type": "parseMarkdown" , ...params });
  }

  getMarkdownText(params: { text: classes.FormattedText }): Promise<classes.FormattedText> {
    return this.send({ "@type": "getMarkdownText" , ...params });
  }

  getFileMimeType(params: { file_name: string }): Promise<classes.Text> {
    return this.send({ "@type": "getFileMimeType" , ...params });
  }

  getFileExtension(params: { mime_type: string }): Promise<classes.Text> {
    return this.send({ "@type": "getFileExtension" , ...params });
  }

  cleanFileName(params: { file_name: string }): Promise<classes.Text> {
    return this.send({ "@type": "cleanFileName" , ...params });
  }

  getLanguagePackString(params: { key: string, language_pack_database_path: string, language_pack_id: string, localization_target: string }): Promise<classes.LanguagePackStringValue> {
    return this.send({ "@type": "getLanguagePackString" , ...params });
  }

  getJsonValue(params: { json: string }): Promise<classes.JsonValue> {
    return this.send({ "@type": "getJsonValue" , ...params });
  }

  getJsonString(params: { json_value: classes.JsonValue }): Promise<classes.Text> {
    return this.send({ "@type": "getJsonString" , ...params });
  }

  getThemeParametersJsonString(params: { theme: classes.ThemeParameters }): Promise<classes.Text> {
    return this.send({ "@type": "getThemeParametersJsonString" , ...params });
  }

  setPollAnswer(params: { chat_id: number, message_id: number, option_ids: number[] }): Promise<classes.Ok> {
    return this.send({ "@type": "setPollAnswer" , ...params });
  }

  getPollVoters(params: { chat_id: number, limit: number, message_id: number, offset: number, option_id: number }): Promise<classes.Users> {
    return this.send({ "@type": "getPollVoters" , ...params });
  }

  stopPoll(params: { chat_id: number, message_id: number, reply_markup?: classes.ReplyMarkup }): Promise<classes.Ok> {
    return this.send({ "@type": "stopPoll" , ...params });
  }

  hideSuggestedAction(params: { action: classes.SuggestedAction }): Promise<classes.Ok> {
    return this.send({ "@type": "hideSuggestedAction" , ...params });
  }

  getLoginUrlInfo(params: { button_id: number, chat_id: number, message_id: number }): Promise<classes.LoginUrlInfo> {
    return this.send({ "@type": "getLoginUrlInfo" , ...params });
  }

  getLoginUrl(params: { allow_write_access: boolean, button_id: number, chat_id: number, message_id: number }): Promise<classes.HttpUrl> {
    return this.send({ "@type": "getLoginUrl" , ...params });
  }

  getInlineQueryResults(params: { bot_user_id: number, chat_id: number, offset: string, query: string, user_location?: classes.Location }): Promise<classes.InlineQueryResults> {
    return this.send({ "@type": "getInlineQueryResults" , ...params });
  }

  answerInlineQuery(params: { cache_time: number, inline_query_id: number, is_personal: boolean, next_offset: string, results: classes.InputInlineQueryResult[], switch_pm_parameter: string, switch_pm_text: string }): Promise<classes.Ok> {
    return this.send({ "@type": "answerInlineQuery" , ...params });
  }

  getWebAppUrl(params: { bot_user_id: number, theme?: classes.ThemeParameters, url: string }): Promise<classes.HttpUrl> {
    return this.send({ "@type": "getWebAppUrl" , ...params });
  }

  sendWebAppData(params: { bot_user_id: number, button_text: string, data: string }): Promise<classes.Ok> {
    return this.send({ "@type": "sendWebAppData" , ...params });
  }

  openWebApp(params: { bot_user_id: number, chat_id: number, reply_to_message_id: number, theme?: classes.ThemeParameters, url: string }): Promise<classes.WebAppInfo> {
    return this.send({ "@type": "openWebApp" , ...params });
  }

  closeWebApp(params: { web_app_launch_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "closeWebApp" , ...params });
  }

  answerWebAppQuery(params: { result: classes.InputInlineQueryResult, web_app_query_id: string }): Promise<classes.SentWebAppMessage> {
    return this.send({ "@type": "answerWebAppQuery" , ...params });
  }

  getCallbackQueryAnswer(params: { chat_id: number, message_id: number, payload: classes.CallbackQueryPayload }): Promise<classes.CallbackQueryAnswer> {
    return this.send({ "@type": "getCallbackQueryAnswer" , ...params });
  }

  answerCallbackQuery(params: { cache_time: number, callback_query_id: number, show_alert: boolean, text: string, url: string }): Promise<classes.Ok> {
    return this.send({ "@type": "answerCallbackQuery" , ...params });
  }

  answerShippingQuery(params: { error_message: string, shipping_options: classes.ShippingOption[], shipping_query_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "answerShippingQuery" , ...params });
  }

  answerPreCheckoutQuery(params: { error_message: string, pre_checkout_query_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "answerPreCheckoutQuery" , ...params });
  }

  setGameScore(params: { chat_id: number, edit_message: boolean, force: boolean, message_id: number, score: number, user_id: number }): Promise<classes.Message> {
    return this.send({ "@type": "setGameScore" , ...params });
  }

  setInlineGameScore(params: { edit_message: boolean, force: boolean, inline_message_id: string, score: number, user_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setInlineGameScore" , ...params });
  }

  getGameHighScores(params: { chat_id: number, message_id: number, user_id: number }): Promise<classes.GameHighScores> {
    return this.send({ "@type": "getGameHighScores" , ...params });
  }

  getInlineGameHighScores(params: { inline_message_id: string, user_id: number }): Promise<classes.GameHighScores> {
    return this.send({ "@type": "getInlineGameHighScores" , ...params });
  }

  deleteChatReplyMarkup(params: { chat_id: number, message_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteChatReplyMarkup" , ...params });
  }

  sendChatAction(params: { action: classes.ChatAction, chat_id: number, message_thread_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "sendChatAction" , ...params });
  }

  openChat(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "openChat" , ...params });
  }

  closeChat(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "closeChat" , ...params });
  }

  viewMessages(params: { chat_id: number, force_read: boolean, message_ids: number[], message_thread_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "viewMessages" , ...params });
  }

  openMessageContent(params: { chat_id: number, message_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "openMessageContent" , ...params });
  }

  clickAnimatedEmojiMessage(params: { chat_id: number, message_id: number }): Promise<classes.Sticker> {
    return this.send({ "@type": "clickAnimatedEmojiMessage" , ...params });
  }

  getInternalLinkType(params: { link: string }): Promise<classes.InternalLinkType> {
    return this.send({ "@type": "getInternalLinkType" , ...params });
  }

  getExternalLinkInfo(params: { link: string }): Promise<classes.LoginUrlInfo> {
    return this.send({ "@type": "getExternalLinkInfo" , ...params });
  }

  getExternalLink(params: { allow_write_access: boolean, link: string }): Promise<classes.HttpUrl> {
    return this.send({ "@type": "getExternalLink" , ...params });
  }

  readAllChatMentions(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "readAllChatMentions" , ...params });
  }

  readAllChatReactions(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "readAllChatReactions" , ...params });
  }

  createPrivateChat(params: { force: boolean, user_id: number }): Promise<classes.Chat> {
    return this.send({ "@type": "createPrivateChat" , ...params });
  }

  createBasicGroupChat(params: { basic_group_id: number, force: boolean }): Promise<classes.Chat> {
    return this.send({ "@type": "createBasicGroupChat" , ...params });
  }

  createSupergroupChat(params: { force: boolean, supergroup_id: number }): Promise<classes.Chat> {
    return this.send({ "@type": "createSupergroupChat" , ...params });
  }

  createSecretChat(params: { secret_chat_id: number }): Promise<classes.Chat> {
    return this.send({ "@type": "createSecretChat" , ...params });
  }

  createNewBasicGroupChat(params: { title: string, user_ids: number[] }): Promise<classes.Chat> {
    return this.send({ "@type": "createNewBasicGroupChat" , ...params });
  }

  createNewSupergroupChat(params: { description: string, for_import: boolean, is_channel: boolean, location?: classes.ChatLocation, title: string }): Promise<classes.Chat> {
    return this.send({ "@type": "createNewSupergroupChat" , ...params });
  }

  createNewSecretChat(params: { user_id: number }): Promise<classes.Chat> {
    return this.send({ "@type": "createNewSecretChat" , ...params });
  }

  upgradeBasicGroupChatToSupergroupChat(params: { chat_id: number }): Promise<classes.Chat> {
    return this.send({ "@type": "upgradeBasicGroupChatToSupergroupChat" , ...params });
  }

  getChatListsToAddChat(params: { chat_id: number }): Promise<classes.ChatLists> {
    return this.send({ "@type": "getChatListsToAddChat" , ...params });
  }

  addChatToList(params: { chat_id: number, chat_list: classes.ChatList }): Promise<classes.Ok> {
    return this.send({ "@type": "addChatToList" , ...params });
  }

  getChatFilter(params: { chat_filter_id: number }): Promise<classes.ChatFilter> {
    return this.send({ "@type": "getChatFilter" , ...params });
  }

  createChatFilter(params: { filter: classes.ChatFilter }): Promise<classes.ChatFilterInfo> {
    return this.send({ "@type": "createChatFilter" , ...params });
  }

  editChatFilter(params: { chat_filter_id: number, filter: classes.ChatFilter }): Promise<classes.ChatFilterInfo> {
    return this.send({ "@type": "editChatFilter" , ...params });
  }

  deleteChatFilter(params: { chat_filter_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteChatFilter" , ...params });
  }

  reorderChatFilters(params: { chat_filter_ids: number[], main_chat_list_position: number }): Promise<classes.Ok> {
    return this.send({ "@type": "reorderChatFilters" , ...params });
  }

  getRecommendedChatFilters(): Promise<classes.RecommendedChatFilters> {
    return this.send({ "@type": "getRecommendedChatFilters" });
  }

  getChatFilterDefaultIconName(params: { filter: classes.ChatFilter }): Promise<classes.Text> {
    return this.send({ "@type": "getChatFilterDefaultIconName" , ...params });
  }

  setChatTitle(params: { chat_id: number, title: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatTitle" , ...params });
  }

  setChatPhoto(params: { chat_id: number, photo?: classes.InputChatPhoto }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatPhoto" , ...params });
  }

  setChatMessageTtl(params: { chat_id: number, ttl: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatMessageTtl" , ...params });
  }

  setChatPermissions(params: { chat_id: number, permissions: classes.ChatPermissions }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatPermissions" , ...params });
  }

  setChatTheme(params: { chat_id: number, theme_name: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatTheme" , ...params });
  }

  setChatDraftMessage(params: { chat_id: number, draft_message: classes.DraftMessage, message_thread_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatDraftMessage" , ...params });
  }

  setChatNotificationSettings(params: { chat_id: number, notification_settings: classes.ChatNotificationSettings }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatNotificationSettings" , ...params });
  }

  toggleChatHasProtectedContent(params: { chat_id: number, has_protected_content: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleChatHasProtectedContent" , ...params });
  }

  toggleChatIsMarkedAsUnread(params: { chat_id: number, is_marked_as_unread: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleChatIsMarkedAsUnread" , ...params });
  }

  toggleChatDefaultDisableNotification(params: { chat_id: number, default_disable_notification: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleChatDefaultDisableNotification" , ...params });
  }

  setChatAvailableReactions(params: { available_reactions: string[], chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatAvailableReactions" , ...params });
  }

  setChatClientData(params: { chat_id: number, client_data: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatClientData" , ...params });
  }

  setChatDescription(params: { chat_id: number, description: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatDescription" , ...params });
  }

  setChatDiscussionGroup(params: { chat_id: number, discussion_chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatDiscussionGroup" , ...params });
  }

  setChatLocation(params: { chat_id: number, location: classes.ChatLocation }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatLocation" , ...params });
  }

  setChatSlowModeDelay(params: { chat_id: number, slow_mode_delay: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatSlowModeDelay" , ...params });
  }

  pinChatMessage(params: { chat_id: number, disable_notification: boolean, message_id: number, only_for_self: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "pinChatMessage" , ...params });
  }

  unpinChatMessage(params: { chat_id: number, message_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "unpinChatMessage" , ...params });
  }

  unpinAllChatMessages(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "unpinAllChatMessages" , ...params });
  }

  joinChat(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "joinChat" , ...params });
  }

  leaveChat(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "leaveChat" , ...params });
  }

  addChatMember(params: { chat_id: number, forward_limit: number, user_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "addChatMember" , ...params });
  }

  addChatMembers(params: { chat_id: number, user_ids: number[] }): Promise<classes.Ok> {
    return this.send({ "@type": "addChatMembers" , ...params });
  }

  setChatMemberStatus(params: { chat_id: number, member_id: classes.MessageSender, status: classes.ChatMemberStatus }): Promise<classes.Ok> {
    return this.send({ "@type": "setChatMemberStatus" , ...params });
  }

  banChatMember(params: { banned_until_date: number, chat_id: number, member_id: classes.MessageSender, revoke_messages: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "banChatMember" , ...params });
  }

  canTransferOwnership(): Promise<classes.CanTransferOwnershipResult> {
    return this.send({ "@type": "canTransferOwnership" });
  }

  transferChatOwnership(params: { chat_id: number, password: string, user_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "transferChatOwnership" , ...params });
  }

  getChatMember(params: { chat_id: number, member_id: classes.MessageSender }): Promise<classes.ChatMember> {
    return this.send({ "@type": "getChatMember" , ...params });
  }

  searchChatMembers(params: { chat_id: number, filter?: classes.ChatMembersFilter, limit: number, query: string }): Promise<classes.ChatMembers> {
    return this.send({ "@type": "searchChatMembers" , ...params });
  }

  getChatAdministrators(params: { chat_id: number }): Promise<classes.ChatAdministrators> {
    return this.send({ "@type": "getChatAdministrators" , ...params });
  }

  clearAllDraftMessages(params: { exclude_secret_chats: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "clearAllDraftMessages" , ...params });
  }

  getSavedNotificationSound(params: { notification_sound_id: number }): Promise<classes.NotificationSounds> {
    return this.send({ "@type": "getSavedNotificationSound" , ...params });
  }

  getSavedNotificationSounds(): Promise<classes.NotificationSounds> {
    return this.send({ "@type": "getSavedNotificationSounds" });
  }

  addSavedNotificationSound(params: { sound: classes.InputFile }): Promise<classes.NotificationSound> {
    return this.send({ "@type": "addSavedNotificationSound" , ...params });
  }

  removeSavedNotificationSound(params: { notification_sound_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "removeSavedNotificationSound" , ...params });
  }

  getChatNotificationSettingsExceptions(params: { compare_sound: boolean, scope?: classes.NotificationSettingsScope }): Promise<classes.Chats> {
    return this.send({ "@type": "getChatNotificationSettingsExceptions" , ...params });
  }

  getScopeNotificationSettings(params: { scope: classes.NotificationSettingsScope }): Promise<classes.ScopeNotificationSettings> {
    return this.send({ "@type": "getScopeNotificationSettings" , ...params });
  }

  setScopeNotificationSettings(params: { notification_settings: classes.ScopeNotificationSettings, scope: classes.NotificationSettingsScope }): Promise<classes.Ok> {
    return this.send({ "@type": "setScopeNotificationSettings" , ...params });
  }

  resetAllNotificationSettings(): Promise<classes.Ok> {
    return this.send({ "@type": "resetAllNotificationSettings" });
  }

  toggleChatIsPinned(params: { chat_id: number, chat_list: classes.ChatList, is_pinned: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleChatIsPinned" , ...params });
  }

  setPinnedChats(params: { chat_ids: number[], chat_list: classes.ChatList }): Promise<classes.Ok> {
    return this.send({ "@type": "setPinnedChats" , ...params });
  }

  getAttachmentMenuBot(params: { bot_user_id: number }): Promise<classes.AttachmentMenuBot> {
    return this.send({ "@type": "getAttachmentMenuBot" , ...params });
  }

  toggleBotIsAddedToAttachmentMenu(params: { bot_user_id: number, is_added: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleBotIsAddedToAttachmentMenu" , ...params });
  }

  downloadFile(params: { file_id: number, limit: number, offset: number, priority: number, synchronous: boolean }): Promise<classes.File> {
    return this.send({ "@type": "downloadFile" , ...params });
  }

  getFileDownloadedPrefixSize(params: { file_id: number, offset: number }): Promise<classes.FileDownloadedPrefixSize> {
    return this.send({ "@type": "getFileDownloadedPrefixSize" , ...params });
  }

  cancelDownloadFile(params: { file_id: number, only_if_pending: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "cancelDownloadFile" , ...params });
  }

  getSuggestedFileName(params: { directory: string, file_id: number }): Promise<classes.Text> {
    return this.send({ "@type": "getSuggestedFileName" , ...params });
  }

  preliminaryUploadFile(params: { file: classes.InputFile, file_type?: classes.FileType, priority: number }): Promise<classes.File> {
    return this.send({ "@type": "preliminaryUploadFile" , ...params });
  }

  cancelPreliminaryUploadFile(params: { file_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "cancelPreliminaryUploadFile" , ...params });
  }

  writeGeneratedFilePart(params: { data: string, generation_id: number, offset: number }): Promise<classes.Ok> {
    return this.send({ "@type": "writeGeneratedFilePart" , ...params });
  }

  setFileGenerationProgress(params: { expected_size: number, generation_id: number, local_prefix_size: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setFileGenerationProgress" , ...params });
  }

  finishFileGeneration(params: { error?: classes.Error, generation_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "finishFileGeneration" , ...params });
  }

  readFilePart(params: { count: number, file_id: number, offset: number }): Promise<classes.FilePart> {
    return this.send({ "@type": "readFilePart" , ...params });
  }

  deleteFile(params: { file_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteFile" , ...params });
  }

  addFileToDownloads(params: { chat_id: number, file_id: number, message_id: number, priority: number }): Promise<classes.File> {
    return this.send({ "@type": "addFileToDownloads" , ...params });
  }

  toggleDownloadIsPaused(params: { file_id: number, is_paused: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleDownloadIsPaused" , ...params });
  }

  toggleAllDownloadsArePaused(params: { are_paused: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleAllDownloadsArePaused" , ...params });
  }

  removeFileFromDownloads(params: { delete_from_cache: boolean, file_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "removeFileFromDownloads" , ...params });
  }

  removeAllFilesFromDownloads(params: { delete_from_cache: boolean, only_active: boolean, only_completed: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "removeAllFilesFromDownloads" , ...params });
  }

  searchFileDownloads(params: { limit: number, offset: string, only_active: boolean, only_completed: boolean, query: string }): Promise<classes.FoundFileDownloads> {
    return this.send({ "@type": "searchFileDownloads" , ...params });
  }

  getMessageFileType(params: { message_file_head: string }): Promise<classes.MessageFileType> {
    return this.send({ "@type": "getMessageFileType" , ...params });
  }

  getMessageImportConfirmationText(params: { chat_id: number }): Promise<classes.Text> {
    return this.send({ "@type": "getMessageImportConfirmationText" , ...params });
  }

  importMessages(params: { attached_files: classes.InputFile[], chat_id: number, message_file: classes.InputFile }): Promise<classes.Ok> {
    return this.send({ "@type": "importMessages" , ...params });
  }

  replacePrimaryChatInviteLink(params: { chat_id: number }): Promise<classes.ChatInviteLink> {
    return this.send({ "@type": "replacePrimaryChatInviteLink" , ...params });
  }

  createChatInviteLink(params: { chat_id: number, creates_join_request: boolean, expiration_date: number, member_limit: number, name: string }): Promise<classes.ChatInviteLink> {
    return this.send({ "@type": "createChatInviteLink" , ...params });
  }

  editChatInviteLink(params: { chat_id: number, creates_join_request: boolean, expiration_date: number, invite_link: string, member_limit: number, name: string }): Promise<classes.ChatInviteLink> {
    return this.send({ "@type": "editChatInviteLink" , ...params });
  }

  getChatInviteLink(params: { chat_id: number, invite_link: string }): Promise<classes.ChatInviteLink> {
    return this.send({ "@type": "getChatInviteLink" , ...params });
  }

  getChatInviteLinkCounts(params: { chat_id: number }): Promise<classes.ChatInviteLinkCounts> {
    return this.send({ "@type": "getChatInviteLinkCounts" , ...params });
  }

  getChatInviteLinks(params: { chat_id: number, creator_user_id: number, is_revoked: boolean, limit: number, offset_date: number, offset_invite_link: string }): Promise<classes.ChatInviteLinks> {
    return this.send({ "@type": "getChatInviteLinks" , ...params });
  }

  getChatInviteLinkMembers(params: { chat_id: number, invite_link: string, limit: number, offset_member?: classes.ChatInviteLinkMember }): Promise<classes.ChatInviteLinkMembers> {
    return this.send({ "@type": "getChatInviteLinkMembers" , ...params });
  }

  revokeChatInviteLink(params: { chat_id: number, invite_link: string }): Promise<classes.ChatInviteLinks> {
    return this.send({ "@type": "revokeChatInviteLink" , ...params });
  }

  deleteRevokedChatInviteLink(params: { chat_id: number, invite_link: string }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteRevokedChatInviteLink" , ...params });
  }

  deleteAllRevokedChatInviteLinks(params: { chat_id: number, creator_user_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteAllRevokedChatInviteLinks" , ...params });
  }

  checkChatInviteLink(params: { invite_link: string }): Promise<classes.ChatInviteLinkInfo> {
    return this.send({ "@type": "checkChatInviteLink" , ...params });
  }

  joinChatByInviteLink(params: { invite_link: string }): Promise<classes.Chat> {
    return this.send({ "@type": "joinChatByInviteLink" , ...params });
  }

  getChatJoinRequests(params: { chat_id: number, invite_link: string, limit: number, offset_request?: classes.ChatJoinRequest, query: string }): Promise<classes.ChatJoinRequests> {
    return this.send({ "@type": "getChatJoinRequests" , ...params });
  }

  processChatJoinRequest(params: { approve: boolean, chat_id: number, user_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "processChatJoinRequest" , ...params });
  }

  processChatJoinRequests(params: { approve: boolean, chat_id: number, invite_link: string }): Promise<classes.Ok> {
    return this.send({ "@type": "processChatJoinRequests" , ...params });
  }

  createCall(params: { is_video: boolean, protocol: classes.CallProtocol, user_id: number }): Promise<classes.CallId> {
    return this.send({ "@type": "createCall" , ...params });
  }

  acceptCall(params: { call_id: number, protocol: classes.CallProtocol }): Promise<classes.Ok> {
    return this.send({ "@type": "acceptCall" , ...params });
  }

  sendCallSignalingData(params: { call_id: number, data: string }): Promise<classes.Ok> {
    return this.send({ "@type": "sendCallSignalingData" , ...params });
  }

  discardCall(params: { call_id: number, connection_id: number, duration: number, is_disconnected: boolean, is_video: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "discardCall" , ...params });
  }

  sendCallRating(params: { call_id: number, comment: string, problems: classes.CallProblem[], rating: number }): Promise<classes.Ok> {
    return this.send({ "@type": "sendCallRating" , ...params });
  }

  sendCallDebugInformation(params: { call_id: number, debug_information: string }): Promise<classes.Ok> {
    return this.send({ "@type": "sendCallDebugInformation" , ...params });
  }

  sendCallLog(params: { call_id: number, log_file: classes.InputFile }): Promise<classes.Ok> {
    return this.send({ "@type": "sendCallLog" , ...params });
  }

  getVideoChatAvailableParticipants(params: { chat_id: number }): Promise<classes.MessageSenders> {
    return this.send({ "@type": "getVideoChatAvailableParticipants" , ...params });
  }

  setVideoChatDefaultParticipant(params: { chat_id: number, default_participant_id: classes.MessageSender }): Promise<classes.Ok> {
    return this.send({ "@type": "setVideoChatDefaultParticipant" , ...params });
  }

  createVideoChat(params: { chat_id: number, is_rtmp_stream: boolean, start_date: number, title: string }): Promise<classes.GroupCallId> {
    return this.send({ "@type": "createVideoChat" , ...params });
  }

  getVideoChatRtmpUrl(params: { chat_id: number }): Promise<classes.RtmpUrl> {
    return this.send({ "@type": "getVideoChatRtmpUrl" , ...params });
  }

  replaceVideoChatRtmpUrl(params: { chat_id: number }): Promise<classes.RtmpUrl> {
    return this.send({ "@type": "replaceVideoChatRtmpUrl" , ...params });
  }

  getGroupCall(params: { group_call_id: number }): Promise<classes.GroupCall> {
    return this.send({ "@type": "getGroupCall" , ...params });
  }

  startScheduledGroupCall(params: { group_call_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "startScheduledGroupCall" , ...params });
  }

  toggleGroupCallEnabledStartNotification(params: { enabled_start_notification: boolean, group_call_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleGroupCallEnabledStartNotification" , ...params });
  }

  joinGroupCall(params: { audio_source_id: number, group_call_id: number, invite_hash: string, is_muted: boolean, is_my_video_enabled: boolean, participant_id?: classes.MessageSender, payload: string }): Promise<classes.Text> {
    return this.send({ "@type": "joinGroupCall" , ...params });
  }

  startGroupCallScreenSharing(params: { audio_source_id: number, group_call_id: number, payload: string }): Promise<classes.Text> {
    return this.send({ "@type": "startGroupCallScreenSharing" , ...params });
  }

  toggleGroupCallScreenSharingIsPaused(params: { group_call_id: number, is_paused: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleGroupCallScreenSharingIsPaused" , ...params });
  }

  endGroupCallScreenSharing(params: { group_call_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "endGroupCallScreenSharing" , ...params });
  }

  setGroupCallTitle(params: { group_call_id: number, title: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setGroupCallTitle" , ...params });
  }

  toggleGroupCallMuteNewParticipants(params: { group_call_id: number, mute_new_participants: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleGroupCallMuteNewParticipants" , ...params });
  }

  inviteGroupCallParticipants(params: { group_call_id: number, user_ids: number[] }): Promise<classes.Ok> {
    return this.send({ "@type": "inviteGroupCallParticipants" , ...params });
  }

  getGroupCallInviteLink(params: { can_self_unmute: boolean, group_call_id: number }): Promise<classes.HttpUrl> {
    return this.send({ "@type": "getGroupCallInviteLink" , ...params });
  }

  revokeGroupCallInviteLink(params: { group_call_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "revokeGroupCallInviteLink" , ...params });
  }

  startGroupCallRecording(params: { group_call_id: number, record_video: boolean, title: string, use_portrait_orientation: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "startGroupCallRecording" , ...params });
  }

  endGroupCallRecording(params: { group_call_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "endGroupCallRecording" , ...params });
  }

  toggleGroupCallIsMyVideoPaused(params: { group_call_id: number, is_my_video_paused: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleGroupCallIsMyVideoPaused" , ...params });
  }

  toggleGroupCallIsMyVideoEnabled(params: { group_call_id: number, is_my_video_enabled: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleGroupCallIsMyVideoEnabled" , ...params });
  }

  setGroupCallParticipantIsSpeaking(params: { audio_source: number, group_call_id: number, is_speaking: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "setGroupCallParticipantIsSpeaking" , ...params });
  }

  toggleGroupCallParticipantIsMuted(params: { group_call_id: number, is_muted: boolean, participant_id: classes.MessageSender }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleGroupCallParticipantIsMuted" , ...params });
  }

  setGroupCallParticipantVolumeLevel(params: { group_call_id: number, participant_id: classes.MessageSender, volume_level: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setGroupCallParticipantVolumeLevel" , ...params });
  }

  toggleGroupCallParticipantIsHandRaised(params: { group_call_id: number, is_hand_raised: boolean, participant_id: classes.MessageSender }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleGroupCallParticipantIsHandRaised" , ...params });
  }

  loadGroupCallParticipants(params: { group_call_id: number, limit: number }): Promise<classes.Ok> {
    return this.send({ "@type": "loadGroupCallParticipants" , ...params });
  }

  leaveGroupCall(params: { group_call_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "leaveGroupCall" , ...params });
  }

  endGroupCall(params: { group_call_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "endGroupCall" , ...params });
  }

  getGroupCallStreams(params: { group_call_id: number }): Promise<classes.GroupCallStreams> {
    return this.send({ "@type": "getGroupCallStreams" , ...params });
  }

  getGroupCallStreamSegment(params: { channel_id: number, group_call_id: number, scale: number, time_offset: number, video_quality?: classes.GroupCallVideoQuality }): Promise<classes.FilePart> {
    return this.send({ "@type": "getGroupCallStreamSegment" , ...params });
  }

  toggleMessageSenderIsBlocked(params: { is_blocked: boolean, sender_id: classes.MessageSender }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleMessageSenderIsBlocked" , ...params });
  }

  blockMessageSenderFromReplies(params: { delete_all_messages: boolean, delete_message: boolean, message_id: number, report_spam: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "blockMessageSenderFromReplies" , ...params });
  }

  getBlockedMessageSenders(params: { limit: number, offset: number }): Promise<classes.MessageSenders> {
    return this.send({ "@type": "getBlockedMessageSenders" , ...params });
  }

  addContact(params: { contact: classes.Contact, share_phone_number: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "addContact" , ...params });
  }

  importContacts(params: { contacts: classes.Contact[] }): Promise<classes.ImportedContacts> {
    return this.send({ "@type": "importContacts" , ...params });
  }

  getContacts(): Promise<classes.Users> {
    return this.send({ "@type": "getContacts" });
  }

  searchContacts(params: { limit: number, query: string }): Promise<classes.Users> {
    return this.send({ "@type": "searchContacts" , ...params });
  }

  removeContacts(params: { user_ids: number[] }): Promise<classes.Ok> {
    return this.send({ "@type": "removeContacts" , ...params });
  }

  getImportedContactCount(): Promise<classes.Count> {
    return this.send({ "@type": "getImportedContactCount" });
  }

  changeImportedContacts(params: { contacts: classes.Contact[] }): Promise<classes.ImportedContacts> {
    return this.send({ "@type": "changeImportedContacts" , ...params });
  }

  clearImportedContacts(): Promise<classes.Ok> {
    return this.send({ "@type": "clearImportedContacts" });
  }

  searchUserByPhoneNumber(params: { phone_number: string }): Promise<classes.User> {
    return this.send({ "@type": "searchUserByPhoneNumber" , ...params });
  }

  sharePhoneNumber(params: { user_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "sharePhoneNumber" , ...params });
  }

  getUserProfilePhotos(params: { limit: number, offset: number, user_id: number }): Promise<classes.ChatPhotos> {
    return this.send({ "@type": "getUserProfilePhotos" , ...params });
  }

  getStickers(params: { chat_id: number, emoji: string, limit: number, sticker_type: classes.StickerType }): Promise<classes.Stickers> {
    return this.send({ "@type": "getStickers" , ...params });
  }

  searchStickers(params: { emoji: string, limit: number }): Promise<classes.Stickers> {
    return this.send({ "@type": "searchStickers" , ...params });
  }

  getPremiumStickers(params: { limit: number }): Promise<classes.Stickers> {
    return this.send({ "@type": "getPremiumStickers" , ...params });
  }

  getInstalledStickerSets(params: { sticker_type: classes.StickerType }): Promise<classes.StickerSets> {
    return this.send({ "@type": "getInstalledStickerSets" , ...params });
  }

  getArchivedStickerSets(params: { limit: number, offset_sticker_set_id: number, sticker_type: classes.StickerType }): Promise<classes.StickerSets> {
    return this.send({ "@type": "getArchivedStickerSets" , ...params });
  }

  getTrendingStickerSets(params: { limit: number, offset: number, sticker_type: classes.StickerType }): Promise<classes.TrendingStickerSets> {
    return this.send({ "@type": "getTrendingStickerSets" , ...params });
  }

  getAttachedStickerSets(params: { file_id: number }): Promise<classes.StickerSets> {
    return this.send({ "@type": "getAttachedStickerSets" , ...params });
  }

  getStickerSet(params: { set_id: number }): Promise<classes.StickerSet> {
    return this.send({ "@type": "getStickerSet" , ...params });
  }

  searchStickerSet(params: { name: string }): Promise<classes.StickerSet> {
    return this.send({ "@type": "searchStickerSet" , ...params });
  }

  searchInstalledStickerSets(params: { limit: number, query: string, sticker_type: classes.StickerType }): Promise<classes.StickerSets> {
    return this.send({ "@type": "searchInstalledStickerSets" , ...params });
  }

  searchStickerSets(params: { query: string }): Promise<classes.StickerSets> {
    return this.send({ "@type": "searchStickerSets" , ...params });
  }

  changeStickerSet(params: { is_archived: boolean, is_installed: boolean, set_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "changeStickerSet" , ...params });
  }

  viewTrendingStickerSets(params: { sticker_set_ids: number[] }): Promise<classes.Ok> {
    return this.send({ "@type": "viewTrendingStickerSets" , ...params });
  }

  reorderInstalledStickerSets(params: { sticker_set_ids: number[], sticker_type: classes.StickerType }): Promise<classes.Ok> {
    return this.send({ "@type": "reorderInstalledStickerSets" , ...params });
  }

  getRecentStickers(params: { is_attached: boolean }): Promise<classes.Stickers> {
    return this.send({ "@type": "getRecentStickers" , ...params });
  }

  addRecentSticker(params: { is_attached: boolean, sticker: classes.InputFile }): Promise<classes.Stickers> {
    return this.send({ "@type": "addRecentSticker" , ...params });
  }

  removeRecentSticker(params: { is_attached: boolean, sticker: classes.InputFile }): Promise<classes.Ok> {
    return this.send({ "@type": "removeRecentSticker" , ...params });
  }

  clearRecentStickers(params: { is_attached: boolean }): Promise<classes.Ok> {
    return this.send({ "@type": "clearRecentStickers" , ...params });
  }

  getFavoriteStickers(): Promise<classes.Stickers> {
    return this.send({ "@type": "getFavoriteStickers" });
  }

  addFavoriteSticker(params: { sticker: classes.InputFile }): Promise<classes.Ok> {
    return this.send({ "@type": "addFavoriteSticker" , ...params });
  }

  removeFavoriteSticker(params: { sticker: classes.InputFile }): Promise<classes.Ok> {
    return this.send({ "@type": "removeFavoriteSticker" , ...params });
  }

  getStickerEmojis(params: { sticker: classes.InputFile }): Promise<classes.Emojis> {
    return this.send({ "@type": "getStickerEmojis" , ...params });
  }

  searchEmojis(params: { exact_match: boolean, input_language_codes: string[], text: string }): Promise<classes.Emojis> {
    return this.send({ "@type": "searchEmojis" , ...params });
  }

  getAnimatedEmoji(params: { emoji: string }): Promise<classes.AnimatedEmoji> {
    return this.send({ "@type": "getAnimatedEmoji" , ...params });
  }

  getEmojiSuggestionsUrl(params: { language_code: string }): Promise<classes.HttpUrl> {
    return this.send({ "@type": "getEmojiSuggestionsUrl" , ...params });
  }

  getCustomEmojiStickers(params: { custom_emoji_ids: number[] }): Promise<classes.Stickers> {
    return this.send({ "@type": "getCustomEmojiStickers" , ...params });
  }

  getSavedAnimations(): Promise<classes.Animations> {
    return this.send({ "@type": "getSavedAnimations" });
  }

  addSavedAnimation(params: { animation: classes.InputFile }): Promise<classes.Ok> {
    return this.send({ "@type": "addSavedAnimation" , ...params });
  }

  removeSavedAnimation(params: { animation: classes.InputFile }): Promise<classes.Ok> {
    return this.send({ "@type": "removeSavedAnimation" , ...params });
  }

  getRecentInlineBots(): Promise<classes.Users> {
    return this.send({ "@type": "getRecentInlineBots" });
  }

  searchHashtags(params: { limit: number, prefix: string }): Promise<classes.Hashtags> {
    return this.send({ "@type": "searchHashtags" , ...params });
  }

  removeRecentHashtag(params: { hashtag: string }): Promise<classes.Ok> {
    return this.send({ "@type": "removeRecentHashtag" , ...params });
  }

  getWebPagePreview(params: { text: classes.FormattedText }): Promise<classes.WebPage> {
    return this.send({ "@type": "getWebPagePreview" , ...params });
  }

  getWebPageInstantView(params: { force_full: boolean, url: string }): Promise<classes.WebPageInstantView> {
    return this.send({ "@type": "getWebPageInstantView" , ...params });
  }

  setProfilePhoto(params: { photo: classes.InputChatPhoto }): Promise<classes.Ok> {
    return this.send({ "@type": "setProfilePhoto" , ...params });
  }

  deleteProfilePhoto(params: { profile_photo_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteProfilePhoto" , ...params });
  }

  setName(params: { first_name: string, last_name: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setName" , ...params });
  }

  setBio(params: { bio: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setBio" , ...params });
  }

  setUsername(params: { username: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setUsername" , ...params });
  }

  setLocation(params: { location: classes.Location }): Promise<classes.Ok> {
    return this.send({ "@type": "setLocation" , ...params });
  }

  changePhoneNumber(params: { phone_number: string, settings?: classes.PhoneNumberAuthenticationSettings }): Promise<classes.AuthenticationCodeInfo> {
    return this.send({ "@type": "changePhoneNumber" , ...params });
  }

  resendChangePhoneNumberCode(): Promise<classes.AuthenticationCodeInfo> {
    return this.send({ "@type": "resendChangePhoneNumberCode" });
  }

  checkChangePhoneNumberCode(params: { code: string }): Promise<classes.Ok> {
    return this.send({ "@type": "checkChangePhoneNumberCode" , ...params });
  }

  setCommands(params: { commands: classes.BotCommand[], language_code: string, scope?: classes.BotCommandScope }): Promise<classes.Ok> {
    return this.send({ "@type": "setCommands" , ...params });
  }

  deleteCommands(params: { language_code: string, scope?: classes.BotCommandScope }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteCommands" , ...params });
  }

  getCommands(params: { language_code: string, scope?: classes.BotCommandScope }): Promise<classes.BotCommands> {
    return this.send({ "@type": "getCommands" , ...params });
  }

  setMenuButton(params: { menu_button: classes.BotMenuButton, user_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setMenuButton" , ...params });
  }

  getMenuButton(params: { user_id: number }): Promise<classes.BotMenuButton> {
    return this.send({ "@type": "getMenuButton" , ...params });
  }

  setDefaultGroupAdministratorRights(params: { default_group_administrator_rights: classes.ChatAdministratorRights }): Promise<classes.Ok> {
    return this.send({ "@type": "setDefaultGroupAdministratorRights" , ...params });
  }

  setDefaultChannelAdministratorRights(params: { default_channel_administrator_rights: classes.ChatAdministratorRights }): Promise<classes.Ok> {
    return this.send({ "@type": "setDefaultChannelAdministratorRights" , ...params });
  }

  getActiveSessions(): Promise<classes.Sessions> {
    return this.send({ "@type": "getActiveSessions" });
  }

  terminateSession(params: { session_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "terminateSession" , ...params });
  }

  terminateAllOtherSessions(): Promise<classes.Ok> {
    return this.send({ "@type": "terminateAllOtherSessions" });
  }

  toggleSessionCanAcceptCalls(params: { can_accept_calls: boolean, session_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleSessionCanAcceptCalls" , ...params });
  }

  toggleSessionCanAcceptSecretChats(params: { can_accept_secret_chats: boolean, session_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleSessionCanAcceptSecretChats" , ...params });
  }

  setInactiveSessionTtl(params: { inactive_session_ttl_days: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setInactiveSessionTtl" , ...params });
  }

  getConnectedWebsites(): Promise<classes.ConnectedWebsites> {
    return this.send({ "@type": "getConnectedWebsites" });
  }

  disconnectWebsite(params: { website_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "disconnectWebsite" , ...params });
  }

  disconnectAllWebsites(): Promise<classes.Ok> {
    return this.send({ "@type": "disconnectAllWebsites" });
  }

  setSupergroupUsername(params: { supergroup_id: number, username: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setSupergroupUsername" , ...params });
  }

  setSupergroupStickerSet(params: { sticker_set_id: number, supergroup_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setSupergroupStickerSet" , ...params });
  }

  toggleSupergroupSignMessages(params: { sign_messages: boolean, supergroup_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleSupergroupSignMessages" , ...params });
  }

  toggleSupergroupJoinToSendMessages(params: { join_to_send_messages: boolean, supergroup_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleSupergroupJoinToSendMessages" , ...params });
  }

  toggleSupergroupJoinByRequest(params: { join_by_request: boolean, supergroup_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleSupergroupJoinByRequest" , ...params });
  }

  toggleSupergroupIsAllHistoryAvailable(params: { is_all_history_available: boolean, supergroup_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleSupergroupIsAllHistoryAvailable" , ...params });
  }

  toggleSupergroupIsBroadcastGroup(params: { supergroup_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "toggleSupergroupIsBroadcastGroup" , ...params });
  }

  reportSupergroupSpam(params: { message_ids: number[], supergroup_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "reportSupergroupSpam" , ...params });
  }

  getSupergroupMembers(params: { filter?: classes.SupergroupMembersFilter, limit: number, offset: number, supergroup_id: number }): Promise<classes.ChatMembers> {
    return this.send({ "@type": "getSupergroupMembers" , ...params });
  }

  closeSecretChat(params: { secret_chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "closeSecretChat" , ...params });
  }

  getChatEventLog(params: { chat_id: number, filters?: classes.ChatEventLogFilters, from_event_id: number, limit: number, query: string, user_ids: number[] }): Promise<classes.ChatEvents> {
    return this.send({ "@type": "getChatEventLog" , ...params });
  }

  getPaymentForm(params: { input_invoice: classes.InputInvoice, theme?: classes.ThemeParameters }): Promise<classes.PaymentForm> {
    return this.send({ "@type": "getPaymentForm" , ...params });
  }

  validateOrderInfo(params: { allow_save: boolean, input_invoice: classes.InputInvoice, order_info?: classes.OrderInfo }): Promise<classes.ValidatedOrderInfo> {
    return this.send({ "@type": "validateOrderInfo" , ...params });
  }

  sendPaymentForm(params: { credentials: classes.InputCredentials, input_invoice: classes.InputInvoice, order_info_id: string, payment_form_id: number, shipping_option_id: string, tip_amount: number }): Promise<classes.PaymentResult> {
    return this.send({ "@type": "sendPaymentForm" , ...params });
  }

  getPaymentReceipt(params: { chat_id: number, message_id: number }): Promise<classes.PaymentReceipt> {
    return this.send({ "@type": "getPaymentReceipt" , ...params });
  }

  getSavedOrderInfo(): Promise<classes.OrderInfo> {
    return this.send({ "@type": "getSavedOrderInfo" });
  }

  deleteSavedOrderInfo(): Promise<classes.Ok> {
    return this.send({ "@type": "deleteSavedOrderInfo" });
  }

  deleteSavedCredentials(): Promise<classes.Ok> {
    return this.send({ "@type": "deleteSavedCredentials" });
  }

  createInvoiceLink(params: { invoice: classes.InputMessageContent }): Promise<classes.HttpUrl> {
    return this.send({ "@type": "createInvoiceLink" , ...params });
  }

  getSupportUser(): Promise<classes.User> {
    return this.send({ "@type": "getSupportUser" });
  }

  getBackgrounds(params: { for_dark_theme: boolean }): Promise<classes.Backgrounds> {
    return this.send({ "@type": "getBackgrounds" , ...params });
  }

  getBackgroundUrl(params: { name: string, type: classes.BackgroundType }): Promise<classes.HttpUrl> {
    return this.send({ "@type": "getBackgroundUrl" , ...params });
  }

  searchBackground(params: { name: string }): Promise<classes.Background> {
    return this.send({ "@type": "searchBackground" , ...params });
  }

  setBackground(params: { background?: classes.InputBackground, for_dark_theme: boolean, type?: classes.BackgroundType }): Promise<classes.Background> {
    return this.send({ "@type": "setBackground" , ...params });
  }

  removeBackground(params: { background_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "removeBackground" , ...params });
  }

  resetBackgrounds(): Promise<classes.Ok> {
    return this.send({ "@type": "resetBackgrounds" });
  }

  getLocalizationTargetInfo(params: { only_local: boolean }): Promise<classes.LocalizationTargetInfo> {
    return this.send({ "@type": "getLocalizationTargetInfo" , ...params });
  }

  getLanguagePackInfo(params: { language_pack_id: string }): Promise<classes.LanguagePackInfo> {
    return this.send({ "@type": "getLanguagePackInfo" , ...params });
  }

  getLanguagePackStrings(params: { keys: string[], language_pack_id: string }): Promise<classes.LanguagePackStrings> {
    return this.send({ "@type": "getLanguagePackStrings" , ...params });
  }

  synchronizeLanguagePack(params: { language_pack_id: string }): Promise<classes.Ok> {
    return this.send({ "@type": "synchronizeLanguagePack" , ...params });
  }

  addCustomServerLanguagePack(params: { language_pack_id: string }): Promise<classes.Ok> {
    return this.send({ "@type": "addCustomServerLanguagePack" , ...params });
  }

  setCustomLanguagePack(params: { info: classes.LanguagePackInfo, strings: classes.LanguagePackString[] }): Promise<classes.Ok> {
    return this.send({ "@type": "setCustomLanguagePack" , ...params });
  }

  editCustomLanguagePackInfo(params: { info: classes.LanguagePackInfo }): Promise<classes.Ok> {
    return this.send({ "@type": "editCustomLanguagePackInfo" , ...params });
  }

  setCustomLanguagePackString(params: { language_pack_id: string, new_string: classes.LanguagePackString }): Promise<classes.Ok> {
    return this.send({ "@type": "setCustomLanguagePackString" , ...params });
  }

  deleteLanguagePack(params: { language_pack_id: string }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteLanguagePack" , ...params });
  }

  registerDevice(params: { device_token: classes.DeviceToken, other_user_ids: number[] }): Promise<classes.PushReceiverId> {
    return this.send({ "@type": "registerDevice" , ...params });
  }

  processPushNotification(params: { payload: string }): Promise<classes.Ok> {
    return this.send({ "@type": "processPushNotification" , ...params });
  }

  getPushReceiverId(params: { payload: string }): Promise<classes.PushReceiverId> {
    return this.send({ "@type": "getPushReceiverId" , ...params });
  }

  getRecentlyVisitedTMeUrls(params: { referrer: string }): Promise<classes.TMeUrls> {
    return this.send({ "@type": "getRecentlyVisitedTMeUrls" , ...params });
  }

  setUserPrivacySettingRules(params: { rules: classes.UserPrivacySettingRules, setting: classes.UserPrivacySetting }): Promise<classes.Ok> {
    return this.send({ "@type": "setUserPrivacySettingRules" , ...params });
  }

  getUserPrivacySettingRules(params: { setting: classes.UserPrivacySetting }): Promise<classes.UserPrivacySettingRules> {
    return this.send({ "@type": "getUserPrivacySettingRules" , ...params });
  }

  getOption(params: { name: string }): Promise<classes.OptionValue> {
    return this.send({ "@type": "getOption" , ...params });
  }

  setOption(params: { name: string, value?: classes.OptionValue }): Promise<classes.Ok> {
    return this.send({ "@type": "setOption" , ...params });
  }

  setAccountTtl(params: { ttl: classes.AccountTtl }): Promise<classes.Ok> {
    return this.send({ "@type": "setAccountTtl" , ...params });
  }

  getAccountTtl(): Promise<classes.AccountTtl> {
    return this.send({ "@type": "getAccountTtl" });
  }

  deleteAccount(params: { password: string, reason: string }): Promise<classes.Ok> {
    return this.send({ "@type": "deleteAccount" , ...params });
  }

  removeChatActionBar(params: { chat_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "removeChatActionBar" , ...params });
  }

  reportChat(params: { chat_id: number, message_ids: number[], reason: classes.ChatReportReason, text: string }): Promise<classes.Ok> {
    return this.send({ "@type": "reportChat" , ...params });
  }

  reportChatPhoto(params: { chat_id: number, file_id: number, reason: classes.ChatReportReason, text: string }): Promise<classes.Ok> {
    return this.send({ "@type": "reportChatPhoto" , ...params });
  }

  getChatStatistics(params: { chat_id: number, is_dark: boolean }): Promise<classes.ChatStatistics> {
    return this.send({ "@type": "getChatStatistics" , ...params });
  }

  getMessageStatistics(params: { chat_id: number, is_dark: boolean, message_id: number }): Promise<classes.MessageStatistics> {
    return this.send({ "@type": "getMessageStatistics" , ...params });
  }

  getStatisticalGraph(params: { chat_id: number, token: string, x: number }): Promise<classes.StatisticalGraph> {
    return this.send({ "@type": "getStatisticalGraph" , ...params });
  }

  getStorageStatistics(params: { chat_limit: number }): Promise<classes.StorageStatistics> {
    return this.send({ "@type": "getStorageStatistics" , ...params });
  }

  getStorageStatisticsFast(): Promise<classes.StorageStatisticsFast> {
    return this.send({ "@type": "getStorageStatisticsFast" });
  }

  getDatabaseStatistics(): Promise<classes.DatabaseStatistics> {
    return this.send({ "@type": "getDatabaseStatistics" });
  }

  optimizeStorage(params: { chat_ids: number[], chat_limit: number, count: number, exclude_chat_ids: number[], file_types: classes.FileType[], immunity_delay: number, return_deleted_file_statistics: boolean, size: number, ttl: number }): Promise<classes.StorageStatistics> {
    return this.send({ "@type": "optimizeStorage" , ...params });
  }

  setNetworkType(params: { type: classes.NetworkType }): Promise<classes.Ok> {
    return this.send({ "@type": "setNetworkType" , ...params });
  }

  getNetworkStatistics(params: { only_current: boolean }): Promise<classes.NetworkStatistics> {
    return this.send({ "@type": "getNetworkStatistics" , ...params });
  }

  addNetworkStatistics(params: { entry: classes.NetworkStatisticsEntry }): Promise<classes.Ok> {
    return this.send({ "@type": "addNetworkStatistics" , ...params });
  }

  resetNetworkStatistics(): Promise<classes.Ok> {
    return this.send({ "@type": "resetNetworkStatistics" });
  }

  getAutoDownloadSettingsPresets(): Promise<classes.AutoDownloadSettingsPresets> {
    return this.send({ "@type": "getAutoDownloadSettingsPresets" });
  }

  setAutoDownloadSettings(params: { settings: classes.AutoDownloadSettings, type: classes.NetworkType }): Promise<classes.Ok> {
    return this.send({ "@type": "setAutoDownloadSettings" , ...params });
  }

  getBankCardInfo(params: { bank_card_number: string }): Promise<classes.BankCardInfo> {
    return this.send({ "@type": "getBankCardInfo" , ...params });
  }

  getPassportElement(params: { password: string, type: classes.PassportElementType }): Promise<classes.PassportElement> {
    return this.send({ "@type": "getPassportElement" , ...params });
  }

  getAllPassportElements(params: { password: string }): Promise<classes.PassportElements> {
    return this.send({ "@type": "getAllPassportElements" , ...params });
  }

  setPassportElement(params: { element: classes.InputPassportElement, password: string }): Promise<classes.PassportElement> {
    return this.send({ "@type": "setPassportElement" , ...params });
  }

  deletePassportElement(params: { type: classes.PassportElementType }): Promise<classes.Ok> {
    return this.send({ "@type": "deletePassportElement" , ...params });
  }

  setPassportElementErrors(params: { errors: classes.InputPassportElementError[], user_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setPassportElementErrors" , ...params });
  }

  getPreferredCountryLanguage(params: { country_code: string }): Promise<classes.Text> {
    return this.send({ "@type": "getPreferredCountryLanguage" , ...params });
  }

  sendPhoneNumberVerificationCode(params: { phone_number: string, settings?: classes.PhoneNumberAuthenticationSettings }): Promise<classes.AuthenticationCodeInfo> {
    return this.send({ "@type": "sendPhoneNumberVerificationCode" , ...params });
  }

  resendPhoneNumberVerificationCode(): Promise<classes.AuthenticationCodeInfo> {
    return this.send({ "@type": "resendPhoneNumberVerificationCode" });
  }

  checkPhoneNumberVerificationCode(params: { code: string }): Promise<classes.Ok> {
    return this.send({ "@type": "checkPhoneNumberVerificationCode" , ...params });
  }

  sendEmailAddressVerificationCode(params: { email_address: string }): Promise<classes.EmailAddressAuthenticationCodeInfo> {
    return this.send({ "@type": "sendEmailAddressVerificationCode" , ...params });
  }

  resendEmailAddressVerificationCode(): Promise<classes.EmailAddressAuthenticationCodeInfo> {
    return this.send({ "@type": "resendEmailAddressVerificationCode" });
  }

  checkEmailAddressVerificationCode(params: { code: string }): Promise<classes.Ok> {
    return this.send({ "@type": "checkEmailAddressVerificationCode" , ...params });
  }

  getPassportAuthorizationForm(params: { bot_user_id: number, nonce: string, public_key: string, scope: string }): Promise<classes.PassportAuthorizationForm> {
    return this.send({ "@type": "getPassportAuthorizationForm" , ...params });
  }

  getPassportAuthorizationFormAvailableElements(params: { autorization_form_id: number, password: string }): Promise<classes.PassportElementsWithErrors> {
    return this.send({ "@type": "getPassportAuthorizationFormAvailableElements" , ...params });
  }

  sendPassportAuthorizationForm(params: { autorization_form_id: number, types: classes.PassportElementType[] }): Promise<classes.Ok> {
    return this.send({ "@type": "sendPassportAuthorizationForm" , ...params });
  }

  sendPhoneNumberConfirmationCode(params: { hash: string, phone_number: string, settings: classes.PhoneNumberAuthenticationSettings }): Promise<classes.AuthenticationCodeInfo> {
    return this.send({ "@type": "sendPhoneNumberConfirmationCode" , ...params });
  }

  resendPhoneNumberConfirmationCode(): Promise<classes.AuthenticationCodeInfo> {
    return this.send({ "@type": "resendPhoneNumberConfirmationCode" });
  }

  checkPhoneNumberConfirmationCode(params: { code: string }): Promise<classes.Ok> {
    return this.send({ "@type": "checkPhoneNumberConfirmationCode" , ...params });
  }

  setBotUpdatesStatus(params: { error_message: string, pending_update_count: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setBotUpdatesStatus" , ...params });
  }

  uploadStickerFile(params: { sticker: classes.InputSticker, user_id: number }): Promise<classes.File> {
    return this.send({ "@type": "uploadStickerFile" , ...params });
  }

  getSuggestedStickerSetName(params: { title: string }): Promise<classes.Text> {
    return this.send({ "@type": "getSuggestedStickerSetName" , ...params });
  }

  checkStickerSetName(params: { name: string }): Promise<classes.CheckStickerSetNameResult> {
    return this.send({ "@type": "checkStickerSetName" , ...params });
  }

  createNewStickerSet(params: { name: string, source: string, sticker_type: classes.StickerType, stickers: classes.InputSticker[], title: string, user_id: number }): Promise<classes.StickerSet> {
    return this.send({ "@type": "createNewStickerSet" , ...params });
  }

  addStickerToSet(params: { name: string, sticker: classes.InputSticker, user_id: number }): Promise<classes.StickerSet> {
    return this.send({ "@type": "addStickerToSet" , ...params });
  }

  setStickerSetThumbnail(params: { name: string, thumbnail?: classes.InputFile, user_id: number }): Promise<classes.StickerSet> {
    return this.send({ "@type": "setStickerSetThumbnail" , ...params });
  }

  setStickerPositionInSet(params: { position: number, sticker: classes.InputFile }): Promise<classes.Ok> {
    return this.send({ "@type": "setStickerPositionInSet" , ...params });
  }

  removeStickerFromSet(params: { sticker: classes.InputFile }): Promise<classes.Ok> {
    return this.send({ "@type": "removeStickerFromSet" , ...params });
  }

  getMapThumbnailFile(params: { chat_id: number, height: number, location: classes.Location, scale: number, width: number, zoom: number }): Promise<classes.File> {
    return this.send({ "@type": "getMapThumbnailFile" , ...params });
  }

  getPremiumLimit(params: { limit_type: classes.PremiumLimitType }): Promise<classes.PremiumLimit> {
    return this.send({ "@type": "getPremiumLimit" , ...params });
  }

  getPremiumFeatures(params: { source: classes.PremiumSource }): Promise<classes.PremiumFeatures> {
    return this.send({ "@type": "getPremiumFeatures" , ...params });
  }

  getPremiumStickerExamples(): Promise<classes.Stickers> {
    return this.send({ "@type": "getPremiumStickerExamples" });
  }

  viewPremiumFeature(params: { feature: classes.PremiumFeature }): Promise<classes.Ok> {
    return this.send({ "@type": "viewPremiumFeature" , ...params });
  }

  clickPremiumSubscriptionButton(): Promise<classes.Ok> {
    return this.send({ "@type": "clickPremiumSubscriptionButton" });
  }

  getPremiumState(): Promise<classes.PremiumState> {
    return this.send({ "@type": "getPremiumState" });
  }

  canPurchasePremium(params: { purpose: classes.StorePaymentPurpose }): Promise<classes.Ok> {
    return this.send({ "@type": "canPurchasePremium" , ...params });
  }

  assignAppStoreTransaction(params: { purpose: classes.StorePaymentPurpose, receipt: string }): Promise<classes.Ok> {
    return this.send({ "@type": "assignAppStoreTransaction" , ...params });
  }

  assignGooglePlayTransaction(params: { package_name: string, purchase_token: string, purpose: classes.StorePaymentPurpose, store_product_id: string }): Promise<classes.Ok> {
    return this.send({ "@type": "assignGooglePlayTransaction" , ...params });
  }

  acceptTermsOfService(params: { terms_of_service_id: string }): Promise<classes.Ok> {
    return this.send({ "@type": "acceptTermsOfService" , ...params });
  }

  sendCustomRequest(params: { method: string, parameters: string }): Promise<classes.CustomRequestResult> {
    return this.send({ "@type": "sendCustomRequest" , ...params });
  }

  answerCustomQuery(params: { custom_query_id: number, data: string }): Promise<classes.Ok> {
    return this.send({ "@type": "answerCustomQuery" , ...params });
  }

  setAlarm(params: { seconds: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setAlarm" , ...params });
  }

  getCountries(): Promise<classes.Countries> {
    return this.send({ "@type": "getCountries" });
  }

  getCountryCode(): Promise<classes.Text> {
    return this.send({ "@type": "getCountryCode" });
  }

  getPhoneNumberInfo(params: { phone_number_prefix: string }): Promise<classes.PhoneNumberInfo> {
    return this.send({ "@type": "getPhoneNumberInfo" , ...params });
  }

  getPhoneNumberInfoSync(params: { language_code: string, phone_number_prefix: string }): Promise<classes.PhoneNumberInfo> {
    return this.send({ "@type": "getPhoneNumberInfoSync" , ...params });
  }

  getApplicationDownloadLink(): Promise<classes.HttpUrl> {
    return this.send({ "@type": "getApplicationDownloadLink" });
  }

  getDeepLinkInfo(params: { link: string }): Promise<classes.DeepLinkInfo> {
    return this.send({ "@type": "getDeepLinkInfo" , ...params });
  }

  getApplicationConfig(): Promise<classes.JsonValue> {
    return this.send({ "@type": "getApplicationConfig" });
  }

  saveApplicationLogEvent(params: { chat_id: number, data: classes.JsonValue, type: string }): Promise<classes.Ok> {
    return this.send({ "@type": "saveApplicationLogEvent" , ...params });
  }

  addProxy(params: { enable: boolean, port: number, server: string, type: classes.ProxyType }): Promise<classes.Proxy> {
    return this.send({ "@type": "addProxy" , ...params });
  }

  editProxy(params: { enable: boolean, port: number, proxy_id: number, server: string, type: classes.ProxyType }): Promise<classes.Proxy> {
    return this.send({ "@type": "editProxy" , ...params });
  }

  enableProxy(params: { proxy_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "enableProxy" , ...params });
  }

  disableProxy(): Promise<classes.Ok> {
    return this.send({ "@type": "disableProxy" });
  }

  removeProxy(params: { proxy_id: number }): Promise<classes.Ok> {
    return this.send({ "@type": "removeProxy" , ...params });
  }

  getProxies(): Promise<classes.Proxies> {
    return this.send({ "@type": "getProxies" });
  }

  getProxyLink(params: { proxy_id: number }): Promise<classes.HttpUrl> {
    return this.send({ "@type": "getProxyLink" , ...params });
  }

  pingProxy(params: { proxy_id: number }): Promise<classes.Seconds> {
    return this.send({ "@type": "pingProxy" , ...params });
  }

  setLogStream(params: { log_stream: classes.LogStream }): Promise<classes.Ok> {
    return this.send({ "@type": "setLogStream" , ...params });
  }

  getLogStream(): Promise<classes.LogStream> {
    return this.send({ "@type": "getLogStream" });
  }

  setLogVerbosityLevel(params: { new_verbosity_level: number }): Promise<classes.Ok> {
    return this.send({ "@type": "setLogVerbosityLevel" , ...params });
  }

  getLogVerbosityLevel(): Promise<classes.LogVerbosityLevel> {
    return this.send({ "@type": "getLogVerbosityLevel" });
  }

  getLogTags(): Promise<classes.LogTags> {
    return this.send({ "@type": "getLogTags" });
  }

  setLogTagVerbosityLevel(params: { new_verbosity_level: number, tag: string }): Promise<classes.Ok> {
    return this.send({ "@type": "setLogTagVerbosityLevel" , ...params });
  }

  getLogTagVerbosityLevel(params: { tag: string }): Promise<classes.LogVerbosityLevel> {
    return this.send({ "@type": "getLogTagVerbosityLevel" , ...params });
  }

  addLogMessage(params: { text: string, verbosity_level: number }): Promise<classes.Ok> {
    return this.send({ "@type": "addLogMessage" , ...params });
  }

  getUserSupportInfo(params: { user_id: number }): Promise<classes.UserSupportInfo> {
    return this.send({ "@type": "getUserSupportInfo" , ...params });
  }

  setUserSupportInfo(params: { message: classes.FormattedText, user_id: number }): Promise<classes.UserSupportInfo> {
    return this.send({ "@type": "setUserSupportInfo" , ...params });
  }

  testCallEmpty(): Promise<classes.Ok> {
    return this.send({ "@type": "testCallEmpty" });
  }

  testCallString(params: { x: string }): Promise<classes.TestString> {
    return this.send({ "@type": "testCallString" , ...params });
  }

  testCallBytes(params: { x: string }): Promise<classes.TestBytes> {
    return this.send({ "@type": "testCallBytes" , ...params });
  }

  testCallVectorInt(params: { x: number[] }): Promise<classes.TestVectorInt> {
    return this.send({ "@type": "testCallVectorInt" , ...params });
  }

  testCallVectorIntObject(params: { x: classes.TestInt[] }): Promise<classes.TestVectorIntObject> {
    return this.send({ "@type": "testCallVectorIntObject" , ...params });
  }

  testCallVectorString(params: { x: string[] }): Promise<classes.TestVectorString> {
    return this.send({ "@type": "testCallVectorString" , ...params });
  }

  testCallVectorStringObject(params: { x: classes.TestString[] }): Promise<classes.TestVectorStringObject> {
    return this.send({ "@type": "testCallVectorStringObject" , ...params });
  }

  testSquareInt(params: { x: number }): Promise<classes.TestInt> {
    return this.send({ "@type": "testSquareInt" , ...params });
  }

  testNetwork(): Promise<classes.Ok> {
    return this.send({ "@type": "testNetwork" });
  }

  testProxy(params: { dc_id: number, port: number, server: string, timeout: number, type: classes.ProxyType }): Promise<classes.Ok> {
    return this.send({ "@type": "testProxy" , ...params });
  }

  testGetDifference(): Promise<classes.Ok> {
    return this.send({ "@type": "testGetDifference" });
  }

  testUseUpdate(): Promise<classes.Update> {
    return this.send({ "@type": "testUseUpdate" });
  }

  testReturnError(params: { error: classes.Error }): Promise<classes.Error> {
    return this.send({ "@type": "testReturnError" , ...params });
  }
}

// This was generated. Do not edit.
