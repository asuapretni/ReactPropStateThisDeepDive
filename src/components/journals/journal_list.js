import React, { Component } from 'react';
import { JournalEntry } from "./journal-entry";

const rawJournalData = [
    { title: "Post One", content: "Post content", status: "draft" },
    { title: "Post Two", content: "Post content", status: "published" },
    { title: "Post Three", content: "Post content", status: "published" },
    { title: "Post Four", content: "Post content", status: "published" },
];



// Class component
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: 'Hi there',
            isOpen: true
        };
    }

    render() {
    return (
      <div>
      <h2>{this.props.heading}</h2>
      <JournalEntry title="Some title" content="More content" />
      </div>
    );
    }
  }
