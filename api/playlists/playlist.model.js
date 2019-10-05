import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const playlistSchema = Schema({
  title: {type: String, required: true},
  songs: [{type: Schema.Types.ObjectId, ref: 'Song'}],
}, {timestamps: true});

const Playlist = mongoose.model('Playlist', playlistSchema);

export {Playlist}