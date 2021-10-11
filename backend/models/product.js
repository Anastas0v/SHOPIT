var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required"],
        trim: true, //remove spaces
        maxLength: [100, 'Max 100 Characters']
    },
    price: {
        type: Number,
        required: [true, 'Please Enter Product Price'],
        maxLength: [5, 'Max 5 Characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Description Required']
    },
    ratings:{
        type: Number,
        default: 0
    },
    images:[
        {
            public_id:
            {
                type: String,
                required: true
            },
            url:{
                type: String,
                requred: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Category Required'],
        enum: {
            values:[
                'Electronics',
                'Cameras',
                'Laptop',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please Select Correct Category For This Product'
        }
    },
    seller:{
        type: String,
        required: [true, 'Seller Required']
    },
    stock:{
        type:Number,
        required: [true,'Please Enter Product Stock'],
        maxLength: [5, 'Product Stock Max 5 Digits'],
        default: 0
    },
    numOfReviews:{
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product',productSchema);