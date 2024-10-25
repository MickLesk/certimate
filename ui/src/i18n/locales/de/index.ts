﻿import nlsCommon from "./nls.common.json";
import nlsLogin from "./nls.login.json";
import nlsDashboard from "./nls.dashboard.json";
import nlsSettings from "./nls.settings.json";
import nlsDomain from "./nls.domain.json";
import nlsAccess from "./nls.access.json";
import nlsHistory from "./nls.history.json";

export default Object.freeze({
  ...nlsCommon,
  ...nlsLogin,
  ...nlsDashboard,
  ...nlsSettings,
  ...nlsDomain,
  ...nlsAccess,
  ...nlsHistory,
});
