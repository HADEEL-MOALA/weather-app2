import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",

    "& div.wheatherContainer": {
      height: "98vh",
      "& div.formContainer": {
        textAlign: "center",
        width: "69%",
      },
      display: "flex",
      // justifyContent: "space-between",
      // backgroundSize: "cover",
      height: "92vh",
      marginRight: "auto",
      marginLeft: "auto",
      backgroundImage: "url(/sun.jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",

      "& div.app1": {
        width: "30%",
        textAlign: "center",
        backgroundColor: "rgba(0,0,0, 0.4)",
        margin: 0,
        padding: 0,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        "& div.a": {},
        "& hr": {
          width: "100%",
        },
        "& div.a, & div.b": {
          "& > div": {
            height: "40px",
          },
        },
      },

      "& div.app2": {
        //   "& div.a": {},
        //   "& div.b": {},
      },
    },
  },
}));

export default useStyles;
