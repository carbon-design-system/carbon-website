/* eslint-disable */
module.exports = {
  A: {
    'Action labels': {
      Add: {
        desc:
          'Takes an existing object and uses it in a new context (for example, adds an item to the cart, adds a user to a group, or adds a document to a folder).',
        subtext:
          'Where appropriate, combine add with the object (for example, Add user or Add role). Compare [Create](#create), [Insert](#insert), [New](#new), and [Upload](#upload). See also the [Add pattern](/patterns/common-actions#add).',
      },
      Apply: {
        desc:
          'Saves changes without closing the dialog. These properties often affect subsequent system behavior.',
        subtext:
          'Use instead of Save changes. Compare [Save](#save) and [Save as](#save-as).',
      },
      Approve: {
        desc:
          'Indicates the user agrees. In a business process, typically initiates the next step.',
        subtext: 'Compare [Reject](#reject).',
      },
    },
  },
  B: {
    'Action labels': {
      Back: {
        desc:
          'Returns the user to the previous step in a sequence of steps, such as in a wizard.',
        subtext:
          'Use instead of Previous. Compare [Next](#next) and [Finish](#finish).',
      },
      Browse: {
        desc:
          'Assists the user in selecting a file (for example, on a button or link next to an entry field). Typically opens a secondary window where the user can locate and select the desired directory and file.',
        subtext: null,
      },
    },
  },
  C: {
    'Action labels': {
      Cancel: {
        desc: 'Stops the current action and closes the dialog.',
        subtext:
          'Warn the user of any possible negative consequences of stopping an action from progressing, such as data corruption. Compare [Reset](#reset). See also the [Cancel pattern](/patterns/common-actions#cancel).',
      },
      Clear: {
        desc:
          'This action clears all the fields or selections. Also deletes the contents of a document, such as a log. Typically the default selection or value is re-established for controls that always have a selection or value, such as [radio buttons](/components/radio-button/usage).',
        subtext:
          'Where appropriate, combine clear with the object (for example, Clear fields or Clear all). Compare [Delete](#delete) and [Remove](#remove). See also the [Clear pattern](/patterns/common-actions#clear).',
      },
      Close: {
        desc:
          'Closes the current page or window (for example, closing a secondary window containing online help).',
        subtext:
          'Do not use Close alongside OK or Cancel actions. Compare [Cancel](#cancel) and [Done](#done). See also the [Close pattern](/patterns/common-actions#close).',
      },
      Copy: {
        desc:
          'Creates new instances of the selected objects in a specific destination.',
        subtext:
          'Combine Copy with the object being copied (for example, Copy folder) or the destination (for example, Copy to clipboard) if there are multiple possibilities. Compare [New](#new). See also the [Copy pattern](/patterns/common-actions#copy).',
      },
      Create: {
        desc:
          'Makes a new object from scratch (for example, creates a calendar event or creates a new document).',
        subtext:
          'In scenarios where the user needs to supply some details or settings as part of the create process, use new to initiate the action and create to apply the user-supplied details or settings to the new object. Compare [Add](#add), [Copy](#copy), [Insert](#insert), and [New](#new).',
      },
      Customize: {
        desc: 'Allow a user to make desired changes.',
        subtext: null,
      },
    },
  },
  D: {
    'Action labels': {
      Delete: {
        desc:
          'Destroys an existing object so that it no longer exists (for example, deletes a file from a directory or deletes a value from a table cell).',
        subtext:
          'Where appropriate, combine Delete with the object (for example, Delete column or Delete row). Compare [Clear](#clear) and [Remove](#remove). See also the [Delete pattern](/patterns/common-actions#delete)',
      },
      Docs: {
        desc:
          'Opens a separate window containing the landing page for the product documentation.',
        subtext:
          'Use as link text only for the specific link that points to the product documentation from the console menu bar. Compare [Learn more](#learn-more).',
      },
      Done: {
        desc:
          'Indicates that the user has finished working in an environment (for example, editing templates) and wants to return to where he or she came from.',
        subtext: 'Compare [Close](#close) and [Finish](#finish).',
      },
      Download: {
        desc: 'Transfers a file from a remote system to a local system.',
        subtext: 'Compare [Upload](#upload).',
      },
      Drop: {
        desc: 'Use only when referring to dropping a database table.',
        subtext:
          'In other scenarios, use [Clear](#clear), [Delete](#delete), or [Remove](#remove).',
      },
    },
  },
  E: {
    'Action labels': {
      Edit: {
        desc: 'Allows data or values to be changed.',
        subtext: 'See also the [Edit pattern](/patterns/common-actions#edit).',
      },
      'Empty trash': {
        desc:
          'Permanently deletes all files or objects that have been placed into a trash container.',
        subtext: 'Compare [Move to trash](#move-to%20trash).',
      },
      Export: {
        desc:
          'Saves data in a different format external to the system. Typically opens a secondary window for the user to specify the file type and destination (for example, storing table data as a set of comma-separated values).',
        subtext: 'Compare [Import](#import).',
      },
    },
  },
  F: {
    'Action labels': {
      Filter: {
        desc: 'Shortens a list to objects that match the filter criteria.',
        subtext: 'Compare [Find](#find) and [Search](#search).',
      },
      Find: {
        desc:
          'Moves the cursor to the next element matching the specified criteria (for example, view the next occurrence of a specific word within an email message).',
        subtext: 'Compare [Filter](#filter) and [Search](#search).',
      },
      Finish: {
        desc: 'Indicates completion of a series of steps, such as in a wizard.',
        subtext: 'Compare [Done](#done).',
      },
    },
  },
  G: {
    'Action labels': {
      'Get help': {
        desc:
          'Opens a search field from which the user can search for help information.',
        subtext:
          'Use only as link text on the console menu bar. Compare [Docs](#docs) and [Learn more](#learn-more).',
      },
    },
  },
  H: {
    'Action labels': {
      Hide: {
        desc:
          'Removes an element that was previously shown (for example, enables the user to hide details or descriptions).',
        subtext: 'Compare [Show](#show).',
      },
    },
  },
  I: {
    'Action labels': {
      Import: {
        desc:
          'Transforms data or objects from an external source. Typically opens a secondary window for the user to locate the external source.',
        subtext:
          'Context: Creating a new table based on comma-separated values contained in a separate file. Compare [Export](#export).',
      },
      Insert: {
        desc: 'Adds an element at a particular position in an ordered view.',
        subtext:
          'Context: Adding a picture to the body of a document or inserting a record into a table. Compare [Add](#add) and [New](#new).',
      },
    },
  },
  L: {
    'Action labels': {
      Launch: {
        desc: null,
        subtext: 'Do not use Launch; use [Start](#start).',
      },
      'Learn more': {
        desc:
          'Opens additional, highly contextual information. Insert at the end of inline text or hover text where more information follows but does not fit in the current context.',
        subtext:
          "If space permits, combine Learn more with meaningful text that describes the content you're pointing to. For example, if your user needs some best practices to manage apps in multiple regions, you could use Learn more about regions.",
      },
      'Log in': {
        desc:
          'Enters a site or application. This choice typically opens a form for entry of credentials. Also used on the submission button after users enter their credentials.',
        subtext:
          'Use instead of Sign in. This is to make it visually distinct from Sign up. These options are often side by side and the different words allow for quick recognition. Compare [Log out](#log-out). See also the [Login pattern](/patterns/login-pattern).',
      },
      'Log out': {
        desc: 'Exits an application or site.',
        subtext:
          'Use instead of Sign out. Compare [Log in](#log-in). See also the [Login pattern](/patterns/login-pattern).',
      },
    },
  },
  M: {
    'Action labels': {
      Move: {
        desc:
          'Transfers an object from one container (for example, folder, activity, or page) to another.',
        subtext: null,
      },
      'Move to trash': {
        desc:
          'A soft delete. Moves a file or object to an area from where it can later be permanently deleted or recovered.',
        subtext:
          'Use instead of [Delete](#delete) if it is possible for the user to recover the objects. Compare [Empty trash](#empty-trash).',
      },
    },
  },
  N: {
    'Action labels': {
      New: {
        desc:
          'Starts the creation of a new object. New either creates the object immediately or opens a dialog or set of fields where the user can enter properties.',
        subtext:
          'Combine new with the object to create (for example, New user or New column). Compare [Add](#add), [Copy](#copy), [Create](#create), [Insert](#insert), and [Save as](#save-as).',
      },
      Next: {
        desc:
          'Advances the user to the next step in a sequence of steps, such as in a wizard.',
        subtext:
          'Compare [Back](#back) and [Finish](#finish). See also the [Next pattern](/patterns/common-actions#next).',
      },
    },
  },
  O: {
    'Action labels': {
      OK: {
        desc: 'Confirms an action or completes the current task.',
        subtext:
          'Best practice is to use a label corresponding to the specific action (for example, [Save](#save) or [Close](#close) or [Delete](#delete)). Use OK only when such a label is not available. Write as shown: two letters, both uppercase.',
      },
    },
  },
  P: {
    'Action labels': {
      Play: {
        desc: 'Starts audio, video, or an animation.',
        subtext: null,
      },
      Post: {
        desc:
          'Adds a new comment to an online community or adds status to a log or record.',
        subtext:
          'If you are editing an existing comment, use [Save](#save) instead.',
      },
      Preview: {
        desc:
          'Shows how an object or content will appear with formatting applied before the content is published or distributed. Alternatively, provides an incomplete display of an existing object without leaving the current context.',
        subtext: null,
      },
      Print: {
        desc:
          'Sends a copy of the currently selected object or the object in view to the printer.',
        subtext: null,
      },
    },
  },
  R: {
    'Action labels': {
      Redo: {
        desc: 'Redoes an undo action.',
        subtext:
          'Likely used only as a [tooltip](/components/tooltip/usage) on an icon button. Compare [Undo](#undo).',
      },
      Refresh: {
        desc:
          'Reloads the view of an object when the displayed view has become unsynchronized with the source.',
        subtext:
          'Likely used only as a tooltip on an icon button. See also the [Refresh pattern](/patterns/common-actions#refresh).',
      },
      Reject: {
        desc:
          'Indicates the user does not approve. In a business process, typically blocks the process from proceeding to the next step.',
        subtext: 'Compare [Approve](#approve).',
      },
      Remove: {
        desc:
          'Removes an object from the current context but the object is not destroyed as a result of the action (for example, removes a user from a group or removes an item from the cart).',
        subtext:
          'Where appropriate, combine Remove with the object that will be removed (for example, Remove user or Remove role). Compare [Clear](#clear) and [Delete](#delete). See also the [Remove pattern](/patterns/common-actions#remove).',
      },
      Reply: {
        desc: 'Indicates or completes a response to an email or a comment.',
        subtext: null,
      },
      Reset: {
        desc:
          'Reverts values back to their last saved state. The last saved state includes the values stored the last time the user clicked Apply. Does not close the dialog or window.',
        subtext:
          'Compare [Cancel](#cancel), [Restore](#restore), [Restore defaults](#restore-defaults), and [Undo](#undo). See also the [Reset pattern](/patterns/common-actions#reset).',
      },
      Restore: {
        desc:
          'Brings a file back after deletion, corruption, or similar event.',
        subtext: 'Compare [Reset](#reset).',
      },
      'Restore all': {
        desc:
          'Completes a restore operation on all files or objects in a given system or container.',
        subtext: 'Compare [Restore](#restore).',
      },
      'Restore defaults': {
        desc: 'Sets form values to the default settings.',
        subtext: 'Compare [Reset](#reset) and [Undo](#undo).',
      },
      Run: {
        desc: 'Initiates a procedure.',
        subtext: 'Use Run instead of Execute.',
      },
    },
  },
  S: {
    'Action labels': {
      Save: {
        desc:
          'Saves pending modifications made to a file or document. Does not close the window or panel.',
        subtext: 'Compare [Apply](#apply).',
      },
      'Save as': {
        desc:
          'Creates a new object based on the state of the object currently being viewed. The user names the new object and typically identifies its location.',
        subtext: null,
      },
      Search: {
        desc:
          'Returns all objects (for example, files, names, or documents) within a defined set (for example, in a folder, directory, database, or the internet) that match some specified criteria.',
        subtext: 'Compare [Filter](#filter) and [Find](#find).',
      },
      Select: {
        desc: 'Selects data from a table.',
        subtext: null,
      },
      'Select all': {
        desc:
          'Adds all objects in the view to the selection set or checks all checkboxes.',
        subtext: 'Compare [Clear](#clear).',
      },
      Send: {
        desc:
          'Transfers an email or other information to the recipient or destination.',
        subtext: null,
      },
      Show: {
        desc:
          'Reveals an object that was previously hidden (for example, shows descriptions or shows further details).',
        subtext: 'Compare [Hide](#hide).',
      },
      'Sign up': {
        desc: 'Creates a user account or registers a user in a system.',
        subtext: 'Use instead of Register.',
      },
      Sort: {
        desc: 'Sorts a list or table column.',
        subtext:
          "Likely used only as a tooltip on an icon button. Can be used without 'ascending' or 'descending' only if the order can be provided to a screen reader in the code for accessibility.",
      },
      Start: {
        desc:
          'Deploy an app or service to its development or production environment so that it can be used.',
        subtext: 'Use instead of Launch.',
      },
      'Submit an idea': {
        desc: 'Opens a separate window containing the IBM Cloud Ideas portal.',
        subtext:
          'Use only as link text on the Support widget from the console menu bar.',
      },
    },
  },
  T: {
    'Action labels': {
      Top: {
        desc: 'Returns to the top of the page.',
        subtext: 'Use instead of Back to top.',
      },
    },
  },
  U: {
    'Action labels': {
      Undo: {
        desc:
          'Reverts to the state before the most recent changes made by the user. Repeated use successively reverts to prior states in reverse chronological order. Applies to changes in data and not to changes made to the view.',
        subtext:
          'Not all actions, such as [Save](#save), can be undone. Compare [Redo](#redo), [Reset](#reset), and [Restore](#restore).',
      },
      Update: {
        desc:
          'Label for a button in a dialog or form for editing an object. The settings in the dialog are applied to the object when it is updated.',
        subtext: 'Compare [Edit](#edit).',
      },
      Upload: {
        desc: 'Transfers a file from a local system to a remote system.',
        subtext: 'Compare [Download](#download).',
      },
    },
  },
  V: {
    'Action labels': {
      'View details': {
        desc: 'Presents additional information or properties for the object.',
        subtext: null,
      },
    },
  },
  __content: '\n',
};
