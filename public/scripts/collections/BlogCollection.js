import Backbone from 'backbone';
import $ from 'jquery';
import BlogModel from './../models/BlogModel.js';

const BlogCollection = Backbone.Collection.extend({
	model: BlogModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/mhg'


});

export default new BlogCollection();