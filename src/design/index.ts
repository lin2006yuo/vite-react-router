import * as App from './app'
import { DesignEditor } from './editor/designEditor'

interface CreateDesignEditorOption {
  theme?: 'white';
}

export default {
  createDesignEditor(opt?: CreateDesignEditorOption) {
    return App.start(DesignEditor)
  }
}