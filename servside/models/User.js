import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },

      //  avatar: {
        //    public_id: String,
        //    url: String,
       //   },
         meserie: {
              type: String,
              default:''
           },

         locatie: {
           type: String,  
           default:''
         },

       avatar: {
         type: String,
         default:'1675055297689nimage.jpg'
       },

        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post',
            },
        ],
        video: [
          {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Video',
          },
      ],
    },
    { timestamps: true },
)

export default mongoose.model('User', UserSchema)
