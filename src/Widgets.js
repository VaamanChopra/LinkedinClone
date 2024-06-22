import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'

function Widgets() {
    const newsArticle = (heading, subTitle) => (
        <div className='widget_article'>
            <div className='widget_article_left'>

            </div>
        <div className='widget_article_right'>
            <h4>{heading}</h4>
            <p>{subTitle}</p>
                
            </div>

        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>
                LinkedIn News
            </h2>
            <InfoIcon/>
        </div>
{newsArticle('AI Revolution: How Artificial Intelligence is Shaping the Future','Tech Today - 500000 Readers')}

{newsArticle('Global Warming: Immediate Actions Needed to Save the Planet','Environmental News - 750000 Readers')}

{newsArticle('Economic Recovery: Post-Pandemic Market Trends and Predictions','Finance Daily - 900000 Readers')}

{newsArticle('Mars Mission: NASA Announces New Plans for Human Exploration','Space & Science - 1200000 Readers')}

{newsArticle('Health and Wellness: Top Tips for a Balanced Lifestyle','Health News - 650000 Readers')}

{newsArticle('Innovative Startups: The Future of Entrepreneurship','Business Insights - 800000 Readers')}
    </div>
  )
}

export default Widgets