import { Access } from "payload/config";

export const isPublished: Access = ({req: {user}}) => {
    // Non-logged in users can only read published docs
    return {
        _status: {
            equals: 'published'
        }
    }
}