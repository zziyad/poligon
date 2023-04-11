'use strict';

class Message {
    constructor(author, text) {
        this.time = `${new Date().getHours()}:${new Date().getMinutes()}`;
        this.author = author;
        this.text = text;
    }
    toString() {
        return `${this.time} ${this.author}: ${this.text}`
    }
}

class Messenger {
    constructor() {
        this.history = [];
    }
    showHistory(msg) {
        return this.history.map(msg => console.log(msg));
    }
    send(author, text) {
        const newMsg = new Message(author, text).toString();
        this.history.push(newMsg);
    }
}

let messenger = new Messenger()
messenger.send('Артем', 'Первое сообщение')
messenger.send('Мария', 'Второе сообщение')
messenger.showHistory()	