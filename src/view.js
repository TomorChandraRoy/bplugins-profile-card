import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import ProfileCard from './Components/Common/ProfileCard';


document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-profile-card');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);
		const { stats,bio,title,name,skills} = attributes;
		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

         <ProfileCard stats={stats} bio={bio} title={title} name={name} skills={skills}></ProfileCard>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});