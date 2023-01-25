var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv/package.json
var require_package = __commonJS({
  "node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv/package.json"(exports, module2) {
    module2.exports = {
      name: "dotenv",
      version: "16.0.3",
      description: "Loads environment variables from .env file",
      main: "lib/main.js",
      types: "lib/main.d.ts",
      exports: {
        ".": {
          require: "./lib/main.js",
          types: "./lib/main.d.ts",
          default: "./lib/main.js"
        },
        "./config": "./config.js",
        "./config.js": "./config.js",
        "./lib/env-options": "./lib/env-options.js",
        "./lib/env-options.js": "./lib/env-options.js",
        "./lib/cli-options": "./lib/cli-options.js",
        "./lib/cli-options.js": "./lib/cli-options.js",
        "./package.json": "./package.json"
      },
      scripts: {
        "dts-check": "tsc --project tests/types/tsconfig.json",
        lint: "standard",
        "lint-readme": "standard-markdown",
        pretest: "npm run lint && npm run dts-check",
        test: "tap tests/*.js --100 -Rspec",
        prerelease: "npm test",
        release: "standard-version"
      },
      repository: {
        type: "git",
        url: "git://github.com/motdotla/dotenv.git"
      },
      keywords: [
        "dotenv",
        "env",
        ".env",
        "environment",
        "variables",
        "config",
        "settings"
      ],
      readmeFilename: "README.md",
      license: "BSD-2-Clause",
      devDependencies: {
        "@types/node": "^17.0.9",
        decache: "^4.6.1",
        dtslint: "^3.7.0",
        sinon: "^12.0.1",
        standard: "^16.0.4",
        "standard-markdown": "^7.1.0",
        "standard-version": "^9.3.2",
        tap: "^15.1.6",
        tar: "^6.1.11",
        typescript: "^4.5.4"
      },
      engines: {
        node: ">=12"
      }
    };
  }
});

// node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv/lib/main.js"(exports, module2) {
    var fs = require("fs");
    var path = require("path");
    var os = require("os");
    var packageJson = require_package();
    var version = packageJson.version;
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/mg, "\n");
      let match;
      while ((match = LINE.exec(lines)) != null) {
        const key = match[1];
        let value = match[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    function _log(message) {
      console.log(`[dotenv@${version}][DEBUG] ${message}`);
    }
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
    }
    function config(options) {
      let dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      const debug = Boolean(options && options.debug);
      const override = Boolean(options && options.override);
      if (options) {
        if (options.path != null) {
          dotenvPath = _resolveHome(options.path);
        }
        if (options.encoding != null) {
          encoding = options.encoding;
        }
      }
      try {
        const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }));
        Object.keys(parsed).forEach(function(key) {
          if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
            process.env[key] = parsed[key];
          } else {
            if (override === true) {
              process.env[key] = parsed[key];
            }
            if (debug) {
              if (override === true) {
                _log(`"${key}" is already defined in \`process.env\` and WAS overwritten`);
              } else {
                _log(`"${key}" is already defined in \`process.env\` and was NOT overwritten`);
              }
            }
          }
        });
        return { parsed };
      } catch (e) {
        if (debug) {
          _log(`Failed to load ${dotenvPath} ${e.message}`);
        }
        return { error: e };
      }
    }
    var DotenvModule = {
      config,
      parse
    };
    module2.exports.config = DotenvModule.config;
    module2.exports.parse = DotenvModule.parse;
    module2.exports = DotenvModule;
  }
});

// src/models/Project.js
var require_Project = __commonJS({
  "src/models/Project.js"(exports, module2) {
    var import_mongoose2 = __toESM(require("mongoose"));
    var Project = new import_mongoose2.default.Schema({
      projectName: { type: String, trim: true, default: "" },
      projectOwner: { type: String, trim: true, default: "" },
      description: { type: String, trim: true, default: "" },
      imageUrl: { type: String, trim: true, default: "" }
    });
    module2.exports = import_mongoose2.default.model("Project", Project);
  }
});

// src/api/projects.route.js
var require_projects_route = __commonJS({
  "src/api/projects.route.js"(exports, module2) {
    var Project = require_Project();
    var getProjects2 = (req, res) => {
      const query = req.query;
      Project.find(query).then((projects) => {
        res.json({
          confirmation: "success",
          data: projects
        });
      }).catch;
    };
    var getProjectById2 = (req, res) => {
      const id = req.params.id;
      Project.find({ _id: id }).then((project) => {
        res.json({
          confirmation: "success",
          data: project
        });
      }).catch;
    };
    var createProject2 = (req, res) => {
      const project = new Project({
        projectName: req.body.projectName,
        description: req.body.description,
        imageUrl: req.body.imageUrl
      });
      project.save((err, project2) => {
        if (err) {
          res.send(err);
        }
        res.json(project2);
      });
    };
    var updateProject2 = (req, res) => {
      Project.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            projectName: req.body.projectName,
            description: req.body.description,
            imageUrl: req.body.imageUrl
          }
        },
        { new: true },
        (err, Project2) => {
          if (err) {
            res.sed(err);
          } else
            res.json(Project2);
        }
      );
    };
    var deleteProject2 = (req, res) => {
      Project.deleteOne({ _id: req.params.id }).then(() => res.json({ message: "Project Deleted!" })).catch((err) => res.send(err));
    };
    module2.exports = {
      getProjects: getProjects2,
      getProjectById: getProjectById2,
      createProject: createProject2,
      updateProject: updateProject2,
      deleteProject: deleteProject2
    };
  }
});

// src/server.js
var import_body_parser = require("body-parser");
var import_express = __toESM(require("express"));
var import_morgan = __toESM(require("morgan"));
var import_cors = __toESM(require("cors"));

// src/connection.js
var import_mongoose = __toESM(require("mongoose"));
var import_dotenv = __toESM(require_main());
import_dotenv.default.config();
function Connection() {
  import_mongoose.default.set("strictQuery", false);
  import_mongoose.default.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
  }).then(() => {
    console.log("Successfully connected to the database");
  }).catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });
}

// src/server.js
var import_projects = __toESM(require_projects_route());
var createServer = () => {
  const app = (0, import_express.default)();
  Connection();
  app.disable("x-powered-by").use((0, import_morgan.default)("dev")).use((0, import_body_parser.urlencoded)({ extended: false })).use((0, import_body_parser.json)()).use((0, import_cors.default)());
  app.get("/projects", import_projects.getProjects).get("/projects/:id", import_projects.getProjectById).post("/projects", import_projects.createProject).put("/projects/:id", import_projects.updateProject).delete("/projects/:id", import_projects.deleteProject);
  return app;
};

// src/index.ts
var port = process.env.PORT || 5001;
var server = createServer();
server.listen(port, () => {
  console.log(`api running on ${port}`);
});
