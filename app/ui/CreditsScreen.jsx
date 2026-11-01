// Overdrive Community Revival credits screen.

import '../assets/Inter-Regular.ttf';
import '../assets/JetBrainsMono-Regular.ttf';
import daniAvatar from '../assets/credits/dani.png';
import myluxyAvatar from '../assets/credits/myluxy.png';

import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { Image, Text, View, motion, useIsFocused } from '@ps5-react/core';

import { FocusRing } from './FocusRing.jsx';
import { Icon } from './Icon.jsx';
import { colors } from './colors.js';

const CONTRIBUTORS = [
  {
    key: "dani",
    name: "Dani",
    role: "REVIVAL & MAINTENANCE",
    avatar: daniAvatar,
    description:
      "Revived Overdrive, restored its dependencies, fixed issues and currently maintains the community revival.",
    detail:
      "Dani brought Overdrive back into a working state, restored missing build dependencies, fixed Homebrew extraction and retry recovery issues, and continues maintaining the community revival."
  },
  {
    key: "myluxy",
    name: "MyLuxy",
    role: "SOURCE RECOVERY & REBUILD",
    avatar: myluxyAvatar,
    description:
      "Decompiled Overdrive, recovered its source and rebuilt it.",
    detail:
      "MyLuxy recovered Overdrive by decompiling the application, reconstructing its source and rebuilding the project into the codebase that made this community revival possible."
  }
];

const PANEL_MOTION = {
  scale: {
    type: "spring",
    stiffness: 260,
    damping: 14,
    mass: 0.9
  },
  x: {
    type: "spring",
    stiffness: 300,
    damping: 18,
    mass: 0.9
  }
};

const LEFT_W = 820;
const RIGHT_W = 720;

function Avatar({ source, size }) {
  return /* @__PURE__ */ (0, jsx)(View, {
    style: {
      width: size,
      height: size,
      borderRadius: size / 2,
      overflow: "hidden",
      backgroundColor: "#151518"
    },
    children: /* @__PURE__ */ (0, jsx)(Image, {
      source,
      resizeMode: "cover",
      style: {
        width: size,
        height: size,
        borderRadius: size / 2
      }
    })
  });
}

