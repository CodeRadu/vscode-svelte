import * as vscode from "vscode";
import { WebView } from "./WebView";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "svelte-vscode" is now active!');
  context.subscriptions.push(
    vscode.commands.registerCommand("svelte-vscode.openWebView", () => {
      WebView.createOrShow(context.extensionUri);
    })
  );
}
export function deactivate() {}
