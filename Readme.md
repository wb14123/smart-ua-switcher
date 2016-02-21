Smart UA Switcher
==============

Auto switch user agent based on url rules.

This project is for my personal usage to request mobile version of some video websites, so that they will load HTML 5 video player instead of flash version.

The current version is very crude so contributions are welcome.

Usage
----------

Download this project and load them from [chrome extension page](chrome://extensions/).

Write config in "options" tab of extension.

Config structure:

```
{
  "rules": [
    {
      "uaName": "Android Phone",
      "urls": ["http://www.bilibili.com/video/*"]
    },

    ...
  ]
}
```

After configuration, you need to reload the extension.

Contribute
-----------

There are many features that have not implemented yet:

* An UI to edit rules in options page instead of just write config text.
* Auto reload config after it is modified.
* More user agent headers.
* Add custom user agent headers.
* An icon.
* For some video websites like Youku, just change the index page UA is not enough.
