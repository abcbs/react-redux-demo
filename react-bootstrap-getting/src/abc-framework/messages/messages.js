import { defineMessages }              from 'react-intl'
const messages = defineMessages
({
    authentication:{
        title:
            {
                id             : 'authentication.title',
                description    : '权限主页，包括权限的增删改查，权限的增删改查，用户图像的修改，后端存储采用mysql',
                defaultMessage : '权限管理'
            },
            subTitle:
            {
                id             : 'authentication.subTitle',
                description    : '权限子标题',
                defaultMessage : '权限维护信息'
            }
        }
    }
)

export default messages
