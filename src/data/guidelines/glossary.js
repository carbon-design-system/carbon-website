/* eslint-disable */
module.exports = {
  A: {
    'Action labels': {
      add: {
        desc:
          'Takes an existing object and uses it in a new context (for example, adds an item to the cart, adds a user to a group, or adds a document to a folder).',
        subtext:
          'Where appropriate, combine add with the object (for example, Add user or Add role). Compare [create](#create), [insert](#insert), [new](#new), and [upload](#upload). See also the [Add pattern](/patterns/common-actions#add).',
      },
      apply: {
        desc:
          'Saves changes without closing the dialog. These properties often affect subsequent system behavior.',
        subtext: 'Use instead of `Save Changes`. Compare [save](#save).',
      },
      approve: {
        desc:
          'Indicates the user agrees. In a business process, typically initiates the next step.',
        subtext: 'Compare [reject](#reject).',
      },
    },
  },
  B: {
    'Action labels': {
      back: {
        desc:
          'Returns the user to the previous step in a sequence of steps, such as in a wizard.',
        subtext:
          'Use instead of `previous`. Compare [next](#next) and [finish](#finish).',
      },
      browse: {
        desc:
          'Assists the user in selecting a file (for example, on a button or link next to an entry field). Typically opens a secondary window where the user can locate and select the desired directory and file.',
      },
    },
  },
  C: {
    'Action labels': {
      cancel: {
        desc: 'Stops the current action and closes the dialog.',
        subtext:
          'Warn the user of any possible negative consequences of stopping an action from progressing, such as data corruption. Compare [reset](#reset). See also the [Cancel pattern](/patterns/common-actions#cancel).',
      },
      clear: {
        desc:
          'This action clears all the fields or selections. Also deletes the contents of a document, such as a log. Typically the default selection or value is re-established for controls that always have a selection or value, such as [radio buttons](/components/radio-button/usage).',
        subtext:
          'Where appropriate, combine clear with the object (for example, Clear fields or Clear all). Compare [delete](#delete) and [remove](#remove). See also the [Clear pattern](/patterns/common-actions#clear).',
      },
      close: {
        desc:
          'Closes the current page or window (for example, closing a secondary window containing online help).',
        subtext:
          'Do not use close alongside OK or cancel actions. Compare [Cancel](#cancel) and [done](#done). See also the [Close pattern](/patterns/common-actions#close).',
      },
      copy: {
        desc:
          'Creates new instances of the selected objects in a specific destination.',
        subtext:
          'Combine copy with the object being copied (for example, Copy folder) or the destination (for example, Copy to clipboard) if there are multiple possibilities. Compare [new](#new). See also the [Copy pattern](/patterns/common-actions#copy).',
      },
      create: {
        desc:
          'Makes a new object from scratch (for example, creates a calendar event or creates a new document).',
        subtext:
          'In scenarios where the user needs to supply some details or settings as part of the create process, use new to initiate the action and create to apply the user-supplied details or settings to the new object. Compare [add](#add), [copy](#copy), [insert](#insert), and [new](#new).',
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
        desc:
          'Destroys an existing object so that it no longer exists (for example, deletes a file from a directory or deletes a value from a table cell).',
        subtext:
          'Where appropriate, combine delete with the object (for example, Delete column or Delete row). Compare [clear](#clear) and [remove](#remove). See also the [Delete pattern](/patterns/common-actions#delete)',
      },
      docs: {
        desc:
          'Opens a separate window containing the landing page for the IBM Cloud product documentation.',
        subtext:
          'Use as link text only for the specific link that points to the IBM Cloud product documentation from the console menu bar. Compare [learn more](#learn-more).',
      },
      done: {
        desc:
          'Indicates that the user has finished working in an environment (for example, editing templates) and wants to return to where he or she came from.',
        subtext: 'Compare [close](#close) and [finish](#finish).',
      },
      download: {
        desc: 'Transfers a file from a remote system to a local system.',
        subtext: 'Compare [upload](#upload).',
      },
      drop: {
        desc: 'Use only when referring to dropping a database table.',
        subtext:
          'In other scenarios, use [clear](#clear), [delete](#delete), or [remove](#remove).',
      },
    },
  },
  E: {
    'Action labels': {
      edit: {
        desc: 'Allows data or values to be changed.',
        subtext: 'See also the [Edit pattern](/patterns/common-actions#edit).',
      },
      'empty trash': {
        desc:
          'Permanently deletes all files or objects that have been placed into a trash container.',
        subtext: 'Compare [move to trash](#move-to-trash).',
      },
      export: {
        desc:
          'Saves data in a different format external to the system. Typically opens a secondary window for the user to specify the file type and destination (for example, storing table data as a set of comma-separated values).',
        subtext: 'Compare [import](#import).',
      },
    },
  },
  F: {
    'Action labels': {
      filter: {
        desc: 'Shortens a list to objects that match the filter criteria.',
        subtext: 'Compare [find](#find) and [search](#search).',
      },
      find: {
        desc:
          'Moves the cursor to the next element matching the specified criteria (for example, view the next occurrence of a specific word within an email message).',
        subtext: 'Compare [filter](#filter) and [search](#search).',
      },
      finish: {
        desc: 'Indicates completion of a series of steps, such as in a wizard.',
        subtext: 'Compare [done](#done).',
      },
    },
  },
  G: {
    'Action labels': {
      'get help': {
        desc:
          'Opens a search field from which the user can search for help information.',
        subtext:
          'Use only as link text on the Support widget from the IBM Cloud console menu bar. Compare [docs](#docs) and [learn more](#learn-more).',
      },
    },
  },
  H: {
    'Action labels': {
      hide: {
        desc:
          'Removes an element that was previously shown (for example, enables the user to hide details or descriptions).',
        subtext: 'Compare [show](#show).',
      },
    },
  },
  I: {
    'Action labels': {
      import: {
        desc:
          'Transforms data or objects from an external source. Typically opens a secondary window for the user to locate the external source.',
        subtext:
          'Context: Creating a new table based on comma-separated values contained in a separate file. Compare [export](#export).',
      },
      insert: {
        desc: 'Adds an element at a particular position in an ordered view.',
        subtext:
          'Context: Adding a picture to the body of a document or inserting a record into a table. Compare [add](#new) and [new](#new).',
      },
    },
  },
  L: {
    'Action labels': {
      launch: {
        desc: null,
        subtext: 'Do not use `launch`; use [start](#start).',
      },
      'learn more': {
        desc:
          'Opens additional, highly contextual information. Insert at the end of inline text or hover text where more information follows but does not fit in the current context.',
        subtext:
          "If space permits, combine learn more with meaningful text that describes the content you're pointing to. For example, if your user needs some best practices to manage apps in multiple regions, you could use Learn more about regions.",
      },
      'log in': {
        desc:
          'Enters a site or application. This choice typically opens a form for entry of credentials. Also used on the submission button after users enter their credentials.',
        subtext: 'Use instead of `sign in`. Compare [log out](#log-out).',
      },
      'log out': {
        desc: 'Exits an application or site.',
        subtext: 'Use instead of `sign out`. Compare [log in](#log-in).',
      },
    },
  },
  M: {
    'Action labels': {
      move: {
        desc:
          'Transfers an object from one container (for example, folder, activity, or page) to another.',
        subtext: null,
      },
      'move to trash': {
        desc:
          'A soft delete. Moves a file or object to an area from where it can later be permanently deleted or recovered.',
        subtext:
          'Use instead of [delete](#delete) if it is possible for the user to recover the objects. Compare [empty trash](#empty-trash).',
      },
    },
  },
  N: {
    'Action labels': {
      new: {
        desc:
          'Starts the creation of a new object. New either creates the object immediately or opens a dialog or set of fields where the user can enter properties.',
        subtext:
          'Combine new with the object to create (for example, New user or New column). Compare [add](#add), [copy](#copy), [create](#create), and [insert](#insert).',
      },
      next: {
        desc:
          'Advances the user to the next step in a sequence of steps, such as in a wizard.',
        subtext:
          'Compare [back](#back) and [finish](#finish). See also the [Next pattern](/patterns/common-actions#next).',
      },
    },
  },
  O: {
    'Action labels': {
      OK: {
        desc: 'Confirms an action or completes the current task.',
        subtext:
          'Best practice is to use a label corresponding to the specific action (for example, Save or Close or Delete). Use OK only when such a label is not available. Write as shown: two letters, both uppercase.',
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
          'If you are editing an existing comment, use [save](#save) instead.',
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
          'Likely used only as a tooltip on an icon button. Compare [undo](#undo).',
      },
      refresh: {
        desc:
          'Reloads the view of an object when the displayed view has become unsynchronized with the source.',
        subtext:
          'Likely used only as a tooltip on an icon button. See also the [Refresh pattern](/patterns/common-actions#refresh).',
      },
      reject: {
        desc:
          'Indicates the user does not approve. In a business process, typically blocks the process from proceeding to the next step.',
        subtext: 'Compare [approve](#approve).',
      },
      reply: {
        desc: 'Indicates or completes a response to an email or a comment.',
      },
      remove: {
        desc:
          'Removes an object from the current context – but note that the object still exists (for example, removes a user from a group or removes an item from the cart).',
        subtext:
          'Where appropriate, combine remove with the object that will be removed (for example, Remove user or Remove role). Compare [clear](#clear) and [delete](#delete). See also the [Remove pattern](/patterns/common-actions#remove).',
      },
      reset: {
        desc:
          'Reverts values back to their last saved state. The last saved state includes the values stored the last time the user clicked Apply. Does not close the dialog or window.',
        subtext:
          'Compare [cancel](#cancel), [restore](#restore), [restore defaults](#restore-defaults), and [undo](#undo). See also the [Reset pattern](/patterns/common-actions#reset).',
      },
      restore: {
        desc:
          'Brings a file back after deletion, corruption, or similar event.',
        subtext: 'Compare [reset](#reset).',
      },
      'restore all': {
        desc:
          'Completes a restore operation on all files or objects in a given system or container.',
        subtext: 'Compare [restore](#restore).',
      },
      'restore defaults': {
        desc: 'Sets form values to the default settings.',
        subtext: 'Compare [reset](#reset) and [undo](#undo).',
      },
      run: {
        desc: 'Initiates a procedure.',
        subtext: 'Use run instead of `execute`.',
      },
    },
  },
  S: {
    'Action labels': {
      save: {
        desc:
          'Saves pending modifications made to a file or document. Does not close the window or panel.',
        subtext: 'Compare [apply](#apply).',
      },
      'save as': {
        desc:
          'Creates a new object based on the state of the object currently being viewed. The user names the new object and typically identifies its location.',
      },
      search: {
        desc:
          'Returns all objects (for example, files, names, or documents) within a defined set (for example, in a folder, directory, database, or the internet) that match some specified criteria.',
        subtext: 'Compare [filter](#filter) and [find](#find).',
      },
      select: {
        desc: 'Selects data from a table.',
      },
      'select all': {
        desc:
          'Adds all objects in the view to the selection set or checks all checkboxes.',
        subtext: 'Compare [clear](#clear).',
      },
      send: {
        desc:
          'Transfers an email or other information to the recipient or destination.',
      },
      show: {
        desc:
          'Reveals an object that was previously hidden (for example, shows descriptions or shows further details).',
        subtext: 'Compare [hide](#hide).',
      },
      'sign up': {
        desc: 'Creates a user account or registers a user in a system.',
        subtext: 'Use instead of `register`.',
      },
      start: {
        desc:
          'Deploy an app or service to its development or production environment so that it can be used.',
        subtext: 'Use instead of `launch`.',
      },
      sort: {
        desc: 'Sorts a list or table column.',
        subtext:
          "Likely used only as a tooltip on an icon button. Can be used without 'ascending' or 'descending' only if the order can be provided to a screen reader in the code for accessibility.",
      },
      'submit an idea': {
        desc: 'Opens a separate window containing the IBM Cloud Ideas portal.',
        subtext:
          'Use only as link text on the Support widget from the console menu bar.',
      },
    },
  },
  T: {
    'Action labels': {
      top: {
        desc: 'Returns to the top of the page.',
        subtext: 'Use instead of `back to top`.',
      },
    },
  },
  U: {
    'Action labels': {
      undo: {
        desc:
          'Reverts to the state before the most recent changes made by the user. Repeated use successively reverts to prior states in reverse chronological order. Applies to changes in data and not to changes made to the view.',
        subtext:
          'Not all actions, such as [save](#save), can be undone. Compare [redo](#redo), [reset](#reset), and [restore](#restore).',
      },
      update: {
        desc:
          'Label for a button in a dialog or form for editing an object. The settings in the dialog are applied to the object when it is updated.',
        subtext: 'Compare [edit](#edit).',
      },
      upload: {
        desc: 'Transfers a file from a local system to a remote system.',
        subtext: 'Compare [download](#download).',
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
