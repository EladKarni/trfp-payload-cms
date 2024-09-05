import { CollectionConfig } from 'payload/types'

const FAQs: CollectionConfig = {
    slug: 'faq',
    admin: {
        useAsTitle: 'question',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'order',
            type: 'number',
            label: 'Order',
            required: true,
        },
        {
            name: 'question',
            type: 'text',
            label: 'Question',
            required: true,
        },
        {
            name: 'answer',
            type: 'textarea',
            label: 'Answer',
            required: true,
        }
    ],
    timestamps: true,
}

export default FAQs
