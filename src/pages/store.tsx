import StoreView from 'views/store/StorePage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Layout from 'Layout'
import { useTranslation } from 'next-i18next'
import { NextPageWithLayout } from './_app'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? '', ['common'])),
  },
})

const StorePage: NextPageWithLayout = StoreView

StorePage.getLayout = page => {
  const { t } = useTranslation('', { keyPrefix: 'store' })

  return (
    <Layout title={t('title')} background="dark">
      {page}
    </Layout>
  )
}

export default StorePage
