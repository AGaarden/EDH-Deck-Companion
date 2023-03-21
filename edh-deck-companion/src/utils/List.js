import AsyncStorage from '@react-native-async-storage/async-storage';
export { List };

/* Constructor
 * name = name of deck
 * front = front card/icon
 * format = format of the deck list
 * cardList = card names and amounts
*/
class List {
    constructor(name, front, format, cardList) {
        this.name = name;
        this.front = front;
        this.format = format;
        this.cardList = cardList;
    }
}

// Method for loading a list from a file
export async function ReadList(listName) {
    try {
        const jsonValue = await AsyncStorage.getItem(listName);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
    catch(e) {
        // error reading value
    }
}


// Method for saving a list in a file
export async function SaveList(list) {
    try {
        const jsonValue = JSON.stringify(list);
        await AsyncStorage.setItem(`${list.name}`, jsonValue);
    }
    catch (e) {
        // saving error
    }
}