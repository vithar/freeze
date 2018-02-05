# vithar/freeze

Freezes relative file name or returns input as is for absolute paths.

## Usage

```js
var freeze = require('freeze'),
    freezeFile = freeze.file({ folder: 'some-folder', cutPrefix: 'some-prefix' });

freezeFile('http://ya.ru'); // 'http://ya.ru'
freezeFile('some-path'); // '0YlPlXWdzFmhXt_8CxssRHZpHQg'
```
