const styles = {
    container: {
      flex: 1,
      flexDirection: 'row',
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 5,
    },
    underline: {
      borderWidth: 0,
    },
    item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
    },
    itemUnderline: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#e3e3e3',
    },
    itemActive: {
      backgroundColor: colors.primary,
    },
    itemActiveUnderline: {
      borderBottomWidth: 2,
      borderBottomColor: colors.primary,
    },
    text: {
      color: colors.primary,
    },
    textUnderline: {
      color: '#a6a6a6',
    },
    textActive: {
      color: colors.white,
    },
    textActiveUnderline: {
      color: colors.primary,
    },
  };

  export default styles;