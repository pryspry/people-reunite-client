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
export const essayNaskahsQuery = gql`
query essayNaskahsQuery {
  naskahs(sort: "Published:desc",where: {
    Kategori: {
      Judul: "Essay"
    }
  }) {
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
export const newsNaskahsQuery = gql`
query newsNaskahsQuery {
  naskahs(sort: "Published:desc",where: {
    Kategori: {
      Judul: "News"
    }
  }) {
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
}`

export const reviewNaskahsQuery = gql`
query reviewNaskahsQuery {
  naskahs(sort: "Published:desc",where: {
    Kategori: {
      Judul: "Review"
    }
  }) {
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
}`

export const latestNaskahsQuery = gql`
    query latestNaskahsQuery {
        naskahs(limit: 6, sort: "Published:desc") {
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