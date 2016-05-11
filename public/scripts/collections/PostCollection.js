import Backbone from 'backbone';
import $ from 'jquery';
import PostModel from './../models/PostModel.js';

const PostCollection = Backbone.Collection.extend({
	model: PostModel,
	url: '/api/v1/post'


});

export default new PostCollection();