import mongoose from "mongoose";

export interface IGitHubIssue extends mongoose.Document {
  html_url: string;
  id: number;
  number: number;
  title: string;
  body: string;
}

export const GitHubIssueModel = mongoose.model<IGitHubIssue>(
  "GitHubIssue",
  new mongoose.Schema({
      body: String,
      id: { type: String, required: true },
      html_url: String,
      title: String,
      number: Number
  })
);