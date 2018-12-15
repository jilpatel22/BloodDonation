export class UserDetails {
    constructor(
    public name: String,
    public last_name: String,
    public eid: String,
    public password1: String,
    public password_confirmation: String,
    public gender: String,
    public date: Date,
    public phn: Number,
    public adress: {
        street: String,
        city: String,
        state: String,
        pincode: Number,
    },
    public bloodgroup: String,
    public whitecell: Number,
    ) {}
}
