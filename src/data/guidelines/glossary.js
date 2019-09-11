/* eslint-disable */
module.exports = {
  A: {
    'Action labels': {
      add: {
        desc:
          'Adds an existing object to a list, container, or system (for example, adding a document to a folder).',
        subtext:
          'Combine Add with the object (for example, Add user, Add space, Add role, or Add privileges). Contrast with [Insert](#insert) and [New](#new). See the [Add action](/patterns/common-actions#add).',
      },
      apply: {
        desc:
          'Saves changes without closing the dialog. These properties often affect subsequent system behavior.',
        subtext:
          'Use instead of Save Changes. Contrast with [Save](#save) and [Save As](#save-as).',
      },
      approve: {
        desc:
          'Indicates the user agrees. In a business process, typically initiates the next step.',
        subtext: 'See [Reject](#reject).',
      },
    },
  },
  B: {
    'Action labels': {
      back: {
        desc:
          'Returns the user to the previous step in a sequence of steps, such as in a wizard.',
        subtext:
          'Use instead of Previous. See [Next](#next) and [Finish](#finish).',
      },
      browse: {
        desc:
          'Assists the user in entering a file name or file path (for example, on a button or link next to an entry field). Typically opens a secondary window where the user can locate and select the desired directory and file.',
      },
    },
  },
  C: {
    'Action labels': {
      cancel: {
        desc: 'Stops the current action and closes the dialog.',
        subtext:
          'Warn the user of any possible negative consequences of stopping an action from progressing, such as data corruption. See [Reset](#reset) and the [Cancel action](/patterns/common-actions#cancel).',
      },
      clear: {
        desc:
          'This action clears all the fields or selections. Also deletes the contents of a document, such as a log. Typically the default selection or value is re-established for controls that always have a selection or value, such as Radio Buttons.',
        subtext:
          'Where appropriate, combine Clear with the object (for example, Clear contents, Clear fields, Clear all). Contrast with [Delete](#delete) and [Remove](#remove). See the [Clear action](/patterns/common-actions#clear).',
      },
      close: {
        desc:
          'Closes the current page or window (for example, closing a secondary window containing online help).',
        subtext:
          'Do not use Close together with OK or Cancel actions. Contrast with [Done](#done). See [Cancel](#cancel) and the [Close action](/patterns/common-actions#close).',
      },
      copy: {
        desc:
          'Creates new instances of the selected objects to a specific destination.',
        subtext:
          'Combine Copy with the object being copied (for example, Copy folder) or the destination (for example, Copy to clipboard) if there are multiple possibilities. Use instead of Create like. Contrast with [New](#new). See the [Copy action](/patterns/common-actions#copy).',
      },
      create: {
        desc:
          'Label for a button in a dialog or form that creates a new object. The settings in the dialog are applied to the object when it is created.',
        subtext:
          'Use [New](#new) to initiate the action of creating a new object. Use Create to confirm the action after any naming or configuration. Contrast with [Add](#add), [Copy](#copy), and [Insert](#insert).',
      },
      customize: {
        desc: 'Allow a user to make desired changes.',
        subtext: null,
      },
    },
  },
  D: {
    'Action labels': {
      delete: {
        desc: 'Destroys an existing object.',
        subtext:
          'Combine Delete with the object to delete (for example, Delete column or Delete table). Contrast with [Clear](#clear) and [Remove](#remove). See the [Delete action](/patterns/common-actions#delete)',
      },
      docs: {
        desc:
          'Opens a separate window containing the landing page for the Bluemix product documentation.',
        subtext:
          'Use as link text only for the specific link that points to the Bluemix product documentation from the console menu bar. See [Learn More](#learn-more).',
      },
      done: {
        desc:
          'Indicates that the user has finished working in an environment (for example, editing templates) and wants to return to where he or she came from.',
        subtext: 'See [Finish](#finish). Contrast with [Close](#close).',
      },
      download: {
        desc: 'Transfers a file from a remote system to a local system.',
        subtext: 'See [Upload](#upload).',
      },
      drop: {
        desc: 'Use only for dropping a database table.',
        subtext:
          'In other cases, use [Delete](#delete), [Clear](#clear), or [Remove](#remove).',
      },
    },
  },
  E: {
    'Action labels': {
      edit: {
        desc: 'Allows data or values to be changed.',
        subtext: 'See the [Edit action](/patterns/common-actions#edit).',
      },
      'empty trash': {
        desc:
          'Permanently deletes all files or objects that have been placed into a trash container.',
        subtext: 'See [Move to trash](#move-to-trash).',
      },
      export: {
        desc:
          'Saves data in a different format external to the system. Typically opens a secondary window for the user to specify the file type and destination (for example, storing table data as a set of comma-separated values).',
        subtext: 'See [Import](#import).',
      },
    },
  },
  F: {
    'Action labels': {
      filter: {
        desc: 'Shortens a list to objects that match the filter criteria.',
        subtext: 'Contrast with [Find](#find) and [Search](#search).',
      },
      find: {
        desc:
          'Moves the cursor to the next element matching the specified criteria (for example, view the next occurrence of a specific word within an email message).',
        subtext: 'Contrast with (Filter)(#filter) and [Search](#search).',
      },
      finish: {
        desc: 'Indicates completion of a series of steps, such as in a wizard.',
        subtext: 'See [Done](#done).',
      },
    },
  },
  G: {
    'Action labels': {
      'get help': {
        desc:
          'Opens a search field from which the user can search for help information.',
        subtext:
          'Use only as link text on Support widget from the console menu bar. See [Docs](#docs) and [Learn more](#learn-more).',
      },
    },
  },
  H: {
    'Action labels': {
      hide: {
        desc: 'Removes an element that was previously shown.',
        subtext: 'Context: Hide descriptions. See [Show](#show).',
      },
    },
  },
  I: {
    'Action labels': {
      import: {
        desc:
          'Transforms data or objects from an external source. Typically opens a secondary window for the user to locate the external source.',
        subtext:
          'Context: Creating a new table based on comma-separated values contained in a separate file. See [Export](#export).',
      },
      insert: {
        desc: 'Adds an element at a particular position in an ordered view.',
        subtext:
          'Context: Adding a picture to the body of a document or inserting a record into a table. Contrast with [Add](#new) and [New](#new).',
      },
    },
  },
  L: {
    'Action labels': {
      launch: {
        desc: 'Do not use.',
        subtext: 'Use [Start](#start).',
      },
      'learn more': {
        desc:
          'Opens additional, highly contextual information. Insert at the end of inline text or hover text where more information follows but does not fit in the current context.',
        subtext:
          "If space permits, combine Learn more with meaningful text that describes the content you're pointing to. For example, if your user needs some best practices to manage apps in multiple regions, you could use Learn more about regions.",
      },
      'log in': {
        desc:
          'Enters a site or application. This choice typically opens a form for entry of credentials. Also used on the submission button after users enter their credentials.',
        subtext: 'Use instead of Sign in. See [Log out](#log-out).',
      },
      'log out': {
        desc: 'Exits an application or site.',
        subtext: 'Use instead of Sign out. See [Log in](#log-in).',
      },
    },
  },
  M: {
    'Action labels': {
      move: {
        desc:
          'Transfers an object from one container (for example, folder, activity, or page) to another.',
      },
      'move to trash': {
        desc:
          'A soft delete. Moves a file or object to an area from where it can later be permanently deleted or recovered.',
        subtext:
          'Use instead of Delete or Recycle bin. See [Empty trash](#empty-trash).',
      },
    },
  },
  N: {
    'Action labels': {
      new: {
        desc:
          'Starts the creation of a new object. New either creates the object immediately or opens a dialog or set of fields where the user can enter properties.',
        subtext:
          'Combine New with the object to create (for example, New user or New column). See [Create](#create). Contrast with [Add](#add), [Copy](#copy), and [Insert](#insert).',
      },
      next: {
        desc:
          'Advances the user to the next step in a sequence of steps, such as in a wizard.',
        subtext:
          'See [Back](#Back), [Finish](#finish), and the [Next action](/patterns/common-actions#next).',
      },
    },
  },
  O: {
    'Action labels': {
      OK: {
        desc: 'Confirms an action or completes the current task.',
        subtext:
          'Best practice is to use a label corresponding to the specific action (e.g. [Save](#save), [Delete](#delete), etc.). Use OK only when such a label is not available. Write as shown: two letters, both uppercase.',
      },
    },
  },
  P: {
    'Action labels': {
      play: {
        desc: 'Starts audio, video, or an animation.',
      },
      post: {
        desc:
          'Adds a new comment to an online community or adds status to a log or record.',
        subtext:
          'If you are editing an existing comment, use [Save](#save) instead.',
      },
      preview: {
        desc:
          'Shows how an object or content will appear with formatting applied before the content is published or distributed. Alternatively, provides an incomplete display of an existing object without leaving the current context.',
      },
      print: {
        desc:
          'Sends a copy of the currently selected object or the object in view to the printer.',
      },
    },
  },
  R: {
    'Action labels': {
      redo: {
        desc: 'Redoes an undo action.',
        subtext:
          'Likely used only as a Tooltip on an icon button. See [Undo](#undo).',
      },
      refresh: {
        desc:
          'Reloads the view of an object when the displayed view has become unsynchronized with the source.',
        subtext:
          'Likely used only as a tooltip on an icon button. See the [Refresh action](/patterns/common-actions#refresh).',
      },
      reject: {
        desc:
          'Indicates the user does not approve. In a business process, typically blocks the process from proceeding to the next step.',
        subtext: 'See [Approve](#approve).',
      },
      reply: {
        desc: 'Indicates or completes a response to an email or a comment.',
      },
      remove: {
        desc:
          'Removes an object from a list or container but the object is not destroyed as a result of the action. Often requires one or more objects to be selected.',
        subtext:
          'Where appropriate, combine Remove with the object that will be removed (for example, Remove user, Remove role, Remove privileges). Contrast with [Delete](#delete) and [Clear](#clear). See the [Remove action](/patterns/common-actions#remove).',
      },
      reset: {
        desc:
          'Reverts values back to their last saved state. The last saved state includes the values stored the last time the user clicked Apply. Does not close the dialog or window.',
        subtext:
          'See [Restore defaults](#restore-defaults), [Undo](#undo), [Cancel](#cancel), and the [Reset action](/patterns/common-actions#reset). Contrast with [Restore](#restore).',
      },
      restore: {
        desc:
          'Brings a file back after deletion, corruption, or similar event.',
        subtext: 'Contrast with [Reset](#reset).',
      },
      'restore all': {
        desc:
          'Completes a restore operation on all files or objects in a given system or container.',
        subtext: 'Contrast with [Restore](#restore).',
      },
      'restore defaults': {
        desc: 'Sets form values to the default settings.',
        subtext: 'See [Reset](#reset) and [Undo](#undo).',
      },
      run: {
        desc: 'Sets form values to the default settings.',
        subtext: 'Use instead of Execute.',
      },
    },
  },
  S: {
    'Action labels': {
      save: {
        desc:
          'Saves pending modifications made to a file or document. Does not close the window or panel.',
        subtext: 'Contrast with [Apply](#apply).',
      },
      'save as': {
        desc:
          'Creates a new object based on the state of the object currently being viewed. The user names the new object and typically identifies its location.',
      },
      search: {
        desc:
          'Returns all objects (for example, files, names, or documents) within a defined set (for example, in a folder, directory, database, or the internet) that match some specified criteria.',
        subtext: 'Contrast with [Find](#find) and [Filter](#filter).',
      },
      select: {
        desc: 'Selects data from a table.',
      },
      'select all': {
        desc:
          'Adds all objects in the view to the selection set or checks all Checkboxes.',
        subtext: 'Contrast with [Clear](#clear).',
      },
      send: {
        desc: 'Transfers an email or other information to the recipient.',
      },
      show: {
        desc: 'Reveals an object that was previously hidden.',
        subtext: 'Context: Show descriptions. See [Hide](#hide).',
      },
      'sign up': {
        desc: 'Creates a user account or registers a user in a system.',
        subtext: 'Use instead of Register.',
      },
      start: {
        desc:
          'Deploy an app or service to its development or production environment so that it can be used.',
        subtext: 'Use instead of [Launch](#launch).',
      },
      sort: {
        desc: 'Sorts a list or table column.',
        subtext:
          "Likely used only as a tooltip on an icon button. Can be used without 'Ascending' or 'Descending' only if the order can be provided to a screen reader in the code for accessibility.",
      },
      'submit an idea': {
        desc: 'Opens a separate window containing the IBM Cloud Ideas portal.',
        subtext:
          'Use only as link text on Support widget from the console menu bar.',
      },
    },
  },
  T: {
    'Action labels': {
      top: {
        desc: 'Returns to the top of the page.',
        subtext: 'Use instead of Back to top.',
      },
    },
  },
  U: {
    'Action labels': {
      undo: {
        desc:
          'Reverts to the state before the most recent changes made by the user. Repeated use successively reverts to prior states in reverse chronological order. Applies to changes in data and not to changes made to the view.',
        subtext:
          'Not all actions, such as [Save](#save), can be undone. See [Redo](#redo), [Reset](#reset), and [Restore](#restore) defaults.',
      },
      update: {
        desc:
          'Label for a button in a dialog or form for editing an object. The settings in the dialog are applied to the object when it is updated.',
        subtext: 'See [Edit](#edit).',
      },
      upload: {
        desc: 'Transfers a file from a local system to a remote system.',
        subtext: 'See [Download](#download).',
      },
    },
  },
  V: {
    'Action labels': {
      'view details': {
        desc: 'Presents additional information or properties for the object.',
      },
    },
  },
  __content: '\n',
};
