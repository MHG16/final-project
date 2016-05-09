import Backbone from 'backbone';
import $ from 'jquery';
import BlogModel from './../models/BlogModel.js';

const BlogCollection = Backbone.Collection.extend({
	model: BlogModel,
	url: '/api/v1/post'


});

export default new BlogCollection();