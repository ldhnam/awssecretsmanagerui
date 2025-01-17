import Layout from "components/layout"
import SearchBar from "components/search-bar";
import Table from "components/table";
import Pagination from "components/pagination";
import styles from "styles/list.module.css";

export default function Home() {
  return (
    <Layout title="AWS Secrets Manager">
      <div className={styles.container}>
        <SearchBar />
        <Table />
        <Pagination />
      </div>
    </Layout>
  )
}
