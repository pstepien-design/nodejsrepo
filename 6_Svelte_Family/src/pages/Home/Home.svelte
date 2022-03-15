<script>
  import Parent from '../../components/parent/Parent.svelte';
  import Child from '../../components/child/Child.svelte';
  const parents = [
    {
      key: 1,
      name: 'Adam',
    },
    {
      key: 2,
      name: 'Eve',
    },
  ];
  function onFamilyMeetinCalled(whoCalled) {
    console.log('Family meeting called by', whoCalled);
  }
</script>

<h1>This is the home of the Svelte family</h1>
{#each parents as parent (parent.key)}
  <Parent handleFamilyMeetingCall={onFamilyMeetinCalled} name={parent.name} />
{/each}

<Child handleFamilyMeetingCall={onFamilyMeetinCalled} isGirl={true} name="Dorota" />
<Child handleFamilyMeetingCall={onFamilyMeetinCalled} stereotype="bright-kid" name="Paweł" />
<Child handleFamilyMeetingCall={onFamilyMeetinCalled} stereotype="black-sheep" name="Maria" />
