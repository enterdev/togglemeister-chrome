chrome.commands.onCommand.addListener(function (command)
{
    if (command === 'togglemeister-toggle')
    {
        chrome.windows.getCurrent({}, function (win)
        {
            if (!win.focused)
            {
                chrome.windows.getCurrent({}, function (win)
                {
                    chrome.windows.update(win.id, {focused: true}, function () { });
                });
            }
            else
            {
                chrome.windows.getCurrent({}, function (win)
                {
                    chrome.windows.update(win.id, {state: 'minimized'}, function () { });
                });
            }
        });
    }
});
