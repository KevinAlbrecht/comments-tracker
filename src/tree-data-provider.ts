import * as vscode from 'vscode';
import { EventEmitter } from 'vscode';

export class MyTreeDataProvider implements vscode.TreeDataProvider<Dependency>{
    private _onDidChangeTreeData: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    getTreeItem(element: Dependency): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }

    getChildren(element?: Dependency): vscode.ProviderResult<Dependency[]> {
        return Promise.resolve([
            new Dependency("label", "0.1", vscode.TreeItemCollapsibleState.Expanded),
            new Dependency("label2", "0.1", vscode.TreeItemCollapsibleState.Collapsed),
            new Dependency("label3", "0.1", vscode.TreeItemCollapsibleState.Collapsed)]);
    }

    refresh() {
        this._onDidChangeTreeData.fire();
    }
}

export class Dependency extends vscode.TreeItem {

    constructor(
        public readonly label: string,
        private version: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        public readonly command?: vscode.Command
    ) {
        super(label, collapsibleState);
    }

    get tooltip(): string {
        return `${this.label}-${this.version}`;
    }

    iconPath = {
        light: '',
        dark: ''
    };

    contextValue = 'dependency';

}