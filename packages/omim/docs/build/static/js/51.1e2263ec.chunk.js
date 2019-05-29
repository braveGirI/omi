webpackJsonp([51],{57:function(n,t){n.exports="## List\r\n\r\nLists are continuous, vertical indexes of text or images.\r\n\r\n## Usage\r\n\r\n```html\r\n<m-list\r\n  onChange=\"onChange(event)\"\r\n  css=\"\r\n    .mdc-list,.mdc-list-group {\r\n      max-width: 600px;\r\n      border: 1px solid rgba(0,0,0,.1);\r\n    }\r\n  \">\r\n  <item text='Inbox'>\r\n    <graphic><m-icon-button icon='inbox'></m-icon-button></graphic>\r\n  </item>\r\n  <item activated='true' text='Star'>\r\n    <graphic><m-icon-button icon='star'></m-icon-button></graphic>\r\n  </item>\r\n  <item text='Send'>\r\n    <graphic><m-icon-button icon='send'></m-icon-button></graphic>\r\n  </item>\r\n  <item text='Drafts'>\r\n    <graphic><m-icon-button icon='drafts'></m-icon-button></graphic>\r\n  </item>\r\n</m-list>\r\n```\r\n\r\n## Usage in Omi\r\n\r\nJSX:\r\n\r\n```jsx\r\n<m-list onChange={this.onChange} css={this.css}>\r\n  <item graphic={<m-icon-button icons={['bookmark_border', 'inbox']}></m-icon-button>}>Inbox</item>\r\n  <item activated graphic={<m-icon-button icons={['check_circle_outline', 'star']}></m-icon-button>}>Star</item>\r\n  <item graphic={<m-icon-button icons={['search', 'send']}></m-icon-button>}>Send</item>\r\n  <item graphic={<m-icon-button icons={['settings', 'drafts']}></m-icon-button>}>Drafts</item>\r\n</m-list>\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\r\n| ------------- |:-------------:|:-----:|:-------------:|\r\n| **m-list attribute** | -- | -- | -- |\r\n| group | boolean | -- | Using list groups |\r\n| disabled | boolean | -- | Disabled |\r\n| dense | boolean | -- | Compact height |\r\n| avatar | boolean | -- | Medium height |\r\n| two-line | boolean | -- | Double line height |\r\n| **item attribute** | -- | -- | -- |\r\n| divider | boolean | -- | Dividing line |\r\n| padded | boolean | -- | The left and right sides are not filled with dividing lines |\r\n| inset | boolean | -- | The avatar is not filled with dividing lines |\r\n| disabled | boolean | -- | Disabled |\r\n| selected | element | -- | Selected |\r\n| activated | boolean | -- | Always selected |\r\n| graphic | element | -- | Leftmost content |\r\n| text | string | -- | Intermediate text |\r\n| primary-text | string | -- | Upper middle text |\r\n| secondary-text | string | -- | Secondary text |\r\n| meta | element | -- | Rightmost content |\r\n"}});
//# sourceMappingURL=51.1e2263ec.chunk.js.map