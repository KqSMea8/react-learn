import dva from "dva";
import "./components/common/less/common.less";
// import 'animate.css'
import models from "./models";

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/layout/MainLayout'))
// app.model(require('./models/layout/SiderParent'))
// app.model(require('./models/homePage/Index'))
models.forEach(m => {
  app.model(m.default);
});
// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