function CreditsPanel() {
  return /* @__PURE__ */ (0, jsx)(View, {
    style: {
      flex: 1,
      width: "100%",
      alignSelf: "center",
      marginTop: 30,
      borderRadius: 32,
      borderWidth: 2,
      borderColor: "#2f2938",
      backgroundColor: "#111114",
      paddingTop: 40,
      paddingBottom: 64,
      paddingHorizontal: 58
    },
    children: [
      /* @__PURE__ */ (0, jsxs)(View, {
        style: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ (0, jsxs)(View, {
            children: [
              /* @__PURE__ */ (0, jsx)(Text, {
                style: {
                  fontFamily: "JetBrainsMono-Regular",
                  fontSize: 15,
                  letterSpacing: 2.6,
                  color: "#a76cff"
                },
                children: "OVERDRIVE"
              }),
              /* @__PURE__ */ (0, jsx)(Text, {
                style: {
                  marginTop: 8,
                  fontFamily: "Inter-Regular",
                  fontSize: 36,
                  fontWeight: 600,
                  letterSpacing: -0.5,
                  color: "#f2f2f3"
                },
                children: "Community Revival"
              })
            ]
          }),

          /* @__PURE__ */ (0, jsx)(View, {
            style: {
              paddingVertical: 11,
              paddingHorizontal: 20,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "#7447ad",
              backgroundColor: "#1d1524"
            },
            children: /* @__PURE__ */ (0, jsx)(Text, {
              style: {
                fontFamily: "JetBrainsMono-Regular",
                fontSize: 15,
                color: "#b985ff"
              },
              children: "v1.1.1"
            })
          })
        ]
      }),

      /* @__PURE__ */ (0, jsx)(View, {
        style: {
          height: 2,
          marginTop: 24,
          marginBottom: 4,
          backgroundColor: "#7447ad"
        }
      }),

      /* @__PURE__ */ (0, jsxs)(View, {
        style: {
          flexDirection: "row",
          alignItems: "center",
          gap: 38,
          marginTop: 30,
          paddingVertical: 22,
          paddingHorizontal: 24,
          borderRadius: 22,
          backgroundColor: "#17161a"
        },
        children: [
          /* @__PURE__ */ (0, jsx)(Image, {
            source: daniAvatar,
            style: {
              width: 138,
              height: 138,
              borderRadius: 69,
              borderWidth: 2,
              borderColor: "#6534a8"
            }
          }),
          /* @__PURE__ */ (0, jsxs)(View, {
            children: [
              /* @__PURE__ */ (0, jsx)(Text, {
                style: {
                  fontFamily: "Inter-Regular",
                  fontSize: 38,
                  fontWeight: 600,
                  color: "#f2f2f3"
                },
                children: "Dani"
              }),
              /* @__PURE__ */ (0, jsx)(Text, {
                style: {
                  marginTop: 9,
                  fontFamily: "JetBrainsMono-Regular",
                  fontSize: 17,
                  letterSpacing: 1.8,
                  color: "#a76cff"
                },
                children: "REVIVAL & MAINTENANCE"
              })
            ]
          })
        ]
      }),

      /* @__PURE__ */ (0, jsx)(Text, {
        style: {
          marginTop: 12,
          marginLeft: 24,
          marginRight: 24,
          paddingHorizontal: 18,
          fontSize: 19,
          lineHeight: 28,
          color: "#9a9aa3"
        },
        children:
          "Revived Overdrive, restored its dependencies, fixed major issues, and maintains the community revival."
      }),

      /* @__PURE__ */ (0, jsx)(View, {
        style: {
          height: 1,
          backgroundColor: "#3a2f46",
          marginVertical: 22,
          marginHorizontal: 24
        }
      }),

      /* @__PURE__ */ (0, jsxs)(View, {
        style: {
          flexDirection: "row",
          alignItems: "center",
          gap: 38,
          paddingVertical: 22,
          paddingHorizontal: 24,
          borderRadius: 22,
          backgroundColor: "#17161a"
        },
        children: [
          /* @__PURE__ */ (0, jsx)(Image, {
            source: myluxyAvatar,
            style: {
              width: 138,
              height: 138,
              borderRadius: 69,
              borderWidth: 2,
              borderColor: "#6534a8"
            }
          }),
          /* @__PURE__ */ (0, jsxs)(View, {
            children: [
              /* @__PURE__ */ (0, jsx)(Text, {
                style: {
                  fontFamily: "Inter-Regular",
                  fontSize: 38,
                  fontWeight: 600,
                  color: "#f2f2f3"
                },
                children: "MyLuxy"
              }),
              /* @__PURE__ */ (0, jsx)(Text, {
                style: {
                  marginTop: 9,
                  fontFamily: "JetBrainsMono-Regular",
                  fontSize: 17,
                  letterSpacing: 1.8,
                  color: "#a76cff"
                },
                children: "SOURCE RECOVERY & REBUILD"
              })
            ]
          })
        ]
      }),

      /* @__PURE__ */ (0, jsx)(Text, {
        style: {
          marginTop: 12,
          marginLeft: 24,
          marginRight: 24,
          paddingHorizontal: 18,
          fontSize: 19,
          lineHeight: 28,
          color: "#9a9aa3"
        },
        children:
          "Decompiled Overdrive, recovered its source and rebuilt it, making the community revival possible."
      }),


    ]
  });
}

function CreditsScreen() {
  return /* @__PURE__ */ (0, jsx)(View, {
    style: {
      flex: 1,
      paddingHorizontal: 96,
      paddingTop: 52,
      paddingBottom: 54
    },
    children: /* @__PURE__ */ (0, jsxs)(View, {
      style: {
        flex: 1
      },
      children: [
        /* @__PURE__ */ (0, jsx)(Text, {
          style: {
            fontFamily: "JetBrainsMono-Regular",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 2.8,
            color: "#8a8a94"
          },
          children: "ABOUT  /  CREDITS"
        }),

        /* @__PURE__ */ (0, jsx)(Text, {
          style: {
            marginTop: 10,
            fontFamily: "Inter-Regular",
            fontSize: 46,
            fontWeight: 600,
            color: colors.fg,
            letterSpacing: -1.2
          },
          children: "Credits"
        }),

        /* @__PURE__ */ (0, jsx)(Text, {
          style: {
            marginTop: 8,
            fontFamily: "Inter-Regular",
            fontSize: 23,
            color: colors.muted
          },
          children:
            "The people behind Overdrive's recovery and community revival."
        }),

        /* @__PURE__ */ (0, jsx)(CreditsPanel, {})
      ]
    })
  });
}

export { CreditsScreen };
