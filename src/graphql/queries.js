import gql from 'graphql-tag'

export const allNaskahsQuery = gql`
    query allNaskahsQuery {
        naskahs(sort: "Published:desc") {
            id
            Judul
            Subjudul
            slug
            Cover {
                url
            caption
            alternativeText
            }
            Body
            MetaDescription
            Keywords
            Kanal
            KanalUrl
            Kategori {
                Judul 
            }
                kontributors {
                Nama
                }
            Player
            Published    
        }  
    }
`