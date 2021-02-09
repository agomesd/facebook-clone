webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/auth-context */ "./src/context/auth-context.js");
/* harmony import */ var _components_HutForm_HutForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HutForm/HutForm */ "./src/components/HutForm/HutForm.jsx");
/* harmony import */ var _components_AdminSidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AdminSidebar/AdminSidebar */ "./src/components/AdminSidebar/AdminSidebar.jsx");
/* harmony import */ var _views_Book_Book__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/Book/Book */ "./src/views/Book/Book.jsx");
/* harmony import */ var _Booking_Booking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Booking/Booking */ "./src/Booking/Booking.js");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Cart/Cart */ "./src/components/Cart/Cart.jsx");
/* harmony import */ var _views_admin_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/admin/Dashboard/Dashboard */ "./src/views/admin/Dashboard/Dashboard.jsx");
/* harmony import */ var _components_HutDetails_HutDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/HutDetails/HutDetails */ "./src/components/HutDetails/HutDetails.jsx");
/* harmony import */ var _components_HutManagement_HutManagement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/HutManagement/HutManagement */ "./src/components/HutManagement/HutManagement.jsx");
/* harmony import */ var _views_Home_Home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/Home/Home */ "./src/views/Home/Home.jsx");
/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/LoginForm/LoginForm */ "./src/components/LoginForm/LoginForm.jsx");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./src/components/NavBar/NavBar.jsx");
/* harmony import */ var _Admin_AdminConsole_NavPannel_NavPannel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Admin/AdminConsole/NavPannel/NavPannel */ "./src/Admin/AdminConsole/NavPannel/NavPannel.js");
/* harmony import */ var _views_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/NotFound/NotFound */ "./src/views/NotFound/NotFound.jsx");
/* harmony import */ var _components_Huts_Huts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Huts/Huts */ "./src/components/Huts/Huts.jsx");
/* harmony import */ var _components_RegisterForm_RegisterForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/RegisterForm/RegisterForm */ "./src/components/RegisterForm/RegisterForm.jsx");
/* harmony import */ var _views_Shop_Shop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/Shop/Shop */ "./src/views/Shop/Shop.jsx");
/* harmony import */ var _views_Shop_ShopItemDetails_ShopItemDetails__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/Shop/ShopItemDetails/ShopItemDetails */ "./src/views/Shop/ShopItemDetails/ShopItemDetails.jsx");
/* harmony import */ var _components_Terms_Terms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/Terms/Terms */ "./src/components/Terms/Terms.jsx");
var _jsxFileName = "/Users/alex/Desktop/WebDevUdemy/Workspace/Happy_Huts/happy_huts/src/App.js";























const App = () => {
  const [showCart, setShowCart] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_context__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const defaultRoutes = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, showCart ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_8__["default"], {
      showCart: showCart,
      onCloseCart: handleCloseCart,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onCartClicked: handleShowCart,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app__body",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, authContext.isAuth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Admin_AdminConsole_NavPannel_NavPannel__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 34
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/register",
      component: _components_RegisterForm_RegisterForm__WEBPACK_IMPORTED_MODULE_18__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/login",
      component: _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_13__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/terms-and-faqs",
      component: _components_Terms_Terms__WEBPACK_IMPORTED_MODULE_21__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/book/:title?",
      component: _views_Book_Book__WEBPACK_IMPORTED_MODULE_6__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/booking",
      component: _Booking_Booking__WEBPACK_IMPORTED_MODULE_7__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/hut-management",
      component: _components_HutManagement_HutManagement__WEBPACK_IMPORTED_MODULE_11__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/shop/:title",
      render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Shop_ShopItemDetails_ShopItemDetails__WEBPACK_IMPORTED_MODULE_20__["default"], Object.assign({
        onItemToCart: console.log(props)
      }, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      })),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/shop",
      component: _views_Shop_Shop__WEBPACK_IMPORTED_MODULE_19__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/our-huts/:id",
      component: _components_HutDetails_HutDetails__WEBPACK_IMPORTED_MODULE_10__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/our-huts",
      component: _components_Huts_Huts__WEBPACK_IMPORTED_MODULE_17__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/not-found",
      component: _views_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_16__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/",
      exact: true,
      component: _views_Home_Home__WEBPACK_IMPORTED_MODULE_12__["default"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/not-found",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdminSidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/admin/add-hut/:id",
    component: _components_HutForm_HutForm__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/admin",
    component: _views_admin_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: defaultRoutes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.0223225fc8ff685c7f21.hot-update.js.map