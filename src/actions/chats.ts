"use server";

import ChatModel from "@/models/chat-model";

export const createNewChat = async (payload: any) => {
  try {
    const response = await ChatModel.create(payload);
    return {
      data: JSON.parse(JSON.stringify(response)),
      success: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
};

export const getChatsByUserId = async (userId: string) => {
  try {
    const response = await ChatModel.find({ user: userId });
    return {
      data: JSON.parse(JSON.stringify(response)),
      success: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
};

export const updateChat = async ({
  chatId = "",
  messages = [],
}: {
  chatId: string;
  messages: any[];
}) => {
  try {
    const response = await ChatModel.findByIdAndUpdate(
      chatId,
      { messages },
      { new: true }
    );
    return {
      data: JSON.parse(JSON.stringify(response)),
      success: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
};

export const deleteChat = async (chatId: string) => {
  try {
    const response = await ChatModel.findByIdAndDelete(chatId);
    return {
      data: JSON.parse(JSON.stringify(response)),
      success: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
};
