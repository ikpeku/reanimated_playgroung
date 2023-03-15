import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen")


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end"
    },
    btnContainer: {
        height: 55,
        backgroundColor: "#013a45",
        borderRadius: 50,
        justifyContent: "center",
        marginHorizontal: 20,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: "#fff"
    },
    btn: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#fff"
    },
    btnsContainer: {
        // height: height / 3,
        // borderWidth: 10
        position: "absolute",
        width: width,
        zIndex: 100

    },
    textInput: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 20,
        marginHorizontal: 25,
        marginVertical: 10,
        borderRadius: 50,
        borderColor: "rgba(0, 0 , 0, 0.25)"
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    formContainer: {
        marginBottom: 15,
    },
    Xcontainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 50,
        top: -20

    },
    Xtext: {
        fontSize: 20,
        fontWeight: 600,
        color: "#013a45",
        width: "100%",
        textAlign: "center"
    }
});
