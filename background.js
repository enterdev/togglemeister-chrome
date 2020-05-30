let lastFocusedWindowId = null;
chrome.commands.onCommand.addListener(function (command)
{
    if (command === 'togglemeister-toggle')
    {
        chrome.windows.getCurrent({}, function (win)
        {
            if (!win.focused)
            {
                chrome.windows.getAll({}, function (windows)
                {
                    windows.forEach(function (window)
                    {
                        if (!lastFocusedWindowId || window.id !== lastFocusedWindowId)
                            chrome.windows.update(window.id, {focused: true}, function (win) { })
                    });
                    if (lastFocusedWindowId)
                        chrome.windows.update(lastFocusedWindowId, {focused: true}, function (win) { });
                });
            }
            else
            {
                chrome.windows.getAll({}, function (windows)
                {
                    windows.forEach(function (window)
                    {
                        if (window.focused)
                            lastFocusedWindowId = window.id;

                        chrome.windows.update(window.id, {state: 'minimized'}, function (win) { })
                    });
                });
            }
        });
    }
});
